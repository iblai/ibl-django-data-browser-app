(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{30:function(e,t,n){},51:function(e,t,n){e.exports=n(65)},56:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(43),i=n.n(l),c=n(68),o=(n(56),n(7)),s=n(14),u=n(15),m=n(32),d=n(17),f=n(16),p=n(8),h=n(5),y=n(13),v=(n(30),n(21)),E=n(48),g=n(34),b=n.n(g),k=n(40),j=!1,F=void 0,O=document.getElementById("backend-version").textContent.trim();function S(e){var t=e.text,n=Object(a.useRef)(null);return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{ref:n},t)," ",r.a.createElement(w,{className:"CopyToClipboard",onClick:function(e){var t=document.createRange();t.selectNodeContents(n.current),window.getSelection().removeAllRanges(),window.getSelection().addRange(t),document.execCommand("copy"),window.getSelection().removeAllRanges(),e.target.blur()}},"(copy to clipboard)"))}function w(e){var t=e.className,n=e.onClick,a=e.children;return r.a.createElement("button",Object.assign({onClick:n},{type:"button",className:"Link "+(t||"")}),a)}function N(e){var t=e.className,n=e.onClick,a=e.children;return r.a.createElement("button",Object.assign({onClick:n},{type:"button",className:"sLink material-icons "+(t||"")}),a)}var q=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).name="AbortError",e}return n}(Object(E.a)(Error));function C(e,t,n){return j?(F&&F.reject(new q("skipped")),new Promise((function(a,r){F={resolve:a,reject:r,url:e,options:t,process:n}}))):(j=!0,fetch(e,t).then((function(e){var t=F;if(F=void 0,j=!1,t)throw C(t.url,t.options,t.process).then((function(e){return t.resolve(e)}),(function(e){return t.reject(e)})),new q("superceeded");return e})).then((function(e){return k.ok(e.status>=200),k.ok(e.status<300),e})).then((function(e){var t=e.headers.get("x-version");return t!==O&&(console.log("Version mismatch, hard reload",O,t),window.location.reload(!0)),e})).then((function(e){return n(e)})))}function L(e){return C(e,{method:"GET"},(function(e){return e.json()}))}function M(e){var t=Object(a.useState)(),n=Object(v.a)(t,2),r=n[0],l=n[1];return Object(a.useEffect)((function(){L(e).then((function(e){return l(e)}))}),[e]),[r,function(t){l((function(e){return Object(o.a)({},e,{},t)})),function(e,t){return C(e,{method:"PATCH",headers:{"Content-Type":"application/json","X-CSRFToken":b.a.get("csrftoken")},body:JSON.stringify(t)},(function(e){return e.json()}))}(e,t).then((function(e){return l((function(t){return Object(o.a)({},t,{},e)}))})).catch((function(e){if("AbortError"!==e.name)throw e}))}]}function U(e){var t=e.name,n=e.apiUrl,l=e.data,i=e.redirectUrl,c=Object(a.useState)("save"),o=Object(v.a)(c,2),s=o[0],u=o[1];if("save"===s)return r.a.createElement(w,{onClick:function(e){u("saving"),function(e,t){return C(e,{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":b.a.get("csrftoken")},body:JSON.stringify(t)},(function(e){return e.json()}))}(n,l).then((function(e){return u(e)}))}},"Save ",t||"");if("saving"===s)return r.a.createElement(r.a.Fragment,null,"Saving ",t||"");var m="function"===typeof i?i(s):i;return r.a.createElement(h.a,{to:m})}function V(e){var t=e.name,n=e.apiUrl,l=e.redirectUrl,i=Object(a.useState)("normal"),c=Object(v.a)(i,2),o=c[0],s=c[1];if("normal"===o)return r.a.createElement(w,{onClick:function(e){s("confirm")}},"Delete ",t||"");if("confirm"===o)return r.a.createElement(w,{onClick:function(e){var t;s("deleting"),(t=n,C(t,{method:"DELETE",headers:{"X-CSRFToken":b.a.get("csrftoken")}},(function(e){return e}))).then((function(e){return s("deleted")}))}},"Are you sure?");if("deleting"===o)return"Deleting";if("deleted"===o)return r.a.createElement(h.a,{to:l});throw new Error("unknown delete state: ".concat(o))}function P(e){return e.message?r.a.createElement("div",{className:"Overlay"},r.a.createElement("h1",null,e.message)):null}var _=n(47);function T(e){var t=e.spaces;return t>0?Object(_.a)(Array(t)).map((function(e,t){return r.a.createElement("td",{className:"Empty",key:t})})):null}function x(e){var t=e.query,n=e.field,a=e.className,l=t.getField(n.path),i=t.getType(l);return r.a.createElement("th",{className:a},r.a.createElement(N,{onClick:function(){return t.removeField(n)}},"close"),l.canPivot&&r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{onClick:function(){return t.togglePivot(n)}},n.pivoted?"call_received":"call_made")),l.concrete&&i.defaultLookup?r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{onClick:function(){return t.addFilter(n.path,n.prettyPath)}},"filter_alt")," ",r.a.createElement(w,{onClick:function(){return t.toggleSort(n)}},n.prettyPath.join(" "),{dsc:"\u2191".concat(n.priority),asc:"\u2193".concat(n.priority),null:""}[n.sort])):" "+n.prettyPath.join(" "))}function R(e){var t,n=e.query,a=e.field,l=e.className,i=e.span,c=e.value,o=n.getField(a.path);return t=void 0===c?"":"html"===o.type&&c?r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}}):String(c),r.a.createElement("td",{className:o.type+" "+l||"",colSpan:i||1},t)}function D(e){var t=e.fields,n=e.query,a=e.classNameFirst,l=e.className;return t.map((function(e,t){return r.a.createElement(x,Object.assign({query:n,field:e},{key:e.pathStr,className:"HoriBorder ".concat(l," ")+(t?"":a)}))}))}function A(e){var t=e.fields,n=e.query,a=e.classNameFirst,l=e.className,i=e.row;return t.map((function(e,t){return r.a.createElement(R,Object.assign({query:n,field:e},{key:e.pathStr,value:i?i[e.pathStr]:"",className:"".concat(t?"":a," ").concat(l)}))}))}function Q(e){var t=e.query,n=e.field,a=e.data,l=e.span,i=e.className;return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{query:t,field:n}),a.map((function(e,a){return r.a.createElement(R,Object.assign({key:a,query:t,field:n,span:l,className:i},{value:e[n.pathStr]}))})))}function I(e){var t=e.query,n=e.cols,a=e.rows,l=e.body,i=e.overlay;return r.a.createElement("div",{className:"Results"},r.a.createElement(P,{message:i}),r.a.createElement("div",{className:"Scroller"},r.a.createElement("table",null,r.a.createElement("thead",null,t.colFields().map((function(e){return r.a.createElement("tr",{key:e.pathStr},r.a.createElement(T,{spaces:t.rowFields().length-1}),r.a.createElement(Q,Object.assign({query:t,field:e},{span:t.resFields().length,data:n,className:i&&"Fade"})))})),r.a.createElement("tr",null,r.a.createElement(T,{spaces:1-t.rowFields().length}),r.a.createElement(D,Object.assign({query:t},{fields:t.rowFields(),className:"Freeze"})),n.map((function(e,n){return r.a.createElement(D,Object.assign({key:n,query:t},{fields:t.resFields(),classNameFirst:"LeftBorder",className:"Freeze"}))})))),r.a.createElement("tbody",null,a.map((function(e,n){return r.a.createElement("tr",{key:n},r.a.createElement(T,{spaces:1-t.rowFields().length}),r.a.createElement(A,Object.assign({query:t,row:e},{fields:t.rowFields(),className:i&&"Fade"})),l.map((function(e,a){return r.a.createElement(A,Object.assign({key:a,query:t},{fields:t.resFields(),row:e[n],classNameFirst:"LeftBorder",className:i&&"Fade"}))})))}))))))}var J=n(45),B={rows:[{}],cols:[{}],body:[[{}]],length:0,filterErrors:[]};function H(e){return{model:e.model,fields:e.fields.map((function(e){return(e.pivoted?"&":"")+e.path.join("__")+{asc:"+".concat(e.priority),dsc:"-".concat(e.priority),null:""}[e.sort]})).join(","),query:e.filters.map((function(e){return"".concat(e.path.join("__"),"__").concat(e.lookup,"=").concat(e.value)})).join("&"),limit:e.limit}}function X(e,t,n){var a=H(t),r=a.model,l=a.fields,i=a.query,c=a.limit,o="".concat(e,"query/").concat(r);return"".concat(window.location.origin).concat(o,"/").concat(l,".").concat(n,"?").concat(i,"&limit=").concat(c)}var z=function(){function e(t,n,a){Object(s.a)(this,e),this.config=t,this.query=n,this.setQuery=a}return Object(u.a)(e,[{key:"getField",value:function(e){var t,n=e.slice(-1),a=this.query.model,r=Object(J.a)(e.slice(0,-1));try{for(r.s();!(t=r.n()).done;){var l=t.value;a=this.config.allModelFields[a].fields[l].model}}catch(i){r.e(i)}finally{r.f()}return this.config.allModelFields[a].fields[n]}},{key:"getType",value:function(e){return this.config.types[e.type]}},{key:"getModelFields",value:function(e){return this.config.allModelFields[e]}},{key:"getDefaultLookupValue",value:function(e,t){return String(this.config.types[e.lookups[t].type].defaultValue)}},{key:"addField",value:function(e,t){var n=this.query.fields.filter((function(t){return t.pathStr!==e.join("__")}));n.push({path:e,pathStr:e.join("__"),prettyPath:t,sort:null,priority:null,pivoted:!1}),this.setQuery({fields:n})}},{key:"removeField",value:function(e){this.setQuery({fields:this.query.fields.filter((function(t){return t.pathStr!==e.pathStr}))})}},{key:"toggleSort",value:function(e){var t=this.query.fields.findIndex((function(t){return t.pathStr===e.pathStr})),n={asc:"dsc",dsc:null,null:"asc"}[e.sort],a=this.query.fields.slice();e.sort&&(a=a.map((function(t){return Object(o.a)({},t,{priority:null!=t.priority&&t.priority>e.priority?t.priority-1:t.priority})}))),n?(a=a.map((function(e){return Object(o.a)({},e,{priority:null!=e.priority?e.priority+1:e.priority})})))[t]=Object(o.a)({},e,{sort:n,priority:0}):a[t]=Object(o.a)({},e,{sort:null,priority:null}),this.setQuery({fields:a})}},{key:"togglePivot",value:function(e){var t=this.query.fields.findIndex((function(t){return t.pathStr===e.pathStr})),n=this.query.fields.slice();n[t].pivoted=!n[t].pivoted,this.setQuery({fields:n})}},{key:"addFilter",value:function(e,t){var n=this.getType(this.getField(e)),a=this.query.filters.slice();a.push({path:e,pathStr:e.join("__"),prettyPath:t,lookup:n.defaultLookup,value:this.getDefaultLookupValue(n,n.defaultLookup)}),this.setQuery({filters:a})}},{key:"removeFilter",value:function(e){var t=this.query.filters.slice();t.splice(e,1),this.setQuery({filters:t})}},{key:"setFilterValue",value:function(e,t){var n=this.query.filters.slice();n[e]=Object(o.a)({},n[e],{value:t}),this.setQuery({filters:n})}},{key:"setFilterLookup",value:function(e,t){var n=this.query.filters.slice(),a=n[e],r=this.getType(this.getField(n[e].path));r.lookups[a.lookup].type!==r.lookups[t].type&&(a.value=this.getDefaultLookupValue(r,t)),a.lookup=t,this.setQuery({filters:n})}},{key:"setLimit",value:function(e){e=Number(e),this.setQuery({limit:e>0?e:1})}},{key:"setModel",value:function(e){this.setQuery(Object(o.a)({model:e,fields:[],filters:[],limit:this.config.defaultRowLimit},B))}},{key:"getUrlForMedia",value:function(e){return X(this.config.baseUrl,this.query,e)}},{key:"colFields",value:function(){return this.query.fields.filter((function(e){return e.pivoted}))}},{key:"rowFields",value:function(){var e=this;return this.colFields().length?this.query.fields.filter((function(t){return!t.pivoted&&e.getField(t.path).canPivot})):this.query.fields}},{key:"resFields",value:function(){var e=this;return this.colFields().length?this.query.fields.filter((function(t){return!e.getField(t.path).canPivot})):[]}}]),e}();function G(e){var t=e.lookup,n=e.onChange,a=e.value;return"boolean"===e.lookup.type?r.a.createElement("select",Object.assign({onChange:n,value:a},{className:"FilterValue"}),r.a.createElement("option",{value:!0},"true"),r.a.createElement("option",{value:!1},"false")):"weekday"===t.type?r.a.createElement("select",Object.assign({onChange:n,value:a},{className:"FilterValue"}),["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((function(e){return r.a.createElement("option",{value:e},e)}))):"month"===t.type?r.a.createElement("select",Object.assign({onChange:n,value:a},{className:"FilterValue"}),["January","Febuary","March","April","May","June","July","August","September","October","November","December"].map((function(e){return r.a.createElement("option",{value:e},e)}))):"number"===t.type||"year"===t.type?r.a.createElement("input",Object.assign({onChange:n,value:a},{className:"FilterValue",type:"number",step:"0"})):r.a.createElement("input",Object.assign({onChange:n,value:a},{className:"FilterValue",type:"text"}))}var W=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.path,n=e.prettyPath,a=e.index,l=e.lookup,i=e.query,c=e.value,o=e.errorMessage,s=i.getType(i.getField(t));return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(N,{onClick:function(){return i.removeFilter(a)}},"close")," ",r.a.createElement(w,{onClick:function(){return i.addField(t,n)}},n.join(" "))," "),r.a.createElement("td",null,r.a.createElement("select",{className:"Lookup",value:l,onChange:function(e){return i.setFilterLookup(a,e.target.value)}},s.sortedLookups.map((function(e){return r.a.createElement("option",{key:e,value:e},e.replace(/_/g," "))})))),r.a.createElement("td",null,"="),r.a.createElement("td",null,r.a.createElement(G,Object.assign({value:c},{onChange:function(e){return i.setFilterValue(a,e.target.value)},lookup:s.lookups[l]})),o&&r.a.createElement("p",null,o)))}}]),n}(r.a.Component);function K(e){var t=e.query,n=e.filterErrors;return r.a.createElement("form",{className:"Filters"},r.a.createElement("table",{className:"Flat"},r.a.createElement("tbody",null,e.filters.map((function(e,a){return r.a.createElement(W,Object.assign({query:t,index:a},e,{key:a,errorMessage:n[a]}))})))))}var Y=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={toggled:!1},a}return Object(u.a)(n,[{key:"toggle",value:function(){this.setState((function(e){return{toggled:!e.toggled}}))}},{key:"render",value:function(){var e=this.props,t=e.query,n=e.path,a=e.prettyPath,l=e.modelField,i=t.getType(l);return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",null,l.concrete&&i.defaultLookup&&r.a.createElement(N,{onClick:function(){return t.addFilter(n,a)}},"filter_alt")),r.a.createElement("td",null,l.model&&r.a.createElement(N,{className:"ToggleLink",onClick:this.toggle.bind(this)},this.state.toggled?"remove":"add")),r.a.createElement("td",null,l.type?r.a.createElement(w,{onClick:function(){return t.addField(n,a)}},l.prettyName):l.prettyName)),this.state.toggled&&r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",{colSpan:"2"},r.a.createElement(Z,Object.assign({query:t,path:n,prettyPath:a},{model:l.model})))))}}]),n}(r.a.Component);function Z(e){var t=e.query,n=e.model,a=e.path,l=e.prettyPath,i=t.getModelFields(n);return r.a.createElement("table",null,r.a.createElement("tbody",null,i.sortedFields.map((function(e){var n=i.fields[e];return r.a.createElement(Y,Object.assign({key:e},{query:t,modelField:n},{path:a.concat([e]),prettyPath:l.concat([n.prettyName])}))}))))}function $(e){return r.a.createElement("select",{className:"ModelSelector",onChange:function(t){return e.query.setModel(t.target.value)},value:e.model},e.sortedModels.map((function(e){return r.a.createElement("option",{key:e},e)})))}function ee(e){return r.a.createElement(y.b,{to:"/",className:"Logo"},r.a.createElement("span",null,"DDB"),r.a.createElement("span",{className:"Version"},"v",O))}function te(e){var t,n,a=e.query,l=e.rows,i=e.cols,c=e.body,o=e.length,s=e.sortedModels,u=e.model,m=e.filters,d=e.filterErrors,f=e.baseUrl,p=e.loading,h=e.error;return p?t="Loading...":h&&(t="Error"),n=a.rowFields().length||a.colFields().length?r.a.createElement(I,{query:a,rows:l,cols:i,body:c,overlay:t}):r.a.createElement("h2",null,"No fields selected"),r.a.createElement(r.a.Fragment,null,r.a.createElement($,{query:a,sortedModels:s,model:u}),r.a.createElement(K,{query:a,filters:m,filterErrors:d}),r.a.createElement("p",null,"Limit:"," ",r.a.createElement("input",{className:"RowLimit",type:"number",value:a.query.limit,onChange:function(e){a.setLimit(e.target.value)},min:"1"})," ","- Showing ",o," results -"," ",r.a.createElement("a",{href:a.getUrlForMedia("csv")},"Download as CSV")," -"," ",r.a.createElement("a",{href:a.getUrlForMedia("json")},"View as JSON")," -"," ",r.a.createElement(U,{name:"View",apiUrl:"".concat(f,"api/views/"),data:H(a.query),redirectUrl:function(e){return"/views/".concat(e.pk,".html")}})),r.a.createElement("div",{className:"MainSpace"},r.a.createElement("div",{className:"FieldsList"},r.a.createElement(Z,Object.assign({query:a,model:u},{path:[],prettyPath:[]}))),n,r.a.createElement("div",null)))}function ne(e){var t=e.canMakePublic,n=e.baseUrl,a=Object(h.h)().pk,l="".concat(n,"api/views/").concat(a,"/"),i=M(l),c=Object(v.a)(i,2),o=c[0],s=c[1];return o?r.a.createElement("div",{className:"EditSavedView"},r.a.createElement("div",{className:"SavedViewActions"},r.a.createElement("span",{className:"SavedViewTitle"},"Saved View"),r.a.createElement(y.b,{to:o.link},"Open")),r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:o.name,onChange:function(e){s({name:e.target.value})},className:"SavedViewName",placeholder:"enter a name"}),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Model:"),r.a.createElement("td",null,o.model)),r.a.createElement("tr",null,r.a.createElement("th",null,"Fields:"),r.a.createElement("td",null,o.fields)),r.a.createElement("tr",null,r.a.createElement("th",null,"Filters:"),r.a.createElement("td",null,o.query)),r.a.createElement("tr",null,r.a.createElement("th",null,"Limit:"),r.a.createElement("td",{className:"SavedViewLimit"},r.a.createElement("input",{className:"RowLimit",type:"number",value:o.limit,onChange:function(e){s({limit:e.target.value})}}))))),r.a.createElement("textarea",{value:o.description,onChange:function(e){s({description:e.target.value})},placeholder:"enter a description"}),t&&r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Is Public:"),r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",checked:o.public,onChange:function(e){s({public:e.target.checked})}}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Public link:"),r.a.createElement("td",null,o.public&&r.a.createElement(S,{text:o.public_link}))),r.a.createElement("tr",null,r.a.createElement("th",null,"Google Sheets:"),r.a.createElement("td",null,o.public&&r.a.createElement(S,{text:o.google_sheets_formula})))))),r.a.createElement("div",{className:"SavedViewActions"},r.a.createElement(V,{apiUrl:l,redirectUrl:"/"}),r.a.createElement(y.b,{to:"/"},"Done"))):""}function ae(e){var t=e.baseUrl,n=M("".concat(t,"api/views/")),a=Object(v.a)(n,1)[0];return a?r.a.createElement("div",null,r.a.createElement("h1",null,"Saved Views"),r.a.createElement("div",null,a.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",null,r.a.createElement(y.b,{className:"Link",to:e.link},e.model," - ",e.name)," ","(",r.a.createElement(y.b,{to:"/views/".concat(e.pk,".html")},"edit"),")"),r.a.createElement("p",null,e.description))})))):""}function re(e){var t=e.sortedModels,n=e.baseUrl;return r.a.createElement("div",{className:"Index"},r.a.createElement("div",null,r.a.createElement("h1",null,"Models"),r.a.createElement("div",null,t.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement(y.b,{to:"/query/".concat(e,"/.html"),className:"Link"},e))})))),r.a.createElement(ae,{baseUrl:n}))}var le=n(40),ie=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).popstate=a.popstate.bind(Object(m.a)(a)),a.state=Object(o.a)({booting:!0,loading:!1,error:void 0,model:"",fields:[],filters:[],limit:e.config.defaultRowLimit},B),a}return Object(u.a)(n,[{key:"handleError",value:function(e){"AbortError"!==e.name&&(this.setState({error:!0,loading:!1}),console.log(e),p.a(e))}},{key:"fetchResults",value:function(e){var t=this;return this.setState({loading:!0}),L(X(this.props.config.baseUrl,e,"json")).then((function(e){return t.setState({body:e.body,cols:e.cols,rows:e.rows,length:e.length,filterErrors:e.filterErrors,loading:j,error:void 0}),e}))}},{key:"popstate",value:function(e){this.setState(e.state),this.fetchResults(e.state).catch(this.handleError.bind(this))}},{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.model,a=t.fieldStr,r=t.queryStr,l=t.config;L("".concat(l.baseUrl,"query/").concat(n,"/").concat(a,".query").concat(r)).then((function(t){var n=Object(o.a)({booting:!1,loading:!0,error:void 0,model:t.model,fields:t.fields,filters:t.filters,limit:t.limit},B);e.setState(n),window.history.replaceState(n,null,X(e.props.config.baseUrl,n,"html")),window.addEventListener("popstate",e.popstate),e.fetchResults(e.state).catch(e.handleError.bind(e))}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("popstate",this.popstate)}},{key:"handleQueryChange",value:function(e){this.setState(e);var t=Object(o.a)({},this.state,{},e),n=Object(o.a)({model:t.model,fields:t.fields,filters:t.filters,limit:t.limit},B);window.history.pushState(n,null,X(this.props.config.baseUrl,t,"html")),this.fetchResults(t).then((function(e){e=Object(o.a)({},e,{},B),le.deepStrictEqual(e,n)})).catch(this.handleError.bind(this))}},{key:"render",value:function(){if(this.state.booting)return"";var e=new z(this.props.config,this.state,this.handleQueryChange.bind(this));return r.a.createElement(te,Object.assign({query:e,sortedModels:this.props.config.sortedModels,baseUrl:this.props.config.baseUrl},this.state))}}]),n}(r.a.Component);function ce(e){var t=Object(h.h)(),n=t.model,a=t.fieldStr;return r.a.createElement(ie,Object.assign({},e,{model:n,fieldStr:a||"",queryStr:Object(h.g)().search}))}var oe=function(e){var t=e.baseUrl,n=e.sortedModels,a=e.canMakePublic;return r.a.createElement(y.a,{basename:t},r.a.createElement(ee,null),r.a.createElement("div",{id:"body"},r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/query/:model/:fieldStr?.html"},r.a.createElement(ce,Object.assign({config:e},{sortedModels:n}))),r.a.createElement(h.b,{path:"/views/:pk.html"},r.a.createElement(ne,{baseUrl:t,canMakePublic:a})),r.a.createElement(h.b,{path:"/"},r.a.createElement(re,{sortedModels:n,baseUrl:t})))))},se=JSON.parse(document.getElementById("backend-config").textContent),ue=document.getElementById("backend-version").textContent.trim();se.sentryDsn&&c.a({dsn:se.sentryDsn,release:ue,attachStacktrace:!0,maxValueLength:1e4}),i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,se)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.140dde19.chunk.js.map