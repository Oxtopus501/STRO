(this.webpackJsonpstro=this.webpackJsonpstro||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var a=c(1),i=c.n(a),r=c(7),n=c.n(r),s=(c(12),c(3)),l=(c(13),c(14),c(0));function o(e){return Object(l.jsx)("button",{className:"bookmark",children:e.text})}var d=i.a.memo(o),u=c(4),h=[{label:"\u041c\u043e\u0441\u043a\u0432\u0430",value:"moscow",id:"ip-city-chart-524901"},{label:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",value:"saintPetersburg",id:"ip-city-chart-498817"},{label:"\u041a\u0438\u0435\u0432",value:"kyiv",id:"ip-city-chart-703448"},{label:"\u041b\u043e\u043d\u0434\u043e\u043d",value:"london",id:"ip-city-chart-2643743"},{label:"\u0410\u043c\u0441\u0442\u0435\u0440\u0434\u0430\u043c",value:"amsterdam",id:"ip-city-chart-2759794"},{label:"\u0411\u0435\u0440\u043b\u0438\u043d",value:"berlin",id:"ip-city-chart-2950159"},{label:"\u041b\u0438\u0441\u0441\u0430\u0431\u043e\u043d",value:"lisbon",id:"ip-city-chart-2267057"},{label:"\u041c\u0430\u0434\u0440\u0438\u0434",value:"madrid",id:"ip-city-chart-3117735"},{label:"\u0411\u0430\u0440\u0441\u0435\u043b\u043e\u043d\u0430",value:"barcelona",id:"ip-city-chart-3128760"},{label:"\u0420\u0438\u043c",value:"rome",id:"ip-city-chart-3169070"}],j=(c(16),function(e){var t=e.onClick,c=e.children,a=e.disabled;return Object(l.jsx)("button",{className:"search-button",onClick:t,disabled:a,children:c})}),b=i.a.memo(j);function f(){return Object(l.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:Object(l.jsx)("path",{d:"M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z",fill:"#fff"})})}var x=i.a.memo(f);c(17);var m=function(){var e=g();return Object(l.jsx)("select",{className:"select-place",onChange:function(t){var c=h.filter((function(e){return e.id===t.target.value}))[0];e.setCity(c)},children:h.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.label},e.id)}))})};c(18);var k=function(e){return Object(l.jsx)("button",{className:"track-tile__add-button",onClick:e.onClick,children:Object(l.jsx)("svg",{className:"track-tile__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24",children:Object(l.jsx)("g",{id:"surface21955591",children:Object(l.jsx)("path",{d:"M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z M 11 2 "})})})})};c(19);function p(e){return Object(l.jsx)("a",{className:"track-tile__play-button",href:"https://www.youtube.com/results?search_query=".concat("".concat(e.author.replace("&","").split(" ").join("+"),"+").concat(e.title.replace("&","").split(" ").join("+"))),target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAqklEQVQ4jaXSMWoCQRSA4ceyiJVYiCcQS4scIsewtBSvYZHSymNYhRQewUqCJxALsRaRz0KXiK5hdv37+YaZ9wKBFZb4iKoh89cZc3SrALnnDpggTwEaJUDRLz7fAYoW6L0DwBFTtOoCRVsMkdUFin4QWeKwympERBZoVrx5h9H9E1KBI77QfvzEFGCB/qsx/ges1VykPcZqrPIJM3TSBnEFAht8Y5B88NYFIo4rVQkbBd8AAAAASUVORK5CYII=",alt:"play",className:"track-tile__play-icon"})})}var O=i.a.memo(p);c(20);var v=function(e){var t=B(),c=g();return Object(l.jsxs)("div",{className:"track-tile",children:[Object(l.jsxs)("div",{className:"track-tile__place",children:["#",e.place]}),Object(l.jsxs)("div",{className:"track-tile__text-container",children:[Object(l.jsx)("h3",{className:"track-tile__title",children:e.title}),Object(l.jsx)("p",{className:"track-tile__author",children:e.author}),Object(l.jsx)("p",{className:"track-tile__city",children:e.city})]}),Object(l.jsxs)("div",{className:"track-tile__buttons-container",children:[Object(l.jsx)(O,{title:e.title,author:e.author}),Object(l.jsx)(k,{onClick:function(){var a,i=t.addedTracks,r=c.trackList.filter((function(t){if(t.key===e.id)return t}))[0];r&&(r.added?(i.forEach((function(e,t){e.key===r.key&&(a=t)})),i.splice(a,1),r.added=!1,t.setAddedTracks(Object(u.a)(i))):(r.added=!0,t.setAddedTracks([].concat(Object(u.a)(t.addedTracks),[r]))))}})]})]})},A=(c(21),i.a.createContext({city:h[0],setCity:function(){},trackList:[],setTrackList:function(){}})),y=A.Provider,g=function(){return i.a.useContext(A)};var w=function(){var e=i.a.useState([]),t=Object(s.a)(e,2),c=t[0],a=t[1],r=i.a.useState(h[0]),n=Object(s.a)(r,2),o=n[0],d=n[1],j=B();return Object(l.jsx)(y,{value:{city:o,setCity:d,trackList:c,setTrackList:a},children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"charts__header",children:[Object(l.jsx)(m,{}),Object(l.jsx)(b,{children:Object(l.jsx)(x,{}),onClick:function(){var e;e=o.id,fetch("https://shazam.p.rapidapi.com/charts/track?locale=en-US&listId=".concat(e,"&pageSize=20&startFrom=0"),{method:"GET",headers:{"x-rapidapi-host":"shazam.p.rapidapi.com","x-rapidapi-key":"ee2ab30195msh36c4dde5ff52590p100112jsnb138dae00782"}}).then((function(e){return e.json()})).then((function(e){var t=e.tracks.map((function(e){return e.city=o.label,j.addedTracks.some((function(t){return t.key===e.key}))?e.added=!0:e.added=!1,e}));console.log(t),a(Object(u.a)(t))}))}})]}),c.length>0?c.map((function(e,t){return Object(l.jsx)(v,{id:e.key,title:e.title,place:t+1,author:e.subtitle,city:e.city},e.key)})):null]})})};c(22),c(23);function C(){return Object(l.jsx)("button",{className:"burger-button",children:Object(l.jsxs)("svg",{viewBox:"0 0 100 80",width:"40",height:"40",children:[Object(l.jsx)("rect",{width:"100",height:"12",rx:"8",fill:"white"}),Object(l.jsx)("rect",{y:"30",width:"100",height:"12",rx:"8",fill:"white"}),Object(l.jsx)("rect",{y:"60",width:"100",height:"12",rx:"8",fill:"white"})]})})}var N=i.a.memo(C);function _(){return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h2",{className:"header__logo",children:"SoundTracker"}),Object(l.jsx)(N,{})]})}var L=i.a.memo(_),S=(c(24),c(25),i.a.createContext({addedTracks:[],setAddedTracks:function(){}})),T=S.Provider,B=function(){return i.a.useContext(S)};var E=function(){var e=i.a.useState(JSON.parse(localStorage.getItem("addedTracks"))),t=Object(s.a)(e,2),c=t[0],a=t[1];return i.a.useEffect((function(){console.log(c),localStorage.setItem("addedTracks",JSON.stringify(c))}),[c]),i.a.useEffect((function(){null===c&&a([])}),[]),Object(l.jsx)(T,{value:{addedTracks:c,setAddedTracks:a},children:Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(L,{}),Object(l.jsxs)("section",{className:"page-content",children:[Object(l.jsx)("p",{className:"page-content__text",children:"SoundTracker - \u044d\u0442\u043e \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 Shazam API, \u0433\u0434\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0447\u0430\u0440\u0442\u044b \u043f\u043e \u0433\u043e\u0440\u043e\u0434\u0430\u043c \u043c\u0438\u0440\u0430"}),Object(l.jsxs)("div",{className:"bookmarks",children:[Object(l.jsx)(d,{className:"bookmark",text:"\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0447\u0430\u0440\u0442\u044b"}),Object(l.jsx)(d,{className:"bookmark",text:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0442\u0440\u0435\u043a\u0438"})]}),Object(l.jsx)(w,{})]})]})})};n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(E,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.0d8be4d6.chunk.js.map