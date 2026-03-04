import{_ as V}from"./AppTextField-BEtY1D3f.js";import{V as D}from"./VNodeRenderer-CWvX-8bi.js";import{r as x,o as u,f,e as t,b as e,a4 as U,ag as A,c as q,v as S,d2 as j,k as p,bq as H,G as N,aV as B,q as a,n as L,aB as h,d as o}from"./index-CB2xLxv8.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as r,V as v}from"./VRow-1nAhcHe1.js";import{r as z,e as E,V as W}from"./validators-ml0qlWor.js";import{V as C}from"./VTextField-Cx7qowh5.js";import{_ as Y}from"./AppCardCode-BscoEuoq.js";import"./autofocus-CqHDZUtQ.js";import"./VCounter-CGHl5O-U.js";import"./VField-BWVYHJsh.js";import"./vue3-perfect-scrollbar-Jj2MnRG9.js";import"./VCard-BA2BMRNp.js";import"./VAvatar-D3wnUDyw.js";import"./VCardText-LSeWKnzy.js";import"./VDivider-Bhn1s8SW.js";const O={key:0,class:"ms-3"},G={__name:"DemoTextfieldIconSlots",setup(_){const n=x("Hey!"),l=x(!1),m=()=>{l.value=!0,n.value="Wait for it...",setTimeout(()=>{l.value=!1,n.value="You've clicked me!"},2e3)};return(s,d)=>{const c=V;return u(),f(c,{modelValue:p(n),"onUpdate:modelValue":d[0]||(d[0]=i=>h(n)?n.value=i:null),clearable:"",label:"Message",placeholder:"Hey!!",type:"text",class:"textfield-demo-icon-slot"},{prepend:t(()=>[e(B,{location:"bottom"},{activator:t(({props:i})=>[e(A,L(i,{icon:"tabler-help"}),null,16)]),default:t(()=>[d[1]||(d[1]=a(" I'm a tooltip ",-1))]),_:1})]),"append-inner":t(()=>[e(j,{"leave-absolute":""},{default:t(()=>[p(l)?(u(),f(H,{key:0,color:"primary",width:"3",size:"24",indeterminate:""})):(u(),f(p(D),{key:1,class:"text-2xl",nodes:p(N).app.logo},null,8,["nodes"]))]),_:1})]),append:t(()=>[e(U,{icon:s.$vuetify.display.smAndDown,onClick:m},{default:t(()=>[e(A,{icon:"tabler-viewfinder",color:"#fff",size:"22"}),s.$vuetify.display.mdAndUp?(u(),q("span",O,"Click me")):S("",!0)]),_:1},8,["icon"])]),_:1},8,["modelValue"])}}},J=T(G,[["__scopeId","data-v-c3d3304f"]]),K={__name:"DemoTextfieldPasswordInput",setup(_){const n=x(!1),l=x(!0),m=x("Password"),s=x("wqfasds"),d={required:c=>!!c||"Required.",min:c=>c.length>=8||"Min 8 characters"};return(c,i)=>{const b=V;return u(),f(v,null,{default:t(()=>[e(r,{cols:"12",sm:"6"},{default:t(()=>[e(b,{modelValue:p(m),"onUpdate:modelValue":i[0]||(i[0]=g=>h(m)?m.value=g:null),"append-inner-icon":p(n)?"tabler-eye-off":"tabler-eye",rules:[d.required,d.min],type:p(n)?"text":"password",name:"input-10-1",label:"Normal with hint text",hint:"At least 8 characters",placeholder:"············",counter:"","onClick:appendInner":i[1]||(i[1]=g=>n.value=!p(n))},null,8,["modelValue","append-inner-icon","rules","type"])]),_:1}),e(r,{cols:"12",sm:"6"},{default:t(()=>[e(b,{modelValue:p(s),"onUpdate:modelValue":i[2]||(i[2]=g=>h(s)?s.value=g:null),rules:[d.required,d.min],"append-inner-icon":p(l)?"tabler-eye-off":"tabler-eye",type:p(l)?"text":"password",name:"input-10-2",placeholder:"············",label:"Visible",hint:"At least 8 characters","onClick:appendInner":i[3]||(i[3]=g=>l.value=!p(l))},null,8,["modelValue","rules","append-inner-icon","type"])]),_:1})]),_:1})}}},Q={};function X(_,n){const l=V;return u(),f(l,null,{label:t(()=>[n[0]||(n[0]=a(" What about  ",-1)),n[1]||(n[1]=o("strong",null,"icon",-1)),n[2]||(n[2]=a(" here? ",-1)),e(A,{icon:"tabler-file-search"})]),_:1})}const Z=T(Q,[["render",X]]),ee={__name:"DemoTextfieldIconEvents",setup(_){const n=x("Hey!"),l=x(!0),m=x(0),s=()=>{l.value=!l.value},d=()=>{n.value=""},c=()=>{m.value=0},i=()=>{c(),d()};return(b,g)=>{const w=V;return u(),f(w,{modelValue:p(n),"onUpdate:modelValue":g[0]||(g[0]=y=>h(n)?n.value=y:null),clearable:"",type:"text",label:"Message",color:"primary",placeholder:"Hey!!","clear-icon":"tabler-circle-x","append-icon":p(n)?b.$vuetify.locale.isRtl?"tabler-arrow-big-left-lines":"tabler-arrow-big-right-lines":"tabler-microphone","append-inner-icon":p(l)?"tabler-map-pin":"tabler-map-pin-off","onClick:appendInner":s,"onClick:append":i,"onClick:clear":d},null,8,["modelValue","append-icon","append-inner-icon"])}}},le={__name:"DemoTextfieldValidation",setup(_){const n=x("");return(l,m)=>{const s=V;return u(),f(W,null,{default:t(()=>[e(s,{modelValue:p(n),"onUpdate:modelValue":m[0]||(m[0]=d=>h(n)?n.value=d:null),rules:["requiredValidator"in l?l.requiredValidator:p(z),"emailValidator"in l?l.emailValidator:p(E)],placeholder:"johnedoe@email.com",label:"E-mail"},null,8,["modelValue","rules"])]),_:1})}}},te={};function oe(_,n){const l=V;return u(),f(l,{label:"Regular",placeholder:"Placeholder Text","single-line":""})}const ne=T(te,[["render",oe]]),ae={__name:"DemoTextfieldPrefixesAndSuffixes",setup(_){const n=x(10.05),l=x(28.02),m=x("example"),s=x("04:56");return(d,c)=>{const i=V;return u(),f(v,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(i,{modelValue:p(n),"onUpdate:modelValue":c[0]||(c[0]=b=>h(n)?n.value=b:null),label:"Amount",prefix:"$",type:"number",placeholder:"10.05"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(i,{modelValue:p(l),"onUpdate:modelValue":c[1]||(c[1]=b=>h(l)?l.value=b:null),label:"Weight",suffix:"lbs",type:"number",placeholder:"28.02"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(i,{modelValue:p(m),"onUpdate:modelValue":c[2]||(c[2]=b=>h(m)?m.value=b:null),label:"Email address",suffix:"@gmail.com",placeholder:"example"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(i,{modelValue:p(s),"onUpdate:modelValue":c[3]||(c[3]=b=>h(s)?s.value=b:null),label:"Label Text",type:"time",suffix:"PST",placeholder:"04:56"},null,8,["modelValue"])]),_:1})]),_:1})}}},re={};function se(_,n){const l=V;return u(),f(v,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(l,{label:"Prepend","prepend-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(l,{label:"Prepend Inner","prepend-inner-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(l,{label:"Append","append-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(l,{label:"Append Inner","append-inner-icon":"tabler-map-pin",placeholder:"Placeholder Text"})]),_:1})]),_:1})}const ie=T(re,[["render",se]]),pe={};function de(_,n){const l=V;return u(),f(l,{color:"success",label:"First name",placeholder:"Placeholder Text"})}const ce=T(pe,[["render",de]]),me={};function ue(_,n){const l=V;return u(),f(l,{placeholder:"Placeholder Text",label:"Regular",clearable:""})}const fe=T(me,[["render",ue]]),xe={__name:"DemoTextfieldCounter",setup(_){const n=x("Preliminary report"),l=x("California is a state in the western United States"),m=[s=>s.length<=25||"Max 25 characters"];return(s,d)=>{const c=V;return u(),f(v,null,{default:t(()=>[e(r,{cols:"12"},{default:t(()=>[e(c,{modelValue:p(n),"onUpdate:modelValue":d[0]||(d[0]=i=>h(n)?n.value=i:null),rules:m,counter:"25",placeholder:"Placeholder Text",hint:"This field uses counter prop",label:"Regular"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(c,{modelValue:p(l),"onUpdate:modelValue":d[1]||(d[1]=i=>h(l)?l.value=i:null),rules:m,counter:"",maxlength:"25",placeholder:"Placeholder Text",hint:"This field uses maxlength attribute",label:"Limit exceeded"},null,8,["modelValue"])]),_:1})]),_:1})}}},_e={};function be(_,n){const l=V;return u(),f(v,null,{default:t(()=>[e(r,null,{default:t(()=>[e(l,{label:"Disabled",placeholder:"Placeholder Text",disabled:""})]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(l,{placeholder:"Placeholder Text",label:"Readonly",readonly:""})]),_:1})]),_:1})}const Ve=T(_e,[["render",be]]),he={};function ge(_,n){return u(),f(v,null,{default:t(()=>[e(r,{cols:"12",md:"6"},{default:t(()=>[e(C,{label:"Outlined",variant:"outlined"})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(C,{label:"Filled",variant:"filled"})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(C,{label:"Solo",variant:"solo"})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(C,{label:"Plain",variant:"plain"})]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(C,{label:"Underlined",variant:"underlined"})]),_:1})]),_:1})}const Te=T(he,[["render",ge]]),ve={};function Ce(_,n){const l=V;return u(),f(l,{label:"Compact",density:"compact",placeholder:"Placeholder Text"})}const we=T(ve,[["render",Ce]]),ye={};function Ae(_,n){const l=V;return u(),f(l,{label:"Regular",placeholder:"Placeholder Text"})}const Fe=T(ye,[["render",Ae]]),Pe={ts:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
  />
