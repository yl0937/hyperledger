webpackJsonp([1],{"07PK":function(t,i){},"9M+g":function(t,i){},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("7+uW"),a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var o=s("VU/8")({name:"App"},a,!1,function(t){s("gsu9")},null,null).exports,n=s("/ocq"),c=s("gORT"),l=s("xJsL");e.default.use(n.a);var r=new n.a({routes:[{path:"/",name:"HelloWorld",component:c.default},{path:"/login",name:"Login",component:l.default}]}),d=s("NYxO"),u=s("mtWM"),v=s.n(u);s("8Sz2"),s("gaHu");e.default.use(d.a);new d.a.Store({state:{userInfo:null,isLogin:!1,isLoginError:!0},mutations:{loginSuccess:function(t){t.isLogin=!0,t.isLoginError=!1},loginError:function(t){t.isLogin=!1,t.isLoginError=!0},logout:function(t){t.isLogin=!1,t.isLoginError=!1,sessionStorage.removeItem("access_token")}},actions:{login:function(t,i){var s=t.commit;sessionStorage.setItem("userid",i.userid),v.a.post("http://127.0.0.1:5000/login",i).then(function(t){console.log("test");var i=t.data;if("200"==i.code){sessionStorage.setItem("access_token",i.access_token);sessionStorage.getItem("access_token");s("loginSuccess"),r.push("/")}else alert(" Check your Id&PW ")}).catch(function(){alert(" Check your Id&PW ")})},loginRefresh:function(t){var i=t.commit;null!=sessionStorage.getItem("access_token")?(i("loginSuccess"),r.push("/")):i("loginError")},logout:function(t){(0,t.commit)("logout"),r.push("/login")}}});var p=s("Tqaz");s("qb6w"),s("9M+g");e.default.use(p.a),e.default.config.productionTip=!1,new e.default({el:"#app",router:r,components:{App:o},template:"<App/>"})},"SF/Q":function(t,i,s){"use strict";var e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"}),t._v(" "),s("div",{staticClass:"col-md-4",staticStyle:{position:"relative"}},[s("b-button",{staticStyle:{position:"relative",top:"300px",width:"500px",height:"60px","font-size":"2em",left:"55px"},attrs:{block:"",variant:"primary"}},[t._v("SIGN IN")])],1),t._v(" "),s("div",{staticClass:"col-md-4"})])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"}),this._v(" "),i("div",{staticClass:"col-md-4",staticStyle:{"font-size":"4em",position:"relative",top:"150px"}},[i("b",[this._v("SIGN IN")])]),this._v(" "),i("div",{staticClass:"col-md-4"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"}),this._v(" "),i("div",{staticClass:"col-md-4",staticStyle:{position:"relative"}},[i("input",{staticStyle:{position:"relative",top:"200px",width:"500px",height:"60px"},attrs:{id:"userid",type:"text",placeholder:"Enter your ID"}})]),this._v(" "),i("div",{staticClass:"col-md-4"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"}),this._v(" "),i("div",{staticClass:"col-md-4",staticStyle:{position:"relative"}},[i("input",{staticStyle:{position:"relative",top:"240px",width:"500px",height:"60px"},attrs:{id:"pwd",type:"password",placeholder:"Enter your password"}})]),this._v(" "),i("div",{staticClass:"col-md-4"})])}]};i.a=e},UEbS:function(t,i,s){"use strict";var e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"}),t._v(" "),s("div",{staticClass:"col-md-4",staticStyle:{position:"relative"}},[s("b-button",{staticStyle:{position:"relative",top:"300px",width:"500px",height:"60px","font-size":"2em",left:"55px"},attrs:{block:"",variant:"primary"}},[t._v("SIGN IN")])],1),t._v(" "),s("div",{staticClass:"col-md-4"})])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"}),this._v(" "),i("div",{staticClass:"col-md-4",staticStyle:{"font-size":"4em",position:"relative",top:"150px"}},[i("b",[this._v("SIGN IN")])]),this._v(" "),i("div",{staticClass:"col-md-4"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"}),this._v(" "),i("div",{staticClass:"col-md-4",staticStyle:{position:"relative"}},[i("input",{staticStyle:{position:"relative",top:"200px",width:"500px",height:"60px"},attrs:{id:"userid",type:"text",placeholder:"Enter your ID"}})]),this._v(" "),i("div",{staticClass:"col-md-4"})])},function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4"}),this._v(" "),i("div",{staticClass:"col-md-4",staticStyle:{position:"relative"}},[i("input",{staticStyle:{position:"relative",top:"240px",width:"500px",height:"60px"},attrs:{id:"pwd",type:"password",placeholder:"Enter your password"}})]),this._v(" "),i("div",{staticClass:"col-md-4"})])}]};i.a=e},gORT:function(t,i,s){"use strict";var e=s("07PK"),a=s.n(e),o=s("UEbS");var n=function(t){s("kDIj"),s("q/b1")},c=s("VU/8")(a.a,o.a,!1,n,"data-v-ef06bd82",null);i.default=c.exports},gsu9:function(t,i){},kDIj:function(t,i){},"nKb+":function(t,i){},"q/b1":function(t,i){},qb6w:function(t,i){},ulbv:function(t,i){},xJsL:function(t,i,s){"use strict";var e=s("nKb+"),a=s.n(e),o=s("SF/Q");var n=function(t){s("ulbv")},c=s("VU/8")(a.a,o.a,!1,n,"data-v-69e07da1",null);i.default=c.exports}},["NHnr"]);
//# sourceMappingURL=app.24281c68dd76a8c8ef4d.js.map