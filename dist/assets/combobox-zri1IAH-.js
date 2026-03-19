import{ai as Ee,a3 as ze,r as A,M,bb as Oe,al as ue,c6 as je,c7 as Ke,N as w,aF as T,c8 as We,w as N,ae as me,R as qe,b as t,n as R,c9 as Ge,ca as He,cb as re,W as Ye,cc as Je,cd as Qe,d as p,ag as ce,ce as Xe,F as te,aA as Ze,cf as el,H as ll,s as be,ak as tl,q as b,cg as de,ch as ol,o as F,c as al,k as g,f as U,V as nl,v as sl,b6 as il,h as ul,e as c,y as ml,a5 as pe,a6 as ve,aB as I,t as oe}from"./index-D5u3gIuL.js";import{u as rl,a as cl,m as dl,b as pl}from"./VSelect-DL9VH9BP.js";import{V as fe,m as vl}from"./VTextField-BopGH-kV.js";import{u as fl,m as bl,h as Vl}from"./filter-BbQNWpRs.js";import{u as gl,t as j,V as yl,a as ae,b as Cl}from"./VList-fz_k71an.js";import{V as hl}from"./VDivider-T8VTNJcb.js";import{V as xl}from"./VListSubheader-HOeFaW02.js";import{V as _l}from"./VCheckboxBtn-8LVT799I.js";import{V as Ve}from"./VAvatar-DyfKaBLw.js";import{V as ge}from"./VChip-OenLXSiK.js";import{a as _,V as ne}from"./VRow-CYAdBd9V.js";import{_ as Il}from"./AppCardCode-CoTMYTPm.js";import"./autofocus-Ch6Ajw6p.js";import"./VCounter-Dq-jp_pu.js";import"./VField-BC44pAAY.js";import"./ssrBoot-DqoBIvq_.js";import"./VSelectionControl-gsrCeS9L.js";import"./vue3-perfect-scrollbar-Bc7vuM2x.js";import"./VCard-BBOU76kS.js";import"./VCardText-Bn92gux8.js";const Pl=Ye({alwaysFilter:Boolean,autoSelectFirst:{type:[Boolean,String]},clearOnSelect:{type:Boolean,default:!0},delimiters:Array,...bl({filterKeys:["title"]}),...dl({hideNoData:!0,returnObject:!0}),...Je(vl({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"])},"VCombobox"),$=Ee()({name:"VCombobox",props:Pl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,a){let{emit:i,slots:u}=a;const{t:s}=ze(),o=A(),m=M(!1),C=M(!0),B=M(!1),W=A(),q=A(),f=M(-1);let G=!1;const{items:se,transformIn:ye,transformOut:Ce}=gl(e),{textColorClasses:he,textColorStyles:xe}=Oe(()=>o.value?.color),d=ue(e,"modelValue",[],l=>ye(je(l)),l=>{const v=Ce(l);return e.multiple?v:v[0]??null}),H=Ke(e),Y=w(()=>!!(e.chips||u.chip)),S=w(()=>Y.value||!!u.selection),D=M(!e.multiple&&!S.value?d.value[0]?.title??"":""),E=M(null),h=w({get:()=>D.value,set:async l=>{if(D.value=l??"",l===null||l===""&&!e.multiple&&!S.value?d.value=[]:!e.multiple&&!S.value&&(d.value=[j(e,l)],T(()=>q.value?.scrollToIndex(0))),l&&e.multiple&&e.delimiters?.length){const v=e.delimiters.map(We).join("|"),x=l.split(new RegExp(`(?:${v})+`));if(x.length>1){for(let n of x)n=n.trim(),n&&(k(j(e,n)),await T());D.value=""}}l||(f.value=-1),C.value=!l}}),_e=w(()=>typeof e.counterValue=="function"?e.counterValue(d.value):typeof e.counterValue=="number"?e.counterValue:e.multiple?d.value.length:h.value.length),{filteredItems:J,getMatches:Ie}=fl(e,se,()=>E.value??(e.alwaysFilter||!C.value?h.value:"")),L=w(()=>e.hideSelected&&E.value===null?J.value.filter(l=>!d.value.some(v=>v.value===l.value)):J.value),Q=w(()=>e.hideNoData&&!L.value.length||H.isReadonly.value||H.isDisabled.value),Z=ue(e,"menu"),y=w({get:()=>Z.value,set:l=>{Z.value&&!l&&W.value?.ΨopenChildren.size||l&&Q.value||(Z.value=l)}}),{menuId:Pe,ariaExpanded:we,ariaControls:Ae,ariaLabel:ie}=rl(e,y);N(D,l=>{G?T(()=>G=!1):m.value&&!y.value&&(y.value=!0),i("update:search",l)}),N(d,l=>{!e.multiple&&!S.value&&(D.value=l[0]?.title??"")});const De=w(()=>d.value.map(l=>l.value)),ee=w(()=>(e.autoSelectFirst===!0||e.autoSelectFirst==="exact"&&h.value===L.value[0]?.title)&&L.value.length>0&&!C.value&&!B.value),le=A(),ke=cl(le,o);function Se(l){G=!0,T(()=>G=!1),e.openOnClear&&(y.value=!0)}function Fe(){Q.value||(y.value=!0)}function Le(l){Q.value||(m.value&&(l.preventDefault(),l.stopPropagation()),y.value=!y.value)}function Re(l){(re(l)||l.key==="Backspace")&&o.value?.focus()}function Ue(l){if(He(l)||H.isReadonly.value)return;const v=o.value?.selectionStart,x=d.value.length;if(["Enter","ArrowDown","ArrowUp"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(y.value=!0),["Escape"].includes(l.key)&&(y.value=!1),ee.value&&["Enter","Tab"].includes(l.key)&&!d.value.some(n=>{let{value:r}=n;return r===L.value[0].value})&&k(J.value[0]),l.key==="ArrowDown"&&ee.value&&le.value?.focus("next"),l.key==="Enter"&&h.value&&(k(j(e,h.value),!0,!0),S.value&&(D.value="")),["Backspace","Delete"].includes(l.key)){if(!e.multiple&&S.value&&d.value.length>0&&!h.value)return k(d.value[0],!1);if(~f.value){l.preventDefault();const n=f.value;k(d.value[f.value],!1),f.value=n>=x-1?x-2:n}else l.key==="Backspace"&&!h.value&&(f.value=x-1);return}if(e.multiple)if(l.key==="ArrowLeft"){if(f.value<0&&v&&v>0)return;const n=f.value>-1?f.value-1:x-1;d.value[n]?f.value=n:(f.value=-1,o.value?.setSelectionRange(h.value.length,h.value.length))}else if(l.key==="ArrowRight"){if(f.value<0)return;const n=f.value+1;d.value[n]?f.value=n:(f.value=-1,o.value?.setSelectionRange(0,0))}else~f.value&&re(l)&&(f.value=-1)}function Me(){e.eager&&q.value?.calculateVisibleItems()}function Te(){m.value&&o.value?.focus(),C.value=!0,E.value=null}function k(l){let v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(!(!l||l.props.disabled))if(e.multiple){const n=d.value.findIndex(V=>(e.valueComparator||me)(V.value,l.value)),r=v??!~n;if(~n){const V=r?[...d.value,l]:[...d.value];V.splice(n,1),d.value=V}else r&&(d.value=[...d.value,l]);e.clearOnSelect&&(h.value="")}else{const n=v!==!1;d.value=n?[l]:[],(!C.value||e.alwaysFilter)&&D.value&&(E.value=D.value),D.value=n&&!S.value?l.title:"",T(()=>{y.value=x,C.value=!0})}}function Ne(l){m.value=!0,setTimeout(()=>{B.value=!0})}function $e(l){B.value=!1}return N(m,(l,v)=>{if(!(l||l===v)&&(f.value=-1,y.value=!1,h.value)){if(e.multiple){k(j(e,h.value));return}if(!S.value)return;d.value.some(x=>{let{title:n}=x;return n===h.value})?D.value="":k(j(e,h.value))}}),N(y,l=>{if(!e.hideSelected&&l&&d.value.length&&C.value){const v=L.value.findIndex(x=>d.value.some(n=>(e.valueComparator||me)(n.value,x.value)));Qe&&window.requestAnimationFrame(()=>{v>=0&&q.value?.scrollToIndex(v)})}l&&(E.value=null)}),N(se,(l,v)=>{y.value||m.value&&!v.length&&l.length&&(y.value=!0)}),qe(()=>{const l=!!(!e.hideNoData||L.value.length||u["prepend-item"]||u["append-item"]||u["no-data"]),v=d.value.length>0,x=fe.filterProps(e);return t(fe,R({ref:o},x,{modelValue:h.value,"onUpdate:modelValue":n=>h.value=n,focused:m.value,"onUpdate:focused":n=>m.value=n,validationValue:d.externalValue,counterValue:_e.value,dirty:v,class:["v-combobox",{"v-combobox--active-menu":y.value,"v-combobox--chips":!!e.chips,"v-combobox--selection-slot":!!S.value,"v-combobox--selecting-index":f.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0},e.class],style:e.style,readonly:H.isReadonly.value,placeholder:v?void 0:e.placeholder,"onClick:clear":Se,"onMousedown:control":Fe,onKeydown:Ue,"aria-expanded":we.value,"aria-controls":Ae.value}),{...u,default:()=>p(te,null,[t(Ze,R({id:Pe.value,ref:W,modelValue:y.value,"onUpdate:modelValue":n=>y.value=n,activator:"parent",contentClass:"v-combobox__content",disabled:Q.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,onAfterEnter:Me,onAfterLeave:Te},e.menuProps),{default:()=>[l&&t(yl,R({ref:le,filterable:!0,selected:De.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:n=>n.preventDefault(),selectable:!0,onKeydown:Re,onFocusin:Ne,onFocusout:$e,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},ke,e.listProps),{default:()=>[u["prepend-item"]?.(),!L.value.length&&!e.hideNoData&&(u["no-data"]?.()??t(ae,{key:"no-data",title:s(e.noDataText)},null)),t(pl,{ref:q,renderless:!0,items:L.value,itemKey:"value"},{default:n=>{let{item:r,index:V,itemRef:X}=n;const z=R(r.props,{ref:X,key:r.value,active:ee.value&&V===0?!0:void 0,onClick:()=>k(r,null)});return r.type==="divider"?u.divider?.({props:r.raw,index:V})??t(hl,R(r.props,{key:`divider-${V}`}),null):r.type==="subheader"?u.subheader?.({props:r.raw,index:V})??t(xl,R(r.props,{key:`subheader-${V}`}),null):u.item?.({item:r,index:V,props:z})??t(ae,R(z,{role:"option"}),{prepend:O=>{let{isSelected:P}=O;return p(te,null,[e.multiple&&!e.hideSelected?t(_l,{key:r.value,modelValue:P,ripple:!1,tabindex:"-1",onClick:Be=>Be.preventDefault()},null):void 0,r.props.prependAvatar&&t(Ve,{image:r.props.prependAvatar},null),r.props.prependIcon&&t(ce,{icon:r.props.prependIcon},null)])},title:()=>C.value?r.title:Vl("v-combobox",r.title,Ie(r)?.title)})}}),u["append-item"]?.()]})]}),d.value.map((n,r)=>{function V(P){P.stopPropagation(),P.preventDefault(),k(n,!1)}const X={"onClick:close":V,onKeydown(P){P.key!=="Enter"&&P.key!==" "||(P.preventDefault(),P.stopPropagation(),V(P))},onMousedown(P){P.preventDefault(),P.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},z=Y.value?!!u.chip:!!u.selection,O=z?el(Y.value?u.chip({item:n,index:r,props:X}):u.selection({item:n,index:r})):void 0;if(!(z&&!O))return p("div",{key:n.value,class:be(["v-combobox__selection",r===f.value&&["v-combobox__selection--selected",he.value]]),style:ll(r===f.value?xe.value:{})},[Y.value?u.chip?t(tl,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:n.title}}},{default:()=>[O]}):t(ge,R({key:"chip",closable:e.closableChips,size:"small",text:n.title,disabled:n.props.disabled},X),null):O??p("span",{class:"v-combobox__selection-text"},[n.title,e.multiple&&r<d.value.length-1&&p("span",{class:"v-combobox__selection-comma"},[b(",")])])])})]),"append-inner":function(){for(var n=arguments.length,r=new Array(n),V=0;V<n;V++)r[V]=arguments[V];return p(te,null,[u["append-inner"]?.(...r),(!e.hideNoData||e.items.length)&&e.menuIcon?t(ce,{class:"v-combobox__menu-icon",color:o.value?.fieldIconColor,icon:e.menuIcon,onMousedown:Le,onClick:Xe,"aria-label":ie.value,title:ie.value,tabindex:"-1"},null):void 0])}})}),Ge({isFocused:m,isPristine:C,menu:y,search:h,selectionIndex:f,filteredItems:J,select:k},o)}}),K=Object.assign({name:"AppCombobox",inheritAttrs:!1},{__name:"AppCombobox",setup(e){const a=w(()=>{const s=de().id,o=ol();return s?`app-combobox-${s}`:o}),i=w(()=>de().label);return(u,s)=>(F(),al("div",{class:be(["app-combobox flex-grow-1",u.$attrs.class])},[g(i)?(F(),U(nl,{key:0,for:g(a),class:"mb-1 text-body-2",text:g(i)},null,8,["for","text"])):sl("",!0),t($,pe(ve({...u.$attrs,class:null,label:void 0,variant:"outlined",id:g(a),menuProps:{contentClass:["app-inner-list","app-combobox__content","v-combobox__content",u.$attrs.multiple!==void 0?"v-list-select-multiple":""]}})),il({_:2},[ul(u.$slots,(o,m)=>({name:m,fn:c(C=>[ml(u.$slots,m,pe(ve(C||{})))])}))]),1040)],2))}}),wl={__name:"DemoComboboxClearable",setup(e){const a=A(["Vuetify","Programming"]),i=["Programming","Design","Vue","Vuetify"];return(u,s)=>{const o=K;return F(),U(o,{modelValue:g(a),"onUpdate:modelValue":s[0]||(s[0]=m=>I(a)?a.value=m:null),items:i,label:"Combobox",multiple:"",placeholder:"deployment",clearable:""},null,8,["modelValue"])}}},Al={__name:"DemoComboboxNoDataWithChips",setup(e){const a=["Gaming","Programming","Vue","Vuetify"],i=A(["Vuetify"]),u=A(null);return N(i,s=>{s.length>5&&T(()=>i.value.pop())}),(s,o)=>{const m=K;return F(),U(m,{modelValue:g(i),"onUpdate:modelValue":o[0]||(o[0]=C=>I(i)?i.value=C:null),"search-input":g(u),"onUpdate:searchInput":o[1]||(o[1]=C=>I(u)?u.value=C:null),items:a,"hide-selected":"","hide-no-data":!1,placeholder:"deployment",hint:"Maximum of 5 tags",label:"Add some tags",multiple:"","persistent-hint":""},{"no-data":c(()=>[t(ae,null,{default:c(()=>[t(Cl,null,{default:c(()=>[o[2]||(o[2]=b(' No results matching "',-1)),p("strong",null,oe(g(u)),1),o[3]||(o[3]=b('". Press ',-1)),o[4]||(o[4]=p("kbd",null,"enter",-1)),o[5]||(o[5]=b(" to create a new one ",-1))]),_:1})]),_:1})]),_:1},8,["modelValue","search-input"])}}},Dl={__name:"DemoComboboxMultiple",setup(e){const a=A(["Vuetify","Programming"]),i=["Programming","Design","Vue","Vuetify"];return(u,s)=>{const o=K;return F(),U(ne,null,{default:c(()=>[t(_,{cols:"12"},{default:c(()=>[t(o,{modelValue:g(a),"onUpdate:modelValue":s[0]||(s[0]=m=>I(a)?a.value=m:null),items:i,placeholder:"deployment",label:"Select a favorite activity or create a new one",multiple:""},null,8,["modelValue"])]),_:1}),t(_,{cols:"12"},{default:c(()=>[t(o,{modelValue:g(a),"onUpdate:modelValue":s[1]||(s[1]=m=>I(a)?a.value=m:null),items:i,placeholder:"deployment",label:"I use chips",multiple:"",chips:""},null,8,["modelValue"])]),_:1}),t(_,{cols:"12"},{default:c(()=>[t(o,{modelValue:g(a),"onUpdate:modelValue":s[2]||(s[2]=m=>I(a)?a.value=m:null),placeholder:"deployment",label:"I'm readonly",chips:"",multiple:"",readonly:""},null,8,["modelValue"])]),_:1}),t(_,{cols:"12"},{default:c(()=>[t(o,{modelValue:g(a),"onUpdate:modelValue":s[3]||(s[3]=m=>I(a)?a.value=m:null),items:i,placeholder:"deployment",label:"I use selection slot",multiple:""},{selection:c(({item:m})=>[t(ge,{size:"small"},{prepend:c(()=>[t(Ve,{start:"",color:"primary",size:"16"},{default:c(()=>[b(oe(String(m.title).charAt(0).toUpperCase()),1)]),_:2},1024)]),default:c(()=>[b(" "+oe(m.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1})]),_:1})}}},kl={__name:"DemoComboboxVariant",setup(e){const a=A(["Programming"]),i=["Programming","Design","Vue","Vuetify"];return(u,s)=>(F(),U(ne,null,{default:c(()=>[t(_,{cols:"12"},{default:c(()=>[t($,{modelValue:g(a),"onUpdate:modelValue":s[0]||(s[0]=o=>I(a)?a.value=o:null),items:i,multiple:"",placeholder:"deployment",variant:"solo",label:"solo"},null,8,["modelValue"])]),_:1}),t(_,{cols:"12"},{default:c(()=>[t($,{modelValue:g(a),"onUpdate:modelValue":s[1]||(s[1]=o=>I(a)?a.value=o:null),multiple:"",items:i,placeholder:"deployment",variant:"outlined",label:"Outlined"},null,8,["modelValue"])]),_:1}),t(_,{cols:"12"},{default:c(()=>[t($,{modelValue:g(a),"onUpdate:modelValue":s[2]||(s[2]=o=>I(a)?a.value=o:null),multiple:"",items:i,placeholder:"deployment",variant:"underlined",label:"Underlined"},null,8,["modelValue"])]),_:1}),t(_,{cols:"12"},{default:c(()=>[t($,{modelValue:g(a),"onUpdate:modelValue":s[3]||(s[3]=o=>I(a)?a.value=o:null),multiple:"",items:i,placeholder:"deployment",variant:"filled",label:"Filled"},null,8,["modelValue"])]),_:1}),t(_,{cols:"12"},{default:c(()=>[t($,{modelValue:g(a),"onUpdate:modelValue":s[4]||(s[4]=o=>I(a)?a.value=o:null),multiple:"",items:i,variant:"plain",placeholder:"deployment",label:"Plain"},null,8,["modelValue"])]),_:1})]),_:1}))}},Sl={__name:"DemoComboboxDensity",setup(e){const a=A(["Vuetify","Programming"]),i=["Programming","Design","Vue","Vuetify"];return(u,s)=>{const o=K;return F(),U(o,{modelValue:g(a),"onUpdate:modelValue":s[0]||(s[0]=m=>I(a)?a.value=m:null),items:i,label:"Combobox",density:"compact",placeholder:"deployment",multiple:""},null,8,["modelValue"])}}},Fl={__name:"DemoComboboxBasic",setup(e){const a=A("Programming"),i=["Programming","Design","Vue","Vuetify"];return(u,s)=>{const o=K;return F(),U(o,{modelValue:g(a),"onUpdate:modelValue":s[0]||(s[0]=m=>I(a)?a.value=m:null),items:i,placeholder:"deployment"},null,8,["modelValue"])}}},Ll={ts:`<script lang="ts" setup>
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
`},Rl={ts:`<script lang="ts" setup>
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
`},at={__name:"combobox",setup(e){return(a,i)=>{const u=Fl,s=Il,o=Sl,m=kl,C=Dl,B=Al,W=wl;return F(),U(ne,{class:"match-height"},{default:c(()=>[t(_,{cols:"12",md:"6"},{default:c(()=>[t(s,{title:"Basic",code:Ll},{default:c(()=>[i[0]||(i[0]=p("p",null,"With Combobox, you can allow a user to create new values that may not be present in a provided items list.",-1)),t(u)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:c(()=>[t(s,{title:"Density",code:Ul},{default:c(()=>[i[1]||(i[1]=p("p",null,[b(" You can use "),p("code",null,"Density"),b(" prop to reduce combobox height and lower max height of list items. Available options are: "),p("code",null,"default"),b(", "),p("code",null,"comfortable"),b(", and "),p("code",null,"compact"),b(". ")],-1)),t(o)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:c(()=>[t(s,{title:"Variant",code:Nl},{default:c(()=>[i[2]||(i[2]=p("p",null,[b("Use "),p("code",null,"solo"),b(", "),p("code",null,"outlined"),b(", "),p("code",null,"underlined"),b(", "),p("code",null,"filled"),b(" and "),p("code",null,"plain"),b(" options of "),p("code",null,"variant"),b(" prop to change the look of combobox. ")],-1)),t(m)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:c(()=>[t(s,{title:"Multiple",code:Ml},{default:c(()=>[i[3]||(i[3]=p("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1)),t(C)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:c(()=>[t(s,{title:"No data with chips",code:Tl},{default:c(()=>[i[4]||(i[4]=p("p",null,"Previously known as tags - user is allowed to enter more than 1 value",-1)),t(B)]),_:1},8,["code"])]),_:1}),t(_,{cols:"12",md:"6"},{default:c(()=>[t(s,{title:"Clearable",code:Rl},{default:c(()=>[i[5]||(i[5]=p("p",null,[b("Use "),p("code",null,"clearable"),b(" prop to clear combobox.")],-1)),t(W)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{at as default};
