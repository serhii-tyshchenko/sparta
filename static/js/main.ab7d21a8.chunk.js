(this["webpackJsonpparcel-tracker"]=this["webpackJsonpparcel-tracker"]||[]).push([[0],{223:function(e,t,a){},224:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(84),n=a.n(c),s=(a(95),a(49)),l=a(13),i=a(14),o=a(16),u=a(15),p=a(3),h=function(){return Object(p.jsx)("header",{children:Object(p.jsx)("div",{className:"wrapper header",children:Object(p.jsx)("h2",{className:"header__logo",children:"Simple Parcel Tracking App"})})})},d=function(){return Object(p.jsx)("footer",{children:Object(p.jsx)("div",{className:"wrapper",children:"\xa9 Serhii Tyshchenko, 2019"})})},j=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={query:""},e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query?(e.props.addParcel(e.state.query),e.setState({query:""})):alert("Empty query!")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"search",children:[Object(p.jsxs)("form",{className:"search__form",onSubmit:this.handleSubmit,children:[Object(p.jsx)("input",{className:"search__input",value:this.state.query,type:"text",name:"",placeholder:"Enter parcel number",onChange:this.handleChange,pattern:"^\\d{14}",title:"14 numbers"}),Object(p.jsx)("button",{className:"search__btn",children:"Track"})]}),Object(p.jsx)("div",{style:{flexBasis:"100%",textAlign:"center"},children:Object(p.jsx)("small",{children:"try 20450182437180"})})]})}}]),a}(r.Component),b=a(90),m=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={title:e.props.parcel.title||"unknown",color:e.props.parcel.color||"#fff",displayColorPicker:!1},e.handleTitleChange=function(t){e.setState({title:t.target.value})},e.handleKeyDown=function(t){"Enter"===t.key&&e.props.editParcel(e.props.parcel.number,"title",t.target.value)},e.handleColorChange=function(t){var a=Object.values(t.hex).join(""),r=e.props.parcel.number;e.setState({color:a}),e.props.editParcel(r,"color",a)},e.handleClick=function(){e.setState({displayColorPicker:!e.state.displayColorPicker})},e.handleClose=function(){e.setState({displayColorPicker:!1})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.parcel,t=e.number,a=e.status,r=e.date,c=e.cityRecipient,n=e.citySender,s=this.state.title,l=this.state.color;return Object(p.jsxs)("li",{className:"parcels__item parcel",style:{backgroundColor:l},children:[Object(p.jsxs)("div",{className:"parcel__header",children:[Object(p.jsx)("input",{type:"text",value:this.state.title,className:"parcel__title",onChange:this.handleTitleChange,onKeyDown:this.handleKeyDown,onBlur:this.props.editParcel.bind(this,t,"title",s)}),Object(p.jsxs)("div",{className:"parcel__controls",children:[Object(p.jsx)("button",{className:"parcel__btn icon-color-adjust",onClick:this.handleClick,title:"Change parcel color",children:this.state.displayColorPicker?Object(p.jsx)(b.a,{color:this.state.color,onChange:this.handleColorChange,triangle:"top-right"}):null}),Object(p.jsx)("button",{onClick:this.props.getParcelStatus.bind(this,t),title:"Update parcel status",className:"parcel__btn parcel__update icon-arrows-cw"}),Object(p.jsx)("button",{onClick:this.props.removeParcel.bind(this,t),title:"Remove parcel",className:"parcel__btn parcel__remove icon-trash-empty"})]})]}),Object(p.jsxs)("div",{className:"parcel__details",children:[Object(p.jsx)("h3",{className:"parcel__number",children:t}),n?Object(p.jsxs)("div",{className:"parcel__route icon-location",children:[n," - ",c]}):null,Object(p.jsx)("div",{className:"parcel__date icon-calendar",children:r}),Object(p.jsx)("div",{className:"parcel__status",children:a})]})]})}}]),a}(r.Component),f=function(e){var t=e.parcels,a=e.getParcelStatus,r=e.editParcel,c=e.removeParcel,n=e.setParcelColor;return Object(p.jsx)("div",{className:"parcels",children:Object(p.jsx)("ul",{className:"parcels__list",children:t.map((function(e){return Object(p.jsx)(m,{parcel:e,getParcelStatus:a,editParcel:r,removeParcel:c,setParcelColor:n},e.number)}))})})},v=a(89),O=a.n(v),y=function(e){return O.a.post("https://api.novaposhta.ua/v2.0/json/",{apiKey:"",modelName:"TrackingDocument",calledMethod:"getStatusDocuments",methodProperties:{Documents:[{DocumentNumber:e,Phone:""}]}}).then((function(e){return function(e){var t=e.data.data[0];return{number:t.Number,citySender:t.CitySender,cityRecipient:t.CityRecipient,payer:t.PayerType,status:t.Status,date:t.ActualDeliveryDate||(new Date).toLocaleString()}}(e)})).catch((function(e){return console.log(e)}))},x=(a(223),function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={parcels:[]},e.numberExists=function(e,t){return e.some((function(e){return e.number===t}))},e.addParcel=function(t){e.numberExists(e.state.parcels,t)?alert("Parcel already added!"):y(t).then((function(t){var a=t;a.title="untitled",a.color="white",e.setState({parcels:[].concat(Object(s.a)(e.state.parcels),[a])})})).catch((function(e){return console.log(e)}))},e.removeParcel=function(t){e.setState({parcels:Object(s.a)(e.state.parcels.filter((function(e){return e.number!==t})))})},e.editParcel=function(t,a,r){e.setState({parcels:e.state.parcels.map((function(e){return e.number===t&&(e[a]=r),e}))})},e.getParcelStatus=function(t){y(t).then((function(a){e.setState({parcels:e.state.parcels.map((function(e){return e.number===t&&(e.status=a.status),e}))})}))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.setState(localStorage.getItem("parcelList")?JSON.parse(localStorage.getItem("parcelList")):{parcels:[]})}},{key:"componentDidUpdate",value:function(){var e;e=this.state,localStorage.setItem("parcelList",JSON.stringify(e))}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(h,{}),Object(p.jsxs)("main",{className:"wrapper",children:[Object(p.jsx)(j,{addParcel:this.addParcel}),Object(p.jsx)(f,{getParcelStatus:this.getParcelStatus,removeParcel:this.removeParcel,editParcel:this.editParcel,parcels:this.state.parcels})]}),Object(p.jsx)(d,{})]})}}]),a}(r.Component));n.a.render(Object(p.jsx)(x,{}),document.getElementById("root"))},95:function(e,t,a){}},[[224,1,2]]]);
//# sourceMappingURL=main.ab7d21a8.chunk.js.map