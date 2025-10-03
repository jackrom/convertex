import{V as o}from"./VCol.4ace162b.js";import{V as D}from"./VRow.92104217.js";import{r as a,o as u,b as T,x as t,p as e}from"./index.33948166.js";/* empty css              */const f={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>

`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Default"
  />
</template>

`},k={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Date & TIme"
    :config="{ enableTime: true, dateFormat: 'Y-m-d H:i' }"
  />
</template>
`},P={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const now = new Date()
const currentMonth = now.toLocaleString('default', { month: '2-digit' })
const currentYear = now.getFullYear()
const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Disabled Range"
    :config="{ dateFormat: 'Y-m-d', disable: [{ from: \`\${currentYear}-\${currentMonth}-20\`, to: \`\${currentYear}-\${currentMonth}-25\` }] }"
  />
</template>
`},A={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Human Friendly"
    :config="{ altInput: true, altFormat: 'F j, Y', dateFormat: 'Y-m-d' }"
  />
</template>
`},g={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const date = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="date"
    label="Inline"
    :config="{ inline: true }"
  />
</template>
`},_={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const multipleDate = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="multipleDate"
    label="Multiple Dates"
    :config="{ mode: 'multiple', dateFormat: 'Y-m-d' }"
  />
</template>
`},v={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const dateRange = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="dateRange"
    label="Range"
    :config="{ mode: 'range' }"
  />
</template>
`},b={ts:`<script setup lang="ts">
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`,js:`<script setup>
import AppDateTimePicker from '@core/components/AppDateTimePicker.vue'

const time = ref('')
<\/script>

<template>
  <AppDateTimePicker
    v-model="time"
    label="Time picker"
    :config="{ enableTime: true, noCalendar: true, dateFormat: 'H:i' }"
  />
</template>
`},C={__name:"date-time-picker",setup(F){return(Y,R)=>{const m=a("DemoDateTimePickerBasic"),i=a("AppCardCode"),r=a("DemoDateTimePickerTimePicker"),p=a("DemoDateTimePickerDateAndTime"),c=a("DemoDateTimePickerMultipleDates"),n=a("DemoDateTimePickerRange"),l=a("DemoDateTimePickerHumanFriendly"),s=a("DemoDateTimePickerDisabledRange"),d=a("DemoDateTimePickerInline");return u(),T(D,null,{default:t(()=>[e(o,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Basic",code:f},{default:t(()=>[e(m)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Time Picker",code:b},{default:t(()=>[e(r)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Date and Time",code:k},{default:t(()=>[e(p)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Multiple Dates",code:_},{default:t(()=>[e(c)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Range",code:v},{default:t(()=>[e(n)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Human Friendly",code:A},{default:t(()=>[e(l)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Disabled Range",code:P},{default:t(()=>[e(s)]),_:1},8,["code"])]),_:1}),e(o,{cols:"12",md:"6"},{default:t(()=>[e(i,{title:"Inline",code:g},{default:t(()=>[e(d)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{C as default};