</template>
`},ke={ts:`<template>
  <AppTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <AppTextField
    placeholder="Placeholder Text"
    label="Regular"
    clearable
  />
</template>
`},Re={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="title"
        :rules="rules"
        counter="25"
        placeholder="Placeholder Text"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        placeholder="Placeholder Text"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},Ie={ts:`<template>
  <AppTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    color="success"
    label="First name"
    placeholder="Placeholder Text"
  />
</template>
`},$e={ts:`<template>
  <AppTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`,js:`<template>
  <AppTextField
    label="Compact"
    density="compact"
    placeholder="Placeholder Text"
  />
</template>
`},Me={ts:`<script lang="ts" setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="tabler-circle-x"
    :append-icon="message ? $vuetify.locale.isRtl ? 'tabler-arrow-big-left-lines' : 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`,js:`<script setup>
const message = ref('Hey!')
const marker = ref(true)
const iconIndex = ref(0)

const toggleMarker = () => {
  marker.value = !marker.value
}

const clearMessage = () => {
  message.value = ''
}

const resetIcon = () => {
  iconIndex.value = 0
}

const sendMessage = () => {
  resetIcon()
  clearMessage()
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    placeholder="Hey!!"
    clear-icon="tabler-circle-x"
    :append-icon="message ? $vuetify.locale.isRtl ? 'tabler-arrow-big-left-lines' : 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},De={ts:`<script setup lang="ts">
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'

  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    placeholder="Hey!!"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="primary"
          width="3"
          size="24"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon
          icon="tabler-viewfinder"
          color="#fff"
          size="22"
        />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
// .textfield-demo-icon-slot {
//   :deep(.v-input) {
//     align-content: center;

//     .v-input__prepend,
//     .v-input__append {
//       padding-block-start: 0 !important;
//     }

//     .v-input__prepend {
//       align-items: center;
//     }

//     .v-field__append-inner .v-progress-circular svg {
//       block-size: 1.3em;
//       inline-size: 1.3em;
//     }

//     .v-field__append-inner svg {
//       margin-block-start: 0.1rem;
//     }
//   }
// }
</style>
`,js:`<script setup>
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

const message = ref('Hey!')
const loading = ref(false)

const clickMe = () => {
  loading.value = true
  message.value = 'Wait for it...'
  setTimeout(() => {
    loading.value = false
    message.value = 'You've clicked me!'
  }, 2000)
}
<\/script>

<template>
  <AppTextField
    v-model="message"
    clearable
    label="Message"
    placeholder="Hey!!"
    type="text"
    class="textfield-demo-icon-slot"
  >
    <!-- Prepend -->
    <template #prepend>
      <VTooltip location="bottom">
        <template #activator="{ props }">
          <VIcon
            v-bind="props"
            icon="tabler-help"
          />
        </template>
        I'm a tooltip
      </VTooltip>
    </template>

    <!-- AppendInner -->
    <template #append-inner>
      <VFadeTransition leave-absolute>
        <VProgressCircular
          v-if="loading"
          color="primary"
          width="3"
          size="24"
          indeterminate
        />

        <VNodeRenderer
          v-else
          class="text-2xl"
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon
          icon="tabler-viewfinder"
          color="#fff"
          size="22"
        />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </AppTextField>
</template>

<style lang="scss" scoped>
// .textfield-demo-icon-slot {
//   :deep(.v-input) {
//     align-content: center;

//     .v-input__prepend,
//     .v-input__append {
//       padding-block-start: 0 !important;
//     }

//     .v-input__prepend {
//       align-items: center;
//     }

//     .v-field__append-inner .v-progress-circular svg {
//       block-size: 1.3em;
//       inline-size: 1.3em;
//     }

//     .v-field__append-inner svg {
//       margin-block-start: 0.1rem;
//     }
//   }
// }
</style>
`},Ue={ts:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append"
        append-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
        placeholder="Placeholder Text"
      />
    </VCol>
  </VRow>
</template>
`},qe={ts:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </AppTextField>
</template>
`,js:`<template>
  <AppTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </AppTextField>
</template>
`},Se={ts:`<script lang="ts" setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: (value: string) => !!value || 'Required.',
  min: (v: string) => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye' "
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const show1 = ref(false)
const show2 = ref(true)
const password = ref('Password')
const confirmPassword = ref('wqfasds')

const rules = {
  required: value => !!value || 'Required.',
  min: v => v.length >= 8 || 'Min 8 characters',
}
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye-off' : 'tabler-eye' "
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        placeholder="············"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <AppTextField
        v-model="confirmPassword"
        :rules="[rules.required, rules.min]"
        :append-inner-icon="show2 ? 'tabler-eye-off' : 'tabler-eye' "
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        placeholder="············"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},je={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <AppTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
        placeholder="10.05"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
        type="number"
        placeholder="28.02"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
        placeholder="example"
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
        placeholder="04:56"
      />
    </VCol>
  </VRow>
</template>
`},He={ts:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`,js:`<template>
  <AppTextField
    label="Regular"
    placeholder="Placeholder Text"
    single-line
  />
</template>
`},Ne={ts:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <AppTextField
        label="Disabled"
        placeholder="Placeholder Text"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <AppTextField
        placeholder="Placeholder Text"
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},Be={ts:`<script lang="ts" setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
const email = ref('')
<\/script>

<template>
  <VForm>
    <AppTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      placeholder="johnedoe@email.com"
      label="E-mail"
    />
  </VForm>
</template>
`},Le={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Outlined"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <VTextField
        label="Underlined"
        variant="underlined"
      />
    </VCol>
  </VRow>
</template>
`},al={__name:"textfield",setup(_){return(n,l)=>{const m=Fe,s=Y,d=we,c=Te,i=Ve,b=xe,g=fe,w=ce,y=ie,F=ae,P=ne,k=le,R=ee,I=Z,$=K,M=J;return u(),f(v,{class:"match-height"},{default:t(()=>[e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Basic",code:Pe},{default:t(()=>[l[0]||(l[0]=o("p",null,"Text fields components are used for collecting user provided information.",-1)),e(m)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Density",code:$e},{default:t(()=>[l[1]||(l[1]=o("p",null,[a("The "),o("code",null,"density"),a(" prop decreases the height of the text field based upon 1 of 3 levels of density; "),o("strong",null,"default"),a(", "),o("strong",null,"comfortable"),a(", and "),o("strong",null,"compact"),a(".")],-1)),e(d)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12"},{default:t(()=>[e(s,{title:"Variant",code:Le},{default:t(()=>[l[2]||(l[2]=o("p",null,[a("Use "),o("code",null,"solo"),a(", "),o("code",null,"filled"),a(", "),o("code",null,"outlined"),a(", "),o("code",null,"plain"),a(" and "),o("code",null,"underlined"),a(" option of "),o("code",null,"variant"),a(" prop to change the look of the textfield. ")],-1)),e(c)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"State",code:Ne},{default:t(()=>[l[3]||(l[3]=o("p",null,"Text fields can be disabled or readonly.",-1)),e(i)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Counter",code:Re},{default:t(()=>[l[4]||(l[4]=o("p",null,[a("Use a "),o("code",null,"counter"),a(" prop to inform a user of the character limit.")],-1)),e(b)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Clearable",code:ke},{default:t(()=>[l[5]||(l[5]=o("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1)),e(g)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Custom Colors",code:Ie},{default:t(()=>[l[6]||(l[6]=o("p",null,[a("Use "),o("code",null,"color"),a(" prop to change the input text color.")],-1)),e(w)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Icons",code:Ue},{default:t(()=>[l[7]||(l[7]=o("p",null,[a("You can add icons to the text field with "),o("code",null,"prepend-icon"),a(", "),o("code",null,"append-icon"),a(" and "),o("code",null,"append-inner-icon"),a(" and "),o("code",null,"prepend-inner-icon"),a(" props.")],-1)),e(y)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Prefixes and suffixes",code:je},{default:t(()=>[l[8]||(l[8]=o("p",null,[a("The "),o("code",null,"prefix"),a(" and "),o("code",null,"suffix"),a(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1)),e(F)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Single line",code:He},{default:t(()=>[l[9]||(l[9]=o("p",null,[o("code",null,"single-line"),a(" text fields do not float their label on focus or with data.")],-1)),e(P)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Validation",code:Be},{default:t(()=>[l[10]||(l[10]=o("p",null,[a("Vuetify includes simple validation through the "),o("code",null,"rules"),a(" prop.")],-1)),e(k)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Icon events",code:Me},{default:t(()=>[l[11]||(l[11]=o("p",null,[o("code",null,"click:prepend"),a(", "),o("code",null,"click:append"),a(", "),o("code",null,"click:append-inner"),a(", and "),o("code",null,"click:clear"),a(" will be emitted when you click on the respective icon")],-1)),e(R)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Label Slot",code:qe},{default:t(()=>[l[12]||(l[12]=o("p",null,[a("Text field label can be defined in "),o("code",null,"label"),a(" slot - that will allow to use HTML content.")],-1)),e(I)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Password input",code:Se},{default:t(()=>[l[13]||(l[13]=o("p",null,[a("Using the HTML input "),o("code",null,"type"),a(" password can be used with an appended icon and callback to control the visibility.")],-1)),e($)]),_:1},8,["code"])]),_:1}),e(r,{cols:"12",md:"6"},{default:t(()=>[e(s,{title:"Icon slots",code:De},{default:t(()=>[l[14]||(l[14]=o("p",null,[a("Instead of using "),o("code",null,"prepend"),a("/"),o("code",null,"append"),a("/"),o("code",null,"append-inner"),a(" icons you can use slots to extend input's functionality.")],-1)),e(M)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{al as default};
