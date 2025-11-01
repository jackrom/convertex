import{V as s}from"./VCol.55ec6a95.js";import{V as b}from"./VRow.6bece164.js";import{r as l,o as T,b as C,x as a,p as t,m as e,z as o}from"./index.f5778ade.js";/* empty css              */const _={ts:`<script setup lang="ts">
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    auto-grow
  />
</template>
`,js:`<script setup>
const textareaValue = ref('The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Auto Grow"
    auto-grow
  />
</template>
`},f={ts:`<template>
  <VTextarea label="Default" />
</template>
`,js:`<template>
  <VTextarea label="Default" />
</template>
`},g={ts:`<template>
  <VTextarea
    autocomplete="email"
    label="Email"
  />
</template>
`,js:`<template>
  <VTextarea
    autocomplete="email"
    label="Email"
  />
</template>
`},v={ts:`<script setup lang="ts">
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="tabler-circle-x"
    label="Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('This is clearable text.')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    clearable
    clear-icon="tabler-circle-x"
    label="Text"
  />
</template>
`},D={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    counter
    label="Text"
  />
</template>
`},R={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="prepend-icon"
        rows="1"
        prepend-icon="tabler-message-2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="tabler-message-2"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="tabler-message-2"
        label="prepend-inner-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="tabler-message-2"
        label="append-inner-icon"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        label="prepend-icon"
        rows="1"
        prepend-icon="tabler-message-2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-icon="tabler-message-2"
        label="append-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        prepend-inner-icon="tabler-message-2"
        label="prepend-inner-icon"
        rows="1"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        append-inner-icon="tabler-message-2"
        label="append-inner-icon"
        rows="1"
      />
    </VCol>
  </VRow>
</template>
`},y={ts:`<script lang="ts" setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
  />
</template>
`,js:`<script setup>
const value = ref('Marshmallow tiramisu pie dessert gingerbread tart caramels marzipan oat cake. Muffin sesame snaps cupcake bonbon cookie tiramisu. Pudding biscuit gingerbread halvah lollipop jelly-o cookie.')
<\/script>

<template>
  <VTextarea
    v-model="value"
    label="Text"
    no-resize
    rows="2"
  />
</template>
`},z={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="One row"
        auto-grow
        rows="1"
        row-height="15"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Two rows"
        rows="2"
        row-height="20"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Three rows"
        auto-grow
        rows="3"
        row-height="25"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        auto-grow
        label="Four rows"
        rows="4"
        row-height="30"
      />
    </VCol>
  </VRow>
</template>
`},j={ts:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        disabled
        label="Disabled"
        hint="Hint text"
        rows="2"
      />
    </VCol>

    <VCol cols="12">
      <VTextarea
        readonly
        rows="2"
        label="Readonly"
        hint="Hint text"
      />
    </VCol>
  </VRow>
</template>
`},k={ts:`<script lang="ts" setup>
const textareaValue = ref('Hello!')
const rules = [(v: string) => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
  />
</template>
`,js:`<script setup>
const textareaValue = ref('Hello!')
const rules = [v => v.length <= 25 || 'Max 25 characters']
<\/script>

<template>
  <VTextarea
    v-model="textareaValue"
    label="Validation"
    :rules="rules"
    rows="2"
  />
</template>
`},A={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Default"
        rows="2"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Solo"
        rows="2"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Filled"
        rows="2"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Outlined"
        rows="2"
        variant="outlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Underlined"
        rows="2"
        variant="underlined"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VTextarea
        label="Plain"
        rows="2"
        variant="plain"
      />
    </VCol>
  </VRow>
</template>
`},B=e("p",null," v-textarea in its simplest form is a multi-line text-field, useful for larger amounts of text. ",-1),H=e("p",null,[o("When using the "),e("code",null,"auto-grow"),o(" prop, textarea's will automatically increase in size when the contained text exceeds its size.")],-1),G=e("p",null,[o("Use "),e("code",null,"filled"),o(", "),e("code",null,"plain"),o(", "),e("code",null,"outlined"),o(", "),e("code",null,"solo"),o(" and "),e("code",null,"underlined"),o(" option of "),e("code",null,"variant"),o(" prop to change the look of file input.")],-1),M=e("p",null,[o("Use "),e("code",null,"disabled"),o(" and "),e("code",null,"readonly"),o(" prop to change the state of textarea.")],-1),N=e("p",null,[o(" The "),e("code",null,"autocomplete"),o(" prop gives you the option to enable the browser to predict user input. ")],-1),S=e("p",null,[o("You can clear the text from a "),e("code",null,"v-textarea"),o(" by using the "),e("code",null,"clearable"),o(" prop, and customize the icon used with the "),e("code",null,"clearable-icon"),o(" prop.")],-1),U=e("p",null,[o(" The "),e("code",null,"counter"),o(" prop informs the user of a character limit for the "),e("code",null,"v-textarea"),o(". ")],-1),F=e("p",null,[o("The "),e("code",null,"append-icon"),o(", "),e("code",null,"prepend-icon"),o(", "),e("code",null,"append-inner-icon"),o(" and "),e("code",null,"prepend-inner-icon"),o(" props help add context to v-textarea.")],-1),O=e("p",null,[o("The "),e("code",null,"rows"),o(" prop allows you to define how many rows the textarea has, when combined with the "),e("code",null,"row-height"),o(" prop you can further customize your rows by defining their height.")],-1),P=e("p",null,[e("code",null,"v-textarea"),o("'s have the option to remain the same size regardless of their content's size, using the "),e("code",null,"no-resize"),o(" prop.")],-1),I=e("p",null,[o("Use "),e("code",null,"rules"),o(" prop to validate the textarea.")],-1),Q={__name:"textarea",setup(W){return(E,Y)=>{const n=l("DemoTextareaBasic"),r=l("AppCardCode"),c=l("DemoTextareaAutoGrow"),i=l("DemoTextareaVariant"),p=l("DemoTextareaStates"),d=l("DemoTextareaBrowserAutocomplete"),u=l("DemoTextareaClearable"),m=l("DemoTextareaCounter"),V=l("DemoTextareaIcons"),x=l("DemoTextareaRows"),w=l("DemoTextareaNoResize"),h=l("DemoTextareaValidation");return T(),C(b,{class:"match-height"},{default:a(()=>[t(s,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Basic",code:f},{default:a(()=>[B,t(n)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Auto Grow",code:_},{default:a(()=>[H,t(c)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12"},{default:a(()=>[t(r,{title:"Variant",code:A},{default:a(()=>[G,t(i)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"States",code:j},{default:a(()=>[M,t(p)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Browser autocomplete",code:g},{default:a(()=>[N,t(d)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Clearable",code:v},{default:a(()=>[S,t(u)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Counter",code:D},{default:a(()=>[U,t(m)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Icons",code:R},{default:a(()=>[F,t(V)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Rows",code:z},{default:a(()=>[O,t(x)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"No resize",code:y},{default:a(()=>[P,t(w)]),_:1},8,["code"])]),_:1}),t(s,{cols:"12",md:"6"},{default:a(()=>[t(r,{title:"Validation",code:k},{default:a(()=>[I,t(h)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Q as default};
