import{_ as Ae}from"./AppSelect-BMOayDJH.js";import{_ as ml}from"./AppTextarea-CxVEot-I.js";import{_ as G}from"./AppTextField-BgucSyDo.js";import{r as m,o as L,f as j,e as l,b as e,q as A,aX as X,V as je,aB as V,k as r,d as w,s as se,c as he,F as Q,h as qe,t as cl,ag as Te,a4 as P,ai as ue,b8 as He,N as D,R as me,n as z,cm as Je,cX as pl,cY as Vl,W as ce,cd as _e,d9 as fl,H as Oe,aO as bl,al as de,bU as vl,aj as Cl,bE as hl,ao as xl,aU as oe,P as yl,da as wl,b1 as gl,bQ as Fl,ap as kl,a3 as Tl,M as te,c3 as Rl,cO as Al,w as be,cP as Ne,cC as Be,ae as _l,aF as Le,cw as Sl,d8 as Pl,aA as Il,cR as Nl,ak as Bl,d1 as Ue,cj as Ll,v as Ul,b3 as Dl,y as zl,a5 as De,a6 as ze}from"./index-dBA1zMG5.js";import{a as we,b as ge,c as Fe,V as El}from"./VExpansionPanels-DS2qlm77.js";import{V as W,r as ve,e as Ml}from"./validators-C0wCcFzj.js";import{V as R,a as s}from"./VRow-D45xqIqE.js";import{a as ke,V as ae}from"./VRadioGroup-ClKVgcHF.js";import{V as Se}from"./VDivider-D2TWaKPO.js";import{_ as $l}from"./AppDateTimePicker-BmjY1Jk-.js";import{V as Re,m as Wl,a as ie,b as jl}from"./VWindowItem-D2SmtYFP.js";import{a as Ee,m as ql,V as Hl}from"./VChip-BmJuwzrZ.js";import{V as Me}from"./VCardText-BsVWOkBT.js";import{V as Jl}from"./VCard-B9paxT_X.js";import{V as Z}from"./VCheckbox-88zyDhy_.js";import{u as Ol,a as Gl,m as Yl,b as Kl}from"./VSelect-Di6YJAA5.js";import{V as $e,m as Ql}from"./VTextField-BQDXeYdm.js";import{u as Xl,m as Zl,h as eo}from"./filter-CAieXG7d.js";import{u as lo,V as oo,a as We}from"./VList-C1J2xlNQ.js";import{V as to}from"./VListSubheader-CaRPt1cb.js";import{V as ao}from"./VCheckboxBtn-BDH07wdx.js";import{V as so}from"./VAvatar-B4TsNWG-.js";import{_ as no}from"./AppCardCode-BELpaKwE.js";import"./autofocus-CPeAqCuA.js";import"./VCounter-BfawRsoI.js";import"./VField-CEC06eGZ.js";import"./VSelectionControl-BKsSj0Fu.js";import"./vue3-perfect-scrollbar-D0dgj83j.js";const ro={class:"me-1"},io={class:"d-flex gap-4"},uo={__name:"DemoFormLayoutCollapsible",setup(o){const b=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii"],i=m("home"),u=m("standard"),d=m("credit-debit-card"),f=m(0),C=[{radioValue:"credit-debit-card",radioLabel:"Credit/Debit/ATM Card",icon:"tabler-credit-card"},{radioValue:"cash-on-delivery",radioLabel:"Cash On Delivery",icon:"tabler-help"}];return(t,a)=>{const n=G,x=ml,v=Ae;return L(),j(El,{modelValue:r(f),"onUpdate:modelValue":a[6]||(a[6]=h=>V(f)?f.value=h:null)},{default:l(()=>[e(we,null,{default:l(()=>[e(ge,null,{default:l(()=>[...a[7]||(a[7]=[A("Delivery Address",-1)])]),_:1}),e(Fe,null,{default:l(()=>[e(W,{class:"pt-4 pb-2",onSubmit:X(()=>{},["prevent"])},{default:l(()=>[e(R,null,{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Full Name",placeholder:"John Doe"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Phone No",type:"number",placeholder:"+1 123 456 7890"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(x,{label:"Address",placeholder:"1234 Main St, New York, NY 10001, USA",rows:"3"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Pincode",placeholder:"123456",type:"number"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Landmark",placeholder:"Near City Mall"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"City",placeholder:"New York"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(v,{items:b,label:"State",placeholder:"Select State"})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(je,{class:"mb-3"},{default:l(()=>[...a[8]||(a[8]=[A(" Address Type ",-1)])]),_:1}),e(ke,{modelValue:r(i),"onUpdate:modelValue":a[0]||(a[0]=h=>V(i)?i.value=h:null),inline:""},{default:l(()=>[w("div",null,[e(ae,{label:"Home (All day delivery)",value:"home",class:"me-3"}),e(ae,{label:"Office (Delivery between 10 AM - 5 PM)",value:"office"})])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(we,null,{default:l(()=>[e(ge,null,{default:l(()=>[...a[9]||(a[9]=[A("Delivery Options",-1)])]),_:1}),e(Fe,null,{default:l(()=>[e(ke,{modelValue:r(u),"onUpdate:modelValue":a[4]||(a[4]=h=>V(u)?u.value=h:null),class:"delivery-options pt-4 pb-2"},{default:l(()=>[w("div",{class:se(["delivery-option d-flex rounded-t",r(u)==="standard"?"active":""]),onClick:a[1]||(a[1]=h=>u.value="standard")},[e(ae,{inline:"",value:"standard",class:"mt-n4"}),a[10]||(a[10]=w("div",{class:"w-100"},[w("div",{class:"d-flex justify-space-between"},[w("h6",{class:"text-base font-weight-medium"}," Standard 3-5 Days "),w("h6",{class:"text-base font-weight-medium"}," Free ")]),w("span",{class:"text-sm"},"Friday, 15 Nov - Monday, 18 Nov")],-1))],2),w("div",{class:se(["delivery-option d-flex",r(u)==="express"?"active":""]),onClick:a[2]||(a[2]=h=>u.value="express")},[e(ae,{inline:"",class:"mt-n4",value:"express"}),a[11]||(a[11]=w("div",{class:"w-100"},[w("div",{class:"d-flex justify-space-between"},[w("h5",{class:"text-base font-weight-medium"}," Express "),w("h6",{class:"text-base font-weight-medium"}," $5.00 ")]),w("span",{class:"text-sm"},"Friday, 15 Nov - Sunday, 17 Nov")],-1))],2),w("div",{class:se(["delivery-option d-flex rounded-b",r(u)==="overnight"?"active":""]),onClick:a[3]||(a[3]=h=>u.value="overnight")},[e(ae,{inline:"",class:"mt-n4",value:"overnight"}),a[12]||(a[12]=w("div",{class:"w-100"},[w("div",{class:"d-flex justify-space-between"},[w("h6",{class:"text-base font-weight-medium"}," Overnight "),w("h6",{class:"text-base font-weight-medium"}," $10.00 ")]),w("span",{class:"text-sm"},"Friday, 15 Nov - Saturday, 16 Nov")],-1))],2)]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(we,null,{default:l(()=>[e(ge,null,{default:l(()=>[...a[13]||(a[13]=[A("Payment Method",-1)])]),_:1}),e(Fe,null,{default:l(()=>[e(R,null,{default:l(()=>[e(s,{md:"6",cols:"12"},{default:l(()=>[e(W,{class:"pt-4 pb-2"},{default:l(()=>[w("div",null,[e(ke,{modelValue:r(d),"onUpdate:modelValue":a[5]||(a[5]=h=>V(d)?d.value=h:null),inline:""},{default:l(()=>[w("div",null,[(L(),he(Q,null,qe(C,h=>e(ae,{key:h.radioValue,value:h.radioValue,class:"me-3"},{label:l(()=>[w("span",ro,cl(h.radioLabel),1),e(Te,{size:"18",icon:h.icon},null,8,["icon"])]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"])]),r(d)==="credit-debit-card"?(L(),j(R,{key:0},{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(n,{label:"Card Number",type:"number",placeholder:"1234 5678 9012 3456"})]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(n,{label:"Name",placeholder:"john doe"})]),_:1}),e(s,{cols:"6",md:"3"},{default:l(()=>[e(n,{label:"Expiry Date",placeholder:"MM/YY"})]),_:1}),e(s,{cols:"6",md:"3"},{default:l(()=>[e(n,{label:"CVV Code",type:"number",max:"3",placeholder:"123"})]),_:1})]),_:1})):(L(),j(R,{key:1},{default:l(()=>[e(s,null,{default:l(()=>[...a[14]||(a[14]=[w("div",{class:"text-high-emphasis"}," Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. ",-1)])]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1}),e(Se,{class:"my-5"}),w("div",io,[e(P,null,{default:l(()=>[...a[15]||(a[15]=[A("Place Order",-1)])]),_:1}),e(P,{color:"secondary",variant:"tonal"},{default:l(()=>[...a[16]||(a[16]=[A(" Cancel ",-1)])]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},Pe=Symbol.for("vuetify:v-tabs"),Ge=ce({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},..._e(fl({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Ce=ue()({name:"VTab",props:Ge(),setup(o,b){let{slots:i,attrs:u}=b;const{textColorClasses:d,textColorStyles:f}=He(()=>o.sliderColor),C=m(),t=m(),a=D(()=>o.direction==="horizontal"),n=D(()=>C.value?.group?.isSelected.value??!1);function x(v){let{value:h}=v;if(h){const J=C.value?.$el.parentElement?.querySelector(".v-tab--selected .v-tab__slider"),O=t.value;if(!J||!O)return;const Y=getComputedStyle(J).color,M=J.getBoundingClientRect(),T=O.getBoundingClientRect(),k=a.value?"x":"y",q=a.value?"X":"Y",$=a.value?"right":"bottom",B=a.value?"width":"height",pe=M[k],c=T[k],_=pe>c?M[$]-T[$]:M[k]-T[k],H=Math.sign(_)>0?a.value?"right":"bottom":Math.sign(_)<0?a.value?"left":"top":"center",y=(Math.abs(_)+(Math.sign(_)<0?M[B]:T[B]))/Math.max(M[B],T[B])||0,ee=M[B]/T[B]||0,le=1.5;pl(O,{backgroundColor:[Y,"currentcolor"],transform:[`translate${q}(${_}px) scale${q}(${ee})`,`translate${q}(${_/le}px) scale${q}(${(y-1)/le+1})`,"none"],transformOrigin:Array(3).fill(H)},{duration:225,easing:Vl})}}return me(()=>{const v=P.filterProps(o);return e(P,z({symbol:Pe,ref:C,class:["v-tab",o.class],style:o.style,tabindex:n.value?0:-1,role:"tab","aria-selected":String(n.value),active:!1},v,u,{block:o.fixed,maxWidth:o.fixed?300:void 0,"onGroup:selected":x}),{...i,default:()=>w(Q,null,[i.default?.()??o.text,!o.hideSlider&&w("div",{ref:t,class:se(["v-tab__slider",d.value]),style:Oe(f.value)},null)])})}),Je({},C)}}),mo=ce({..._e(Wl(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VTabsWindow"),co=ue()({name:"VTabsWindow",props:mo(),emits:{"update:modelValue":o=>!0},setup(o,b){let{slots:i}=b;const u=bl(Pe,null),d=de(o,"modelValue"),f=D({get(){return d.value!=null||!u?d.value:u.items.value.find(C=>u.selected.value.includes(C.id))?.value},set(C){d.value=C}});return me(()=>{const C=Re.filterProps(o);return e(Re,z({_as:"VTabsWindow"},C,{modelValue:f.value,"onUpdate:modelValue":t=>f.value=t,class:["v-tabs-window",o.class],style:o.style,mandatory:!1,touch:!1}),i)}),{}}}),po=ce({...jl()},"VTabsWindowItem"),Vo=ue()({name:"VTabsWindowItem",props:po(),setup(o,b){let{slots:i}=b;return me(()=>{const u=ie.filterProps(o);return e(ie,z({_as:"VTabsWindowItem"},u,{class:["v-tabs-window-item",o.class],style:o.style}),i)}),{}}});function fo(o){return o?o.map(b=>wl(b)?b:{text:b,value:b}):[]}const bo=ce({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...kl(Ge(),["spaced"]),...ql({mandatory:"force",selectedClass:"v-tab-item--selected"}),...Fl(),...gl()},"VTabs"),vo=ue()({name:"VTabs",props:bo(),emits:{"update:modelValue":o=>!0},setup(o,b){let{attrs:i,slots:u}=b;const d=de(o,"modelValue"),f=D(()=>fo(o.items)),{densityClasses:C}=vl(o),{backgroundColorClasses:t,backgroundColorStyles:a}=Cl(()=>o.bgColor),{scopeId:n}=hl();return xl({VTab:{color:oe(()=>o.color),direction:oe(()=>o.direction),stacked:oe(()=>o.stacked),fixed:oe(()=>o.fixedTabs),sliderColor:oe(()=>o.sliderColor),hideSlider:oe(()=>o.hideSlider)}}),me(()=>{const x=Ee.filterProps(o),v=!!(u.window||o.items.length>0);return w(Q,null,[e(Ee,z(x,{modelValue:d.value,"onUpdate:modelValue":h=>d.value=h,class:["v-tabs",`v-tabs--${o.direction}`,`v-tabs--align-tabs-${o.alignTabs}`,{"v-tabs--fixed-tabs":o.fixedTabs,"v-tabs--grow":o.grow,"v-tabs--stacked":o.stacked},C.value,t.value,o.class],style:[{"--v-tabs-height":yl(o.height)},a.value,o.style],role:"tablist",symbol:Pe},n,i),{default:()=>[u.default?.()??f.value.map(h=>u.tab?.({item:h})??e(Ce,z(h,{key:h.text,value:h.value,spaced:o.spaced}),{default:u[`tab.${h.value}`]?()=>u[`tab.${h.value}`]?.({item:h}):void 0}))]}),v&&e(co,z({modelValue:d.value,"onUpdate:modelValue":h=>d.value=h,key:"tabs-window"},n),{default:()=>[f.value.map(h=>u.item?.({item:h})??e(Vo,{value:h.value},{default:()=>u[`item.${h.value}`]?.({item:h})})),u.window?.()]})])}),{}}}),Co={__name:"DemoFormLayoutFormWithTabs",setup(o){const b=m("personal-info"),i=m(""),u=m(""),d=m(),f=m(""),C=m(),t=["USA","Canada","UK","Denmark","Germany","Iceland","Israel","Mexico"],a=["English","German","French","Spanish","Portuguese","Russian","Korean"],n=m(""),x=m(""),v=m(""),h=m(""),J=m(""),O=m(""),Y=m(""),M=m(""),T=m(""),k=m(""),q=m([]),$=m(!1),B=m(!1);return(pe,c)=>{const _=G,H=Ae,Ve=$l;return L(),he(Q,null,[e(vo,{modelValue:r(b),"onUpdate:modelValue":c[0]||(c[0]=y=>V(b)?b.value=y:null)},{default:l(()=>[e(Ce,{value:"personal-info"},{default:l(()=>[...c[20]||(c[20]=[A(" Personal Info ",-1)])]),_:1}),e(Ce,{value:"account-details"},{default:l(()=>[...c[21]||(c[21]=[A(" Account Details ",-1)])]),_:1}),e(Ce,{value:"social-links"},{default:l(()=>[...c[22]||(c[22]=[A(" Social Links ",-1)])]),_:1})]),_:1},8,["modelValue"]),e(Jl,{flat:""},{default:l(()=>[e(Me,null,{default:l(()=>[e(Re,{modelValue:r(b),"onUpdate:modelValue":c[19]||(c[19]=y=>V(b)?b.value=y:null),class:"disable-tab-transition"},{default:l(()=>[e(ie,{value:"personal-info"},{default:l(()=>[e(W,{class:"mt-2"},{default:l(()=>[e(R,null,{default:l(()=>[e(s,{md:"6",cols:"12"},{default:l(()=>[e(_,{modelValue:r(i),"onUpdate:modelValue":c[1]||(c[1]=y=>V(i)?i.value=y:null),label:"First name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(s,{md:"6",cols:"12"},{default:l(()=>[e(_,{modelValue:r(u),"onUpdate:modelValue":c[2]||(c[2]=y=>V(u)?u.value=y:null),label:"Last name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(H,{modelValue:r(d),"onUpdate:modelValue":c[3]||(c[3]=y=>V(d)?d.value=y:null),items:t,label:"Country",placeholder:"Select Country"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(H,{modelValue:r(q),"onUpdate:modelValue":c[4]||(c[4]=y=>V(q)?q.value=y:null),items:a,multiple:"",chips:"",clearable:"",label:"Language",placeholder:"Select Language"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(Ve,{modelValue:r(f),"onUpdate:modelValue":c[5]||(c[5]=y=>V(f)?f.value=y:null),label:"Birth Date",placeholder:"Select Birth Date"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:r(C),"onUpdate:modelValue":c[6]||(c[6]=y=>V(C)?C.value=y:null),type:"number",label:"Phone No.",placeholder:"+1 123 456 7890"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(ie,{value:"account-details"},{default:l(()=>[e(W,{class:"mt-2"},{default:l(()=>[e(R,null,{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:r(n),"onUpdate:modelValue":c[7]||(c[7]=y=>V(n)?n.value=y:null),label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:r(x),"onUpdate:modelValue":c[8]||(c[8]=y=>V(x)?x.value=y:null),label:"Email",suffix:"@example.com",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:r(v),"onUpdate:modelValue":c[9]||(c[9]=y=>V(v)?v.value=y:null),label:"Password",placeholder:"············",type:r($)?"text":"password",autocomplete:"password","append-inner-icon":r($)?"tabler-eye-off":"tabler-eye","onClick:appendInner":c[10]||(c[10]=y=>$.value=!r($))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:r(h),"onUpdate:modelValue":c[11]||(c[11]=y=>V(h)?h.value=y:null),label:"Confirm Password",autocomplete:"confirm-password",placeholder:"············",type:r(B)?"text":"password","append-inner-icon":r(B)?"tabler-eye-off":"tabler-eye","onClick:appendInner":c[12]||(c[12]=y=>B.value=!r(B))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(ie,{value:"social-links"},{default:l(()=>[e(W,{class:"mt-2"},{default:l(()=>[e(R,null,{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:r(J),"onUpdate:modelValue":c[13]||(c[13]=y=>V(J)?J.value=y:null),label:"Twitter",placeholder:"https://twitter.com/username"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:r(O),"onUpdate:modelValue":c[14]||(c[14]=y=>V(O)?O.value=y:null),label:"Facebook",placeholder:"https://facebook.com/username"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:r(Y),"onUpdate:modelValue":c[15]||(c[15]=y=>V(Y)?Y.value=y:null),label:"Google+",placeholder:"https://plus.google.com/username"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:r(M),"onUpdate:modelValue":c[16]||(c[16]=y=>V(M)?M.value=y:null),label:"LinkedIn",placeholder:"https://linkedin.com/username"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:r(T),"onUpdate:modelValue":c[17]||(c[17]=y=>V(T)?T.value=y:null),label:"Instagram",placeholder:"https://instagram.com/username"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(_,{modelValue:r(k),"onUpdate:modelValue":c[18]||(c[18]=y=>V(k)?k.value=y:null),label:"Quora",placeholder:"https://quora.com/username"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(Se),e(Me,{class:"d-flex gap-4"},{default:l(()=>[e(P,null,{default:l(()=>[...c[23]||(c[23]=[A("Submit",-1)])]),_:1}),e(P,{color:"secondary",variant:"tonal"},{default:l(()=>[...c[24]||(c[24]=[A(" Cancel ",-1)])]),_:1})]),_:1})]),_:1})],64)}}},ho={__name:"DemoFormLayoutFormValidation",setup(o){const b=m(""),i=m(""),u=["Item 1","Item 2","Item 3","Item 4"],d=m(),f=m(!1),C=m();return(t,a)=>{const n=G,x=Ae;return L(),j(W,{ref_key:"form",ref:C,"lazy-validation":""},{default:l(()=>[e(R,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(n,{modelValue:r(b),"onUpdate:modelValue":a[0]||(a[0]=v=>V(b)?b.value=v:null),rules:["requiredValidator"in t?t.requiredValidator:r(ve)],label:"Name",placeholder:"John Doe",required:""},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(n,{modelValue:r(i),"onUpdate:modelValue":a[1]||(a[1]=v=>V(i)?i.value=v:null),rules:["emailValidator"in t?t.emailValidator:r(Ml),"requiredValidator"in t?t.requiredValidator:r(ve)],label:"E-mail",placeholder:"johndoe@email.com",required:""},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(x,{modelValue:r(d),"onUpdate:modelValue":a[2]||(a[2]=v=>V(d)?d.value=v:null),items:u,rules:["requiredValidator"in t?t.requiredValidator:r(ve)],placeholder:"Select an Item",label:"Item",name:"select",require:""},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(Z,{modelValue:r(f),"onUpdate:modelValue":a[3]||(a[3]=v=>V(f)?f.value=v:null),rules:["requiredValidator"in t?t.requiredValidator:r(ve)],label:"Do you agree?",required:""},null,8,["modelValue","rules"])]),_:1}),e(s,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(P,{color:"success",onClick:a[4]||(a[4]=v=>r(C)?.validate())},{default:l(()=>[...a[7]||(a[7]=[A(" Validate ",-1)])]),_:1}),e(P,{color:"error",onClick:a[5]||(a[5]=v=>r(C)?.reset())},{default:l(()=>[...a[8]||(a[8]=[A(" Reset Form ",-1)])]),_:1}),e(P,{color:"warning",onClick:a[6]||(a[6]=v=>r(C)?.resetValidation())},{default:l(()=>[...a[9]||(a[9]=[A(" Reset Validation ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},512)}}},xo=ce({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...Zl({filterKeys:["title"]}),...Yl(),..._e(Ql({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"])},"VAutocomplete"),yo=ue()({name:"VAutocomplete",props:xo(),emits:{"update:focused":o=>!0,"update:search":o=>!0,"update:modelValue":o=>!0,"update:menu":o=>!0},setup(o,b){let{slots:i}=b;const{t:u}=Tl(),d=m(),f=te(!1),C=te(!0),t=te(!1),a=m(),n=m(),x=te(-1),v=te(null),{items:h,transformIn:J,transformOut:O}=lo(o),{textColorClasses:Y,textColorStyles:M}=He(()=>d.value?.color),T=de(o,"search",""),k=de(o,"modelValue",[],p=>J(p===null?[null]:Rl(p)),p=>{const S=O(p);return o.multiple?S:S[0]??null}),q=D(()=>typeof o.counterValue=="function"?o.counterValue(k.value):typeof o.counterValue=="number"?o.counterValue:k.value.length),$=Al(o),{filteredItems:B,getMatches:pe}=Xl(o,h,()=>v.value??(C.value?"":T.value)),c=D(()=>o.hideSelected&&v.value===null?B.value.filter(p=>!k.value.some(S=>S.value===p.value)):B.value),_=D(()=>!!(o.chips||i.chip)),H=D(()=>_.value||!!i.selection),Ve=D(()=>k.value.map(p=>p.props.value)),y=D(()=>(o.autoSelectFirst===!0||o.autoSelectFirst==="exact"&&T.value===c.value[0]?.title)&&c.value.length>0&&!C.value&&!t.value),ee=D(()=>o.hideNoData&&!c.value.length||$.isReadonly.value||$.isDisabled.value),le=de(o,"menu"),I=D({get:()=>le.value,set:p=>{le.value&&!p&&a.value?.ΨopenChildren.size||p&&ee.value||(le.value=p)}}),{menuId:Ye,ariaExpanded:Ke,ariaControls:Qe,ariaLabel:Ie}=Ol(o,I),xe=m(),Xe=Gl(xe,d);function Ze(p){o.openOnClear&&(I.value=!0),T.value=""}function el(){ee.value||(I.value=!0)}function ll(p){ee.value||(f.value&&(p.preventDefault(),p.stopPropagation()),I.value=!I.value)}function ol(p){(Ne(p)||p.key==="Backspace")&&d.value?.focus()}function tl(p){if($.isReadonly.value)return;const S=d.value?.selectionStart,N=k.value.length;if(["Enter","ArrowDown","ArrowUp"].includes(p.key)&&p.preventDefault(),["Enter","ArrowDown"].includes(p.key)&&(I.value=!0),["Escape"].includes(p.key)&&(I.value=!1),y.value&&["Enter","Tab"].includes(p.key)&&!k.value.some(g=>{let{value:F}=g;return F===c.value[0].value})&&K(c.value[0]),p.key==="ArrowDown"&&y.value&&xe.value?.focus("next"),["Backspace","Delete"].includes(p.key)){if(!o.multiple&&H.value&&k.value.length>0&&!T.value)return K(k.value[0],!1);if(~x.value){p.preventDefault();const g=x.value;K(k.value[x.value],!1),x.value=g>=N-1?N-2:g}else p.key==="Backspace"&&!T.value&&(x.value=N-1);return}if(o.multiple)if(p.key==="ArrowLeft"){if(x.value<0&&S&&S>0)return;const g=x.value>-1?x.value-1:N-1;if(k.value[g])x.value=g;else{const F=T.value?.length??null;x.value=-1,d.value?.setSelectionRange(F,F)}}else if(p.key==="ArrowRight"){if(x.value<0)return;const g=x.value+1;k.value[g]?x.value=g:(x.value=-1,d.value?.setSelectionRange(0,0))}else~x.value&&Ne(p)&&(x.value=-1)}function al(p){if(Be(d.value,":autofill")||Be(d.value,":-webkit-autofill")){const S=h.value.find(N=>N.title===p.target.value);S&&K(S)}}function sl(){o.eager&&n.value?.calculateVisibleItems()}function nl(){f.value&&(C.value=!0,d.value?.focus()),v.value=null}function rl(p){f.value=!0,setTimeout(()=>{t.value=!0})}function dl(p){t.value=!1}function il(p){(p==null||p===""&&!o.multiple&&!H.value)&&(k.value=[])}const ye=te(!1);function K(p){let S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!p||p.props.disabled))if(o.multiple){const N=k.value.findIndex(F=>(o.valueComparator||_l)(F.value,p.value)),g=S??!~N;if(~N){const F=g?[...k.value,p]:[...k.value];F.splice(N,1),k.value=F}else g&&(k.value=[...k.value,p]);o.clearOnSelect&&(T.value="")}else{const N=S!==!1;k.value=N?[p]:[],v.value=C.value?"":T.value??"",T.value=N&&!H.value?p.title:"",Le(()=>{I.value=!1,C.value=!0})}}return be(f,(p,S)=>{p!==S&&(p?(ye.value=!0,T.value=o.multiple||H.value?"":String(k.value.at(-1)?.props.title??""),C.value=!0,Le(()=>ye.value=!1)):(!o.multiple&&T.value==null&&(k.value=[]),I.value=!1,!C.value&&T.value&&(v.value=T.value),T.value="",x.value=-1))}),be(T,p=>{!f.value||ye.value||(p&&(I.value=!0),C.value=!p)}),be(I,p=>{if(!o.hideSelected&&p&&k.value.length&&C.value){const S=c.value.findIndex(N=>k.value.some(g=>N.value===g.value));Sl&&window.requestAnimationFrame(()=>{S>=0&&n.value?.scrollToIndex(S)})}p&&(v.value=null)}),be(h,(p,S)=>{I.value||f.value&&!S.length&&p.length&&(I.value=!0)}),me(()=>{const p=!!(!o.hideNoData||c.value.length||i["prepend-item"]||i["append-item"]||i["no-data"]),S=k.value.length>0,N=$e.filterProps(o);return e($e,z({ref:d},N,{modelValue:T.value,"onUpdate:modelValue":[g=>T.value=g,il],focused:f.value,"onUpdate:focused":g=>f.value=g,validationValue:k.externalValue,counterValue:q.value,dirty:S,onChange:al,class:["v-autocomplete",`v-autocomplete--${o.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":I.value,"v-autocomplete--chips":!!o.chips,"v-autocomplete--selection-slot":!!H.value,"v-autocomplete--selecting-index":x.value>-1},o.class],style:o.style,readonly:$.isReadonly.value,placeholder:S?void 0:o.placeholder,"onClick:clear":Ze,"onMousedown:control":el,onKeydown:tl,"aria-expanded":Ke.value,"aria-controls":Qe.value}),{...i,default:()=>w(Q,null,[e(Il,z({id:Ye.value,ref:a,modelValue:I.value,"onUpdate:modelValue":g=>I.value=g,activator:"parent",contentClass:"v-autocomplete__content",disabled:ee.value,eager:o.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,onAfterEnter:sl,onAfterLeave:nl},o.menuProps),{default:()=>[p&&e(oo,z({ref:xe,filterable:!0,selected:Ve.value,selectStrategy:o.multiple?"independent":"single-independent",onMousedown:g=>g.preventDefault(),onKeydown:ol,onFocusin:rl,onFocusout:dl,tabindex:"-1",selectable:!0,"aria-live":"polite",color:o.itemColor??o.color},Xe,o.listProps),{default:()=>[i["prepend-item"]?.(),!c.value.length&&!o.hideNoData&&(i["no-data"]?.()??e(We,{key:"no-data",title:u(o.noDataText)},null)),e(Kl,{ref:n,renderless:!0,items:c.value,itemKey:"value"},{default:g=>{let{item:F,index:U,itemRef:fe}=g;const ne=z(F.props,{ref:fe,key:F.value,active:y.value&&U===0?!0:void 0,onClick:()=>K(F,null)});return F.type==="divider"?i.divider?.({props:F.raw,index:U})??e(Se,z(F.props,{key:`divider-${U}`}),null):F.type==="subheader"?i.subheader?.({props:F.raw,index:U})??e(to,z(F.props,{key:`subheader-${U}`}),null):i.item?.({item:F,index:U,props:ne})??e(We,z(ne,{role:"option"}),{prepend:re=>{let{isSelected:E}=re;return w(Q,null,[o.multiple&&!o.hideSelected?e(ao,{key:F.value,modelValue:E,ripple:!1,tabindex:"-1",onClick:ul=>ul.preventDefault()},null):void 0,F.props.prependAvatar&&e(so,{image:F.props.prependAvatar},null),F.props.prependIcon&&e(Te,{icon:F.props.prependIcon},null)])},title:()=>C.value?F.title:eo("v-autocomplete",F.title,pe(F)?.title)})}}),i["append-item"]?.()]})]}),k.value.map((g,F)=>{function U(E){E.stopPropagation(),E.preventDefault(),K(g,!1)}const fe={"onClick:close":U,onKeydown(E){E.key!=="Enter"&&E.key!==" "||(E.preventDefault(),E.stopPropagation(),U(E))},onMousedown(E){E.preventDefault(),E.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},ne=_.value?!!i.chip:!!i.selection,re=ne?Nl(_.value?i.chip({item:g,index:F,props:fe}):i.selection({item:g,index:F})):void 0;if(!(ne&&!re))return w("div",{key:g.value,class:se(["v-autocomplete__selection",F===x.value&&["v-autocomplete__selection--selected",Y.value]]),style:Oe(F===x.value?M.value:{})},[_.value?i.chip?e(Bl,{key:"chip-defaults",defaults:{VChip:{closable:o.closableChips,size:"small",text:g.title}}},{default:()=>[re]}):e(Hl,z({key:"chip",closable:o.closableChips,size:"small",text:g.title,disabled:g.props.disabled},fe),null):re??w("span",{class:"v-autocomplete__selection-text"},[g.title,o.multiple&&F<k.value.length-1&&w("span",{class:"v-autocomplete__selection-comma"},[A(",")])])])})]),"append-inner":function(){for(var g=arguments.length,F=new Array(g),U=0;U<g;U++)F[U]=arguments[U];return w(Q,null,[i["append-inner"]?.(...F),o.menuIcon?e(Te,{class:"v-autocomplete__menu-icon",color:d.value?.fieldIconColor,icon:o.menuIcon,onMousedown:ll,onClick:Pl,"aria-label":Ie.value,title:Ie.value,tabindex:"-1"},null):void 0])}})}),Je({isFocused:f,isPristine:C,menu:I,search:T,filteredItems:B,select:K},d)}}),wo=Object.assign({name:"AppAutocomplete",inheritAttrs:!1},{__name:"AppAutocomplete",setup(o){const b=D(()=>{const d=Ue().id,f=Ll();return d?`app-autocomplete-${d}`:f}),i=D(()=>Ue().label);return(u,d)=>(L(),he("div",{class:se(["app-autocomplete flex-grow-1",u.$attrs.class])},[r(i)?(L(),j(je,{key:0,for:r(b),class:"mb-1 text-body-2",text:r(i)},null,8,["for","text"])):Ul("",!0),e(yo,De(ze({...u.$attrs,class:null,label:void 0,id:r(b),variant:"outlined",menuProps:{contentClass:["app-inner-list","app-autocomplete__content","v-autocomplete__content"]}})),Dl({_:2},[qe(u.$slots,(f,C)=>({name:C,fn:l(t=>[zl(u.$slots,C,De(ze(t||{})))])}))]),1040)],2))}}),go={__name:"DemoFormLayoutFormHint",setup(o){const b=m(""),i=m(""),u=m(),d=m(!1),f=["foo","bar","fizz","buzz"],C=m([]);return(t,a)=>{const n=G,x=wo;return L(),j(W,{onSubmit:X(()=>{},["prevent"])},{default:l(()=>[e(R,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(n,{modelValue:r(b),"onUpdate:modelValue":a[0]||(a[0]=v=>V(b)?b.value=v:null),label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(n,{modelValue:r(i),"onUpdate:modelValue":a[1]||(a[1]=v=>V(i)?i.value=v:null),label:"Email",type:"email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(n,{modelValue:r(u),"onUpdate:modelValue":a[2]||(a[2]=v=>V(u)?u.value=v:null),label:"Password",autocomplete:"on",type:"password","persistent-hint":"",placeholder:"············",hint:"Your password must be 8-20 characters long."},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(x,{modelValue:r(C),"onUpdate:modelValue":a[3]||(a[3]=v=>V(C)?C.value=v:null),items:f,chips:"",multiple:"",label:"Autocomplete",placeholder:"Select"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(Z,{modelValue:r(d),"onUpdate:modelValue":a[4]||(a[4]=v=>V(d)?d.value=v:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(P,{type:"submit"},{default:l(()=>[...a[5]||(a[5]=[A(" Submit ",-1)])]),_:1}),e(P,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[...a[6]||(a[6]=[A(" Reset ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})}}},Fo={__name:"DemoFormLayoutMultipleColumn",setup(o){const b=m(""),i=m(""),u=m(""),d=m(""),f=m(""),C=m(""),t=m(!1);return(a,n)=>{const x=G;return L(),j(W,{onSubmit:X(()=>{},["prevent"])},{default:l(()=>[e(R,null,{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(x,{modelValue:r(b),"onUpdate:modelValue":n[0]||(n[0]=v=>V(b)?b.value=v:null),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(x,{modelValue:r(i),"onUpdate:modelValue":n[1]||(n[1]=v=>V(i)?i.value=v:null),label:"Last Name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(x,{modelValue:r(C),"onUpdate:modelValue":n[2]||(n[2]=v=>V(C)?C.value=v:null),label:"Email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(x,{modelValue:r(u),"onUpdate:modelValue":n[3]||(n[3]=v=>V(u)?u.value=v:null),label:"City",placeholder:"New York"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(x,{modelValue:r(d),"onUpdate:modelValue":n[4]||(n[4]=v=>V(d)?d.value=v:null),label:"Country",placeholder:"United States"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(x,{modelValue:r(f),"onUpdate:modelValue":n[5]||(n[5]=v=>V(f)?f.value=v:null),label:"Company",placeholder:"Pixinvent"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(Z,{modelValue:r(t),"onUpdate:modelValue":n[6]||(n[6]=v=>V(t)?t.value=v:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(P,{type:"submit"},{default:l(()=>[...n[7]||(n[7]=[A(" Submit ",-1)])]),_:1}),e(P,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[...n[8]||(n[8]=[A(" Reset ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})}}},ko={__name:"DemoFormLayoutVerticalFormWithIcons",setup(o){const b=m(""),i=m(""),u=m(),d=m(),f=m(!1);return(C,t)=>{const a=G;return L(),j(W,{onSubmit:X(n=>({}),["prevent"])},{default:l(()=>[e(R,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(a,{modelValue:r(b),"onUpdate:modelValue":t[0]||(t[0]=n=>V(b)?b.value=n:null),"prepend-inner-icon":"tabler-user",label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(a,{modelValue:r(i),"onUpdate:modelValue":t[1]||(t[1]=n=>V(i)?i.value=n:null),"prepend-inner-icon":"tabler-mail",label:"Email",type:"email",placeholder:"johndoe@example.com"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(a,{modelValue:r(u),"onUpdate:modelValue":t[2]||(t[2]=n=>V(u)?u.value=n:null),"prepend-inner-icon":"tabler-device-mobile",label:"Mobile",placeholder:"+1 123 456 7890",type:"number"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(a,{modelValue:r(d),"onUpdate:modelValue":t[3]||(t[3]=n=>V(d)?d.value=n:null),"prepend-inner-icon":"tabler-lock",label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(Z,{modelValue:r(f),"onUpdate:modelValue":t[4]||(t[4]=n=>V(f)?f.value=n:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(P,{type:"submit",class:"me-2"},{default:l(()=>[...t[5]||(t[5]=[A(" Submit ",-1)])]),_:1}),e(P,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[...t[6]||(t[6]=[A(" Reset ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})}}},To={__name:"DemoFormLayoutVerticalForm",setup(o){const b=m(""),i=m(""),u=m(),d=m(),f=m(!1);return(C,t)=>{const a=G;return L(),j(W,{onSubmit:X(()=>{},["prevent"])},{default:l(()=>[e(R,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(a,{modelValue:r(b),"onUpdate:modelValue":t[0]||(t[0]=n=>V(b)?b.value=n:null),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(a,{modelValue:r(i),"onUpdate:modelValue":t[1]||(t[1]=n=>V(i)?i.value=n:null),label:"Email",type:"email",placeholder:"johndoe@example.com"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(a,{modelValue:r(u),"onUpdate:modelValue":t[2]||(t[2]=n=>V(u)?u.value=n:null),label:"Mobile",placeholder:"+1 123 456 7890",type:"number"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(a,{modelValue:r(d),"onUpdate:modelValue":t[3]||(t[3]=n=>V(d)?d.value=n:null),label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(Z,{modelValue:r(f),"onUpdate:modelValue":t[4]||(t[4]=n=>V(f)?f.value=n:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(s,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(P,{type:"submit"},{default:l(()=>[...t[5]||(t[5]=[A(" Submit ",-1)])]),_:1}),e(P,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[...t[6]||(t[6]=[A(" Reset ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})}}},Ro={__name:"DemoFormLayoutHorizontalFormWithIcons",setup(o){const b=m(""),i=m(""),u=m(),d=m(),f=m(!1);return(C,t)=>{const a=G;return L(),j(W,{onSubmit:X(()=>{},["prevent"])},{default:l(()=>[e(R,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(R,{"no-gutters":""},{default:l(()=>[e(s,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[5]||(t[5]=[w("label",{class:"v-label text-body-2 text-high-emphasis",for:"firstNameHorizontalIcons"},"First Name",-1)])]),_:1}),e(s,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"firstNameHorizontalIcons",modelValue:r(b),"onUpdate:modelValue":t[0]||(t[0]=n=>V(b)?b.value=n:null),"prepend-inner-icon":"tabler-user",placeholder:"John","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(R,{"no-gutters":""},{default:l(()=>[e(s,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[6]||(t[6]=[w("label",{class:"v-label text-body-2 text-high-emphasis",for:"emailHorizontalIcons"},"Email",-1)])]),_:1}),e(s,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"emailHorizontalIcons",modelValue:r(i),"onUpdate:modelValue":t[1]||(t[1]=n=>V(i)?i.value=n:null),"prepend-inner-icon":"tabler-mail",placeholder:"johndoe@email.com","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(R,{"no-gutters":""},{default:l(()=>[e(s,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[7]||(t[7]=[w("label",{class:"v-label text-body-2 text-high-emphasis",for:"mobileHorizontalIcons"},"Mobile",-1)])]),_:1}),e(s,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"mobileHorizontalIcons",modelValue:r(u),"onUpdate:modelValue":t[2]||(t[2]=n=>V(u)?u.value=n:null),type:"number","prepend-inner-icon":"tabler-device-mobile",placeholder:"+1 123 456 7890","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(R,{"no-gutters":""},{default:l(()=>[e(s,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[8]||(t[8]=[w("label",{class:"v-label text-body-2 text-high-emphasis",for:"passwordHorizontalIcons"},"Password",-1)])]),_:1}),e(s,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"passwordHorizontalIcons",modelValue:r(d),"onUpdate:modelValue":t[3]||(t[3]=n=>V(d)?d.value=n:null),"prepend-inner-icon":"tabler-lock",autocomplete:"on",type:"password",placeholder:"············","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(R,{"no-gutters":""},{default:l(()=>[e(s,{cols:"12",md:"3"}),e(s,{cols:"12",md:"9"},{default:l(()=>[e(Z,{modelValue:r(f),"onUpdate:modelValue":t[4]||(t[4]=n=>V(f)?f.value=n:null),label:"Remember me"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(R,{"no-gutters":""},{default:l(()=>[e(s,{cols:"12",md:"3"}),e(s,{cols:"12",md:"9"},{default:l(()=>[e(P,{type:"submit",class:"me-4"},{default:l(()=>[...t[9]||(t[9]=[A(" Submit ",-1)])]),_:1}),e(P,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[...t[10]||(t[10]=[A(" Reset ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},Ao={__name:"DemoFormLayoutHorizontalForm",setup(o){const b=m(""),i=m(""),u=m(),d=m(),f=m(!1);return(C,t)=>{const a=G;return L(),j(W,{onSubmit:X(()=>{},["prevent"])},{default:l(()=>[e(R,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(R,{"no-gutters":""},{default:l(()=>[e(s,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[5]||(t[5]=[w("label",{class:"v-label text-body-2 text-high-emphasis",for:"firstName"},"First Name",-1)])]),_:1}),e(s,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"firstName",modelValue:r(b),"onUpdate:modelValue":t[0]||(t[0]=n=>V(b)?b.value=n:null),placeholder:"John","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(R,{"no-gutters":""},{default:l(()=>[e(s,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[6]||(t[6]=[w("label",{class:"v-label text-body-2 text-high-emphasis",for:"email"},"Email",-1)])]),_:1}),e(s,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"email",modelValue:r(i),"onUpdate:modelValue":t[1]||(t[1]=n=>V(i)?i.value=n:null),placeholder:"johndoe@email.com","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(R,{"no-gutters":""},{default:l(()=>[e(s,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[7]||(t[7]=[w("label",{class:"v-label text-body-2 text-high-emphasis",for:"mobile"},"Mobile",-1)])]),_:1}),e(s,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"mobile",modelValue:r(u),"onUpdate:modelValue":t[2]||(t[2]=n=>V(u)?u.value=n:null),type:"number",placeholder:"+1 123 456 7890","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(R,{"no-gutters":""},{default:l(()=>[e(s,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[8]||(t[8]=[w("label",{class:"v-label text-body-2 text-high-emphasis",for:"password"},"Password",-1)])]),_:1}),e(s,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"password",modelValue:r(d),"onUpdate:modelValue":t[3]||(t[3]=n=>V(d)?d.value=n:null),autocomplete:"on",type:"password",placeholder:"············","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(R,{"no-gutters":""},{default:l(()=>[e(s,{cols:"12",md:"3"}),e(s,{cols:"12",md:"9"},{default:l(()=>[e(Z,{modelValue:r(f),"onUpdate:modelValue":t[4]||(t[4]=n=>V(f)?f.value=n:null),label:"Remember me"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(R,{"no-gutters":""},{default:l(()=>[e(s,{cols:"12",md:"3"}),e(s,{cols:"12",md:"9"},{default:l(()=>[e(P,{type:"submit",class:"me-4"},{default:l(()=>[...t[9]||(t[9]=[A(" Submit ",-1)])]),_:1}),e(P,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[...t[10]||(t[10]=[A(" Reset ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},_o={ts:`<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <AppTextField
          v-model="username"
          label="Username"
          placeholder="Johndoe"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          persistent-hint
          placeholder="············"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
          placeholder="Select"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)

const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- 👉 Username -->
        <AppTextField
          v-model="username"
          label="Username"
          placeholder="Johndoe"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Password -->
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          persistent-hint
          placeholder="············"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Autocomplete -->
        <AppAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
          placeholder="Select"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},So={ts:`<script lang="ts" setup>
import type { VForm } from 'vuetify/components/VForm'

const name = ref('')
const email = ref('')
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'] as const
const select = ref<typeof items[number]>()
const checkbox = ref(false)
const form = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          placeholder="John Doe"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          placeholder="johndoe@email.com"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          placeholder="Select an Item"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const name = ref('')
const email = ref('')

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]

const select = ref()
const checkbox = ref(false)
const form = ref()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          placeholder="John Doe"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          placeholder="johndoe@email.com"
          required
        />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          placeholder="Select an Item"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Po={ts:`<script lang="ts" setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref<number>()
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico']
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean'] as const
const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref<typeof languageList[number][]>([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="firstName"
                  label="First name"
                  placeholder="John"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="lastName"
                  label="Last name"
                  placeholder="Doe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                  placeholder="Select Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                  placeholder="Select Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppDateTimePicker
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="Select Birth Date"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                  placeholder="+1 123 456 7890"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="username"
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="twitterLink"
                  label="Twitter"
                  placeholder="https://twitter.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="facebookLink"
                  label="Facebook"
                  placeholder="https://facebook.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="googlePlusLink"
                  label="Google+"
                  placeholder="https://plus.google.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                  placeholder="https://linkedin.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="instagramLink"
                  label="Instagram"
                  placeholder="https://instagram.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="quoraLink"
                  label="Quora"
                  placeholder="https://quora.com/username"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref()

const countryList = [
  'USA',
  'Canada',
  'UK',
  'Denmark',
  'Germany',
  'Iceland',
  'Israel',
  'Mexico',
]

const languageList = [
  'English',
  'German',
  'French',
  'Spanish',
  'Portuguese',
  'Russian',
  'Korean',
]

const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>

  <VCard flat>
    <VCardText>
      <VWindow
        v-model="tab"
        class="disable-tab-transition"
      >
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="firstName"
                  label="First name"
                  placeholder="John"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <AppTextField
                  v-model="lastName"
                  label="Last name"
                  placeholder="Doe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                  placeholder="Select Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                  placeholder="Select Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppDateTimePicker
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="Select Birth Date"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                  placeholder="+1 123 456 7890"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="username"
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  autocomplete="password"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  autocomplete="confirm-password"
                  placeholder="············"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="twitterLink"
                  label="Twitter"
                  placeholder="https://twitter.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="facebookLink"
                  label="Facebook"
                  placeholder="https://facebook.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="googlePlusLink"
                  label="Google+"
                  placeholder="https://plus.google.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                  placeholder="https://linkedin.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="instagramLink"
                  label="Instagram"
                  placeholder="https://instagram.com/username"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <AppTextField
                  v-model="quoraLink"
                  label="Quora"
                  placeholder="https://quora.com/username"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},Io={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="firstName"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="email"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="email"
              v-model="email"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="password"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="password"
              v-model="password"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VBtn
              type="submit"
              class="me-4"
            >
              Submit
            </VBtn>
            <VBtn
              color="secondary"
              variant="tonal"
              type="reset"
            >
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 First Name -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstName"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstName"
              v-model="firstName"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Email -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="email"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="email"
              v-model="email"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Mobile -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobile"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- 👉 Password -->
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="password"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="password"
              v-model="password"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VBtn
              type="submit"
              class="me-4"
            >
              Submit
            </VBtn>
            <VBtn
              color="secondary"
              variant="tonal"
              type="reset"
            >
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VForm>
</template>
`},No={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstNameHorizontalIcons"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="emailHorizontalIcons"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobileHorizontalIcons"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="passwordHorizontalIcons"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VBtn
              type="submit"
              class="me-4"
            >
              Submit
            </VBtn>
            <VBtn
              color="secondary"
              variant="tonal"
              type="reset"
            >
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="firstNameHorizontalIcons"
            >First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="John"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="emailHorizontalIcons"
            >Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="johndoe@email.com"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="mobileHorizontalIcons"
            >Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="+1 123 456 7890"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
            class="d-flex align-items-center"
          >
            <label
              class="v-label text-body-2 text-high-emphasis"
              for="passwordHorizontalIcons"
            >Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <AppTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              autocomplete="on"
              type="password"
              placeholder="············"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 Checkbox -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VCheckbox
              v-model="checkbox"
              label="Remember me"
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- 👉 submit and reset button -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          />
          <VCol
            cols="12"
            md="9"
          >
            <VBtn
              type="submit"
              class="me-4"
            >
              Submit
            </VBtn>
            <VBtn
              color="secondary"
              variant="tonal"
              type="reset"
            >
              Reset
            </VBtn>
          </VCol>
        </VRow>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Bo={ts:`<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="City"
          placeholder="New York"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="country"
          label="Country"
          placeholder="United States"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Company"
          placeholder="Pixinvent"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- 👉 First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <!-- 👉 Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Doe"
        />
      </VCol>

      <!-- 👉 Email -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="email"
          label="Email"
          placeholder="johndoe@email.com"
        />
      </VCol>

      <!-- 👉 City -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="city"
          label="City"
          placeholder="New York"
        />
      </VCol>

      <!-- 👉 Country -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="country"
          label="Country"
          placeholder="United States"
        />
      </VCol>

      <!-- 👉 Company -->
      <VCol
        cols="12"
        md="6"
      >
        <AppTextField
          v-model="company"
          label="Company"
          placeholder="Pixinvent"
        />
      </VCol>

      <!-- 👉 Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Lo={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},Uo={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <AppTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="John"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="johndoe@example.com"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          placeholder="+1 123 456 7890"
          type="number"
        />
      </VCol>

      <VCol cols="12">
        <AppTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          autocomplete="on"
          type="password"
          placeholder="············"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},mt={__name:"form-layouts",setup(o){return(b,i)=>{const u=Ao,d=no,f=Ro,C=To,t=ko,a=Fo,n=go,x=ho,v=Co,h=uo;return L(),he("div",null,[e(R,null,{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Horizontal Form",code:Io},{default:l(()=>[e(u)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Horizontal Form with Icons",code:No},{default:l(()=>[e(f)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Vertical Form",code:Lo},{default:l(()=>[e(C)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Vertical Form with Icons",code:Uo},{default:l(()=>[e(t)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[e(d,{title:"Multiple Column",code:Bo},{default:l(()=>[e(a)]),_:1},8,["code"])]),_:1})]),_:1}),e(R,{class:"match-height my-3"},{default:l(()=>[e(s,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Form Hint",code:_o},{default:l(()=>[e(n)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:l(()=>[e(d,{title:"Form Validation",code:So},{default:l(()=>[e(x)]),_:1},8,["code"])]),_:1})]),_:1}),e(R,null,{default:l(()=>[e(s,{cols:"12"},{default:l(()=>[e(d,{title:"Form with Tabs","no-padding":"",code:Po},{default:l(()=>[e(v)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12"},{default:l(()=>[i[0]||(i[0]=w("h4",{class:"text-h6 font-weight-medium mb-5"}," Collapsible Section ",-1)),e(h)]),_:1})]),_:1})])}}};export{mt as default};
