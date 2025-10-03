import{V as s}from"./VCol.4ace162b.js";import{V as _}from"./VRow.92104217.js";import{r as a,o as v,b as w,x as o,p as e,m as l,z as t}from"./index.33948166.js";/* empty css              */const F={ts:`<template>
  <VTextField label="Regular" />
</template>
`,js:`<template>
  <VTextField label="Regular" />
</template>
`},y={ts:`<template>
  <VTextField
    label="Regular"
    clearable
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    clearable
  />
</template>
`},R={ts:`<script lang="ts" setup>
const title = ref('Preliminary report')
const description = ref('California is a state in the western United States')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
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
      <VTextField
        v-model="title"
        :rules="rules"
        counter="25"
        hint="This field uses counter prop"
        label="Regular"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="description"
        :rules="rules"
        counter
        maxlength="25"
        hint="This field uses maxlength attribute"
        label="Limit exceeded"
      />
    </VCol>
  </VRow>
</template>
`},k={ts:`<template>
  <VTextField
    color="success"
    label="First name"
  />
</template>
`,js:`<template>
  <VTextField
    color="success"
    label="First name"
  />
</template>
`},D={ts:`<template>
  <VTextField
    label="Compact"
    density="compact"
  />
</template>
`,js:`<template>
  <VTextField
    label="Compact"
    density="compact"
  />
</template>
`},I={ts:`<script lang="ts" setup>
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
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="tabler-circle-x"
    :append-icon="message ? 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
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
  <VTextField
    v-model="message"
    clearable
    type="text"
    label="Message"
    color="primary"
    clear-icon="tabler-circle-x"
    :append-icon="message ? 'tabler-arrow-big-right-lines' : 'tabler-microphone'"
    :append-inner-icon="marker ? 'tabler-map-pin' : 'tabler-map-pin-off'"
    @click:append-inner="toggleMarker"
    @click:append="sendMessage"
    @click:clear="clearMessage"
  />
</template>
`},M={ts:`<script lang="ts" setup>
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
  <VTextField
    v-model="message"
    clearable
    clear-icon="tabler-circle-x"
    label="Message"
    type="text"
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
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        class="mt-n3"
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="tabler-viewfinder" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
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
  <VTextField
    v-model="message"
    clearable
    clear-icon="tabler-circle-x"
    label="Message"
    type="text"
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
          size="24"
          color="info"
          indeterminate
        />

        <VNodeRenderer
          v-else
          :nodes="themeConfig.app.logo"
        />
      </VFadeTransition>
    </template>

    <!-- Append -->
    <template #append>
      <VBtn
        :size="$vuetify.display.smAndDown ? 'small' : 'large'"
        class="mt-n3"
        :icon="$vuetify.display.smAndDown"
        @click="clickMe"
      >
        <VIcon icon="tabler-viewfinder" />
        <span
          v-if="$vuetify.display.mdAndUp"
          class="ms-3"
        >Click me</span>
      </VBtn>
    </template>
  </VTextField>
</template>
`},P={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        label="Prepend"
        prepend-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Prepend Inner"
        prepend-inner-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append"
        append-icon="tabler-map-pin"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Append Inner"
        append-inner-icon="tabler-map-pin"
      />
    </VCol>
  </VRow>
</template>
`},A={ts:`<template>
  <VTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </VTextField>
</template>
`,js:`<template>
  <VTextField>
    <template #label>
      What about &nbsp;<strong>icon</strong>&nbsp;here?
      <VIcon icon="tabler-file-search" />
    </template>
  </VTextField>
</template>
`},S={ts:`<script lang="ts" setup>
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
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye' : 'tabler-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'tabler-eye' : 'tabler-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
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
      <VTextField
        v-model="password"
        :append-inner-icon="show1 ? 'tabler-eye' : 'tabler-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append-inner="show1 = !show1"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextField
        v-model="confirmPassword"
        :append-inner-icon="show2 ? 'tabler-eye' : 'tabler-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        @click:append-inner="show2 = !show2"
      />
    </VCol>
  </VRow>
</template>
`},j={ts:`<script setup lang="ts">
const amount = ref(10.05)
const weight = ref(28.02)
const email = ref('example')
const time = ref('04:56')
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
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
      <VTextField
        v-model="amount"
        label="Amount"
        prefix="$"
        type="number"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="weight"
        label="Weight"
        suffix="lbs"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="email"
        label="Email address"
        suffix="@gmail.com"
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        v-model="time"
        label="Label Text"
        type="time"
        suffix="PST"
      />
    </VCol>
  </VRow>
</template>
`},q={ts:`<template>
  <VTextField
    label="Regular"
    single-line
  />
</template>
`,js:`<template>
  <VTextField
    label="Regular"
    single-line
  />
</template>
`},L={ts:`<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol>
      <VTextField
        label="Disabled"
        disabled
      />
    </VCol>

    <VCol cols="12">
      <VTextField
        label="Readonly"
        readonly
      />
    </VCol>
  </VRow>
</template>
`},N={ts:`<script lang="ts" setup>
import { emailValidator, requiredValidator } from '@validators'

const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const email = ref('')
<\/script>

<template>
  <VForm>
    <VTextField
      v-model="email"
      :rules="[requiredValidator, emailValidator]"
      label="E-mail"
    />
  </VForm>
</template>
`},B={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      md="6"
    >
      <VTextField label="Outlined" />
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
      <VTextField label="Outlined" />
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
`},U=l("p",null,"Text fields components are used for collecting user provided information.",-1),$=l("p",null,[t("The "),l("code",null,"density"),t(" prop decreases the height of the text field based upon 1 of 3 levels of density; "),l("strong",null,"default"),t(", "),l("strong",null,"comfortable"),t(", and "),l("strong",null,"compact"),t(".")],-1),E=l("p",null,[t("Use "),l("code",null,"solo"),t(", "),l("code",null,"filled"),t(", "),l("code",null,"outlined"),t(", "),l("code",null,"plain"),t(" and "),l("code",null,"underlined"),t(" option of "),l("code",null,"variant"),t(" prop to change the look of the textfield. ")],-1),W=l("p",null,"Text fields can be disabled or readonly.",-1),z=l("p",null,[t("Use a "),l("code",null,"counter"),t(" prop to inform a user of the character limit.")],-1),H=l("p",null,"When clearable, you can customize the clear icon with clear-icon.",-1),Y=l("p",null,[t("Use "),l("code",null,"color"),t(" prop to change the input text color.")],-1),O=l("p",null,[t("You can add icons to the text field with "),l("code",null,"prepend-icon"),t(", "),l("code",null,"append-icon"),t(" and "),l("code",null,"append-inner-icon"),t(" and "),l("code",null,"prepend-inner-icon"),t(" props.")],-1),G=l("p",null,[t("The "),l("code",null,"prefix"),t(" and "),l("code",null,"suffix"),t(" properties allows you to prepend and append inline non-modifiable text next to the text field.")],-1),J=l("p",null,[l("code",null,"single-line"),t(" text fields do not float their label on focus or with data.")],-1),K=l("p",null,[t("Vuetify includes simple validation through the "),l("code",null,"rules"),t(" prop.")],-1),Q=l("p",null,[l("code",null,"click:prepend"),t(", "),l("code",null,"click:append"),t(", "),l("code",null,"click:append-inner"),t(", and "),l("code",null,"click:clear"),t(" will be emitted when you click on the respective icon")],-1),X=l("p",null,[t("Text field label can be defined in "),l("code",null,"label"),t(" slot - that will allow to use HTML content.")],-1),Z=l("p",null,[t("Using the HTML input "),l("code",null,"type"),t(" password can be used with an appended icon and callback to control the visibility.")],-1),ee=l("p",null,[t("Instead of using "),l("code",null,"prepend"),t("/"),l("code",null,"append"),t("/"),l("code",null,"append-inner"),t(" icons you can use slots to extend input's functionality.")],-1),re={__name:"textfield",setup(le){return(te,oe)=>{const i=a("DemoTextfieldBasic"),n=a("AppCardCode"),r=a("DemoTextfieldDensity"),d=a("DemoTextfieldVariant"),c=a("DemoTextfieldState"),p=a("DemoTextfieldCounter"),m=a("DemoTextfieldClearable"),u=a("DemoTextfieldCustomColors"),f=a("DemoTextfieldIcons"),V=a("DemoTextfieldPrefixesAndSuffixes"),x=a("DemoTextfieldSingleLine"),b=a("DemoTextfieldValidation"),h=a("DemoTextfieldIconEvents"),g=a("DemoTextfieldLabelSlot"),T=a("DemoTextfieldPasswordInput"),C=a("DemoTextfieldIconSlots");return v(),w(_,{class:"match-height"},{default:o(()=>[e(s,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Basic",code:F},{default:o(()=>[U,e(i)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Density",code:D},{default:o(()=>[$,e(r)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12"},{default:o(()=>[e(n,{title:"Variant",code:B},{default:o(()=>[E,e(d)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"State",code:L},{default:o(()=>[W,e(c)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Counter",code:R},{default:o(()=>[z,e(p)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Clearable",code:y},{default:o(()=>[H,e(m)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Custom Colors",code:k},{default:o(()=>[Y,e(u)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Icons",code:P},{default:o(()=>[O,e(f)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Prefixes and suffixes",code:j},{default:o(()=>[G,e(V)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Single line",code:q},{default:o(()=>[J,e(x)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Validation",code:N},{default:o(()=>[K,e(b)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Icon events",code:I},{default:o(()=>[Q,e(h)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Label Slot",code:A},{default:o(()=>[X,e(g)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Password input",code:S},{default:o(()=>[Z,e(T)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:o(()=>[e(n,{title:"Icon slots",code:M},{default:o(()=>[ee,e(C)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{re as default};
