import{V as t}from"./VCol.4ace162b.js";import{V as f}from"./VRow.92104217.js";import{r as a,o as P,b as h,x as l,p as e,m as r,z as o}from"./index.33948166.js";/* empty css              */const y={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="100"
      color="primary"
    />

    <VProgressCircular
      model-value="80"
      color="secondary"
    />

    <VProgressCircular
      model-value="60"
      color="success"
    />

    <VProgressCircular
      model-value="40"
      color="info"
    />

    <VProgressCircular
      model-value="20"
      color="warning"
    />

    <VProgressCircular
      model-value="20"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      model-value="100"
      color="primary"
    />

    <VProgressCircular
      model-value="80"
      color="secondary"
    />

    <VProgressCircular
      model-value="60"
      color="success"
    />

    <VProgressCircular
      model-value="40"
      color="info"
    />

    <VProgressCircular
      model-value="20"
      color="warning"
    />

    <VProgressCircular
      model-value="20"
      color="error"
    />
  </div>
</template>
`},C={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      indeterminate
      color="primary"
    />

    <VProgressCircular
      indeterminate
      color="secondary"
    />

    <VProgressCircular
      indeterminate
      color="success"
    />

    <VProgressCircular
      indeterminate
      color="info"
    />

    <VProgressCircular
      indeterminate
      color="warning"
    />

    <VProgressCircular
      indeterminate
      color="error"
    />
  </div>
</template>
`},_={ts:`<script setup lang="ts">
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`,js:`<script setup>
const interval = ref()
const progressValue = ref(0)

onMounted(() => {
  interval.value = setInterval(() => {
    if (progressValue.value === 100)
      return progressValue.value = 0
    progressValue.value += 10
  }, 1000)
})
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
<\/script>

<template>
  <div class="demo-space-x">
    <VProgressCircular
      :rotate="360"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="170"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>

    <VProgressCircular
      :rotate="-90"
      :size="70"
      :width="6"
      :model-value="progressValue"
      color="primary"
    >
      {{ progressValue }}
    </VProgressCircular>
  </div>
</template>
`},L={ts:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VProgressCircular
      :width="3"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="50"
      color="primary"
      indeterminate
    />

    <VProgressCircular
      :size="70"
      :width="7"
      color="primary"
      indeterminate
    />
  </div>
</template>
`},b={ts:`<script setup lang="ts">
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)

  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

watch(modelValue, () => {
  if (modelValue.value < 100)
    return false

  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />

    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />

    <VProgressLinear
      v-model="modelValue"
      :buffer-value="bufferValue"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="modelValue"
      :buffer-value="bufferValue"
      color="primary"
      height="8"
    />
  </div>
</template>
`,js:`<script setup>
const modelValue = ref(10)
const bufferValue = ref(20)
const interval = ref()

const startBuffer = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    modelValue.value += Math.random() * (15 - 5) + 5
    bufferValue.value += Math.random() * (15 - 5) + 6
  }, 2000)
}

onMounted(startBuffer)
onBeforeUnmount(() => {
  clearInterval(interval.value)
})
watch(modelValue, () => {
  if (modelValue.value < 100)
    return false
  modelValue.value = 0
  bufferValue.value = 10
  startBuffer()
})
<\/script>

<template>
  <div class="demo-space-y">
    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />

    <VProgressLinear
      v-model="modelValue"
      color="primary"
      height="8"
      :buffer-value="bufferValue"
    />

    <VProgressLinear
      v-model="modelValue"
      :buffer-value="bufferValue"
      color="primary"
      height="8"
    />

    <VProgressLinear
      v-model="modelValue"
      :buffer-value="bufferValue"
      color="primary"
      height="8"
    />
  </div>
