import{ai as Ee,a3 as Oe,r as A,M,b8 as ze,al as ue,c3 as je,cO as Ke,N as w,aF as T,d6 as We,w as N,ae as me,R as qe,b as t,n as L,cm as Ge,d7 as He,cP as re,W as Ye,cd as Je,cw as Qe,d as p,ag as de,d8 as Xe,F as te,aA as Ze,cR as el,H as ll,s as be,ak as tl,q as b,d1 as ce,cj as ol,o as R,c as al,k as g,f as U,V as nl,v as sl,b3 as il,h as ul,e as d,y as ml,a5 as pe,a6 as ve,aB as I,t as oe}from"./index-dBA1zMG5.js";import{u as rl,a as dl,m as cl,b as pl}from"./VSelect-Di6YJAA5.js";import{V as fe,m as vl}from"./VTextField-BQDXeYdm.js";import{u as fl,m as bl,h as Vl}from"./filter-CAieXG7d.js";import{u as gl,t as j,V as yl,a as ae,b as Cl}from"./VList-C1J2xlNQ.js";import{V as hl}from"./VDivider-D2TWaKPO.js";import{V as xl}from"./VListSubheader-CaRPt1cb.js";import{V as _l}from"./VCheckboxBtn-BDH07wdx.js";import{V as Ve}from"./VAvatar-B4TsNWG-.js";import{V as ge}from"./VChip-BmJuwzrZ.js";import{a as _,V as ne}from"./VRow-D45xqIqE.js";import{_ as Il}from"./AppCardCode-BELpaKwE.js";import"./autofocus-CPeAqCuA.js";import"./VCounter-BfawRsoI.js";import"./VField-CEC06eGZ.js";import"./VSelectionControl-BKsSj0Fu.js";import"./vue3-perfect-scrollbar-D0dgj83j.js";import"./VCard-B9paxT_X.js";import"./VCardText-BsVWOkBT.js";const Pl=Ye({alwaysFilter:Boolean,autoSelectFirst:{type:[Boolean,String]},clearOnSelect:{type:Boolean,default:!0},delimiters:Array,...bl({filterKeys:["title"]}),...cl({hideNoData:!0,returnObject:!0}),...Je(vl({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"])},"VCombobox"),$=Ee()({name:"VCombobox",props:Pl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,a){let{emit:i,slots:u}=a;const{t:s}=Oe(),o=A(),m=M(!1),C=M(!0),B=M(!1),W=A(),q=A(),f=M(-1);let G=!1;const{items:se,transformIn:ye,transformOut:Ce}=gl(e),{textColorClasses:he,textColorStyles:xe}=ze(()=>o.value?.color),c=ue(e,"modelValue",[],l=>ye(je(l)),l=>{const v=Ce(l);return e.multiple?v:v[0]??null}),H=Ke(e),Y=w(()=>!!(e.chips||u.chip)),S=w(()=>Y.value||!!u.selection),D=M(!e.multiple&&!S.value?c.value[0]?.title??"":""),E=M(null),h=w({get:()=>D.value,set:async l=>{if(D.value=l??"",l===null||l===""&&!e.multiple&&!S.value?c.value=[]:!e.multiple&&!S.value&&(c.value=[j(e,l)],T(()=>q.value?.scrollToIndex(0))),l&&e.multiple&&e.delimiters?.length){const v=e.delimiters.map(We).join("|"),x=l.split(new RegExp(`(?:${v})+`));if(x.length>1){for(let n of x)n=n.trim(),n&&(k(j(e,n)),await T());D.value=""}}l||(f.value=-1),C.value=!l}}),_e=w(()=>typeof e.counterValue=="function"?e.counterValue(c.value):typeof e.counterValue=="number"?e.counterValue:e.multiple?c.value.length:h.value.length),{filteredItems:J,getMatches:Ie}=fl(e,se,()=>E.value??(e.alwaysFilter||!C.value?h.value:"")),F=w(()=>e.hideSelected&&E.value===null?J.value.filter(l=>!c.value.some(v=>v.value===l.value)):J.value),Q=w(()=>e.hideNoData&&!F.value.length||H.isReadonly.value||H.isDisabled.value),Z=ue(e,"menu"),y=w({get:()=>Z.value,set:l=>{Z.value&&!l&&W.value?.ΨopenChildren.size||l&&Q.value||(Z.value=l)}}),{menuId:Pe,ariaExpanded:we,ariaControls:Ae,ariaLabel:ie}=rl(e,y);N(D,l=>{G?T(()=>G=!1):m.value&&!y.value&&(y.value=!0),i("update:search",l)}),N(c,l=>{!e.multiple&&!S.value&&(D.value=l[0]?.title??"")});const De=w(()=>c.value.map(l=>l.value)),ee=w(()=>(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&h.value===F.value[0]?.title)&&F.value.length>0&&!C.value&&!B.value),le=A(),ke=dl(le,o);function Se(l){G=!0,T(()=>G=!1),e.openOnClear&&(y.value=!0)}function Re(){Q.value||(y.value=!0)}function Fe(l){Q.value||(m.value&&(l.preventDefault(),l.stopPropagation()),y.value=!y.value)}function Le(l){(re(l)||l.key==="Backspace")&&o.value?.focus()}function Ue(l){if(He(l)||H.isReadonly.value)return;const v=o.value?.selectionStart,x=c.value.length;if(["Enter","ArrowDown","ArrowUp"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(y.value=!0),["Escape"].includes(l.key)&&(y.value=!1),ee.value&&["Enter","Tab"].includes(l.key)&&!c.value.some(n=>{let{value:r}=n;return r===F.value[0].value})&&k(J.value[0]),l.key==="ArrowDown"&&ee.value&&le.value?.focus("next"),l.key==="Enter"&&h.value&&(k(j(e,h.value),!0,!0),S.value&&(D.value="")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&S.value&&c.value.length>0&&!h.value)return k(c.value[0],!1);if(~f.value){l.preventDefault();const n=f.value;k(c.value[f.value],!1),f.value=n>=x-1?x-2:n}else l.key==="Backspace"&&!h.value&&(f.value=x-1);return}if(e.multiple)if(l.key==="ArrowLeft"){if(f.value<0&&v&&v>0)return;const n=f.value>-1?f.value-1:x-1;c.value[n]?f.value=n:(f.value=-1,o.value?.setSelectionRange(h.value.length,h.value.length))}else if(l.key==="ArrowRight"){if(f.value<0)return;const n=f.value+1;c.value[n]?f.value=n:(f.value=-1,o.value?.setSelectionRange(0,0))}else~f.value&&re(l)&&(f.value=-1)}function Me(){e.eager&&q.value?.calculateVisibleItems()}function Te(){m.value&&o.value?.focus(),C.value=!0,E.value=null}function k(l){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(!(!l||l.props.disabled))if(e.multiple){const n=c.value.findIndex(V=>(e.valueComparator||me)(V.value,l.value)),r=v??!~n;if(~n){const V=r?[...c.value,l]:[...c.value];V.splice(n,1),c.value=V}else r&&(c.value=[...c.value,l]);e.clearOnSelect&&(h.value="")}else{const n=v!==!1;c.value=n?[l]:[],(!C.value||e.alwaysFilter)&&D.value&&(E.value=D.value),D.value=n&&!S.value?l.title:"",T(()=>{y.value=x,C.value=!0})}}function Ne(l){m.value=!0,setTimeout(()=>{B.value=!0})}function $e(l){B.value=!1}return N(m,(l,v)=>{if(!(l||l===v)&&(f.value=-1,y.value=!1,h.value)){if(e.multiple){k(j(e,h.value));return}if(!S.value)return;c.value.some(x=>{let{title:n}=x;return n===h.value})?D.value="":k(j(e,h.value))}}),N(y,l=>{if(!e.hideSelected&&l&&c.value.length&&C.value){const v=F.value.findIndex(x=>c.value.some(n=>(e.valueComparator||me)(n.value,x.value)));Qe&&window.requestAnimationFrame(()=>{v>=0&&q.value?.scrollToIndex(v)})}l&&(E.value=null)}),N(se,(l,v)=>{y.value||m.value&&!v.length&&l.length&&(y.value=!0)}),qe(()=>{const l=!!(!e.hideNoData||F.value.length||u["prepend-item"]||u["append-item"]||u["no-data"]),v=c.value.length>0,x=fe.filterProps(e);return t(fe,L({ref:o},x,{modelValue:h.value,"onUpdate:modelValue":n=>h.value=n,focused:m.value,"onUpdate:focused":n=>m.value=n,validationValue:c.externalValue,counterValue:_e.value,dirty:v,class:["v-combobox",{"v-combobox--active-menu":y.value,"v-combobox--chips":!!e.chips,"v-combobox--selection-slot":!!S.value,"v-combobox--selecting-index":f.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,readonly:H.isReadonly.value,placeholder:v?void 0:e.placeholder,"onClick:clear":Se,"onMousedown:control":Re,onKeydown:Ue,"aria-expanded":we.value,"aria-controls":Ae.value}),{...u,default:()=>p(te,null,[t(Ze,L({id:Pe.value,ref:W,modelValue:y.value,"onUpdate:modelValue":n=>y.value=n,activator:"parent",contentClass:"v-combobox__content",disabled:Q.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,onAfterEnter:Me,onAfterLeave:Te},e.menuProps),{default:()=>[l&&t(yl,L({ref:le,filterable:!0,selected:De.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:n=>n.preventDefault(),selectable:!0,onKeydown:Le,onFocusin:Ne,onFocusout:$e,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},ke,e.listProps),{default:()=>[u["prepend-item"]?.(),!F.value.length&&!e.hideNoData&&(u["no-data"]?.()??t(ae,{key:"no-data",title:s(e.noDataText)},null)),t(pl,{ref:q,renderless:!0,items:F.value,itemKey:"value"},{default:n=>{let{item:r,index:V,itemRef:X}=n;const O=L(r.props,{ref:X,key:r.value,active:ee.value&&V===0?!0:void 0,onClick:()=>k(r,null)});return r.type==="divider"?u.divider?.({props:r.raw,index:V})??t(hl,L(r.props,{key:`divider-${V}`}),null):r.type==="subheader"?u.subheader?.({props:r.raw,index:V})??t(xl,L(r.props,{key:`subheader-${V}`}),null):u.item?.({item:r,index:V,props:O})??t(ae,L(O,{role:"option"}),{prepend:z=>{let{isSelected:P}=z;return p(te,null,[e.multiple&&!e.hideSelected?t(_l,{key:r.value,modelValue:P,ripple:!1,tabindex:"-1",onClick:Be=>Be.preventDefault()},null):void 0,r.props.prependAvatar&&t(Ve,{image:r.props.prependAvatar},null),r.props.prependIcon&&t(de,{icon:r.props.prependIcon},null)])},title:()=>C.value?r.title:Vl("v-combobox",r.title,Ie(r)?.title)})}}),u["append-item"]?.()]})]}),c.value.map((n,r)=>{function V(P){P.stopPropagation(),P.preventDefault(),k(n,!1)}const X={"onClick:close":V,onKeydown(P){P.key!=="Enter"&&P.key!==" "||(P.preventDefault(),P.stopPropagation(),V(P))},onMousedown(P){P.preventDefault(),P.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},O=Y.value?!!u.chip:!!u.selection,z=O?el(Y.value?u.chip({item:n,index:r,props:X}):u.selection({item:n,index:r})):void 0;if(!(O&&!z))return p("div",{key:n.value,class:be(["v-combobox__selection",r===f.value&&["v-combobox__selection--selected",he.value]]),style:ll(r===f.value?xe.value:{})},[Y.value?u.chip?t(tl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:n.title}}},{default:()=>[z]}):t(ge,L({key:"chip",closable:e.closableChips,size:"small",text:n.title,disabled:n.props.disabled},X),null):z??p("span",{class:"v-combobox__selection-text"},[n.title,e.multiple&&r<c.value.length-1&&p("span",{class:"v-combobox__selection-comma"},[b(",")])])])})]),"append-inner":function(){for(var n=arguments.length,r=new Array(n),V=0;V<n;V++)r[V]=arguments[V];return p(te,null,[u["append-inner"]?.(...r),(!e.hideNoData||e.items.length)&&e.menuIcon?t(de,{class:"v-combobox__menu-icon",color:o.value?.fieldIconColor,icon:e.menuIcon,onMousedown:Fe,onClick:Xe,"aria-label":ie.value,title:ie.value,tabindex:"-1"},null):void 0])}})}),Ge({isFocused:m,isPristine:C,menu:y,search:h,selectionIndex:f,filteredItems:J,select:k},o)}}),K=Object.assign({name:"AppCombobox",inheritAttrs:!1},{__name:"AppCombobox",setup(e){const a=w(()=>{const s=ce().id,o=ol();return s?`app-combobox-${s}`:o}),i=w(()=>ce().label);return(u,s)=>(R(),al("div",{class:be(["app-combobox flex-grow-1",u.$attrs.class])},[g(i)?(R(),U(nl,{key:0,for:g(a),class:"mb-1 text-body-2",text:g(i)},null,8,["for","text"])):sl("",!0),t($,pe(ve({...u.$attrs,class:null,label:void 0,variant:"outlined",id:g(a),menuProps:{contentClass:["app-inner-list","app-combobox__content","v-combobox__content",u.$attrs.multiple!==void 0?"v-list-select-multiple":""]}})),il({_:2},[ul(u.$slots,(o,m)=>({name:m,fn:d(C=>[ml(u.$slots,m,pe(ve(C||{})))])}))]),1040)],2))}}),wl={__name:"DemoComboboxClearable",setup(e){const a=A(["Vuetify","Programming"]),i=["Programming","Design","Vue","Vuetify"];return(u,s)=>{const o=K;return R(),U(o,{modelValue:g(a),"onUpdate:modelValue":s[0]||(s[0]=m=>I(a)?a.value=m:null),items:i,label:"Combobox",multiple:"",placeholder:"deployment",clearable:""},null,8,["modelValue"])}}},Al={__name:"DemoComboboxNoDataWithChips",setup(e){const a=["Gaming","Programming","Vue","Vuetify"],i=A(["Vuetify"]),u=A(null);return N(i,s=>{s.length>5&&T(()=>i.value.pop())}),(s,o)=>{const m=K;return R(),U(m,{modelValue:g(i),"onUpdate:modelValue":o[0]||(o[0]=C=>I(i)?i.value=C:null),"search-input":g(u),"onUpdate:searchInput":o[1]||(o[1]=C=>I(u)?u.value=C:null),items:a,"hide-selected":"","hide-no-data":!1,placeholder:"deployment",hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":d(()=>[t(ae,null,{default:d(()=>[t(Cl,null,{default:d(()=>[o[2]||(o[2]=b(' No results matching "',-1)),p("strong",null,oe(g(u)),1),o[3]||(o[3]=b('". Press ',-1)),o[4]||(o[4]=p("kbd",null,"enter",-1)),o[5]||(o[5]=b(" to create a new one ",-1))]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"])}}},Dl={__name:"DemoComboboxMultiple",setup(e){const a=A(["Vuetify","Programming"]),i=["Programming","Design","Vue","Vuetify"];return(u,s)=>{const o=K;return R(),U(ne,null,{default:d(()=>[t(_,{cols:"12"},{default:d(()=>[t(o,{modelValue:g(a),"onUpdate:modelValue":s[0]||(s[0]=m=>I(a)?a.value=m:null),items:i,placeholder:"deployment",label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),t(_,{cols:"12"},{default:d(()=>[t(o,{modelValue:g(a),"onUpdate:modelValue":s[1]||(s[1]=m=>I(a)?a.value=m:null),items:i,placeholder:"deployment",label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),t(_,{cols:"12"},{default:d(()=>[t(o,{modelValue:g(a),"onUpdate:modelValue":s[2]||(s[2]=m=>I(a)?a.value=m:null),placeholder:"deployment",label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),t(_,{cols:"12"},{default:d(()=>[t(o,{modelValue:g(a),"onUpdate:modelValue":s[3]||(s[3]=m=>I(a)?a.value=m:null),items:i,placeholder:"deployment",label:"I use selection slot",multiple:""},{selection:d(({item:m})=>[t(ge,{size:"small"},{prepend:d(()=>[t(Ve,{start:"",color:"primary",size:"16"},{default:d(()=>[b(oe(String(m.title).charAt(0).toUpperCase()),1)]),_:2},1024)]),default:d(()=>[b(" "+oe(m.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},kl={__name:"DemoComboboxVariant",setup(e){const a=A(["Programming"]),i=["Programming","Design","Vue","Vuetify"];return(u,s)=>(R(),U(ne,null,{default:d(()=>[t(_,{cols:"12"},{default:d(()=>[t($,{modelValue:g(a),"onUpdate:modelValue":s[0]||(s[0]=o=>I(a)?a.value=o:null),items:i,multiple:"",placeholder:"deployment",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),t(_,{cols:"12"},{default:d(()=>[t($,{modelValue:g(a),"onUpdate:modelValue":s[1]||(s[1]=o=>I(a)?a.value=o:null),multiple:"",items:i,placeholder:"deployment",variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),t(_,{cols:"12"},{default:d(()=>[t($,{modelValue:g(a),"onUpdate:modelValue":s[2]||(s[2]=o=>I(a)?a.value=o:null),multiple:"",items:i,placeholder:"deployment",variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),t(_,{cols:"12"},{default:d(()=>[t($,{modelValue:g(a),"onUpdate:modelValue":s[3]||(s[3]=o=>I(a)?a.value=o:null),multiple:"",items:i,placeholder:"deployment",variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),t(_,{cols:"12"},{default:d(()=>[t($,{modelValue:g(a),"onUpdate:modelValue":s[4]||(s[4]=o=>I(a)?a.value=o:null),multiple:"",items:i,variant:"plain",placeholder:"deployment",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}},Sl={__name:"DemoComboboxDensity",setup(e){const a=A(["Vuetify","Programming"]),i=["Programming","Design","Vue","Vuetify"];return(u,s)=>{const o=K;return R(),U(o,{modelValue:g(a),"onUpdate:modelValue":s[0]||(s[0]=m=>I(a)?a.value=m:null),items:i,label:"Combobox",density:"compact",placeholder:"deployment",multiple:""},null,8,["modelValue"])}}},Rl={__name:"DemoComboboxBasic",setup(e){const a=A("Programming"),i=["Programming","Design","Vue","Vuetify"];return(u,s)=>{const o=K;return R(),U(o,{modelValue:g(a),"onUpdate:modelValue":s[0]||(s[0]=m=>I(a)?a.value=m:null),items:i,placeholder:"deployment"},null,8,["modelValue"])}}},Fl={ts:`<script lang="ts" setup>
const selectedItem = ref('Programming')
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`,js:`<script setup>
const selectedItem = ref('Programming')

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="selectedItem"
    :items="items"
    placeholder="deployment"
  />
</template>
`},Ll={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    placeholder="deployment"
    clearable
  />
</template>
`},Ul={ts:`<script lang="ts" setup>
const select = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`,js:`<script setup>
const select = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <AppCombobox
    v-model="select"
    :items="items"
    label="Combobox"
    density="compact"
    placeholder="deployment"
    multiple
  />
</template>
`},Ml={ts:`<script lang="ts" setup>
const selectedItem = ref(['Vuetify', 'Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
                size="16"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref([
  'Vuetify',
  'Programming',
])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="Select a favorite activity or create a new one"
        multiple
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use chips"
        multiple
        chips
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        placeholder="deployment"
        label="I'm readonly"
        chips
        multiple
        readonly
      />
    </VCol>

    <VCol cols="12">
      <AppCombobox
        v-model="selectedItem"
        :items="items"
        placeholder="deployment"
        label="I use selection slot"
        multiple
      >
        <template #selection="{ item }">
          <VChip size="small">
            <template #prepend>
              <VAvatar
                start
                color="primary"
                size="16"
              >
                {{ String(item.title).charAt(0).toUpperCase() }}
              </VAvatar>
            </template>

            {{ item.title }}
          </VChip>
        </template>
      </AppCombobox>
    </VCol>
  </VRow>
</template>
`},Tl={ts:`<script lang="ts" setup>
const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`,js:`<script setup>
const items = [
  'Gaming',
  'Programming',
  'Vue',
  'Vuetify',
]

const selectedList = ref(['Vuetify'])
const search = ref(null)

watch(selectedList, value => {
  if (value.length > 5)
    nextTick(() => selectedList.value.pop())
})
<\/script>

<template>
  <AppCombobox
    v-model="selectedList"
    v-model:search-input="search"
    :items="items"
    hide-selected
    :hide-no-data="false"
    placeholder="deployment"
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
  >
    <template #no-data>
      <VListItem>
        <VListItemTitle>
          No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
        </VListItemTitle>
      </VListItem>
    </template>
  </AppCombobox>
</template>
`},Nl={ts:`<script lang="ts" setup>
const selectedItem = ref(['Programming'])
const items = ['Programming', 'Design', 'Vue', 'Vuetify']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedItem = ref(['Programming'])

const items = [
  'Programming',
  'Design',
  'Vue',
  'Vuetify',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        :items="items"
        multiple
        placeholder="deployment"
        variant="solo"
        label="solo"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="outlined"
        label="Outlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="underlined"
        label="Underlined"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        placeholder="deployment"
        variant="filled"
        label="Filled"
      />
    </VCol>
    <VCol cols="12">
      <VCombobox
        v-model="selectedItem"
        multiple
        :items="items"
        variant="plain"
        placeholder="deployment"
        label="Plain"
      />
    </VCol>
  </VRow>
</template>
`},ot={__name:"combobox",setup(e){return(a,i)=>{const u=Rl,s=Il,o=Sl,m=kl,C=Dl,B=Al,W=wl;return R(),U(ne,{class:"match-height"},{default:d(()=>[t(_,{cols:"12",md:"6"},{default:d(()=>[t(s,{title:"Basic",code:Fl},{default:d(()=>[i[0]||(i[0]=p("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1)),t(u)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:d(()=>[t(s,{title:"Density",code:Ul},{default:d(()=>[i[1]||(i[1]=p("p",null,[b(" You can use "),p("code",null,"Density"),b(" prop to reduce combobox height and lower max height of list items. Available options are: "),p("code",null,"default"),b(", "),p("code",null,"comfortable"),b(", and "),p("code",null,"compact"),b(". ")],-1)),t(o)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:d(()=>[t(s,{title:"Variant",code:Nl},{default:d(()=>[i[2]||(i[2]=p("p",null,[b("Use "),p("code",null,"solo"),b(", "),p("code",null,"outlined"),b(", "),p("code",null,"underlined"),b(", "),p("code",null,"filled"),b(" and "),p("code",null,"plain"),b(" options of "),p("code",null,"variant"),b(" prop to change the look of combobox. ")],-1)),t(m)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:d(()=>[t(s,{title:"Multiple",code:Ml},{default:d(()=>[i[3]||(i[3]=p("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1)),t(C)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:d(()=>[t(s,{title:"No data with chips",code:Tl},{default:d(()=>[i[4]||(i[4]=p("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1)),t(B)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:d(()=>[t(s,{title:"Clearable",code:Ll},{default:d(()=>[i[5]||(i[5]=p("p",null,[b("Use "),p("code",null,"clearable"),b(" prop to clear combobox.")],-1)),t(W)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{ot as default};
