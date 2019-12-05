(this["webpackJsonpparcel-tracker"]=this["webpackJsonpparcel-tracker"]||[]).push([[0],{100:function(e,t,a){e.exports=a(288)},105:function(e,t,a){},288:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(97),c=a.n(l),s=(a(105),a(53)),o=a(15),i=a(16),u=a(18),p=a(17),m=a(19),h=function(){return n.a.createElement("header",null,n.a.createElement("div",{className:"wrapper header"},n.a.createElement("h2",{className:"header__logo"},"Sparta")))},d=function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"wrapper"},"\xa9 Serhii Tyshchenko, 2019"))},f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={query:""},a.handleChange=function(e){a.setState({query:e.target.value})},a.validateInput=function(){return a.state.query.length>14},a.handleSubmit=function(e){e.preventDefault(),!0===a.validateInput?(a.props.addParcel(a.state.query),a.setState({query:""})):alert("Empty query!")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"search"},n.a.createElement("form",{className:"search__form",onSubmit:this.handleSubmit},n.a.createElement("input",{className:"search__input",value:this.state.query,type:"text",name:"",placeholder:"Enter parcel number",onChange:this.handleChange,pattern:"^\\d{14}",title:"14 numbers"}),n.a.createElement("button",{className:"search__btn"},"Track")),n.a.createElement("div",{style:{flexBasis:"100%",textAlign:"center"}},n.a.createElement("small",null,"try 20450182437180")))}}]),t}(r.Component),v=a(98),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={title:a.props.parcel.title||"unknown",color:a.props.parcel.color||"#fff",displayColorPicker:!1},a.handleTitleChange=function(e){a.setState({title:e.target.value})},a.handleKeyDown=function(e){"Enter"===e.key&&a.props.editParcel(a.props.parcel.number,"title",e.target.value)},a.handleColorChange=function(e){var t=Object.values(e.hex).join(""),r=a.props.parcel.number;a.setState({color:t}),a.props.editParcel(r,"color",t)},a.handleClick=function(){a.setState({displayColorPicker:!a.state.displayColorPicker})},a.handleClose=function(){a.setState({displayColorPicker:!1})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.parcel,t=e.number,a=e.status,r=e.date,l=e.cityRecipient,c=e.citySender,s=this.state.title,o=this.state.color;return n.a.createElement("li",{className:"parcels__item parcel",style:{backgroundColor:o}},n.a.createElement("div",{className:"parcel__header"},n.a.createElement("input",{type:"text",value:this.state.title,className:"parcel__title",onChange:this.handleTitleChange,onKeyDown:this.handleKeyDown,onBlur:this.props.editParcel.bind(this,t,"title",s)}),n.a.createElement("div",{className:"parcel__controls"},n.a.createElement("button",{className:"parcel__btn",onClick:this.handleClick},"color",this.state.displayColorPicker?n.a.createElement(v.GithubPicker,{color:this.state.color,onChange:this.handleColorChange}):null),n.a.createElement("button",{onClick:this.props.removeParcel.bind(this,t),title:"Remove parcel",className:"parcel__btn parcel__remove"},"remove"))),n.a.createElement("div",{className:"parcel__details"},n.a.createElement("h3",{className:"parcel__number"},t),n.a.createElement("div",{className:"parcel__status"},r,n.a.createElement("br",null),a,n.a.createElement("br",null),c," - ",l)))}}]),t}(r.Component),b=function(e){var t=e.parcels,a=e.getParcelStatus,r=e.editParcel,l=e.removeParcel,c=e.setParcelColor;return n.a.createElement("div",{className:"parcels"},n.a.createElement("ul",{className:"parcels__list"},t.map((function(e){return n.a.createElement(y,{parcel:e,key:e.number,getParcelStatus:a,editParcel:r,removeParcel:l,setParcelColor:c})}))))},E=a(99),g=a.n(E),P=function(e){return g.a.post("https://api.novaposhta.ua/v2.0/json/",{apiKey:"",modelName:"TrackingDocument",calledMethod:"getStatusDocuments",methodProperties:{Documents:[{DocumentNumber:e,Phone:""}]}}).then((function(e){return function(e){var t=e.data.data[0];return{number:t.Number,citySender:t.CitySender,cityRecipient:t.CityRecipient,payer:t.PayerType,status:t.Status,date:t.ActualDeliveryDate||(new Date).toLocaleString()}}(e)}))},S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={parcels:[]},a.addParcel=function(e){a.state.parcels.filter((function(t){return t.number===e})).length>0?alert("Parcel already added!"):P(e).then((function(e){var t=e;t.title="untitled",t.color="white",a.setState({parcels:[].concat(Object(s.a)(a.state.parcels),[t])})})).catch((function(e){return console.log(e)}))},a.removeParcel=function(e){a.setState({parcels:Object(s.a)(a.state.parcels.filter((function(t){return t.number!==e})))})},a.editParcel=function(e,t,r){a.setState({parcels:a.state.parcels.map((function(a){return a.number===e&&(a[t]=r),a}))})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState(localStorage.getItem("parcelList")?JSON.parse(localStorage.getItem("parcelList")):{parcels:[]})}},{key:"componentDidUpdate",value:function(){var e;e=this.state,localStorage.setItem("parcelList",JSON.stringify(e))}},{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,null),n.a.createElement("main",{className:"wrapper"},n.a.createElement(f,{addParcel:this.addParcel}),n.a.createElement(b,{getParcelStatus:this.getParcelStatus,removeParcel:this.removeParcel,editParcel:this.editParcel,parcels:this.state.parcels})),n.a.createElement(d,null))}}]),t}(r.Component);c.a.render(n.a.createElement(S,null),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.b2f41bca.chunk.js.map