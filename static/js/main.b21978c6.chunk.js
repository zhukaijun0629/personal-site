(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{20:function(e,n,t){"use strict";var c=t(0),i=t(1),r=t(16),a=t(3),l=t(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=s.NODE_ENV,o=s.REACT_APP_GA_TRACKING_ID;"production"===j&&l.a.initialize(o);var u=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(l.a.set({page:e}),l.a.pageview(e))}),[e]),null},b=t(5),h=t(30),d=[{index:!0,label:"Kaijun Zhu",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"}],O=Object(i.lazy)((function(){return t.e(4).then(t.t.bind(null,163,7))})),m=function(){var e=Object(i.useState)(!1),n=Object(h.a)(e,2),t=n[0],r=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return r(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return r(!t)},className:"menu-hover",children:"MENU"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:e.path,onClick:function(){return r(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=t(25),p=t(26),f=t(28),g=t(27),k=t(29),w=[{link:"https://github.com/zhukaijun0629",label:"Github",icon:p.faGithub},{link:"https://www.linkedin.com/in/kaijun-kevin-zhu/",label:"LinkedIn",icon:g.faLinkedinIn},{link:"https://www.instagram.com/kevinzhu000/",label:"Instagram",icon:f.faInstagram},{link:"mailto:kaijun.zhu0629@gmail.com",label:"Email",icon:k.faEnvelope}],v=function(){return Object(c.jsx)("ul",{className:"icons",children:w.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",children:Object(c.jsx)(x.a,{icon:e.icon})})},e.label)}))})},N=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(b.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(b.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)("div",{className:"header-icons",children:Object(c.jsx)(v,{})}),Object(c.jsx)(m,{})]})},_=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(b.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Kaijun Zhu"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:kaijun.zhu0629@gmail.com",children:"kaijun.zhu0629@gmail.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Kaijun. I am a software developer, a structural engineer, and a railroad researcher. ",Object(c.jsx)("br",{}),"I received my M.S degree from University of Illinois at Urbana-Champaign, where I was a ",Object(c.jsx)("a",{href:"https://railtec.illinois.edu/member/kaijun-zhu/",target:"_blank",rel:"noopener noreferrer",children:"Research Assistant "})," and was advised by ",Object(c.jsx)("a",{href:"https://railtec.illinois.edu/member/j-riley-edwards/",target:"_blank",rel:"noopener noreferrer",children:"Dr. Riley Edward"})," and ",Object(c.jsx)("a",{href:"https://sc.edu/study/colleges_schools/engineering_and_computing/faculty-staff/qian_yu.php",target:"_blank",rel:"noopener noreferrer",children:"Prof. Yu Qian"}),". After graduation, I became a structural / software engineer at ",Object(c.jsx)("a",{href:"https://www.saifulbouquet.com/",target:"_blank",rel:"noopener noreferrer",children:"Saiful Bouquet"})," and ",Object(c.jsx)("a",{href:"https://www.walterpmoore.com/",target:"_blank",rel:"noopener noreferrer",children:"Walter P Moore"}),"."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/about")?Object(c.jsx)(b.b,{to:"/resume",className:"button",children:"View Resume"}):Object(c.jsx)(b.b,{to:"/about",className:"button",children:"More about Me"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(v,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Kaijun Zhu ",Object(c.jsx)(b.b,{to:"/",children:"kaijunz.com"}),"."]})]})]})},y=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},E=function(e){return Object(c.jsxs)(r.b,{children:[Object(c.jsx)(u,{}),Object(c.jsx)(y,{}),Object(c.jsxs)(r.a,{titleTemplate:"%s | Kaijun Zhu",defaultTitle:"Kaijun Zhu",children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(N,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(_,{})]})]})};E.defaultProps={children:null,fullPage:!1,title:null,description:"Kaijun Zhu's personal website."};n.a=E},43:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(1),r=t.n(i),a=t(15),l=t(5),s=t(3),j=t(20),o=(t(43),Object(i.lazy)((function(){return Promise.all([t.e(2),t.e(6)]).then(t.bind(null,159))}))),u=Object(i.lazy)((function(){return t.e(7).then(t.bind(null,160))})),b=Object(i.lazy)((function(){return t.e(8).then(t.bind(null,161))})),h=Object(i.lazy)((function(){return t.e(5).then(t.bind(null,164))})),d=Object(i.lazy)((function(){return t.e(9).then(t.bind(null,162))})),O=function(){return Object(c.jsx)(l.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(s.a,{path:"/about",component:o}),Object(c.jsx)(s.a,{path:"/projects",component:h}),Object(c.jsx)(s.a,{path:"/resume",component:d}),Object(c.jsx)(s.a,{component:b,status:404})]})})})},m=function(){return Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(O,{})})},x=document.getElementById("root");x.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(m,{}),x):Object(a.render)(Object(c.jsx)(m,{}),x)}},[[44,1,3]]]);
//# sourceMappingURL=main.b21978c6.chunk.js.map