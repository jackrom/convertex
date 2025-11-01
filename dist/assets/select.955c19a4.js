import{V as i}from"./VCol.55ec6a95.js";import{V as f}from"./VRow.6bece164.js";import{r as s,o as V,b as S,x as l,p as e,m as t,z as a}from"./index.f5778ade.js";/* empty css              */const C={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VSelect
    :items="items"
    label="Standard"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VSelect
    :items="items"
    label="Standard"
  />
</template>
`},_={ts:`<script lang="ts" setup>
const items = ['foo', 'bar', 'fizz', 'buzz']
const selected = ref(['foo', 'bar', 'fizz', 'buzz'])
<\/script>

<template>
  <VSelect
    v-model="selected"
    :items="items"
    label="Chips"
    chips
    multiple
  />
</template>
`,js:`<script setup>
const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const selected = ref([
  'foo',
  'bar',
  'fizz',
  'buzz',
])
<\/script>

<template>
  <VSelect
    v-model="selected"
    :items="items"
    label="Chips"
    chips
    multiple
  />
</template>
`},h={ts:`<script lang="ts" setup>
const selectedOption = ref({ state: 'Florida', abbr: 'FL' })

const items = [
  { state: 'Florida', abbr: 'FL' },
  { state: 'Georgia', abbr: 'GA' },
  { state: 'Nebraska', abbr: 'NE' },
  { state: 'California', abbr: 'CA' },
  { state: 'New York', abbr: 'NY' },
]
<\/script>

<template>
  <VSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
  />
</template>
`,js:`<script setup>
const selectedOption = ref({
  state: 'Florida',
  abbr: 'FL',
})

const items = [
  {
    state: 'Florida',
    abbr: 'FL',
  },
  {
    state: 'Georgia',
    abbr: 'GA',
  },
  {
    state: 'Nebraska',
    abbr: 'NE',
  },
  {
    state: 'California',
    abbr: 'CA',
  },
  {
    state: 'New York',
    abbr: 'NY',
  },
]
<\/script>

<template>
  <VSelect
    v-model="selectedOption"
    :hint="\`\${selectedOption.state}, \${selectedOption.abbr}\`"
    :items="items"
    item-title="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
  />
</template>
`},z={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VSelect
    :items="items"
    label="Density"
    density="compact"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VSelect
    :items="items"
    label="Density"
    density="compact"
  />
</template>
`},g={ts:`<script lang="ts" setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
      />
    </VCol>

    <VCol cols="12">
      <VSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const selectedOption1 = ref('Florida')
const selectedOption2 = ref('Texas')

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VRow>
    <VCol cols="12">
      <VSelect
        v-model="selectedOption1"
        :items="states"
        label="Select"
        prepend-icon="tabler-map"
        single-line
        variant="filled"
      />
    </VCol>

    <VCol cols="12">
      <VSelect
        v-model="selectedOption2"
        :items="states"
        append-icon="tabler-map"
        label="Select"
        single-line
        variant="filled"
      />
    </VCol>
  </VRow>
</template>
`},A={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
  />
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VSelect
    :items="items"
    :menu-props="{ transition: 'scroll-y-transition' }"
    label="Label"
  />
</template>
`},F={ts:`<script lang="ts" setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
  />
</template>
`,js:`<script setup>
const selectedOptions = ref(['Alabama'])

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Federated States of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
]
<\/script>

<template>
  <VSelect
    v-model="selectedOptions"
    :items="states"
    :menu-props="{ maxHeight: '400' }"
    label="Select"
    multiple
    persistent-hint
  />
