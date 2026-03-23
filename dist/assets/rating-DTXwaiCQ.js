import{ai as E,a3 as X,bn as q,al as O,N as R,O as W,bX as Y,M as G,ch as J,R as K,b as t,H as Q,s as T,W as Z,a7 as A,bh as ee,b4 as te,bY as ne,bU as le,X as ae,d as o,F as D,n as H,a4 as oe,q as m,r as x,o as g,f as V,e as s,ag as se,aB as b,k as _,c as L,ab as ie,t as re,h as ce}from"./index-iAOwx50P.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as me}from"./AppCardCode-PHYC0JDX.js";import{V as de,a as f}from"./VRow-H6mCO7b9.js";import"./vue3-perfect-scrollbar-D3VptGaw.js";import"./VCard-BcC__Jvt.js";import"./VAvatar-DJB0frds.js";import"./VCardText-BVasA2s4.js";import"./VDivider-XedqS4fC.js";const ue=Z({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:A,default:"$ratingEmpty"},fullIcon:{type:A,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...ae(),...le(),...ne(),...te(),...ee()},"VRating"),u=E()({name:"VRating",props:ue(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const{t:i}=X(),{themeClasses:l}=q(e),p=O(e,"modelValue"),v=R(()=>W(parseFloat(p.value),0,Number(e.length))),S=R(()=>Y(Number(e.length),1)),I=R(()=>S.value.flatMap(r=>e.halfIncrements?[r-.5,r]:[r])),y=G(-1),C=R(()=>I.value.map(r=>{const d=e.hover&&y.value>-1,c=v.value>=r,h=y.value>=r,M=(d?h:c)?e.fullIcon:e.emptyIcon,P=e.activeColor??e.color,k=c||h?P:e.color;return{isFilled:c,isHovered:h,icon:M,color:k}})),F=R(()=>[0,...I.value].map(r=>{function d(){y.value=r}function c(){y.value=-1}function h(){e.disabled||e.readonly||(p.value=v.value===r&&e.clearable?0:r)}return{onMouseenter:e.hover?d:void 0,onMouseleave:e.hover?c:void 0,onClick:h}})),B=J(),$=R(()=>e.name??`v-rating-${B}`);function w(r){let{value:d,index:c,showStar:h=!0}=r;const{onMouseenter:j,onMouseleave:M,onClick:P}=F.value[c+1],k=`${$.value}-${String(d).replace(".","-")}`,N={color:C.value[c]?.color,density:e.density,disabled:e.disabled,icon:C.value[c]?.icon,ripple:e.ripple,size:e.size,variant:"plain"};return o(D,null,[o("label",{for:k,class:T({"v-rating__item--half":e.halfIncrements&&d%1>0,"v-rating__item--full":e.halfIncrements&&d%1===0}),onMouseenter:j,onMouseleave:M,onClick:P},[o("span",{class:"v-rating__hidden"},[i(e.itemAriaLabel,d,e.length)]),h?n.item?n.item({...C.value[c],props:N,value:d,index:c,rating:v.value}):t(oe,H({"aria-label":i(e.itemAriaLabel,d,e.length)},N),null):void 0]),o("input",{class:"v-rating__hidden",name:$.value,id:k,type:"radio",value:d,checked:v.value===d,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function U(r){return n["item-label"]?n["item-label"](r):r.label?o("span",null,[r.label]):o("span",null,[m(" ")])}return K(()=>{const r=!!e.itemLabels?.length||n["item-label"];return t(e.tag,{class:T(["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},l.value,e.class]),style:Q(e.style)},{default:()=>[t(w,{value:0,index:-1,showStar:!1},null),S.value.map((d,c)=>o("div",{class:"v-rating__wrapper"},[r&&e.itemLabelPosition==="top"?U({value:d,index:c,label:e.itemLabels?.[c]}):void 0,o("div",{class:"v-rating__item"},[e.halfIncrements?o(D,null,[t(w,{value:d-.5,index:c*2},null),t(w,{value:d,index:c*2+1},null)]):t(w,{value:d,index:c},null)]),r&&e.itemLabelPosition==="bottom"?U({value:d,index:c,label:e.itemLabels?.[c]}):void 0]))]})}),{}}}),ge={__name:"DemoRatingItemSlot",setup(e){const a=x(4.5);return(n,i)=>(g(),V(u,{modelValue:_(a),"onUpdate:modelValue":i[0]||(i[0]=l=>b(a)?a.value=l:null)},{item:s(l=>[t(se,H(l,{size:25,color:l.isFilled?"success":"secondary",class:"me-3",icon:l.isFilled?"tabler-mood-smile-beam":"tabler-mood-sad"}),null,16,["color","icon"])]),_:1},8,["modelValue"]))}},pe={__name:"DemoRatingIncremented",setup(e){const a=x(4.5);return(n,i)=>(g(),V(u,{modelValue:_(a),"onUpdate:modelValue":i[0]||(i[0]=l=>b(a)?a.value=l:null),"half-increments":"",hover:""},null,8,["modelValue"]))}},fe={};function _e(e,a){return g(),V(u,{hover:""})}const ve=z(fe,[["render",_e]]),be={};function Ve(e,a){return g(),V(u,{readonly:"","model-value":4})}const he=z(be,[["render",Ve]]),ye={};function Re(e,a){return g(),V(u,{clearable:""})}const xe=z(ye,[["render",Re]]),Ce={class:"font-weight-medium mb-0"},ze={__name:"DemoRatingLength",setup(e){const a=x(5),n=x(2);return(i,l)=>(g(),L(D,null,[l[2]||(l[2]=o("div",{class:"text-caption"}," Custom length ",-1)),t(ie,{modelValue:_(a),"onUpdate:modelValue":l[0]||(l[0]=p=>b(a)?a.value=p:null),min:1,max:7},null,8,["modelValue"]),t(u,{modelValue:_(n),"onUpdate:modelValue":l[1]||(l[1]=p=>b(n)?n.value=p:null),length:_(a)},null,8,["modelValue","length"]),o("p",Ce," Model: "+re(_(n)),1)],64))}},Se={class:"d-flex flex-column"},Ie={__name:"DemoRatingSize",setup(e){const a=x(4);return(n,i)=>(g(),L("div",Se,[t(u,{modelValue:_(a),"onUpdate:modelValue":i[0]||(i[0]=l=>b(a)?a.value=l:null),size:"x-small"},null,8,["modelValue"]),t(u,{modelValue:_(a),"onUpdate:modelValue":i[1]||(i[1]=l=>b(a)?a.value=l:null),size:"small"},null,8,["modelValue"]),t(u,{modelValue:_(a),"onUpdate:modelValue":i[2]||(i[2]=l=>b(a)?a.value=l:null),size:"large"},null,8,["modelValue"])]))}},$e={class:"d-flex flex-column"},we={__name:"DemoRatingColors",setup(e){const a=x(4),n=["primary","secondary","success","info","warning","error"];return(i,l)=>(g(),L("div",$e,[(g(),L(D,null,ce(n,p=>t(u,{key:p,modelValue:_(a),"onUpdate:modelValue":l[0]||(l[0]=v=>b(a)?a.value=v:null),color:p},null,8,["modelValue","color"])),64))]))}},ke={};function De(e,a){return g(),V(u,{density:"compact"})}const Le=z(ke,[["render",De]]),Fe={};function Be(e,a){return g(),V(u)}const Me=z(Fe,[["render",Be]]),Pe={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},Ue={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},je={ts:`<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)

const ratingColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`},Ne={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},Te={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},Ae={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`},He={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`},Ee={ts:`<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`,js:`<script setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-medium mb-0">
    Model: {{ rating }}
  </p>
</template>
`},Xe={ts:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`,js:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`},qe={ts:`<script lang="ts" setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating
      v-model="rating"
      size="large"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating
      v-model="rating"
      size="large"
    />
  </div>
</template>
`},tt={__name:"rating",setup(e){return(a,n)=>{const i=Me,l=me,p=Le,v=we,S=Ie,I=ze,y=xe,C=he,F=ve,B=pe,$=ge;return g(),V(de,{class:"match-height"},{default:s(()=>[t(f,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Basic",code:Pe},{default:s(()=>[n[0]||(n[0]=o("p",null,[m("The "),o("code",null,"v-rating"),m(" component provides a simple interface for gathering user feedback.")],-1)),t(i)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Density",code:Ne},{default:s(()=>[n[1]||(n[1]=o("p",null,[m("Control the space occupied by "),o("code",null,"v-rating"),m(" items using the "),o("code",null,"density"),m(" prop.")],-1)),t(p)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Colors",code:je},{default:s(()=>[n[2]||(n[2]=o("p",null,[m("The "),o("code",null,"v-rating"),m(" component can be colored as you want, you can set both selected and not selected colors.")],-1)),t(v)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Size",code:qe},{default:s(()=>[n[3]||(n[3]=o("p",null,[m("Utilize the same sizing classes available in "),o("code",null,"v-icon"),m(" or provide your own with the "),o("code",null,"size"),m(" prop.")],-1)),t(S)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Length",code:Ee},{default:s(()=>[n[4]||(n[4]=o("p",null,[m("Change the number of items by modifying the the "),o("code",null,"length"),m(" prop.")],-1)),t(I)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Clearable",code:Ue},{default:s(()=>[n[5]||(n[5]=o("p",null,[m("Use "),o("code",null,"clearable"),m(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1)),t(y)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Readonly",code:Xe},{default:s(()=>[n[6]||(n[6]=o("p",null,[m("For ratings that are not meant to be changed you can use "),o("code",null,"readonly"),m(" prop.")],-1)),t(C)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Hover",code:Te},{default:s(()=>[n[7]||(n[7]=o("p",null,"Provides visual feedback when hovering over icons",-1)),t(F)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Incremented",code:Ae},{default:s(()=>[n[8]||(n[8]=o("p",null,[m("The "),o("code",null,"half-increments"),m(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1)),t(B)]),_:1},8,["code"])]),_:1}),t(f,{cols:"12",md:"6"},{default:s(()=>[t(l,{title:"Item slot",code:He},{default:s(()=>[n[9]||(n[9]=o("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1)),t($)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{tt as default};
