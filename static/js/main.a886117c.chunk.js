(this.webpackJsonpwork_samples=this.webpackJsonpwork_samples||[]).push([[0],{13:function(e,t,n){},38:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(30),i=n.n(s),o=(n(38),n(9)),c=(n(13),n(2)),r=n(4),l=n.n(r),m=(n(18),n(1));var u=function(){var e=Object(c.f)(),t=Object(a.useState)(),n=Object(o.a)(t,2),s=n[0],i=n[1],r=Object(a.useState)(),u=Object(o.a)(r,2),d=u[0],h=u[1];return null!=localStorage.getItem("token")&&e.push("/dashboard"),Object(m.jsxs)("div",{id:"loginform",children:[Object(m.jsx)("h2",{id:"headerTitle",style:{color:"#000"},children:"Login Form"}),Object(m.jsxs)("div",{class:"row",children:[Object(m.jsx)("label",{children:"Username"}),Object(m.jsx)("input",{type:"text",placeholder:"Enter your username",value:s,onChange:function(e){i(e.target.value)}})]}),Object(m.jsxs)("div",{class:"row",children:[Object(m.jsx)("label",{children:"Password"}),Object(m.jsx)("input",{type:"password",placeholder:"Enter your password",value:d,onChange:function(e){h(e.target.value)}})]}),Object(m.jsx)("div",{id:"button",class:"row",children:Object(m.jsx)("button",{onClick:function(){var t;if("John"===s&&"12345"===d)localStorage.setItem("token","John"),l.a.fire({title:"Success!",icon:"success",showClass:{popup:"animate__animated animate__fadeInDown"},html:"Redirecting to dashboard in <b></b>",hideClass:{popup:"animate__animated animate__fadeOutUp"},timer:3e3,didOpen:function(){t=setInterval((function(){var e=l.a.getContent();if(e){var t=e.querySelector("b");t&&(t.textContent=l.a.getTimerLeft()/1e3)}}),100)},willClose:function(){clearInterval(t)}}).then((function(e){e.dismiss,l.a.DismissReason.timer})),setTimeout((function(){e.push("/dashboard")}),3e3);else if("MICKY"===s&&"98765"===d){var n;localStorage.setItem("token","MICKY"),l.a.fire({title:"Success!",icon:"success",showClass:{popup:"animate__animated animate__fadeInDown"},html:"Redirecting to dashboard in <b></b>",hideClass:{popup:"animate__animated animate__fadeOutUp"},timer:3e3,didOpen:function(){n=setInterval((function(){var e=l.a.getContent();if(e){var t=e.querySelector("b");t&&(t.textContent=l.a.getTimerLeft()/1e3)}}),100)},willClose:function(){clearInterval(n)}}).then((function(e){e.dismiss,l.a.DismissReason.timer})),setTimeout((function(){e.push("/dashboard")}),3e3)}else l.a.fire({title:"Oops!",icon:"error",showClass:{popup:"animate__animated animate__fadeInDown"},html:"<b>It looks like you entered incorrect credentials</b>",hideClass:{popup:"animate__animated animate__fadeOutUp"},timer:3e3})},children:"Sign In"})})]})};var d=function(){var e=Object(c.f)(),t=Object(a.useState)(),n=Object(o.a)(t,2),s=(n[0],n[1],Object(a.useState)()),i=Object(o.a)(s,2);return i[0],i[1],null!=localStorage.getItem("token")&&e.push("/dashboard"),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("title",{children:"Github_repo"}),Object(m.jsx)("header",{className:"App-header",children:Object(m.jsx)(u,{})})]})},h=n(14),p=n.n(h),f=n(15),b=n.n(f),j=n(32),g=n.n(j);function O(){var e=Object(a.useRef)(null),t=Object(a.useState)([]),n=Object(o.a)(t,2),s=n[0],i=n[1];return Object(a.useEffect)((function(){b.a.get("https://api.github.com/repositories/19438/issues").then((function(t){for(var n=t.data,a=[],i=[],o=0;o<n.length;o++)a.push(g()(n[o].created_at).format("DD MMM, YYYY,hh:mm")),i.push(n[o].comments);var c=Object(h.arrayMax)(i),r=p.a.chart(e.current,{chart:{type:"column"},plotOptions:{column:{animation:{duration:1500}}},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{enabled:!1}}}]},title:{text:"Github repo stats"},subtitle:{text:"Note: Only displaying active issues (at least 1 comment)"},xAxis:{categories:a,crosshair:!0},yAxis:{min:1,max:c,title:{text:"Issues & comments"}},tooltip:{headerFormat:'<span style="font-size:10px">{point.key}</span><table>',pointFormat:'<tr><td style="color:{series.color};padding:0">{series.name}: </td><td style="padding:0"><b>{point.y}</b></td></tr>',footerFormat:"</table>",shared:!0,useHTML:!0},credits:{enabled:!1},series:s});s.length>0?r.hideLoading():r.showLoading()})).catch((function(e){return console.log(e)}))}),[s]),Object(a.useEffect)((function(){setTimeout((function(){b.a.get("https://api.github.com/repositories/19438/issues").then((function(e){for(var t=e.data,n=[],a=[],s=[],o=0;o<t.length;o++)t[o].comments>=1&&t[o].comments<5&&n.push({name:t[o].user.login,y:t[o].comments}),t[o].comments>=5&&t[o].comments<10&&a.push({name:t[o].user.login,y:t[o].comments}),t[o].comments>=10&&s.push({name:t[o].user.login,y:t[o].comments});i([{name:"Active issues (atleast than 1 comment)",data:n,color:"#2ecc71"},{name:"Very active issues (more than 5 comments)",data:a,color:"orange"},{name:"Hyper active issues (more than 10 comments)",data:s,color:"red"}])})).catch((function(e){return console.log(e)}))}),1e3)}),[]),Object(m.jsx)("div",{ref:e,style:{animationDuration:"2s",animationDelay:"0.9s",width:"75%"},class:"animate__animated animate__fadeIn"})}function _(){var e=Object(a.useRef)(null),t=Object(a.useState)([]),n=Object(o.a)(t,2),s=n[0],i=n[1];return Object(a.useEffect)((function(){setTimeout((function(){b.a.get("https://api.github.com/repositories/19438/issues").then((function(e){for(var t=e.data,n=[],a=0;a<t.length;a++)t[a].comments>=1&&t[a].comments<5&&n.push({name:"IssueID:"+t[a].number,y:t[a].comments}),i([{name:"Comments",data:n}])})).catch((function(e){return console.log(e)}))}),100)}),[]),Object(a.useEffect)((function(){p.a.chart(e.current,{chart:{backgroundColor:"#5a36e8",type:"pie"},title:{verticalAlign:"middle",floating:!0,style:{color:"#fff",fontSize:"0px"}},credits:{enabled:!1},plotOptions:{pie:{animation:{duration:1e3},dataLabels:{color:"#fff",fontFamily:"monospace",format:"{point.name}: {point.percentage:.1f} %"},innerSize:"0%"}},series:s})}),[s]),Object(m.jsx)("div",{ref:e,class:"animate__animated animate__fadeIn"})}var x=function(){var e,t=Object(c.f)();return null==localStorage.getItem("token")&&(l.a.fire({title:"Oops!",icon:"error",showClass:{popup:"animate__animated animate__fadeInDown"},html:"<b>Unauthorized access detected</b>",hideClass:{popup:"animate__animated animate__fadeOutUp"},timer:1e3}),setTimeout((function(){t.push("/")}),1e3)),"John"===localStorage.getItem("token")?e=Object(m.jsx)(O,{}):"MICKY"===localStorage.getItem("token")&&(e=Object(m.jsx)(_,{})),Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("header",{className:"App-header",children:[Object(m.jsxs)("h1",{style:{padding:20,fontFamily:"monospace"},class:"animate__animated animate__fadeInLeftBig",children:["Welcome ",localStorage.getItem("token")]}),e,Object(m.jsx)("div",{id:"button",class:"row",style:{width:"150px"},children:Object(m.jsx)("button",{class:"animate__animated animate__fadeIn",style:{animationDelay:"2s"},onClick:function(){l.a.mixin({customClass:{confirmButton:"btn btn-success",cancelButton:"btn btn-danger"},buttonsStyling:!0}).fire({title:"Are you sure?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",reverseButtons:!0}).then((function(e){e.isConfirmed&&(localStorage.removeItem("token"),l.a.fire({title:"Logged out",icon:"success",showClass:{popup:"animate__animated animate__fadeInDown"},html:"<b>See you next time!</b>",hideClass:{popup:"animate__animated animate__fadeOutUp"},timer:1e3}),setTimeout((function(){t.push("/")}),1e3))}))},children:"Sign Out"})})]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))},y=(n(64),n(11));i.a.render(Object(m.jsx)(y.a,{children:Object(m.jsxs)(c.c,{children:[Object(m.jsx)(c.a,{exact:!0,path:"/",children:Object(m.jsx)(d,{})}),Object(m.jsx)(c.a,{path:"/dashboard",children:Object(m.jsx)(x,{})})]})}),document.getElementById("root")),v()}},[[65,1,2]]]);
//# sourceMappingURL=main.a886117c.chunk.js.map