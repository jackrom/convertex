import{V as r}from"./VCol.55ec6a95.js";import{V as u}from"./VRow.6bece164.js";import{r as o,o as V,b as _,x as l,p as e,m as t,z as s}from"./index.f5778ade.js";/* empty css              */const b={ts:`<script setup lang="ts">
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
`},f={ts:`<script lang="ts" setup>
const sliderValues = ref([10, 60])
<\/script>

<template>
  <VRangeSlider
    v-model="sliderValues"
    color="success"
    track-color="secondary"
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
    track-color="secondary"
  />
</template>
`},h={ts:`<script lang="ts" setup>
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
`},g={ts:`<script lang="ts" setup>
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
`},S={ts:`<script lang="ts" setup>
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
`},R={ts:`<script lang="ts" setup>
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
`},v=t("p",null,[s("The "),t("code",null,"v-slider"),s(" component is a better visualization of the number input.")],-1),D=t("p",null,[s("You cannot interact with "),t("code",null,"disabled"),s(" sliders.")],-1),k=t("p",null,[s("Use "),t("code",null,"color"),s(" prop to the sets the slider color. "),t("code",null,"track-color"),s(" prop to sets the color of slider's unfilled track.")],-1),w=t("p",null,[t("code",null,"v-range-slider"),s(" can have steps other than 1. This can be helpful for some applications where you need to adjust values with more or less accuracy.")],-1),C=t("p",null,[s(" Using the "),t("code",null,"tick-labels"),s(" prop along with the "),t("code",null,"thumb-label"),s(" slot, you can create a very customized solution. ")],-1),y=t("p",null,[s("You can use the "),t("code",null,"vertical"),s(" prop to switch sliders to a vertical orientation. If you need to change the height of the slider, use css.")],-1),N={__name:"range-slider",setup(j){return(x,B)=>{const c=o("DemoRangeSliderBasic"),a=o("AppCardCode"),i=o("DemoRangeSliderDisabled"),n=o("DemoRangeSliderColor"),d=o("DemoRangeSliderStep"),p=o("DemoRangeSliderThumbLabel"),m=o("DemoRangeSliderVertical");return V(),_(u,null,{default:l(()=>[e(r,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Basic",code:b},{default:l(()=>[v,e(c)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Disabled",code:h},{default:l(()=>[D,e(i)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Color",code:f},{default:l(()=>[k,e(n)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Step",code:g},{default:l(()=>[w,e(d)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Thumb label",code:S},{default:l(()=>[C,e(p)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:l(()=>[e(a,{title:"Vertical",code:R},{default:l(()=>[y,e(m)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{N as default};
