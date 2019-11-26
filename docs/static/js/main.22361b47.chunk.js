(this["webpackJsonpparcel-tracker"]=this["webpackJsonpparcel-tracker"]||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),l=(a(24),a(7)),o=a(1),i=a(2),u=a(4),p=a(3),m=a(5),h=a(18),b=a.n(h),f=(a(42),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h2",{className:"header__logo"},"SPARTA (Simple Parcel Tracking App)"))}}]),t}(n.Component)),d=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,"\xa9 Serhii Tyshchenko, 2019")}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={query:""},a.handleChange=function(e){a.setState({query:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.submitForm(a.state.query),a.setState({query:""})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"search"},r.a.createElement("form",{className:"search__form",onSubmit:this.handleSubmit},r.a.createElement("input",{className:"search__input",value:this.state.query,type:"text",name:"",placeholder:"Enter parcel number",onChange:this.handleChange,pattern:"^\\d{14}",title:"14 numbers"}),r.a.createElement("button",{className:"search__btn"},"Search")))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.parcel;return r.a.createElement("li",{className:"parcels__item parcel"},r.a.createElement("div",{onClick:this.props.getParcelStatus.bind(this,e),className:"parcel__number",title:"Click to get parcel status"},this.props.parcel),r.a.createElement("button",{onClick:this.props.removeParcel.bind(this,e),title:"Remove parcel",className:"parcel__remove"},"\xd7"))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"parcels"},r.a.createElement("ul",{className:"parcels__list"},this.props.parcels.map((function(t){return r.a.createElement(y,{parcel:t,key:t,getParcelStatus:e.props.getParcelStatus,removeParcel:e.props.removeParcel})}))))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.parcelStatus,t=e.number,a=e.citySender,n=e.cityRecipient,c=e.payer,s=e.status;return r.a.createElement("div",{className:"results"},this.props.parcelStatus&&r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("div",null,a,"-",n),r.a.createElement("p",null,"Payer: ",c),r.a.createElement("p",null,"Status: ",s)))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={parcels:["20450182437180","20450123167687"],responseText:""},a.getData=function(e){return b.a.post("https://api.novaposhta.ua/v2.0/json/",{apiKey:"",modelName:"TrackingDocument",calledMethod:"getStatusDocuments",methodProperties:{Documents:[{DocumentNumber:e,Phone:""}]}})},a.formatResponse=function(e){var t=e.data.data[0];return{number:t.Number,citySender:t.CitySender,cityRecipient:t.CityRecipient,payer:t.PayerType,status:t.Status}},a.searchParcel=function(e){a.state.parcels.includes(e)?alert("Parcel already added!"):a.getData(e).then((function(t){a.setState({parcels:[].concat(Object(l.a)(a.state.parcels),[e]),responseText:a.formatResponse(t)})})).catch((function(e){return console.log(e)}))},a.removeParcel=function(e){a.setState({parcels:Object(l.a)(a.state.parcels.filter((function(t){return t!==e})))})},a.getParcelStatus=function(e){a.getData(e).then((function(e){a.setState({responseText:a.formatResponse(e)})})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("parcelList")?this.setState(JSON.parse(localStorage.getItem("parcelList"))):this.setState({responseText:""}),this.setState({responseText:""})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("parcelList",JSON.stringify(this.state))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement("main",null,r.a.createElement(v,{submitForm:this.searchParcel}),r.a.createElement(O,{getParcelStatus:this.getParcelStatus,removeParcel:this.removeParcel,parcels:this.state.parcels}),r.a.createElement(j,{parcelStatus:this.state.responseText})),r.a.createElement(d,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.22361b47.chunk.js.map