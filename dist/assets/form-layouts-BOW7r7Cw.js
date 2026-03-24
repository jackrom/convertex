import{_ as we}from"./AppSelect-B3u6HL9O.js";import{_ as Ze}from"./AppTextarea-CaLKSybp.js";import{_ as q}from"./AppTextField-BJ3Bf5Oh.js";import{r as d,o as L,f as z,e as l,b as e,s as R,aX as J,V as Be,aD as p,l as n,d as y,v as te,c as ie,F as ae,h as De,t as el,ag as ye,a4 as N,ai as ll,a3 as ol,M as K,bb as tl,al as Ve,c6 as al,N as E,c7 as sl,w as re,aG as Re,c9 as nl,R as rl,p as $,ca as dl,cc as Ae,co as _e,ae as il,W as ml,cd as ul,ce as cl,aC as pl,cf as Vl,H as fl,ak as bl,cg as Te,ch as vl,x as Cl,b6 as hl,y as xl,a5 as Ne,a6 as Ie}from"./index-DFObO80N.js";import{V as fe,a as be,b as ve,c as yl,e as Ce,d as wl,f as gl,g as he}from"./VTabs-F9yrP8RF.js";import{V as U,r as de,e as Fl}from"./validators-COocrHH9.js";import{V as k,a as o}from"./VRow-C9r3gtnS.js";import{a as xe,V as G}from"./VRadioGroup-CEInNqs_.js";import{V as ge}from"./VDivider-e9I1MaPb.js";import{_ as kl}from"./AppDateTimePicker-DcnkRm0x.js";import{V as Se}from"./VCardText-ClfpoH_e.js";import{V as Rl}from"./VCard-DzXkJxa2.js";import{V as O}from"./VCheckbox-Bfb7iy8Y.js";import{u as Al,a as _l,m as Tl,b as Nl}from"./VSelect-D8kfE1CD.js";import{V as Pe,m as Il}from"./VTextField-BURE2Ebt.js";import{u as Sl,m as Pl,h as Ll}from"./filter-DRZmFV_x.js";import{u as Bl,V as Dl,a as Le}from"./VList-D1mggX47.js";import{V as Ul}from"./VListSubheader-pla0liqj.js";import{V as zl}from"./VCheckboxBtn-_E7jAqzf.js";import{V as El}from"./VAvatar-ZoFQ0vBI.js";import{V as Ml}from"./VChip-Ca0YH1Iw.js";import{_ as ql}from"./AppCardCode-CsxVvfqS.js";import"./autofocus--TBesHsg.js";import"./VCounter-NuaDSra8.js";import"./VField-bou6JREt.js";import"./ssrBoot-CWkelw5w.js";import"./VSelectionControl-BAAJNgQM.js";import"./vue3-perfect-scrollbar-N9sVo7R7.js";const Hl={class:"me-1"},jl={class:"d-flex gap-4"},$l={__name:"DemoFormLayoutCollapsible",setup(r){const v=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii"],u=d("home"),V=d("standard"),i=d("credit-debit-card"),b=d(0),h=[{radioValue:"credit-debit-card",radioLabel:"Credit/Debit/ATM Card",icon:"tabler-credit-card"},{radioValue:"cash-on-delivery",radioLabel:"Cash On Delivery",icon:"tabler-help"}];return(t,a)=>{const s=q,x=Ze,f=we;return L(),z(yl,{modelValue:n(b),"onUpdate:modelValue":a[6]||(a[6]=A=>p(b)?b.value=A:null)},{default:l(()=>[e(fe,null,{default:l(()=>[e(be,null,{default:l(()=>[...a[7]||(a[7]=[R("Delivery Address",-1)])]),_:1}),e(ve,null,{default:l(()=>[e(U,{class:"pt-4 pb-2",onSubmit:J(()=>{},["prevent"])},{default:l(()=>[e(k,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Full Name",placeholder:"John Doe"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Phone No",type:"number",placeholder:"+1 123 456 7890"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{label:"Address",placeholder:"1234 Main St, New York, NY 10001, USA",rows:"3"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Pincode",placeholder:"123456",type:"number"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Landmark",placeholder:"Near City Mall"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"City",placeholder:"New York"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(f,{items:v,label:"State",placeholder:"Select State"})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(Be,{class:"mb-3"},{default:l(()=>[...a[8]||(a[8]=[R(" Address Type ",-1)])]),_:1}),e(xe,{modelValue:n(u),"onUpdate:modelValue":a[0]||(a[0]=A=>p(u)?u.value=A:null),inline:""},{default:l(()=>[y("div",null,[e(G,{label:"Home (All day delivery)",value:"home",class:"me-3"}),e(G,{label:"Office (Delivery between 10 AM - 5 PM)",value:"office"})])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(fe,null,{default:l(()=>[e(be,null,{default:l(()=>[...a[9]||(a[9]=[R("Delivery Options",-1)])]),_:1}),e(ve,null,{default:l(()=>[e(xe,{modelValue:n(V),"onUpdate:modelValue":a[4]||(a[4]=A=>p(V)?V.value=A:null),class:"delivery-options pt-4 pb-2"},{default:l(()=>[y("div",{class:te(["delivery-option d-flex rounded-t",n(V)==="standard"?"active":""]),onClick:a[1]||(a[1]=A=>V.value="standard")},[e(G,{inline:"",value:"standard",class:"mt-n4"}),a[10]||(a[10]=y("div",{class:"w-100"},[y("div",{class:"d-flex justify-space-between"},[y("h6",{class:"text-base font-weight-medium"}," Standard 3-5 Days "),y("h6",{class:"text-base font-weight-medium"}," Free ")]),y("span",{class:"text-sm"},"Friday, 15 Nov - Monday, 18 Nov")],-1))],2),y("div",{class:te(["delivery-option d-flex",n(V)==="express"?"active":""]),onClick:a[2]||(a[2]=A=>V.value="express")},[e(G,{inline:"",class:"mt-n4",value:"express"}),a[11]||(a[11]=y("div",{class:"w-100"},[y("div",{class:"d-flex justify-space-between"},[y("h5",{class:"text-base font-weight-medium"}," Express "),y("h6",{class:"text-base font-weight-medium"}," $5.00 ")]),y("span",{class:"text-sm"},"Friday, 15 Nov - Sunday, 17 Nov")],-1))],2),y("div",{class:te(["delivery-option d-flex rounded-b",n(V)==="overnight"?"active":""]),onClick:a[3]||(a[3]=A=>V.value="overnight")},[e(G,{inline:"",class:"mt-n4",value:"overnight"}),a[12]||(a[12]=y("div",{class:"w-100"},[y("div",{class:"d-flex justify-space-between"},[y("h6",{class:"text-base font-weight-medium"}," Overnight "),y("h6",{class:"text-base font-weight-medium"}," $10.00 ")]),y("span",{class:"text-sm"},"Friday, 15 Nov - Saturday, 16 Nov")],-1))],2)]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(fe,null,{default:l(()=>[e(be,null,{default:l(()=>[...a[13]||(a[13]=[R("Payment Method",-1)])]),_:1}),e(ve,null,{default:l(()=>[e(k,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(U,{class:"pt-4 pb-2"},{default:l(()=>[y("div",null,[e(xe,{modelValue:n(i),"onUpdate:modelValue":a[5]||(a[5]=A=>p(i)?i.value=A:null),inline:""},{default:l(()=>[y("div",null,[(L(),ie(ae,null,De(h,A=>e(G,{key:A.radioValue,value:A.radioValue,class:"me-3"},{label:l(()=>[y("span",Hl,el(A.radioLabel),1),e(ye,{size:"18",icon:A.icon},null,8,["icon"])]),_:2},1032,["value"])),64))])]),_:1},8,["modelValue"])]),n(i)==="credit-debit-card"?(L(),z(k,{key:0},{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(s,{label:"Card Number",type:"number",placeholder:"1234 5678 9012 3456"})]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Name",placeholder:"john doe"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(s,{label:"Expiry Date",placeholder:"MM/YY"})]),_:1}),e(o,{cols:"6",md:"3"},{default:l(()=>[e(s,{label:"CVV Code",type:"number",max:"3",placeholder:"123"})]),_:1})]),_:1})):(L(),z(k,{key:1},{default:l(()=>[e(o,null,{default:l(()=>[...a[14]||(a[14]=[y("div",{class:"text-high-emphasis"}," Cash on Delivery is a type of payment method where the recipient make payment for the order at the time of delivery rather than in advance. ",-1)])]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1}),e(ge,{class:"my-5"}),y("div",jl,[e(N,null,{default:l(()=>[...a[15]||(a[15]=[R("Place Order",-1)])]),_:1}),e(N,{color:"secondary",variant:"tonal"},{default:l(()=>[...a[16]||(a[16]=[R(" Cancel ",-1)])]),_:1})])]),_:1})]),_:1})]),_:1},8,["modelValue"])}}},Wl={__name:"DemoFormLayoutFormWithTabs",setup(r){const v=d("personal-info"),u=d(""),V=d(""),i=d(),b=d(""),h=d(),t=["USA","Canada","UK","Denmark","Germany","Iceland","Israel","Mexico"],a=["English","German","French","Spanish","Portuguese","Russian","Korean"],s=d(""),x=d(""),f=d(""),A=d(""),Y=d(""),Q=d(""),X=d(""),Z=d(""),T=d(""),F=d(""),ee=d([]),M=d(!1),H=d(!1);return(Fe,c)=>{const I=q,j=we,me=kl;return L(),ie(ae,null,[e(wl,{modelValue:n(v),"onUpdate:modelValue":c[0]||(c[0]=C=>p(v)?v.value=C:null)},{default:l(()=>[e(Ce,{value:"personal-info"},{default:l(()=>[...c[20]||(c[20]=[R(" Personal Info ",-1)])]),_:1}),e(Ce,{value:"account-details"},{default:l(()=>[...c[21]||(c[21]=[R(" Account Details ",-1)])]),_:1}),e(Ce,{value:"social-links"},{default:l(()=>[...c[22]||(c[22]=[R(" Social Links ",-1)])]),_:1})]),_:1},8,["modelValue"]),e(Rl,{flat:""},{default:l(()=>[e(Se,null,{default:l(()=>[e(gl,{modelValue:n(v),"onUpdate:modelValue":c[19]||(c[19]=C=>p(v)?v.value=C:null),class:"disable-tab-transition"},{default:l(()=>[e(he,{value:"personal-info"},{default:l(()=>[e(U,{class:"mt-2"},{default:l(()=>[e(k,null,{default:l(()=>[e(o,{md:"6",cols:"12"},{default:l(()=>[e(I,{modelValue:n(u),"onUpdate:modelValue":c[1]||(c[1]=C=>p(u)?u.value=C:null),label:"First name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(o,{md:"6",cols:"12"},{default:l(()=>[e(I,{modelValue:n(V),"onUpdate:modelValue":c[2]||(c[2]=C=>p(V)?V.value=C:null),label:"Last name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(j,{modelValue:n(i),"onUpdate:modelValue":c[3]||(c[3]=C=>p(i)?i.value=C:null),items:t,label:"Country",placeholder:"Select Country"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(j,{modelValue:n(ee),"onUpdate:modelValue":c[4]||(c[4]=C=>p(ee)?ee.value=C:null),items:a,multiple:"",chips:"",clearable:"",label:"Language",placeholder:"Select Language"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(me,{modelValue:n(b),"onUpdate:modelValue":c[5]||(c[5]=C=>p(b)?b.value=C:null),label:"Birth Date",placeholder:"Select Birth Date"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(I,{modelValue:n(h),"onUpdate:modelValue":c[6]||(c[6]=C=>p(h)?h.value=C:null),type:"number",label:"Phone No.",placeholder:"+1 123 456 7890"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(he,{value:"account-details"},{default:l(()=>[e(U,{class:"mt-2"},{default:l(()=>[e(k,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(I,{modelValue:n(s),"onUpdate:modelValue":c[7]||(c[7]=C=>p(s)?s.value=C:null),label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(I,{modelValue:n(x),"onUpdate:modelValue":c[8]||(c[8]=C=>p(x)?x.value=C:null),label:"Email",suffix:"@example.com",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(I,{modelValue:n(f),"onUpdate:modelValue":c[9]||(c[9]=C=>p(f)?f.value=C:null),label:"Password",placeholder:"············",type:n(M)?"text":"password",autocomplete:"password","append-inner-icon":n(M)?"tabler-eye-off":"tabler-eye","onClick:appendInner":c[10]||(c[10]=C=>M.value=!n(M))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(I,{modelValue:n(A),"onUpdate:modelValue":c[11]||(c[11]=C=>p(A)?A.value=C:null),label:"Confirm Password",autocomplete:"confirm-password",placeholder:"············",type:n(H)?"text":"password","append-inner-icon":n(H)?"tabler-eye-off":"tabler-eye","onClick:appendInner":c[12]||(c[12]=C=>H.value=!n(H))},null,8,["modelValue","type","append-inner-icon"])]),_:1})]),_:1})]),_:1})]),_:1}),e(he,{value:"social-links"},{default:l(()=>[e(U,{class:"mt-2"},{default:l(()=>[e(k,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(I,{modelValue:n(Y),"onUpdate:modelValue":c[13]||(c[13]=C=>p(Y)?Y.value=C:null),label:"Twitter",placeholder:"https://twitter.com/username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(I,{modelValue:n(Q),"onUpdate:modelValue":c[14]||(c[14]=C=>p(Q)?Q.value=C:null),label:"Facebook",placeholder:"https://facebook.com/username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(I,{modelValue:n(X),"onUpdate:modelValue":c[15]||(c[15]=C=>p(X)?X.value=C:null),label:"Google+",placeholder:"https://plus.google.com/username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(I,{modelValue:n(Z),"onUpdate:modelValue":c[16]||(c[16]=C=>p(Z)?Z.value=C:null),label:"LinkedIn",placeholder:"https://linkedin.com/username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(I,{modelValue:n(T),"onUpdate:modelValue":c[17]||(c[17]=C=>p(T)?T.value=C:null),label:"Instagram",placeholder:"https://instagram.com/username"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(I,{modelValue:n(F),"onUpdate:modelValue":c[18]||(c[18]=C=>p(F)?F.value=C:null),label:"Quora",placeholder:"https://quora.com/username"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(ge),e(Se,{class:"d-flex gap-4"},{default:l(()=>[e(N,null,{default:l(()=>[...c[23]||(c[23]=[R("Submit",-1)])]),_:1}),e(N,{color:"secondary",variant:"tonal"},{default:l(()=>[...c[24]||(c[24]=[R(" Cancel ",-1)])]),_:1})]),_:1})]),_:1})],64)}}},Jl={__name:"DemoFormLayoutFormValidation",setup(r){const v=d(""),u=d(""),V=["Item 1","Item 2","Item 3","Item 4"],i=d(),b=d(!1),h=d();return(t,a)=>{const s=q,x=we;return L(),z(U,{ref_key:"form",ref:h,"lazy-validation":""},{default:l(()=>[e(k,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(s,{modelValue:n(v),"onUpdate:modelValue":a[0]||(a[0]=f=>p(v)?v.value=f:null),rules:["requiredValidator"in t?t.requiredValidator:n(de)],label:"Name",placeholder:"John Doe",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(s,{modelValue:n(u),"onUpdate:modelValue":a[1]||(a[1]=f=>p(u)?u.value=f:null),rules:["emailValidator"in t?t.emailValidator:n(Fl),"requiredValidator"in t?t.requiredValidator:n(de)],label:"E-mail",placeholder:"johndoe@email.com",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{modelValue:n(i),"onUpdate:modelValue":a[2]||(a[2]=f=>p(i)?i.value=f:null),items:V,rules:["requiredValidator"in t?t.requiredValidator:n(de)],placeholder:"Select an Item",label:"Item",name:"select",require:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(O,{modelValue:n(b),"onUpdate:modelValue":a[3]||(a[3]=f=>p(b)?b.value=f:null),rules:["requiredValidator"in t?t.requiredValidator:n(de)],label:"Do you agree?",required:""},null,8,["modelValue","rules"])]),_:1}),e(o,{cols:"12",class:"d-flex flex-wrap gap-4"},{default:l(()=>[e(N,{color:"success",onClick:a[4]||(a[4]=f=>n(h)?.validate())},{default:l(()=>[...a[7]||(a[7]=[R(" Validate ",-1)])]),_:1}),e(N,{color:"error",onClick:a[5]||(a[5]=f=>n(h)?.reset())},{default:l(()=>[...a[8]||(a[8]=[R(" Reset Form ",-1)])]),_:1}),e(N,{color:"warning",onClick:a[6]||(a[6]=f=>n(h)?.resetValidation())},{default:l(()=>[...a[9]||(a[9]=[R(" Reset Validation ",-1)])]),_:1})]),_:1})]),_:1})]),_:1},512)}}},Ol=ml({autoSelectFirst:{type:[Boolean,String]},clearOnSelect:Boolean,search:String,...Pl({filterKeys:["title"]}),...Tl(),...ul(Il({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"])},"VAutocomplete"),Kl=ll()({name:"VAutocomplete",props:Ol(),emits:{"update:focused":r=>!0,"update:search":r=>!0,"update:modelValue":r=>!0,"update:menu":r=>!0},setup(r,v){let{slots:u}=v;const{t:V}=ol(),i=d(),b=K(!1),h=K(!0),t=K(!1),a=d(),s=d(),x=K(-1),f=K(null),{items:A,transformIn:Y,transformOut:Q}=Bl(r),{textColorClasses:X,textColorStyles:Z}=tl(()=>i.value?.color),T=Ve(r,"search",""),F=Ve(r,"modelValue",[],m=>Y(m===null?[null]:al(m)),m=>{const _=Q(m);return r.multiple?_:_[0]??null}),ee=E(()=>typeof r.counterValue=="function"?r.counterValue(F.value):typeof r.counterValue=="number"?r.counterValue:F.value.length),M=sl(r),{filteredItems:H,getMatches:Fe}=Sl(r,A,()=>f.value??(h.value?"":T.value)),c=E(()=>r.hideSelected&&f.value===null?H.value.filter(m=>!F.value.some(_=>_.value===m.value)):H.value),I=E(()=>!!(r.chips||u.chip)),j=E(()=>I.value||!!u.selection),me=E(()=>F.value.map(m=>m.props.value)),C=E(()=>(r.autoSelectFirst===!0||r.autoSelectFirst==="exact"&&T.value===c.value[0]?.title)&&c.value.length>0&&!h.value&&!t.value),se=E(()=>r.hideNoData&&!c.value.length||M.isReadonly.value||M.isDisabled.value),ue=Ve(r,"menu"),S=E({get:()=>ue.value,set:m=>{ue.value&&!m&&a.value?.ΨopenChildren.size||m&&se.value||(ue.value=m)}}),{menuId:Ue,ariaExpanded:ze,ariaControls:Ee,ariaLabel:ke}=Al(r,S),ce=d(),Me=_l(ce,i);function qe(m){r.openOnClear&&(S.value=!0),T.value=""}function He(){se.value||(S.value=!0)}function je(m){se.value||(b.value&&(m.preventDefault(),m.stopPropagation()),S.value=!S.value)}function $e(m){(Ae(m)||m.key==="Backspace")&&i.value?.focus()}function We(m){if(M.isReadonly.value)return;const _=i.value?.selectionStart,P=F.value.length;if(["Enter","ArrowDown","ArrowUp"].includes(m.key)&&m.preventDefault(),["Enter","ArrowDown"].includes(m.key)&&(S.value=!0),["Escape"].includes(m.key)&&(S.value=!1),C.value&&["Enter","Tab"].includes(m.key)&&!F.value.some(w=>{let{value:g}=w;return g===c.value[0].value})&&W(c.value[0]),m.key==="ArrowDown"&&C.value&&ce.value?.focus("next"),["Backspace","Delete"].includes(m.key)){if(!r.multiple&&j.value&&F.value.length>0&&!T.value)return W(F.value[0],!1);if(~x.value){m.preventDefault();const w=x.value;W(F.value[x.value],!1),x.value=w>=P-1?P-2:w}else m.key==="Backspace"&&!T.value&&(x.value=P-1);return}if(r.multiple)if(m.key==="ArrowLeft"){if(x.value<0&&_&&_>0)return;const w=x.value>-1?x.value-1:P-1;if(F.value[w])x.value=w;else{const g=T.value?.length??null;x.value=-1,i.value?.setSelectionRange(g,g)}}else if(m.key==="ArrowRight"){if(x.value<0)return;const w=x.value+1;F.value[w]?x.value=w:(x.value=-1,i.value?.setSelectionRange(0,0))}else~x.value&&Ae(m)&&(x.value=-1)}function Je(m){if(_e(i.value,":autofill")||_e(i.value,":-webkit-autofill")){const _=A.value.find(P=>P.title===m.target.value);_&&W(_)}}function Oe(){r.eager&&s.value?.calculateVisibleItems()}function Ke(){b.value&&(h.value=!0,i.value?.focus()),f.value=null}function Ge(m){b.value=!0,setTimeout(()=>{t.value=!0})}function Ye(m){t.value=!1}function Qe(m){(m==null||m===""&&!r.multiple&&!j.value)&&(F.value=[])}const pe=K(!1);function W(m){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!(!m||m.props.disabled))if(r.multiple){const P=F.value.findIndex(g=>(r.valueComparator||il)(g.value,m.value)),w=_??!~P;if(~P){const g=w?[...F.value,m]:[...F.value];g.splice(P,1),F.value=g}else w&&(F.value=[...F.value,m]);r.clearOnSelect&&(T.value="")}else{const P=_!==!1;F.value=P?[m]:[],f.value=h.value?"":T.value??"",T.value=P&&!j.value?m.title:"",Re(()=>{S.value=!1,h.value=!0})}}return re(b,(m,_)=>{m!==_&&(m?(pe.value=!0,T.value=r.multiple||j.value?"":String(F.value.at(-1)?.props.title??""),h.value=!0,Re(()=>pe.value=!1)):(!r.multiple&&T.value==null&&(F.value=[]),S.value=!1,!h.value&&T.value&&(f.value=T.value),T.value="",x.value=-1))}),re(T,m=>{!b.value||pe.value||(m&&(S.value=!0),h.value=!m)}),re(S,m=>{if(!r.hideSelected&&m&&F.value.length&&h.value){const _=c.value.findIndex(P=>F.value.some(w=>P.value===w.value));nl&&window.requestAnimationFrame(()=>{_>=0&&s.value?.scrollToIndex(_)})}m&&(f.value=null)}),re(A,(m,_)=>{S.value||b.value&&!_.length&&m.length&&(S.value=!0)}),rl(()=>{const m=!!(!r.hideNoData||c.value.length||u["prepend-item"]||u["append-item"]||u["no-data"]),_=F.value.length>0,P=Pe.filterProps(r);return e(Pe,$({ref:i},P,{modelValue:T.value,"onUpdate:modelValue":[w=>T.value=w,Qe],focused:b.value,"onUpdate:focused":w=>b.value=w,validationValue:F.externalValue,counterValue:ee.value,dirty:_,onChange:Je,class:["v-autocomplete",`v-autocomplete--${r.multiple?"multiple":"single"}`,{"v-autocomplete--active-menu":S.value,"v-autocomplete--chips":!!r.chips,"v-autocomplete--selection-slot":!!j.value,"v-autocomplete--selecting-index":x.value>-1},r.class],style:r.style,readonly:M.isReadonly.value,placeholder:_?void 0:r.placeholder,"onClick:clear":qe,"onMousedown:control":He,onKeydown:We,"aria-expanded":ze.value,"aria-controls":Ee.value}),{...u,default:()=>y(ae,null,[e(pl,$({id:Ue.value,ref:a,modelValue:S.value,"onUpdate:modelValue":w=>S.value=w,activator:"parent",contentClass:"v-autocomplete__content",disabled:se.value,eager:r.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,onAfterEnter:Oe,onAfterLeave:Ke},r.menuProps),{default:()=>[m&&e(Dl,$({ref:ce,filterable:!0,selected:me.value,selectStrategy:r.multiple?"independent":"single-independent",onMousedown:w=>w.preventDefault(),onKeydown:$e,onFocusin:Ge,onFocusout:Ye,tabindex:"-1",selectable:!0,"aria-live":"polite",color:r.itemColor??r.color},Me,r.listProps),{default:()=>[u["prepend-item"]?.(),!c.value.length&&!r.hideNoData&&(u["no-data"]?.()??e(Le,{key:"no-data",title:V(r.noDataText)},null)),e(Nl,{ref:s,renderless:!0,items:c.value,itemKey:"value"},{default:w=>{let{item:g,index:B,itemRef:ne}=w;const le=$(g.props,{ref:ne,key:g.value,active:C.value&&B===0?!0:void 0,onClick:()=>W(g,null)});return g.type==="divider"?u.divider?.({props:g.raw,index:B})??e(ge,$(g.props,{key:`divider-${B}`}),null):g.type==="subheader"?u.subheader?.({props:g.raw,index:B})??e(Ul,$(g.props,{key:`subheader-${B}`}),null):u.item?.({item:g,index:B,props:le})??e(Le,$(le,{role:"option"}),{prepend:oe=>{let{isSelected:D}=oe;return y(ae,null,[r.multiple&&!r.hideSelected?e(zl,{key:g.value,modelValue:D,ripple:!1,tabindex:"-1",onClick:Xe=>Xe.preventDefault()},null):void 0,g.props.prependAvatar&&e(El,{image:g.props.prependAvatar},null),g.props.prependIcon&&e(ye,{icon:g.props.prependIcon},null)])},title:()=>h.value?g.title:Ll("v-autocomplete",g.title,Fe(g)?.title)})}}),u["append-item"]?.()]})]}),F.value.map((w,g)=>{function B(D){D.stopPropagation(),D.preventDefault(),W(w,!1)}const ne={"onClick:close":B,onKeydown(D){D.key!=="Enter"&&D.key!==" "||(D.preventDefault(),D.stopPropagation(),B(D))},onMousedown(D){D.preventDefault(),D.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},le=I.value?!!u.chip:!!u.selection,oe=le?Vl(I.value?u.chip({item:w,index:g,props:ne}):u.selection({item:w,index:g})):void 0;if(!(le&&!oe))return y("div",{key:w.value,class:te(["v-autocomplete__selection",g===x.value&&["v-autocomplete__selection--selected",X.value]]),style:fl(g===x.value?Z.value:{})},[I.value?u.chip?e(bl,{key:"chip-defaults",defaults:{VChip:{closable:r.closableChips,size:"small",text:w.title}}},{default:()=>[oe]}):e(Ml,$({key:"chip",closable:r.closableChips,size:"small",text:w.title,disabled:w.props.disabled},ne),null):oe??y("span",{class:"v-autocomplete__selection-text"},[w.title,r.multiple&&g<F.value.length-1&&y("span",{class:"v-autocomplete__selection-comma"},[R(",")])])])})]),"append-inner":function(){for(var w=arguments.length,g=new Array(w),B=0;B<w;B++)g[B]=arguments[B];return y(ae,null,[u["append-inner"]?.(...g),r.menuIcon?e(ye,{class:"v-autocomplete__menu-icon",color:i.value?.fieldIconColor,icon:r.menuIcon,onMousedown:je,onClick:cl,"aria-label":ke.value,title:ke.value,tabindex:"-1"},null):void 0])}})}),dl({isFocused:b,isPristine:h,menu:S,search:T,filteredItems:H,select:W},i)}}),Gl=Object.assign({name:"AppAutocomplete",inheritAttrs:!1},{__name:"AppAutocomplete",setup(r){const v=E(()=>{const i=Te().id,b=vl();return i?`app-autocomplete-${i}`:b}),u=E(()=>Te().label);return(V,i)=>(L(),ie("div",{class:te(["app-autocomplete flex-grow-1",V.$attrs.class])},[n(u)?(L(),z(Be,{key:0,for:n(v),class:"mb-1 text-body-2",text:n(u)},null,8,["for","text"])):Cl("",!0),e(Kl,Ne(Ie({...V.$attrs,class:null,label:void 0,id:n(v),variant:"outlined",menuProps:{contentClass:["app-inner-list","app-autocomplete__content","v-autocomplete__content"]}})),hl({_:2},[De(V.$slots,(b,h)=>({name:h,fn:l(t=>[xl(V.$slots,h,Ne(Ie(t||{})))])}))]),1040)],2))}}),Yl={__name:"DemoFormLayoutFormHint",setup(r){const v=d(""),u=d(""),V=d(),i=d(!1),b=["foo","bar","fizz","buzz"],h=d([]);return(t,a)=>{const s=q,x=Gl;return L(),z(U,{onSubmit:J(()=>{},["prevent"])},{default:l(()=>[e(k,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(s,{modelValue:n(v),"onUpdate:modelValue":a[0]||(a[0]=f=>p(v)?v.value=f:null),label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(s,{modelValue:n(u),"onUpdate:modelValue":a[1]||(a[1]=f=>p(u)?u.value=f:null),label:"Email",type:"email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(s,{modelValue:n(V),"onUpdate:modelValue":a[2]||(a[2]=f=>p(V)?V.value=f:null),label:"Password",autocomplete:"on",type:"password","persistent-hint":"",placeholder:"············",hint:"Your password must be 8-20 characters long."},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(x,{modelValue:n(h),"onUpdate:modelValue":a[3]||(a[3]=f=>p(h)?h.value=f:null),items:b,chips:"",multiple:"",label:"Autocomplete",placeholder:"Select"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(O,{modelValue:n(i),"onUpdate:modelValue":a[4]||(a[4]=f=>p(i)?i.value=f:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(N,{type:"submit"},{default:l(()=>[...a[5]||(a[5]=[R(" Submit ",-1)])]),_:1}),e(N,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[...a[6]||(a[6]=[R(" Reset ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})}}},Ql={__name:"DemoFormLayoutMultipleColumn",setup(r){const v=d(""),u=d(""),V=d(""),i=d(""),b=d(""),h=d(""),t=d(!1);return(a,s)=>{const x=q;return L(),z(U,{onSubmit:J(()=>{},["prevent"])},{default:l(()=>[e(k,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(x,{modelValue:n(v),"onUpdate:modelValue":s[0]||(s[0]=f=>p(v)?v.value=f:null),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(x,{modelValue:n(u),"onUpdate:modelValue":s[1]||(s[1]=f=>p(u)?u.value=f:null),label:"Last Name",placeholder:"Doe"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(x,{modelValue:n(h),"onUpdate:modelValue":s[2]||(s[2]=f=>p(h)?h.value=f:null),label:"Email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(x,{modelValue:n(V),"onUpdate:modelValue":s[3]||(s[3]=f=>p(V)?V.value=f:null),label:"City",placeholder:"New York"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(x,{modelValue:n(i),"onUpdate:modelValue":s[4]||(s[4]=f=>p(i)?i.value=f:null),label:"Country",placeholder:"United States"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(x,{modelValue:n(b),"onUpdate:modelValue":s[5]||(s[5]=f=>p(b)?b.value=f:null),label:"Company",placeholder:"Pixinvent"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(O,{modelValue:n(t),"onUpdate:modelValue":s[6]||(s[6]=f=>p(t)?t.value=f:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(N,{type:"submit"},{default:l(()=>[...s[7]||(s[7]=[R(" Submit ",-1)])]),_:1}),e(N,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[...s[8]||(s[8]=[R(" Reset ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})}}},Xl={__name:"DemoFormLayoutVerticalFormWithIcons",setup(r){const v=d(""),u=d(""),V=d(),i=d(),b=d(!1);return(h,t)=>{const a=q;return L(),z(U,{onSubmit:J(s=>({}),["prevent"])},{default:l(()=>[e(k,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:n(v),"onUpdate:modelValue":t[0]||(t[0]=s=>p(v)?v.value=s:null),"prepend-inner-icon":"tabler-user",label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:n(u),"onUpdate:modelValue":t[1]||(t[1]=s=>p(u)?u.value=s:null),"prepend-inner-icon":"tabler-mail",label:"Email",type:"email",placeholder:"johndoe@example.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:n(V),"onUpdate:modelValue":t[2]||(t[2]=s=>p(V)?V.value=s:null),"prepend-inner-icon":"tabler-device-mobile",label:"Mobile",placeholder:"+1 123 456 7890",type:"number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:n(i),"onUpdate:modelValue":t[3]||(t[3]=s=>p(i)?i.value=s:null),"prepend-inner-icon":"tabler-lock",label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(O,{modelValue:n(b),"onUpdate:modelValue":t[4]||(t[4]=s=>p(b)?b.value=s:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(N,{type:"submit",class:"me-2"},{default:l(()=>[...t[5]||(t[5]=[R(" Submit ",-1)])]),_:1}),e(N,{color:"secondary",type:"reset",variant:"tonal"},{default:l(()=>[...t[6]||(t[6]=[R(" Reset ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})}}},Zl={__name:"DemoFormLayoutVerticalForm",setup(r){const v=d(""),u=d(""),V=d(),i=d(),b=d(!1);return(h,t)=>{const a=q;return L(),z(U,{onSubmit:J(()=>{},["prevent"])},{default:l(()=>[e(k,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:n(v),"onUpdate:modelValue":t[0]||(t[0]=s=>p(v)?v.value=s:null),label:"First Name",placeholder:"John"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:n(u),"onUpdate:modelValue":t[1]||(t[1]=s=>p(u)?u.value=s:null),label:"Email",type:"email",placeholder:"johndoe@example.com"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:n(V),"onUpdate:modelValue":t[2]||(t[2]=s=>p(V)?V.value=s:null),label:"Mobile",placeholder:"+1 123 456 7890",type:"number"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(a,{modelValue:n(i),"onUpdate:modelValue":t[3]||(t[3]=s=>p(i)?i.value=s:null),label:"Password",autocomplete:"on",type:"password",placeholder:"············"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(O,{modelValue:n(b),"onUpdate:modelValue":t[4]||(t[4]=s=>p(b)?b.value=s:null),label:"Remember me"},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",class:"d-flex gap-4"},{default:l(()=>[e(N,{type:"submit"},{default:l(()=>[...t[5]||(t[5]=[R(" Submit ",-1)])]),_:1}),e(N,{type:"reset",color:"secondary",variant:"tonal"},{default:l(()=>[...t[6]||(t[6]=[R(" Reset ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})}}},eo={__name:"DemoFormLayoutHorizontalFormWithIcons",setup(r){const v=d(""),u=d(""),V=d(),i=d(),b=d(!1);return(h,t)=>{const a=q;return L(),z(U,{onSubmit:J(()=>{},["prevent"])},{default:l(()=>[e(k,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(k,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[5]||(t[5]=[y("label",{class:"v-label text-body-2 text-high-emphasis",for:"firstNameHorizontalIcons"},"First Name",-1)])]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"firstNameHorizontalIcons",modelValue:n(v),"onUpdate:modelValue":t[0]||(t[0]=s=>p(v)?v.value=s:null),"prepend-inner-icon":"tabler-user",placeholder:"John","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(k,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[6]||(t[6]=[y("label",{class:"v-label text-body-2 text-high-emphasis",for:"emailHorizontalIcons"},"Email",-1)])]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"emailHorizontalIcons",modelValue:n(u),"onUpdate:modelValue":t[1]||(t[1]=s=>p(u)?u.value=s:null),"prepend-inner-icon":"tabler-mail",placeholder:"johndoe@email.com","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(k,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[7]||(t[7]=[y("label",{class:"v-label text-body-2 text-high-emphasis",for:"mobileHorizontalIcons"},"Mobile",-1)])]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"mobileHorizontalIcons",modelValue:n(V),"onUpdate:modelValue":t[2]||(t[2]=s=>p(V)?V.value=s:null),type:"number","prepend-inner-icon":"tabler-device-mobile",placeholder:"+1 123 456 7890","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(k,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[8]||(t[8]=[y("label",{class:"v-label text-body-2 text-high-emphasis",for:"passwordHorizontalIcons"},"Password",-1)])]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"passwordHorizontalIcons",modelValue:n(i),"onUpdate:modelValue":t[3]||(t[3]=s=>p(i)?i.value=s:null),"prepend-inner-icon":"tabler-lock",autocomplete:"on",type:"password",placeholder:"············","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(k,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(O,{modelValue:n(b),"onUpdate:modelValue":t[4]||(t[4]=s=>p(b)?b.value=s:null),label:"Remember me"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(k,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(N,{type:"submit",class:"me-4"},{default:l(()=>[...t[9]||(t[9]=[R(" Submit ",-1)])]),_:1}),e(N,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[...t[10]||(t[10]=[R(" Reset ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},lo={__name:"DemoFormLayoutHorizontalForm",setup(r){const v=d(""),u=d(""),V=d(),i=d(),b=d(!1);return(h,t)=>{const a=q;return L(),z(U,{onSubmit:J(()=>{},["prevent"])},{default:l(()=>[e(k,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(k,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[5]||(t[5]=[y("label",{class:"v-label text-body-2 text-high-emphasis",for:"firstName"},"First Name",-1)])]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"firstName",modelValue:n(v),"onUpdate:modelValue":t[0]||(t[0]=s=>p(v)?v.value=s:null),placeholder:"John","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(k,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[6]||(t[6]=[y("label",{class:"v-label text-body-2 text-high-emphasis",for:"email"},"Email",-1)])]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"email",modelValue:n(u),"onUpdate:modelValue":t[1]||(t[1]=s=>p(u)?u.value=s:null),placeholder:"johndoe@email.com","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(k,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[7]||(t[7]=[y("label",{class:"v-label text-body-2 text-high-emphasis",for:"mobile"},"Mobile",-1)])]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"mobile",modelValue:n(V),"onUpdate:modelValue":t[2]||(t[2]=s=>p(V)?V.value=s:null),type:"number",placeholder:"+1 123 456 7890","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(k,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3",class:"d-flex align-items-center"},{default:l(()=>[...t[8]||(t[8]=[y("label",{class:"v-label text-body-2 text-high-emphasis",for:"password"},"Password",-1)])]),_:1}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(a,{id:"password",modelValue:n(i),"onUpdate:modelValue":t[3]||(t[3]=s=>p(i)?i.value=s:null),autocomplete:"on",type:"password",placeholder:"············","persistent-placeholder":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(k,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(O,{modelValue:n(b),"onUpdate:modelValue":t[4]||(t[4]=s=>p(b)?b.value=s:null),label:"Remember me"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(k,{"no-gutters":""},{default:l(()=>[e(o,{cols:"12",md:"3"}),e(o,{cols:"12",md:"9"},{default:l(()=>[e(N,{type:"submit",class:"me-4"},{default:l(()=>[...t[9]||(t[9]=[R(" Submit ",-1)])]),_:1}),e(N,{color:"secondary",variant:"tonal",type:"reset"},{default:l(()=>[...t[10]||(t[10]=[R(" Reset ",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},oo={ts:`<script lang="ts" setup>
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
`},to={ts:`<script lang="ts" setup>
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
`},ao={ts:`<script lang="ts" setup>
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
`},so={ts:`<script lang="ts" setup>
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
`},no={ts:`<script lang="ts" setup>
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
`},ro={ts:`<script lang="ts" setup>
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
`},io={ts:`<script lang="ts" setup>
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
`},mo={ts:`<script lang="ts" setup>
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
`},Eo={__name:"form-layouts",setup(r){return(v,u)=>{const V=lo,i=ql,b=eo,h=Zl,t=Xl,a=Ql,s=Yl,x=Jl,f=Wl,A=$l;return L(),ie("div",null,[e(k,null,{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Horizontal Form",code:so},{default:l(()=>[e(V)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Horizontal Form with Icons",code:no},{default:l(()=>[e(b)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Vertical Form",code:io},{default:l(()=>[e(h)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Vertical Form with Icons",code:mo},{default:l(()=>[e(t)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[e(i,{title:"Multiple Column",code:ro},{default:l(()=>[e(a)]),_:1},8,["code"])]),_:1})]),_:1}),e(k,{class:"match-height my-3"},{default:l(()=>[e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Form Hint",code:oo},{default:l(()=>[e(s)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:l(()=>[e(i,{title:"Form Validation",code:to},{default:l(()=>[e(x)]),_:1},8,["code"])]),_:1})]),_:1}),e(k,null,{default:l(()=>[e(o,{cols:"12"},{default:l(()=>[e(i,{title:"Form with Tabs","no-padding":"",code:ao},{default:l(()=>[e(f)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12"},{default:l(()=>[u[0]||(u[0]=y("h4",{class:"text-h6 font-weight-medium mb-5"}," Collapsible Section ",-1)),e(A)]),_:1})]),_:1})])}}};export{Eo as default};
