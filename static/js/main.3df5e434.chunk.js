(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(49)},35:function(e,t,a){},47:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),o=a.n(c),s=(a(35),a(15)),i=a.n(s),l=a(19),u=a(8),p=a(9),h=a(13),m=a(10),f=a(14),b=(n.Component,"REDUCE_ARTICLES");function d(e){return{type:b,articles:e}}var v=a(12),w=a(7),g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).newsSearch=function(){var e=Object(l.a)(i.a.mark(function e(t){var a,n,r=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=document.getElementsByName("search")[0].value.toLowerCase(),this.setState({searchValue:a}),n=new Request("https://newsapiwrapper.herokuapp.com/v1/search?q="+a),fetch(n).then(function(e){return e.json().then(function(e){return r.props.reduceArticles(e.articles)})}),this.props.history.push("/search/"+a);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"News 4 yous"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("form",{className:"form-inline my-2 my-lg-0 ml-auto",onSubmit:function(t){return e.newsSearch(t)}},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",name:"search"}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))}}]),t}(n.Component),y=Object(v.b)(function(e){return{articles:e.reduceArticles}},function(e,t){return{reduceArticles:function(t){e(d(t))}}})(Object(w.d)(g)),E=(a(47),a(48),"".concat("bb2ee681d7424770a028b0899c2ce77d"),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(m.a)(t).call(this))).newsLoad=Object(l.a)(i.a.mark(function e(){var t,a=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:"https://newsapiwrapper.herokuapp.com/v1/all",t=new Request("https://newsapiwrapper.herokuapp.com/v1/all"),fetch(t).then(function(e){return e.json().then(function(e){return a.props.reduceArticles(e.articles)})});case 3:case"end":return e.stop()}},e)})),e.state={articles:[]},e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.newsLoad()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App",id:"root"},r.a.createElement(y,null),this.props.articles.map(function(e){return r.a.createElement("a",{href:e.url},r.a.createElement("h2",null,e.title))}))}}]),t}(n.Component)),j=Object(v.b)(function(e){return{articles:e.articleReducer}},function(e,t){return{reduceArticles:function(t){e(d(t))}}})(E);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(11);var k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.articles;default:return e}},N=Object(O.b)({articleReducer:k}),S=a(22),C=Object(O.c)(N);o.a.render(r.a.createElement(S.a,null,r.a.createElement(v.a,{store:C},r.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.3df5e434.chunk.js.map