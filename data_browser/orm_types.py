from django.db import models
from django.db.models import JSONField

from data_browser.common import debug_log
from data_browser.types import BooleanType
from data_browser.types import DateTimeType
from data_browser.types import DateType
from data_browser.types import DurationType
from data_browser.types import JSONType
from data_browser.types import NumberArrayType
from data_browser.types import NumberChoiceArrayType
from data_browser.types import NumberChoiceType
from data_browser.types import NumberType
from data_browser.types import StringableType
from data_browser.types import StringArrayType
from data_browser.types import StringChoiceArrayType
from data_browser.types import StringChoiceType
from data_browser.types import StringType
from data_browser.types import UnknownType
from data_browser.types import URLType
from data_browser.types import UUIDType

try:
    from django.contrib.postgres.fields import ArrayField
except ModuleNotFoundError:  # pragma: no cover
    ArrayField = None.__class__


_STRING_FIELDS = (models.CharField, models.TextField, models.GenericIPAddressField)
_NUMBER_FIELDS = (
    models.DecimalField,
    models.FloatField,
    models.IntegerField,
    models.AutoField,
)
_FIELD_TYPE_MAP = {
    models.BooleanField: BooleanType,
    models.DurationField: DurationType,
    models.NullBooleanField: BooleanType,
    models.DateTimeField: DateTimeType,
    models.DateField: DateType,
    models.UUIDField: UUIDType,
    models.URLField: URLType,
    **{f: StringType for f in _STRING_FIELDS},
    **{f: NumberType for f in _NUMBER_FIELDS},
}


# hashid support
try:
    from hashid_field import BigHashidAutoField
    from hashid_field import BigHashidField
    from hashid_field import HashidAutoField
    from hashid_field import HashidField
except ModuleNotFoundError:
    pass
else:  # pragma: no cover
    _FIELD_TYPE_MAP[BigHashidAutoField] = StringableType
    _FIELD_TYPE_MAP[BigHashidField] = StringableType
    _FIELD_TYPE_MAP[HashidAutoField] = StringableType
    _FIELD_TYPE_MAP[HashidField] = StringableType


def _fmt_choices(choices):
    return [(value, str(label)) for value, label in choices or []]


def get_field_type(field_name, field):
    if isinstance(field, ArrayField) and isinstance(field.base_field, _STRING_FIELDS):
        base_field, choices = get_field_type(field_name, field.base_field)
        array_types = {
            StringType: StringArrayType,
            NumberType: NumberArrayType,
            StringChoiceType: StringChoiceArrayType,
            NumberChoiceType: NumberChoiceArrayType,
        }
        if base_field in array_types:
            return array_types[base_field], choices
        else:  # pragma: no cover
            debug_log(
                f"{field.model.__name__}.{field_name} unsupported subarray type"
                f" {type(field.base_field).__name__}"
            )
            return UnknownType, None

    elif isinstance(field, ArrayField) and isinstance(field.base_field, _NUMBER_FIELDS):
        if field.base_field.choices:
            return NumberChoiceArrayType, _fmt_choices(field.base_field.choices)
        else:
            return NumberArrayType, None
    elif isinstance(field, JSONField):
        res = JSONType
    elif field.__class__ in _FIELD_TYPE_MAP:
        res = _FIELD_TYPE_MAP[field.__class__]
    else:
        for django_type, field_type in _FIELD_TYPE_MAP.items():
            if isinstance(field, django_type):
                res = field_type
                break
        else:
            debug_log(
                f"{field.model.__name__}.{field_name} unsupported type"
                f" {type(field).__name__}"
            )
            res = UnknownType

    # Choice fields have different lookups
    if res is StringType and field.choices:
        return StringChoiceType, _fmt_choices(field.choices)
    elif res is NumberType and field.choices:
        return NumberChoiceType, _fmt_choices(field.choices)
    else:
        return res, None
