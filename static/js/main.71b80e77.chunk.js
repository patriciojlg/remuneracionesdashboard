(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{109:function(e,a,t){e.exports=t(214)},114:function(e,a,t){},214:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),o=t.n(l),i=(t(114),t(281)),c=t(100),s=t(268),d=t(282),m=t(261),u=t(264),p=t(266),g=t(216),b=t(267),h=t(215),E=t(90),f=t.n(E),v=Object(m.a)((function(e){return{root:{marginBottom:"20px",flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function C(){var e=v();return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{position:"static"},r.a.createElement(p.a,null,r.a.createElement(h.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(f.a,null)),r.a.createElement(g.a,{variant:"h6",className:e.title},"Dashboard - Remuneraciones"),r.a.createElement(b.a,{color:"inherit"},"Menu"))))}var x=t(21),k={labels:["Red","Green","Yellow"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]};function y(){return r.a.createElement("div",null,r.a.createElement(x.Doughnut,{data:k}))}var B={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio"],datasets:[{label:"% D\xedas trabajados",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]};function w(){return r.a.createElement("div",null,r.a.createElement(x.Bar,{data:B,width:100,height:50,options:{maintainAspectRatio:!0}}))}var N=Object(m.a)((function(e){return{root:{height:"300px !important"}}})),S={labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio"],datasets:[{label:"Licencias m\xe9dicas",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,59,80,81,56,55,40]},{label:"Viaticos",fill:!1,lineTension:.1,backgroundColor:"orange",borderColor:"orange",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"orange",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"orange",pointHoverBorderColor:"orange",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,22,80,81,56,35,40].reverse()},{label:"Horas extras",fill:!1,lineTension:.1,backgroundColor:"blue",borderColor:"blue",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"blue",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"blue",pointHoverBorderColor:"blue",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[65,30,59,56,81,53,40].reverse()}]};function O(){var e=N();return r.a.createElement("div",null,r.a.createElement("h2",null,"Ejemplo hist\xf3rico"),r.a.createElement(x.Line,{className:e.root,width:100,height:20,data:S}))}var j=t(269),H=t(270),R=t(101),F=t(271),P=Object(m.a)((function(e){return{content:{position:"relative",padding:2*e.spacing(1),"&:last-child":{paddingBottom:2*e.spacing(1)}},wrapCard:{display:"block",width:"100%"},icon:{boxShadow:"none",color:"white"},footer:{color:"gray"},statUp:{fontSize:"17px",color:"green"},statDown:{fontSize:"17px",color:"red"},values:{textAlign:"left"},iconFloat:{position:"absolute",right:"15px",top:"50%",marginTop:"-20px",transform:"rotate(-5deg)"},lightText:{fontWeight:"bold",textAlign:"left",color:"gray"}}})),D=function(e){var a=e.type,t=e.title,n=e.value,l=e.icon,o=e.colorIcon,i=e.lastMonth,c=void 0===i?0:i,d=P(),m=null,u=null,p=r.a.createElement(s.a,{item:!0,className:"fill"===a?d.iconFloat:null},r.a.createElement(h.a,{className:d.icon,"aria-label":t,style:{backgroundColor:o}},l));return l&&("fill"===a?u=p:m=p),r.a.createElement(R.a,{className:d.wrapCard},r.a.createElement(j.a,{style:"fill"===a?{backgroundColor:"white"}:null},r.a.createElement(H.a,{className:d.content},r.a.createElement(s.a,{container:!0,alignItems:"center",direction:"row",justify:"flex-start"},m,r.a.createElement(s.a,{item:!0},r.a.createElement("div",{className:"fill"===a?"pr-1":"px-1"},r.a.createElement(g.a,{variant:"caption",className:"fill"===a?d.lightText:null},t),r.a.createElement(g.a,{variant:"h6",className:"fill"===a?d.values:null},"$",n))),u)),r.a.createElement(F.a,{className:d.footer},r.a.createElement("a",{size:"small"}," ",r.a.createElement("span",{className:n>=c?d.statUp:d.statDown},function(e,a){if(a<=e){var t=100*(e-a)/a;return"".concat("\u2191"," ").concat(t.toFixed(1),"%")}var n=100*(a-e)/a;return"".concat("\u2193"," ").concat(n.toFixed(1),"%")}(n,c))," Respecto al mes anterior"))))},I=t(95),M=t.n(I),W=t(98),A=t.n(W),T=t(97),J=t.n(T),z=t(96),G=t.n(z),L=t(30),q=t(91),K=t(3),U=t(9),$=t(277),V=t(278),Y=t(274),Q=t(276),X=t(272),Z=t(283),_=t(273),ee=t(286),ae=t(284),te=t(287),ne=t(279),re=t(280),le=t(93),oe=t.n(le),ie=t(94),ce=t.n(ie);function se(e,a,t,n,r){return{name:e,calories:a,fat:t,carbs:n,protein:r}}var de=[se("Cupcake",305,3.7,67,4.3),se("Donut",452,25,51,4.9),se("Eclair",262,16,24,6),se("Frozen yoghurt",159,6,24,4),se("Gingerbread",356,16,49,3.9),se("Honeycomb",408,3.2,87,6.5),se("Ice cream sandwich",237,9,37,4.3),se("Jelly Bean",375,0,94,0),se("KitKat",518,26,65,7),se("Lollipop",392,.2,98,0),se("Marshmallow",318,0,81,2),se("Nougat",360,19,9,37),se("Oreo",437,18,63,4)];function me(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var ue=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert (100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat (g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs (g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein (g)"}];function pe(e){var a=e.classes,t=e.onSelectAllClick,n=e.order,l=e.orderBy,o=e.numSelected,i=e.rowCount,c=e.onRequestSort;return r.a.createElement(X.a,null,r.a.createElement(_.a,null,r.a.createElement(Y.a,{padding:"checkbox"},r.a.createElement(ae.a,{indeterminate:o>0&&o<i,checked:i>0&&o===i,onChange:t,inputProps:{"aria-label":"select all desserts"}})),ue.map((function(e){return r.a.createElement(Y.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:l===e.id&&n},r.a.createElement(ee.a,{active:l===e.id,direction:l===e.id?n:"asc",onClick:(t=e.id,function(e){c(e,t)})},e.label,l===e.id?r.a.createElement("span",{className:a.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var t}))))}var ge=Object(m.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(U.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),be=function(e){var a=ge(),t=e.numSelected;return r.a.createElement(p.a,{className:Object(K.a)(a.root,Object(q.a)({},a.highlight,t>0))},t>0?r.a.createElement(g.a,{className:a.title,color:"inherit",variant:"subtitle1",component:"div"},t," selected"):r.a.createElement(g.a,{className:a.title,variant:"h6",id:"tableTitle",component:"div"},"Trabla ejemplo"),t>0?r.a.createElement(te.a,{title:"Borrar"},r.a.createElement(h.a,{"aria-label":"Borrar"},r.a.createElement(oe.a,null))):r.a.createElement(te.a,{title:"Lista de filtros"},r.a.createElement(h.a,{"aria-label":"filter list"},r.a.createElement(ce.a,null))))},he=Object(m.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function Ee(){var e=he(),a=r.a.useState("asc"),t=Object(L.a)(a,2),n=t[0],l=t[1],o=r.a.useState("calories"),i=Object(L.a)(o,2),s=i[0],d=i[1],m=r.a.useState([]),u=Object(L.a)(m,2),p=u[0],g=u[1],b=r.a.useState(0),h=Object(L.a)(b,2),E=h[0],f=h[1],v=r.a.useState(!1),C=Object(L.a)(v,2),x=C[0],k=C[1],y=r.a.useState(5),B=Object(L.a)(y,2),w=B[0],N=B[1],S=w-Math.min(w,de.length-E*w);return r.a.createElement("div",{className:e.root},r.a.createElement(c.a,{className:e.paper},r.a.createElement(be,{numSelected:p.length}),r.a.createElement(Q.a,null,r.a.createElement($.a,{className:e.table,"aria-labelledby":"tableTitle",size:x?"small":"medium","aria-label":"enhanced table"},r.a.createElement(pe,{classes:e,numSelected:p.length,order:n,orderBy:s,onSelectAllClick:function(e){if(e.target.checked){var a=de.map((function(e){return e.name}));g(a)}else g([])},onRequestSort:function(e,a){l(s===a&&"asc"===n?"desc":"asc"),d(a)},rowCount:de.length}),r.a.createElement(V.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(de,function(e,a){return"desc"===e?function(e,t){return me(e,t,a)}:function(e,t){return-me(e,t,a)}}(n,s)).slice(E*w,E*w+w).map((function(e,a){var t,n=(t=e.name,-1!==p.indexOf(t)),l="enhanced-table-checkbox-".concat(a);return r.a.createElement(_.a,{hover:!0,onClick:function(a){return function(e,a){var t=p.indexOf(a),n=[];-1===t?n=n.concat(p,a):0===t?n=n.concat(p.slice(1)):t===p.length-1?n=n.concat(p.slice(0,-1)):t>0&&(n=n.concat(p.slice(0,t),p.slice(t+1))),g(n)}(0,e.name)},role:"checkbox","aria-checked":n,tabIndex:-1,key:e.name,selected:n},r.a.createElement(Y.a,{padding:"checkbox"},r.a.createElement(ae.a,{checked:n,inputProps:{"aria-labelledby":l}})),r.a.createElement(Y.a,{component:"th",id:l,scope:"row",padding:"none"},e.name),r.a.createElement(Y.a,{align:"right"},e.calories),r.a.createElement(Y.a,{align:"right"},e.fat),r.a.createElement(Y.a,{align:"right"},e.carbs),r.a.createElement(Y.a,{align:"right"},e.protein))})),S>0&&r.a.createElement(_.a,{style:{height:(x?33:53)*S}},r.a.createElement(Y.a,{colSpan:6}))))),r.a.createElement(Z.a,{rowsPerPageOptions:[5,10,25],component:"div",count:de.length,rowsPerPage:w,page:E,onChangePage:function(e,a){f(a)},onChangeRowsPerPage:function(e){N(parseInt(e.target.value,10)),f(0)}})),r.a.createElement(ne.a,{control:r.a.createElement(re.a,{checked:x,onChange:function(e){k(e.target.checked)}}),label:"Comprimir"}))}var fe=Object(m.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var ve=function(){var e=fe();return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null),r.a.createElement(C,null),r.a.createElement(d.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(s.a,{container:!0,spacing:3},r.a.createElement(s.a,{item:!0,xs:6,sm:3},r.a.createElement(D,{type:"fill",title:"Indicador 1 stat",value:25e4,lastMonth:26e4,icon:r.a.createElement(M.a,null),colorIcon:"#9c27b0"})),r.a.createElement(s.a,{item:!0,xs:6,sm:3},r.a.createElement(D,{type:"fill",title:"Indicador 2 stat",value:25e4,lastMonth:26e4,icon:r.a.createElement(G.a,null),colorIcon:"#f44336"})),r.a.createElement(s.a,{item:!0,xs:6,sm:3},r.a.createElement(D,{type:"fill",title:"Indicador 3 stat",value:25e4,lastMonth:26e4,icon:r.a.createElement(J.a,null),colorIcon:"rgb(63, 81, 181)"})),r.a.createElement(s.a,{item:!0,xs:6,sm:3},r.a.createElement(D,{type:"fill",title:"Indicador 4 stat",value:25e4,lastMonth:26e4,icon:r.a.createElement(A.a,null),colorIcon:"#ffd740"})),r.a.createElement(s.a,{item:!0,xs:12},r.a.createElement(c.a,{className:e.paper},r.a.createElement(O,null))),r.a.createElement(s.a,{item:!0,xs:12,sm:4},r.a.createElement(c.a,{style:{height:"300px"},className:e.paper},r.a.createElement(w,null))),r.a.createElement(s.a,{item:!0,xs:12,sm:8},r.a.createElement(Ee,null)),r.a.createElement(s.a,{item:!0,xs:6,sm:3},r.a.createElement(c.a,{className:e.paper},"            ",r.a.createElement(y,null))),r.a.createElement(s.a,{item:!0,xs:6,sm:3},r.a.createElement(c.a,{className:e.paper},"xs=6 sm=3")),r.a.createElement(s.a,{item:!0,xs:6,sm:3},r.a.createElement(c.a,{className:e.paper},"xs=6 sm=3")),r.a.createElement(s.a,{item:!0,xs:6,sm:3},r.a.createElement(c.a,{className:e.paper},"xs=6 sm=3"))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[109,1,2]]]);
//# sourceMappingURL=main.71b80e77.chunk.js.map