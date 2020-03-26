(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{52:function(e,t,a){e.exports=a(66)},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),c=a.n(l),s=(a(57),a(11)),i=a(12),o=a(15),m=a(16),u=a(24),p=a(18),f=a(25),d=a(30),h=a(6),E=a(13),b=a(17);var j=function(){return r.a.createElement("footer",{className:"mt-5"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(E.a,{className:"border-top justify-content-between p-3"},r.a.createElement(b.a,{className:"my-auto p-0 d-flex align-items-center justify-content-center",md:12},r.a.createElement("span",null,"Created by Jordi Yaputra with ",r.a.createElement("i",{className:"fas fa-heart"}))))))},y=a(44),v=a(43);var g=function(e){return r.a.createElement(v.a,{className:"bg-transparent jumbotron-fluid"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(E.a,{className:"justify-content-center py-5"},r.a.createElement(b.a,{lg:8,md:9,sm:12},e.title&&r.a.createElement("h1",{className:"display-1 font-weight-bold"},e.title),e.subtitle&&r.a.createElement("h3",{className:"display-4 font-weight-lighter"},e.subtitle)))))};var N=function(e){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(g,{title:e.title,subtitle:e.subtitle}),r.a.createElement(E.a,{className:"justify-content-center"},r.a.createElement(y.a,{href:"/project",variant:"outline-dark",className:"py-3 px-5"},r.a.createElement("h2",null,"Check my projects >> "))))},k=a(21);var x=function(e){return r.a.createElement(k.a,{style:{width:"18rem"}},r.a.createElement(d.a.Link,{href:e.href,style:{padding:0}},r.a.createElement(k.a.Img,{variant:"top",src:"/img/ss-buffon.png"}),r.a.createElement(k.a.Body,{style:{color:"black"}},r.a.createElement(k.a.Title,null,r.a.createElement("b",null,e.title)),r.a.createElement(k.a.Text,null,e.desc))))},O=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"createList",value:function(e){for(var t=[],a=[],n=0;n<e.length;n++){var l=e[n];a.push(r.a.createElement(x,{key:n,href:"/sandbox/"+l.foldername,title:l.title,desc:l.desc}))}return t.push(r.a.createElement(h.a,null,a)),t}},{key:"render",value:function(){return r.a.createElement(h.a,null,this.createList(this.props.list))}}]),a}(r.a.Component),w=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={projectList:[{title:"Buffon Needle",foldername:"buffon-needle",desc:"This is a simulation for Buffon's Needle experiment. The experiment itself was the earliest problem in geometic probability to be solved. By running this experiment in long time, we can get the estimated number for PI."}]},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("h1",null,"Libraries:"),r.a.createElement("p",null,"Here is the list"),r.a.createElement(O,{list:this.state.projectList}))}}]),a}(r.a.Component),C=a(23),T=a.n(C),J=a(35),L=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(E.a,{className:"justify-content-center py-5"},r.a.createElement(b.a,{lg:8,md:12},r.a.createElement("h1",{className:"mb-3"},"Sandbox"),r.a.createElement(b.a,{id:"sketch-container"}))))}},{key:"loadManifest",value:function(){var e=Object(J.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(J.a)(T.a.mark((function e(t,a){var n,r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("../project/manifest.json");case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,console.log(r),t(r);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="/libraries/p5.js",document.body.appendChild(e);for(var t=0,a=["Global","Needle","Paper","sketch"];t<a.length;t++){var n=a[t],r=document.createElement("script");r.src="".concat("","/project/buffon-needle/").concat(n,".js"),document.body.appendChild(r)}}}]),a}(r.a.Component),P=a(48);var B=function(e){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(E.a,{className:"p-0"},r.a.createElement(b.a,{className:"d-flex align-items-between",lg:5,md:6,sm:6},r.a.createElement(P.a,{src:"".concat("","/img/profile.jpg"),fluid:!0})),r.a.createElement(b.a,{className:"d-flex flex-column",lg:7,md:6,sm:6},r.a.createElement("h1",{className:"display-lg-1 display-sm-3 mb-4"},"JORDI YAPUTRA"),r.a.createElement("h3",null,"Education"),r.a.createElement("ul",null,"Telkom University"))))},S=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={title:"Jordi's Project",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Welcome,",subtitle:"This app is for my project made with P5.js"}},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,null,r.a.createElement("link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.7.0/css/all.css",integrity:"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ",crossOrigin:"anonymous"}),r.a.createElement(h.a,{className:"p-0",fluid:!0},r.a.createElement(f.a,{className:"border-bottom",expand:"md"},r.a.createElement(f.a.Brand,{href:"/"},"Yapz"),r.a.createElement(f.a.Toggle,{"aria-controls":"navbar-toggle"}),r.a.createElement(f.a.Collapse,{id:"navbar-toggle"},r.a.createElement(d.a,{className:"ml-auto"},r.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),r.a.createElement(u.b,{className:"nav-link",to:"/project"},"Project"),r.a.createElement(u.b,{className:"nav-link",to:"/about"},"About")))),r.a.createElement(p.a,{path:"/",exact:!0,render:function(){return r.a.createElement(N,{title:e.state.home.title,subtitle:e.state.home.subtitle})}}),r.a.createElement(p.a,{path:"/project",render:function(){return r.a.createElement(w,null)}}),r.a.createElement(p.a,{path:"/sandbox/:projectName",render:function(e){var t=e.match;return r.a.createElement(L,{match:t})}}),r.a.createElement(p.a,{path:"/about"},r.a.createElement(B,null)),r.a.createElement(j,null)))}}]),a}(r.a.Component);c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.d2f23c7c.chunk.js.map