</template>
`},D={ts:`<script lang="ts" setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items: { name: string; avatar: string }[] = [
  { name: 'Sandra Adams', avatar: avatar1 },
  { name: 'Ali Connors', avatar: avatar2 },
  { name: 'Trevor Hansen', avatar: avatar3 },
  { name: 'Tucker Smith', avatar: avatar4 },
  { name: 'Britta Holt', avatar: avatar5 },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <VSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <VAvatar
          start
          :image="item.raw.avatar"
        />
        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </VSelect>
</template>
`,js:`<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import avatar5 from '@images/avatars/avatar-5.png'

const items = [
  {
    name: 'Sandra Adams',
    avatar: avatar1,
  },
  {
    name: 'Ali Connors',
    avatar: avatar2,
  },
  {
    name: 'Trevor Hansen',
    avatar: avatar3,
  },
  {
    name: 'Tucker Smith',
    avatar: avatar4,
  },
  {
    name: 'Britta Holt',
    avatar: avatar5,
  },
]

const value = ref(['Sandra Adams'])
<\/script>

<template>
  <VSelect
    v-model="value"
    :items="items"
    item-title="name"
    item-value="name"
    label="Select Item"
    multiple
    clearable
    clear-icon="tabler-x"
  >
    <template #selection="{ item }">
      <VChip>
        <VAvatar
          start
          :image="item.raw.avatar"
        />
        <span>{{ item.title }}</span>
      </VChip>
    </template>
  </VSelect>
</template>
`},w={ts:`<script lang="ts" setup>
const items = ['Foo', 'Bar', 'Fizz', 'Buzz']
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
<\/script>

<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Outlined"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Plain"
        variant="plain"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VSelect
        :items="items"
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},B=t("p",null,"Select fields components are used for collecting user provided information from a list of options.",-1),O=t("p",null,[a("You can use "),t("code",null,"density"),a(" prop to reduce the field height and lower max height of list items.")],-1),y=t("p",null,[a(" Use "),t("code",null,"filled"),a(", "),t("code",null,"outlined"),a(", "),t("code",null,"solo"),a(", "),t("code",null,"underlined"),a(" and "),t("code",null,"plain"),a(" options of "),t("code",null,"variant"),a(" prop to change appearance of select. ")],-1),k=t("p",null,"You can specify the specific properties within your items array that correspond to the title and value fields. In this example we also use the return-object prop which will return the entire object of the selected item on selection.",-1),x=t("p",null,[a("Use a custom "),t("code",null,"prepend"),a(" or "),t("code",null,"appended"),a(" icon.")],-1),j=t("p",null,[a("Use "),t("code",null,"chips"),a(" prop to make selected option as chip.")],-1),G=t("p",null,[a("Custom props can be passed directly to "),t("code",null,"v-menu"),a(" using "),t("code",null,"menuProps"),a(" prop.")],-1),N=t("p",null,[a("Use "),t("code",null,"multiple"),a(" prop to select multiple option.")],-1),T=t("p",null,[a("The "),t("code",null,"selection"),a(" slot can be used to customize the way selected values are shown in the input.")],-1),Y={__name:"select",setup(M){return(R,P)=>{const n=s("DemoSelectBasic"),o=s("AppCardCode"),c=s("DemoSelectDensity"),r=s("DemoSelectVariant"),m=s("DemoSelectCustomTextAndValue"),p=s("DemoSelectIcons"),d=s("DemoSelectChips"),u=s("DemoSelectMenuProps"),b=s("DemoSelectMultiple"),v=s("DemoSelectSelectionSlot");return V(),S(f,null,{default:l(()=>[e(i,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Basic",code:C},{default:l(()=>[B,e(n)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Density",code:z},{default:l(()=>[O,e(c)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12"},{default:l(()=>[e(o,{title:"Variant",code:w},{default:l(()=>[y,e(r)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Custom text and value",code:h},{default:l(()=>[k,e(m)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Icons",code:g},{default:l(()=>[x,e(p)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Chips",code:_},{default:l(()=>[j,e(d)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Menu Props",code:A},{default:l(()=>[G,e(u)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Multiple",code:F},{default:l(()=>[N,e(b)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(o,{title:"Selection slot",code:D},{default:l(()=>[T,e(v)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Y as default};
