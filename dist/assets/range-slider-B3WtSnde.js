import{ai as J,r as b,am as K,cG as q,al as Q,cH as X,ci as Z,N as z,R as ee,cl as N,b as u,p as le,ca as ae,W as te,cI as se,cm as ue,cJ as oe,d as n,cK as ne,cL as W,V as re,F as ie,cM as A,o as S,f as R,aD as $,l as x,e as d,ag as de,s as p}from"./index-DccbuPwz.js";import{_ as ce}from"./AppCardCode-CHE6Aet5.js";import{V as me,a as k}from"./VRow-B1ACgUNc.js";import"./vue3-perfect-scrollbar-CxAoqK5P.js";import"./VCard-DP8udyKQ.js";import"./VAvatar-C8hu69He.js";import"./VCardText-Bbr9Uwdl.js";import"./VDivider-CIVGhrtu.js";const pe=te({...oe(),...ue(),...se(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),w=J()({name:"VRangeSlider",props:pe(),emits:{"update:focused":l=>!0,"update:modelValue":l=>!0,end:l=>!0,start:l=>!0},setup(l,s){let{slots:a,emit:o}=s;const e=b(),i=b(),V=b(),{rtlClasses:P}=K();function U(v){if(!e.value||!i.value)return;const m=A(v,e.value.$el,l.direction),r=A(v,i.value.$el,l.direction),f=Math.abs(m),y=Math.abs(r);return f<y||f===y&&m<0?e.value.$el:i.value.$el}const T=q(l),t=Q(l,"modelValue",void 0,v=>v?.length?v.map(m=>T.roundValue(m)):[0,0]),{activeThumbRef:c,hasLabels:O,max:F,min:D,mousePressed:Y,onSliderMousedown:E,onSliderTouchstart:G,position:B,trackContainerRef:H,disabled:h,readonly:_}=X({props:l,steps:T,onSliderStart:()=>{if(h.value||_.value){c.value?.blur();return}o("start",t.value)},onSliderEnd:v=>{let{value:m}=v;if(h.value||_.value)c.value?.blur();else{const r=c.value===e.value?.$el?[m,t.value[1]]:[t.value[0],m];!l.strict&&r[0]<r[1]&&(t.value=r)}o("end",t.value)},onSliderMove:v=>{let{value:m}=v;const[r,f]=t.value;if(h.value||_.value){c.value?.blur();return}!l.strict&&r===f&&r!==D.value&&(c.value=m>r?i.value?.$el:e.value?.$el,c.value?.focus()),c.value===e.value?.$el?t.value=[Math.min(m,f),f]:t.value=[r,Math.max(r,m)]},getActiveThumb:U}),{isFocused:C,focus:M,blur:I}=Z(l),j=z(()=>B(t.value[0])),L=z(()=>B(t.value[1]));return ee(()=>{const v=N.filterProps(l),m=!!(l.label||a.label||a.prepend);return u(N,le({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!a["tick-label"]||O.value,"v-slider--focused":C.value,"v-slider--pressed":Y.value,"v-slider--disabled":h.value},P.value,l.class],style:l.style,ref:V},v,{focused:C.value}),{...a,prepend:m?r=>n(ie,null,[a.label?.(r)??(l.label?u(re,{class:"v-slider__label",text:l.label},null):void 0),a.prepend?.(r)]):void 0,default:r=>{let{id:f,messagesId:y}=r;return n("div",{class:"v-slider__container",onMousedown:_.value?void 0:E,onTouchstartPassive:_.value?void 0:G},[n("input",{id:`${f.value}_start`,name:l.name||f.value,disabled:h.value,readonly:_.value,tabindex:"-1",value:t.value[0]},null),n("input",{id:`${f.value}_stop`,name:l.name||f.value,disabled:h.value,readonly:_.value,tabindex:"-1",value:t.value[1]},null),u(ne,{ref:H,start:j.value,stop:L.value},{"tick-label":a["tick-label"]}),u(W,{ref:e,"aria-describedby":y.value,focused:C&&c.value===e.value?.$el,modelValue:t.value[0],"onUpdate:modelValue":g=>t.value=[g,t.value[1]],onFocus:g=>{M(),c.value=e.value?.$el,F.value!==D.value&&t.value[0]===t.value[1]&&t.value[1]===D.value&&g.relatedTarget!==i.value?.$el&&(e.value?.$el.blur(),i.value?.$el.focus())},onBlur:()=>{I(),c.value=void 0},min:D.value,max:t.value[1],position:j.value,ripple:l.ripple},{"thumb-label":a["thumb-label"]}),u(W,{ref:i,"aria-describedby":y.value,focused:C&&c.value===i.value?.$el,modelValue:t.value[1],"onUpdate:modelValue":g=>t.value=[t.value[0],g],onFocus:g=>{M(),c.value=i.value?.$el,F.value!==D.value&&t.value[0]===t.value[1]&&t.value[0]===F.value&&g.relatedTarget!==e.value?.$el&&(i.value?.$el.blur(),e.value?.$el.focus())},onBlur:()=>{I(),c.value=void 0},min:t.value[0],max:F.value,position:L.value,ripple:l.ripple},{"thumb-label":a["thumb-label"]})])}})}),ae({focus:()=>e.value?.$el.focus()},V)}}),ve={__name:"DemoRangeSliderVertical",setup(l){const s=b([20,40]);return(a,o)=>(S(),R(w,{modelValue:x(s),"onUpdate:modelValue":o[0]||(o[0]=e=>$(s)?s.value=e:null),direction:"vertical"},null,8,["modelValue"]))}},fe={__name:"DemoRangeSliderThumbLabel",setup(l){const s=["Winter","Spring","Summer","Fall"],a=["tabler-snowflake","tabler-leaf","tabler-flame","tabler-droplet"],o=b([1,2]);return(e,i)=>(S(),R(w,{modelValue:x(o),"onUpdate:modelValue":i[0]||(i[0]=V=>$(o)?o.value=V:null),tick:s,min:"0",max:"3",step:1,"show-ticks":"always","thumb-label":"","tick-size":"4"},{"thumb-label":d(({modelValue:V})=>[u(de,{icon:a[V]},null,8,["icon"])]),_:1},8,["modelValue"]))}},be={__name:"DemoRangeSliderStep",setup(l){const s=b([20,40]);return(a,o)=>(S(),R(w,{modelValue:x(s),"onUpdate:modelValue":o[0]||(o[0]=e=>$(s)?s.value=e:null),step:"10"},null,8,["modelValue"]))}},Ve={__name:"DemoRangeSliderColor",setup(l){const s=b([10,60]);return(a,o)=>(S(),R(w,{modelValue:x(s),"onUpdate:modelValue":o[0]||(o[0]=e=>$(s)?s.value=e:null),color:"success"},null,8,["modelValue"]))}},_e={__name:"DemoRangeSliderDisabled",setup(l){const s=b([30,60]);return(a,o)=>(S(),R(w,{modelValue:x(s),"onUpdate:modelValue":o[0]||(o[0]=e=>$(s)?s.value=e:null),disabled:"",label:"Disabled"},null,8,["modelValue"]))}},ge={__name:"DemoRangeSliderBasic",setup(l){const s=b([10,60]);return(a,o)=>(S(),R(w,{modelValue:x(s),"onUpdate:modelValue":o[0]||(o[0]=e=>$(s)?s.value=e:null)},null,8,["modelValue"]))}},Se={ts:`<script setup lang="ts">
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider v-model="sliderValues" />
</template>
`},Re={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  10,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
  />
</template>
`},he={ts:`<script lang="ts" setup>
const slidersValues = ref([30, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`,js:`<script setup>
const slidersValues = ref([
  30,
  60,
])
<\/script>

<template>
  <VRangeSlider
    v-model="slidersValues"
    disabled
    label="Disabled"
  />
</template>
`},ke={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    step="10"
  />
</template>
`},$e={ts:`<script lang="ts" setup>
const seasons = ['Winter', 'Spring', 'Summer', 'Fall']
const icons = ['tabler-snowflake', 'tabler-leaf', 'tabler-flame', 'tabler-droplet']
const sliderValues = ref([1, 2])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`,js:`<script setup>
const seasons = [
  'Winter',
  'Spring',
  'Summer',
  'Fall',
]

const icons = [
  'tabler-snowflake',
  'tabler-leaf',
  'tabler-flame',
  'tabler-droplet',
]

const sliderValues = ref([
  1,
  2,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    :tick="seasons"
    min="0"
    max="3"
    :step="1"
    show-ticks="always"
    thumb-label
    tick-size="4"
  >
    <template #thumb-label="{ modelValue }">
      <VIcon :icon="icons[modelValue]" />
    </template>
  </VRangeSlider>
</template>
`},xe={ts:`<script lang="ts" setup>
const sliderValues = ref([20, 40])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`,js:`<script setup>
const sliderValues = ref([
  20,
  40,
])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    direction="vertical"
  />
</template>
`},Be={__name:"range-slider",setup(l){return(s,a)=>{const o=ge,e=ce,i=_e,V=Ve,P=be,U=fe,T=ve;return S(),R(me,null,{default:d(()=>[u(k,{cols:"12",md:"6"},{default:d(()=>[u(e,{title:"Basic",code:Se},{default:d(()=>[a[0]||(a[0]=n("p",null,[p("The "),n("code",null,"v-slider"),p(" component is a better visualization of the number input.")],-1)),u(o)]),_:1},8,["code"])]),_:1}),u(k,{cols:"12",md:"6"},{default:d(()=>[u(e,{title:"Disabled",code:he},{default:d(()=>[a[1]||(a[1]=n("p",null,[p("You cannot interact with "),n("code",null,"disabled"),p(" sliders.")],-1)),u(i)]),_:1},8,["code"])]),_:1}),u(k,{cols:"12",md:"6"},{default:d(()=>[u(e,{title:"Color",code:Re},{default:d(()=>[a[2]||(a[2]=n("p",null,[p("Use "),n("code",null,"color"),p(" prop to the sets the slider color. "),n("code",null,"track-color"),p(" prop to sets the color of slider's unfilled track.")],-1)),u(V)]),_:1},8,["code"])]),_:1}),u(k,{cols:"12",md:"6"},{default:d(()=>[u(e,{title:"Step",code:ke},{default:d(()=>[a[3]||(a[3]=n("p",null,[n("code",null,"v-range-slider"),p(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1)),u(P)]),_:1},8,["code"])]),_:1}),u(k,{cols:"12",md:"6"},{default:d(()=>[u(e,{title:"Thumb label",code:$e},{default:d(()=>[a[4]||(a[4]=n("p",null,[p(" Using the "),n("code",null,"tick-labels"),p(" prop along with the "),n("code",null,"thumb-label"),p(" slot, you can create a very customized solution. ")],-1)),u(U)]),_:1},8,["code"])]),_:1}),u(k,{cols:"12",md:"6"},{default:d(()=>[u(e,{title:"Vertical",code:xe},{default:d(()=>[a[5]||(a[5]=n("p",null,[p("You can use the "),n("code",null,"vertical"),p(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1)),u(T)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Be as default};