</template>
`},w={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      bg-color="primary"
      color="primary"
    />

    <VProgressLinear
      model-value="30"
      bg-color="secondary"
      color="secondary"
    />

    <VProgressLinear
      model-value="45"
      bg-color="success"
      color="success"
    />
  </div>
</template>
`},z={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      indeterminate
      color="primary"
    />

    <VProgressLinear
      indeterminate
      color="primary"
    />

    <VProgressLinear
      indeterminate
      color="primary"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      indeterminate
      color="primary"
    />

    <VProgressLinear
      indeterminate
      color="primary"
    />

    <VProgressLinear
      indeterminate
      color="primary"
    />
  </div>
</template>
`},D={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
      reverse
    />

    <VProgressLinear
      color="primary"
      indeterminate
      reverse
    />

    <VProgressLinear
      model-value="30"
      buffer-value="55"
      color="primary"
      reverse
      streams
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="15"
      color="primary"
      reverse
    />

    <VProgressLinear
      color="primary"
      indeterminate
      reverse
    />

    <VProgressLinear
      model-value="30"
      buffer-value="55"
      color="primary"
      reverse
      streams
    />
  </div>
</template>
`},I={ts:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />

    <VProgressLinear
      model-value="100"
      color="primary"
      rounded
    />
  </div>
</template>
`},B={ts:`<script setup lang="ts">
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div>
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <br>

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <br>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`,js:`<script setup>
const skill = ref(20)
const knowledge = ref(33)
const power = ref(78)
<\/script>

<template>
  <div>
    <VProgressLinear
      v-model="power"
      color="primary"
      height="8"
    />

    <br>

    <VProgressLinear
      v-model="skill"
      color="primary"
      height="20"
    >
      <template #default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </VProgressLinear>

    <br>

    <VProgressLinear
      v-model="knowledge"
      height="20"
      color="primary"
    >
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </VProgressLinear>
  </div>
</template>
`},R=r("p",null,[o("Alternate colors can be applied to "),r("code",null,"v-progress-circular"),o(" using the "),r("code",null,"color"),o(" prop.")],-1),k=r("p",null,[o("Using the "),r("code",null,"indeterminate"),o(" prop, a "),r("code",null,"v-progress-circular"),o(" continues to animate indefinitely.")],-1),x=r("p",null,[o("The "),r("code",null,"rotate"),o(" prop gives you the ability to customize the "),r("code",null,"v-progress-circular"),o("'s origin.")],-1),M=r("p",null,[o("The "),r("code",null,"size"),o(" and "),r("code",null,"width"),o(" props allow you to easily alter the size and width of the "),r("code",null,"v-progress-circular"),o(" component.")],-1),j=r("p",null,[o("You can set the colors of the progress bar using the props "),r("code",null,"color"),o(" and "),r("code",null,"background-color"),o(".")],-1),S=r("p",null,[o("Using the "),r("code",null,"indeterminate"),o(" prop, "),r("code",null,"v-progress-linear"),o(" continuously animates.")],-1),T=r("p",null,[o("Displays reversed progress. The component also has RTL support, such that a progress bar in right-to-left mode with reverse "),r("code",null,"prop"),o(" enabled will display left-to-right.")],-1),U=r("p",null,[o("The rounded prop is used to apply a border radius to the "),r("code",null,"v-progress-linear"),o(" component.")],-1),A=r("p",null,[o("The "),r("code",null,"v-progress-linear"),o(" component will be responsive to user input when using "),r("code",null,"v-model"),o(". You can use the default slot or bind a local model to display inside of the progress.")],-1),N=r("p",null,[o("The primary value is controlled by "),r("code",null,"v-model"),o(", whereas the buffer is controlled by the "),r("code",null,"buffer-value"),o(" prop.")],-1),K={__name:"progress",setup(Y){return(q,E)=>{const i=a("DemoProgressCircularColor"),s=a("AppCardCode"),n=a("DemoProgressCircularIndeterminate"),c=a("DemoProgressCircularRotate"),u=a("DemoProgressCircularSize"),d=a("DemoProgressLinearColor"),m=a("DemoProgressLinearIndeterminate"),p=a("DemoProgressLinearReversed"),g=a("DemoProgressLinearRounded"),v=a("DemoProgressLinearSlots"),V=a("DemoProgressLinearBuffering");return P(),h(f,null,{default:l(()=>[e(t,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Circular Color",code:y},{default:l(()=>[R,e(i)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Circular Indeterminate",code:C},{default:l(()=>[k,e(n)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Circular Rotate",code:_},{default:l(()=>[x,e(c)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Circular Size",code:L},{default:l(()=>[M,e(u)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Linear Color",code:w},{default:l(()=>[j,e(d)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Linear Indeterminate",code:z},{default:l(()=>[S,e(m)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Linear Reversed",code:D},{default:l(()=>[T,e(p)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Linear Rounded",code:I},{default:l(()=>[U,e(g)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Linear Slots",code:B},{default:l(()=>[A,e(v)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:l(()=>[e(s,{title:"Linear Buffering",code:b},{default:l(()=>[N,e(V)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{K as default};
