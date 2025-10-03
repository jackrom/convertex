import{V as d}from"./VCol.4ace162b.js";import{V as R}from"./VRow.92104217.js";import{r as t,o as v,b as V,x as i,p as a,m as o,z as e}from"./index.33948166.js";/* empty css              */const f={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <div class="">
    <VRadioGroup v-model="radioGroup">
      <VRadio
        v-for="n in 2"
        :key="n"
        :label="\`Radio \${n}\`"
        :value="n"
      />
    </VRadioGroup>
  </div>
</template>
`},b={ts:`<script lang="ts" setup>
const selectedRadio = ref('primary')
const colorsRadio = ['Primary', 'Secondary', 'Success', 'Info', 'Warning', 'Error']
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
      />
    </div>
  </VRadioGroup>
</template>
`,js:`<script setup>
const selectedRadio = ref('primary')

const colorsRadio = [
  'Primary',
  'Secondary',
  'Success',
  'Info',
  'Warning',
  'Error',
]
<\/script>

<template>
  <VRadioGroup
    v-model="selectedRadio"
    inline
  >
    <div>
      <VRadio
        v-for="radio in colorsRadio"
        :key="radio"
        :label="radio"
        :color="radio.toLocaleLowerCase()"
        :value="radio.toLocaleLowerCase()"
      />
    </div>
  </VRadioGroup>
</template>
`},G={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>

  <VDivider class="my-3" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
      density="compact"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
      density="compact"
    />
  </VRadioGroup>
</template>
`},_={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="tabler-bell-off"
    true-icon="tabler-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    false-icon="tabler-bell-off"
    true-icon="tabler-bell"
  >
    <VRadio
      v-for="n in 2"
      :key="n"
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},g={ts:`<script lang="ts" setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const columnRadio = ref('radio-1')
const inlineRadio = ref('radio-1')
<\/script>

<template>
  <VRadioGroup v-model="columnRadio">
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>

  <VDivider class="my-4" />

  <VRadioGroup
    v-model="inlineRadio"
    inline
  >
    <VRadio
      label="Option 1"
      value="radio-1"
    />
    <VRadio
      label="Option 2"
      value="radio-2"
    />
  </VRadioGroup>
</template>
`},y={ts:`<script lang="ts" setup>
const radios = ref('Duckduckgo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>Of course it's <strong class="text-success">Google</strong></div>
      </template>
    </VRadio>

    <VRadio value="Duckduckgo">
      <template #label>
        <div>Definitely <strong class="text-primary">Duckduckgo</strong></div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`,js:`<script setup>
const radios = ref('Duckduckgo')
<\/script>

<template>
  <VRadioGroup v-model="radios">
    <template #label>
      <div>Your favorite <strong>search engine</strong></div>
    </template>

    <VRadio value="Google">
      <template #label>
        <div>Of course it's <strong class="text-success">Google</strong></div>
      </template>
    </VRadio>

    <VRadio value="Duckduckgo">
      <template #label>
        <div>Definitely <strong class="text-primary">Duckduckgo</strong></div>
      </template>
    </VRadio>
  </VRadioGroup>
</template>
`},D={ts:`<script lang="ts" setup>
const radioGroup = ref(1)
const rules = [(value: number) => (value !== 3 ? true : 'Do not select the third one!')]
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`,js:`<script setup>
const radioGroup = ref(1)
const rules = [value => value !== 3 ? true : 'Do not select the third one!']
<\/script>

<template>
  <VRadioGroup
    v-model="radioGroup"
    inline
    :rules="rules"
  >
    <VRadio
      v-for="n in 3"
      :key="n"
      :error="radioGroup === 3 "
      :label="\`Radio \${n}\`"
      :value="n"
    />
  </VRadioGroup>
</template>
`},h=o("p",null,[e("The "),o("code",null,"v-radio"),e(" component is a simple radio button.")],-1),k=o("p",null,[e("Radios can be colored by using any of the built-in colors and contextual names using the "),o("code",null,"color"),e(" prop.")],-1),O=o("p",null,[e("Use "),o("code",null,"inline"),e(" prop to displays radio buttons in row.")],-1),C=o("p",null,[e("Use "),o("code",null,"density"),e(" prop to adjusts the spacing within the component. Available options are: "),o("code",null,"default"),e(", "),o("code",null,"comfortable"),e(", and "),o("code",null,"compact"),e(".")],-1),L=o("p",null,[e("Radio Group labels can be defined in "),o("code",null,"label"),e(" slot - that will allow to use HTML content.")],-1),x=o("p",null,[e("Use "),o("code",null,"false-icon"),e(" and "),o("code",null,"true-icon"),e(" prop to set icon on inactive and active state.")],-1),w=o("p",null,[e("Use "),o("code",null,"rules"),e(" prop to validate a radio. Accepts a mixed array of types "),o("code",null,"function"),e(", "),o("code",null,"boolean"),e(" and "),o("code",null,"string"),e(". Functions pass an input value as an argument and must return either "),o("code",null,"true"),e(" / "),o("code",null,"false"),e(" or a string containing an error message.")],-1),N={__name:"radio",setup(j){return(I,S)=>{const n=t("DemoRadioBasic"),l=t("AppCardCode"),r=t("DemoRadioColors"),s=t("DemoRadioInline"),c=t("DemoRadioDensity"),p=t("DemoRadioLabelSlot"),u=t("DemoRadioIcon"),m=t("DemoRadioValidation");return v(),V(R,{class:"match-height"},{default:i(()=>[a(d,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Basic",code:f},{default:i(()=>[h,a(n)]),_:1},8,["code"])]),_:1}),a(d,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Colors",code:b},{default:i(()=>[k,a(r)]),_:1},8,["code"])]),_:1}),a(d,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Inline",code:g},{default:i(()=>[O,a(s)]),_:1},8,["code"])]),_:1}),a(d,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Density",code:G},{default:i(()=>[C,a(c)]),_:1},8,["code"])]),_:1}),a(d,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Label Slot",code:y},{default:i(()=>[L,a(p)]),_:1},8,["code"])]),_:1}),a(d,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Icon",code:_},{default:i(()=>[x,a(u)]),_:1},8,["code"])]),_:1}),a(d,{cols:"12",md:"6"},{default:i(()=>[a(l,{title:"Validation",code:D},{default:i(()=>[w,a(m)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{N as default};
