(function(t){function e(e){for(var i,a,l=e[0],s=e[1],c=e[2],u=0,d=[];u<l.length;u++)a=l[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&d.push(n[a][0]),n[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],i=!0,l=1;l<r.length;l++){var s=r[l];0!==n[s]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var i={},n={app:0},o=[];function a(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=i,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(r,i,function(e){return t[e]}.bind(null,i));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/films-vue/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var f=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var i=r("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),i("router-view",[i("Home"),i("Films")],1)],1)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"films"},[r("button",{staticClass:"btn btn-primary btn-lg mb-2 ml-2",on:{click:t.addFilm}},[t._v("Add Film")]),r("router-link",{attrs:{to:"/"}},[r("button",{staticClass:"btn btn-primary btn-lg mb-2 mr-2 float-right"},[t._v("Go Home")])]),r("div",{staticClass:"films-container"},t._l(t.films,(function(e){return r("Film",{key:e.id,attrs:{filmInfo:e},on:{editFilm:function(r){return t.editFilm(e.id)},deleteFilm:function(r){return t.deleteFilm(e.id)}}})})),1),t.showEdit?r("EditFilm",{attrs:{title:t.editTitle,titles:t.titles,editOkTitle:t.editOkTitle,filmInfo:t.editFilmInfo},on:{"edit-cancel":function(e){t.showEdit=!1},"edit-update":t.updateFilm}}):t._e()],1)},l=[],s=(r("ac6a"),r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("7f7f"),r("6b54"),r("bc3a")),c=r.n(s),f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"film"},[r("h4",{staticClass:"font-weight-bold mb-1"},[t._v(t._s(t._f("titleFormat")(t.filmInfo.title)))]),r("p",[t._v(" Director: "+t._s(t.filmInfo.director)+" "),r("br"),t._v(" Genre: "+t._s(t.filmInfo.genre)+" "),r("br"),t._v(" Runtime: "+t._s(t.filmInfo.director)+" "),r("br"),t._v(" Year: "+t._s(t.filmInfo.year)+" ")]),r("button",{staticClass:"btn btn-primary m-1",on:{click:t.editFilm}},[t._v("Edit")]),r("button",{staticClass:"btn btn-secondary m-1",on:{click:t.deleteFilm}},[t._v("Delete")])])},u=[],d=(r("a481"),r("28a5"),{name:"Film",props:["filmInfo"],methods:{editFilm:function(){this.$emit("editFilm",this.filmInfo.id)},deleteFilm:function(){this.$emit("deleteFilm",this.filmInfo.id)}},filters:{titleFormat:function(t){if(""!=t)return t=t.replace(/([^a-z0-9\s-:]+)/gi,"").toLowerCase().split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" ").trim(),t}}}),m=d,p=(r("6f79"),r("2877")),h=Object(p["a"])(m,f,u,!1,null,"0a551023",null),b=h.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editfilm"},[r("b-modal",{attrs:{title:t.title,"header-bg-variant":"dark","header-text-variant":"light","body-bg-variant":"dark","footer-bg-variant":"dark","ok-title":t.editOkTitle,centered:""},on:{ok:t.ok,cancel:t.cancel,hidden:function(e){return t.$emit("edit-cancel")}},model:{value:t.modalShow,callback:function(e){t.modalShow=e},expression:"modalShow"}},[r("b-form",[r("b-form-group",{staticClass:"text-light",attrs:{label:"Title","label-for":"title"}},[r("b-form-input",{staticClass:"mb-2",attrs:{id:"title",type:"text",placeholder:"Title"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),r("span",{staticClass:"error"},[t._v(t._s(t.errorFields.title))])],1),r("b-form-group",{staticClass:"text-light",attrs:{label:"Director","label-for":"director"}},[r("b-form-input",{staticClass:"mb-2",attrs:{id:"director",type:"text",placeholder:"Director"},model:{value:t.form.director,callback:function(e){t.$set(t.form,"director",e)},expression:"form.director"}}),r("span",{staticClass:"error"},[t._v(t._s(t.errorFields.director))])],1),r("b-form-group",{staticClass:"text-light",attrs:{label:"Genre","label-for":"genre"}},[r("b-form-input",{staticClass:"mb-2",attrs:{id:"genre",type:"text",placeholder:"Genre"},model:{value:t.form.genre,callback:function(e){t.$set(t.form,"genre",e)},expression:"form.genre"}}),r("span",{staticClass:"error"},[t._v(t._s(t.errorFields.genre))])],1),r("b-form-group",{staticClass:"text-light",attrs:{label:"Runtime","label-for":"runtime"}},[r("b-form-input",{staticClass:"mb-2",attrs:{id:"genre",type:"text",placeholder:"Runtime"},model:{value:t.form.runtime,callback:function(e){t.$set(t.form,"runtime",e)},expression:"form.runtime"}}),r("span",{staticClass:"error"},[t._v(t._s(t.errorFields.runtime))])],1),r("b-form-group",{staticClass:"text-light",attrs:{label:"Year","label-for":"year"}},[r("b-form-input",{attrs:{id:"year",type:"text",placeholder:"Year"},model:{value:t.form.year,callback:function(e){t.$set(t.form,"year",e)},expression:"form.year"}}),r("span",{staticClass:"error"},[t._v(t._s(t.errorFields.year))])],1)],1)],1)],1)},v=[],g=(r("8e6e"),r("bd86"));r("c5f6"),r("7cdf"),r("456d");function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){Object(g["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=_(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,n,o=!0,a=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){a=!0,n=t},f:function(){try{o||null==i.return||i.return()}finally{if(a)throw n}}}}function _(t,e){if(t){if("string"===typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}var j={name:"EditFilm",data:function(){return{modalShow:!0,form:{id:0,title:"",director:"",genre:"",runtime:"",year:""},errorMessages:{empty:"This field cannot be empty",existingTitle:"This title already exists",yearFormat:"The year format is invalid. Ex. 1974",yearRange:"The year is invalid"},errorFields:{title:"",director:"",genre:"",runtime:"",year:""}}},props:["title","editOkTitle","filmInfo","titles"],methods:{ok:function(t){this.validateForm()?this.$emit("edit-update",this.form):t.preventDefault()},cancel:function(){this.$emit("edit-cancel")},validateForm:function(){var t=this.errorFields;Object.keys(this.errorFields).map((function(e){t[e]=""}));var e=!0;return""==this.form.title?(this.errorFields.title=this.errorMessages.empty,e=!1):this.titleExists(this.form.title)&&(this.errorFields.title=this.errorMessages.existingTitle,e=!1),""==this.form.director&&(this.errorFields.director=this.errorMessages.empty,e=!1),""==this.form.genre&&(this.errorFields.genre=this.errorMessages.empty,e=!1),""==this.form.runtime&&(this.errorFields.runtime=this.errorMessages.empty,e=!1),""==this.form.year?(this.errorFields.year=this.errorMessages.empty,e=!1):Number.isInteger(Number(this.form.year))?(Number(this.form.year)<1860||Number(this.form.year)>2050)&&(this.errorFields.year=this.errorMessages.yearRange,e=!1):(this.errorFields.year=this.errorMessages.yearFormat,e=!1),e},titleExists:function(t){var e,r=O(this.titles);try{for(r.s();!(e=r.n()).done;){var i=e.value;if(this.titleForm(i)==this.titleForm(t))return!0}}catch(n){r.e(n)}finally{r.f()}return!1},titleForm:function(t){if(""!=t)return t=t.replace(/([^a-z0-9\s-:]+)/gi,"").toLowerCase().split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" ").trim(),t}},mounted:function(){this.form=w({},this.filmInfo)}},k=j,C=(r("a151"),Object(p["a"])(k,y,v,!1,null,"68f3bdc7",null)),I=C.exports;function T(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=E(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,n,o=!0,a=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return o=t.done,t},e:function(t){a=!0,n=t},f:function(){try{o||null==i.return||i.return()}finally{if(a)throw n}}}}function E(t,e){if(t){if("string"===typeof t)return S(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(t,e):void 0}}function S(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,i=new Array(e);r<e;r++)i[r]=t[r];return i}var $={name:"Films",components:{Film:b,EditFilm:I},data:function(){return{films:[],showEdit:!1,editTitle:"",editOkTitle:"",editFilmInfo:[]}},methods:{addFilm:function(){this.editTitle="Add New film",this.editOkTitle="Add",this.editFilmInfo={id:this.newIndex(),title:"",director:"",year:"",genre:"",runtime:""},this.showEdit="true"},editFilm:function(t){this.editTitle="Edit film",this.editOkTitle="Update",this.editFilmInfo=this.filmById(t),this.showEdit="true"},updateFilm:function(t){this.showEdit=!1;var e=this.filmById(t.id);if(!1===e)this.films.push(t);else for(var r=0;r<this.films.length;r++)this.films[r].id===e.id&&(this.films[r]=t)},deleteFilm:function(t){var e=this;this.$bvModal.msgBoxConfirm("Please confirm that you want to delete.",{title:"Confirm Delete",okVariant:"danger",okTitle:" Yes ",cancelTitle:" Cancel ",footerClass:"p-2",hideHeaderClose:!1,centered:!0}).then((function(r){if(!0===r)for(var i=0;i<e.films.length;i++)e.films[i].id===t&&e.films.splice(i,1)}))},newIndex:function(){var t,e=0,r=T(this.films);try{for(r.s();!(t=r.n()).done;){var i=t.value;i.id>e&&(e=i.id)}}catch(n){r.e(n)}finally{r.f()}return e+1},filmById:function(t){var e,r=T(this.films);try{for(r.s();!(e=r.n()).done;){var i=e.value;if(i.id===t)return i}}catch(n){r.e(n)}finally{r.f()}return!1},closeEdit:function(){}},created:function(){var t=this,e=["tt7549996","tt1386697","tt1856101","tt6324278","tt2328900","tt5503686","tt6189022","tt6105098"];e.map((function(e,r){c.a.get("https://www.omdbapi.com/?i="+e+"&apikey=9be04176").then((function(e){var i={id:r,title:e.data.Title,director:e.data.Director,genre:e.data.Genre,runtime:e.data.Runtime,year:e.data.Year};t.films.push(i)}))}))},computed:{titles:function(){return this.films.map((function(t){return t.title}))}}},A=$,M=(r("85ef"),Object(p["a"])(A,a,l,!1,null,"5c0d79ac",null)),P=M.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",[r("div",[r("h2",[t._v("A small project to demonstrate the use of Vue.js in a simple web app.")]),r("router-link",{attrs:{to:"/films"}},[t._v("Go to Films")])],1)])},G=[],R={name:"Home"},H=R,N=(r("bb45"),Object(p["a"])(H,D,G,!1,null,null,null)),U=N.exports,Y={name:"app",components:{Films:P,Home:U}},B=Y,V=(r("5c0b"),Object(p["a"])(B,n,o,!1,null,null,null)),z=V.exports,J=r("5f5b"),L=r("8c4f");r("f9e3"),r("2dd8");i["default"].use(J["a"]),i["default"].use(L["a"]),i["default"].config.productionTip=!1;var q=[{path:"/",component:U},{path:"/films",component:P}],K=new L["a"]({routes:q});new i["default"]({render:function(t){return t(z)},router:K}).$mount("#app")},"5c0b":function(t,e,r){"use strict";var i=r("9c0c"),n=r.n(i);n.a},"6f79":function(t,e,r){"use strict";var i=r("dd50"),n=r.n(i);n.a},"85ef":function(t,e,r){"use strict";var i=r("8ba3"),n=r.n(i);n.a},"8ba3":function(t,e,r){},"9c0c":function(t,e,r){},a151:function(t,e,r){"use strict";var i=r("cf3a"),n=r.n(i);n.a},bb45:function(t,e,r){"use strict";var i=r("d850"),n=r.n(i);n.a},cf05:function(t,e,r){t.exports=r.p+"img/logo.82b9c7a5.png"},cf3a:function(t,e,r){},d850:function(t,e,r){},dd50:function(t,e,r){}});
//# sourceMappingURL=app.6462143f.js.map