import{V as a}from"./VCol.4ace162b.js";import{V as w}from"./VRow.92104217.js";import{r as c,o as u,b as S,x as s,p as e,m as t,z as l}from"./index.33948166.js";/* empty css              */const v={ts:`<script lang="ts" setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = (label: boolean) => {
  const convertLabelText = label.toString()

  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`,js:`<script setup>
const toggleSwitch = ref(true)
const toggleFalseSwitch = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="toggleSwitch"
      :label="capitalizedLabel(toggleSwitch)"
    />

    <VSwitch
      v-model="toggleFalseSwitch"
      :label="capitalizedLabel(toggleFalseSwitch)"
    />
  </div>
</template>
`},f={ts:`<script lang="ts" setup>
const selectedSwitch = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
const switches = ref(['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`,js:`<script setup>
const selectedSwitch = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])

const switches = ref([
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-for="item in switches"
      :key="item"
      v-model="selectedSwitch"
      :label="item"
      :value="item"
      :color="item.toLowerCase()"
    />
  </div>
</template>
`},b={ts:`<script lang="ts" setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      inset
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      inset
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`,js:`<script setup>
const insetSwitch1 = ref(true)
const insetSwitch2 = ref(false)
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="insetSwitch1"
      inset
      :label="\`Switch 1: \${insetSwitch1.toString()}\`"
    />
    <VSwitch
      v-model="insetSwitch2"
      inset
      :label="\`Switch 2: \${insetSwitch2.toString()}\`"
    />
  </div>
</template>
`},g={ts:`<script lang="ts" setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        size="24"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`,js:`<script setup>
const switchMe = ref(false)
<\/script>

<template>
  <VSwitch v-model="switchMe">
    <template #label>
      Turn on the progress: <VProgressCircular
        :indeterminate="switchMe"
        size="24"
        class="ms-2"
      />
    </template>
  </VSwitch>
</template>
`},_={ts:`<script lang="ts" setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`,js:`<script setup>
const people = ref(['John'])
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="people"
      label="John"
      value="John"
    />

    <VSwitch
      v-model="people"
      label="Jacob"
      value="Jacob"
    />
  </div>

  <p class="mt-2 mb-0">
    {{ people }}
  </p>
</template>
`},V={ts:`<script setup lang="ts">
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref('on')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      value="on"
      label="On loading"
    />

    <VSwitch
      loading="warning"
      label="Off loading"
    />
  </div>
</template>
`,js:`<script setup>
const switchOn = ref('on')
const switchOnDisabled = ref('on')
const switchOnLoading = ref('on')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switchOn"
      value="on"
      label="On"
    />

    <VSwitch label="Off" />

    <VSwitch
      v-model="switchOnDisabled"
      value="on"
      disabled
      label="On disabled"
    />

    <VSwitch
      disabled
      label="Off disabled"
    />

    <VSwitch
      v-model="switchOnLoading"
      loading="warning"
      value="on"
      label="On loading"
    />

    <VSwitch
      loading="warning"
      label="Off loading"
    />
  </div>
</template>
`},x={ts:`<script lang="ts" setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`,js:`<script setup>
const switch1 = ref(1)
const switch2 = ref('Show')
<\/script>

<template>
  <div class="demo-space-x">
    <VSwitch
      v-model="switch1"
      :label="switch1.toString()"
      :true-value="1"
      :false-value="0"
    />

    <VSwitch
      v-model="switch2"
      :label="switch2.toString()"
      true-value="Show"
      false-value="Hide"
    />
  </div>
</template>
`},O=t("p",null,[l("A "),t("code",null,"v-switch"),l(" in its simplest form provides a toggle between 2 values.")],-1),L=t("p",null,"You can make switch render in inset mode.",-1),y=t("p",null,[l("Switches can be colored by using any of the builtin colors and contextual names using the "),t("code",null,"color"),l(" prop.")],-1),D=t("p",null,[l("Multiple "),t("code",null,"v-switch"),l("'s can share the same "),t("code",null,"v-model"),l(" by using an array.")],-1),C=t("p",null,[l("Switch labels can be defined in "),t("code",null,"label"),l(" slot - that will allow to use HTML content.")],-1),A=t("p",null,[l(" Use "),t("code",null,"false-value"),l(" and "),t("code",null,"true-value"),l(" prop to sets value for truthy and falsy state ")],-1),T=t("p",null,[t("code",null,"v-switch"),l(" can have different states such as "),t("code",null,"default"),l(", "),t("code",null,"disabled"),l(", and "),t("code",null,"loading"),l(".")],-1),P={__name:"switch",setup(M){return(F,J)=>{const i=c("DemoSwitchBasic"),o=c("AppCardCode"),n=c("DemoSwitchInset"),d=c("DemoSwitchColors"),r=c("DemoSwitchModelAsArray"),p=c("DemoSwitchLabelSlot"),h=c("DemoSwitchTrueAndFalseValue"),m=c("DemoSwitchStates");return u(),S(w,null,{default:s(()=>[e(a,{cols:"12",md:"6"},{default:s(()=>[e(o,{title:"Basic",code:v},{default:s(()=>[O,e(i)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:s(()=>[e(o,{title:"Inset",code:b},{default:s(()=>[L,e(n)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:s(()=>[e(o,{title:"Colors",code:f},{default:s(()=>[y,e(d)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:s(()=>[e(o,{title:"Model as array",code:_},{default:s(()=>[D,e(r)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:s(()=>[e(o,{title:"Label slot",code:g},{default:s(()=>[C,e(p)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:s(()=>[e(o,{title:"True and False Value",code:x},{default:s(()=>[A,e(h)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:s(()=>[e(o,{title:"States",code:V},{default:s(()=>[T,e(m)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{P as default};
