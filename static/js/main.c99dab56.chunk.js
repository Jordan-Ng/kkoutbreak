(this.webpackJsonpkkoutbreak=this.webpackJsonpkkoutbreak||[]).push([[0],{21:function(e,t,a){e.exports=a(48)},26:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),l=a.n(c),o=(a(26),a(3)),i=a(20),s=a.n(i),u=a(8),d=a.n(u),b=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(o.a)(l,2),u=(i[0],i[1]),b=Object(n.useState)([]),p=Object(o.a)(b,2),m=(p[0],p[1]),y=Object(n.useState)(""),v=Object(o.a)(y,2),h=(v[0],v[1]);return Object(n.useEffect)((function(){d.a.get("https://kkoutbreak.herokuapp.com/info").then((function(e){return c(e.data)}))}),[]),Object(n.useEffect)((function(){var e=a.map((function(e){return e.data})).reverse(),t=a.map((function(e){return e.label})).reverse();m([e[0],t[0]]),h(e[1]),u(!0);var n=document.getElementById("mychart"),r={labels:a.map((function(e){return e.label})),datasets:[{data:a.map((function(e){return e.data})),label:"Kota Kinabalu",backgroundColor:"purple",borderColor:"lightblue",fill:!1,lineTension:.1},{data:a.map((function(e){return e.cluster_data})),label:"Kepayan Cluster",backgroundColor:"yellow",borderColor:"purple",fill:!1,lineTension:.1}]};new s.a(n,{type:"line",data:r,options:{title:{display:!0,text:"Covid-19 Cases in Kota Kinabalu"},scales:{xAxes:[{scaleLabel:{display:!0,labelString:"Timeline"}}],yAxes:[{scaleLabel:{display:!0,labelString:"Cases"}}]}}})}),[a]),r.a.createElement("div",{style:{width:"80vw",height:"80vh",marginTop:"1vh",border:"2px solid lightGray",background:"white",borderRadius:"10px"}},r.a.createElement("canvas",{id:"mychart",style:{width:"100%",height:"100%"}}))},p=a(50),m=a(51),y=a(52),v=a(9),h=a.n(v),f=function(e){var t=e.recent,a=e.yesterday,n=e.kepayan;return r.a.createElement("div",{style:{marginTop:"1vh",width:"100vw",display:"flex"}},r.a.createElement("div",{style:{width:"20vw"},onClick:function(){window.open("https://sabahoutbreak.com","_blank")}},r.a.createElement(p.a,{body:!0,inverse:!0,style:{backgroundColor:"#333",borderColor:"#333"}},r.a.createElement(m.a,{style:{textAlign:"center"}},"Recent KK Case Update"),r.a.createElement(y.a,{style:{textAlign:"center"}},t[0]),r.a.createElement(y.a,{style:{textAlign:"center"}},"(as of ",t[1],") "))),r.a.createElement("div",{style:{width:"20vw"},onClick:function(){var e=h()(t[1])._i.split("/"),a={Jan:["1","januari"],Feb:["2","februari"],Mar:["3","mac"],Apr:["4","april"],May:["5","mei"],Jun:["6","jun"],Jul:["7","julai"],Aug:["8","ogos"],Sep:["9","september"],Oct:["10","oktober"],Nov:["11","november"],Dec:["12","disember"]};window.open("https://kpkesihatan.com/".concat(e[2],"/").concat(a["".concat(e[1])][0],"/").concat(e[0],"/kenyataan-akhbar-kpk-").concat(e[0],"-").concat(a["".concat(e[1])][1],"-").concat(e[2],"-situasi-semasa-jangkitan-penyakit-coronavirus-2019-covid-19-di-malaysia/"),"_blank")}},r.a.createElement(p.a,{body:!0,inverse:!0,color:"primary"},r.a.createElement(m.a,{style:{textAlign:"center"}}," Kepayan Cluster"),r.a.createElement(y.a,{style:{textAlign:"center"}},n),r.a.createElement(y.a,{style:{textAlign:"center"}},"(as of ",t[1],")"))),r.a.createElement("div",{style:{width:"20vw"}},r.a.createElement(p.a,{body:!0,inverse:!0,color:"info"},r.a.createElement(m.a,{style:{textAlign:"center"}}," Local KK Cases"),r.a.createElement(y.a,{style:{textAlign:"center"}},parseInt(t[0])-parseInt(n)),r.a.createElement(y.a,{style:{textAlign:"center"}},"(as of ",t[1],")"))),r.a.createElement("div",{style:{width:"20vw"}},r.a.createElement(p.a,{body:!0,inverse:!0,color:parseInt(t[0])-parseInt(a)>0?"danger":"success"},r.a.createElement(m.a,{style:{textAlign:"center"}},"Progress Update"),r.a.createElement(y.a,{style:{textAlign:"center"}},parseInt(t[0])-parseInt(a)>0?"".concat(parseInt(t[0])-parseInt(a),"\u2191"):"".concat(parseInt(a)-parseInt(t[0]),"\u2193")," "),r.a.createElement(y.a,{style:{textAlign:"center"}},"(",a,"\u2192",t[0],")"))))};var g=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=(t[0],t[1],Object(n.useState)([])),c=Object(o.a)(a,2),l=c[0],i=c[1],s=Object(n.useState)([]),u=Object(o.a)(s,2),p=u[0],m=u[1],y=Object(n.useState)(""),v=Object(o.a)(y,2),h=v[0],g=v[1],k=Object(n.useState)(""),E=Object(o.a)(k,2),w=E[0],j=E[1];return Object(n.useEffect)((function(){d.a.get("https://kkoutbreak.herokuapp.com/info").then((function(e){i(e.data)}))}),[]),Object(n.useEffect)((function(){var e=l.map((function(e){return e.data})).reverse(),t=l.map((function(e){return e.label})).reverse(),a=l.map((function(e){return e.cluster_data})).reverse();m([e[0],t[0]]),g(e[1]),j(a[0])}),[l]),r.a.createElement("div",{style:{overflowX:"hidden",overflowY:"hidden",paddingLeft:"10vw",background:"lightBlue",height:"100vh"}},r.a.createElement(f,{recent:p,yesterday:h,kepayan:w}),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.c99dab56.chunk.js.map