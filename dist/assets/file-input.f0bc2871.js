import{V as a}from"./VCol.4ace162b.js";import{V as I}from"./VRow.92104217.js";import{r as o,o as b,b as g,x as i,p as e,m as l,z as t}from"./index.33948166.js";/* empty css              */const C={ts:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    accept="image/*"
    label="File input"
  />
</template>
`},v={ts:`<template>
  <VFileInput label="File input" />
</template>
`,js:`<template>
  <VFileInput label="File input" />
</template>
`},y={ts:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`,js:`<template>
  <VFileInput
    chips
    label="File input w/ chips"
  />
</template>
`},w={ts:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    counter
    multiple
    label="File input"
  />
</template>
`},D={ts:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    density="compact"
  />
</template>
`},z={ts:`<script setup lang="ts">
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`,js:`<script setup>
const file = ref()
const loading = ref(true)

watch(file, () => {
  loading.value = !file.value[0]
})
<\/script>

<template>
  <VFileInput
    v-model="file"
    :loading="loading"
    color="primary"
    label="File input"
  />
</template>
`},j={ts:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    multiple
    label="File input"
  />
</template>
`},S={ts:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<template>
  <VFileInput
    label="File input"
    prepend-icon="tabler-camera"
  />
</template>
`},N={ts:`<script lang="ts" setup>
const files = ref<File[]>([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`,js:`<script setup>
const files = ref([])
<\/script>

<template>
  <VFileInput
    v-model="files"
    multiple
    placeholder="Upload your documents"
    label="File input"
    prepend-icon="tabler-paperclip"
  >
    <template #selection="{ fileNames }">
      <template
        v-for="fileName in fileNames"
        :key="fileName"
      >
        <VChip
          label
          size="small"
          variant="outlined"
          color="primary"
          class="me-2"
        >
          {{ fileName }}
        </VChip>
      </template>
    </template>
  </VFileInput>
</template>
`},L={ts:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`,js:`<template>
  <VFileInput
    show-size
    label="File input"
  />
</template>
`},A={ts:`<script lang="ts" setup>
const rules = [
  (fileList: FileList) => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!',
]
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`,js:`<script setup>
const rules = [fileList => !fileList || !fileList.length || fileList[0].size < 1000000 || 'Avatar size should be less than 1 MB!']
<\/script>

<template>
  <VFileInput
    :rules="rules"
    label="Avatar"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="Pick an avatar"
    prepend-icon="tabler-camera"
  />
</template>
`},B={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
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
      <VFileInput label="Outlined" />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Filled"
        variant="filled"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Solo"
        variant="solo"
      />
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Plain"
        variant="plain"
      />
    </VCol>
    <VCol
      cols="12"
      sm="6"
    >
      <VFileInput
        label="Underlined"
        variant="underlined"
        density="default"
      />
    </VCol>
  </VRow>
</template>
`},k=l("p",null,[t("The "),l("code",null,"v-file-input"),t(" component is used to selecting files.")],-1),P=l("p",null,[t("You can reduces the file input height with "),l("code",null,"density"),t(" prop. Available options are: "),l("code",null,"default"),t(", "),l("code",null,"comfortable"),t(", and "),l("code",null,"compact"),t(".")],-1),U=l("p",null,[t("use "),l("code",null,"solo"),t(", "),l("code",null,"filled"),t(", "),l("code",null,"outlined"),t(", "),l("code",null,"plain"),t(" and "),l("code",null,"underlined"),t(" option of "),l("code",null,"variant"),t(" prop to change the look of file input.")],-1),x=l("p",null,[l("code",null,"v-file-input"),t(" component can accept only specific media formats/file types if you want.")],-1),M=l("p",null,[t("Use "),l("code",null,"chip"),t(" prop to display the selected file as a chip.")],-1),R=l("p",null,[t("When using the "),l("code",null,"show-size"),t(" property along with "),l("code",null,"counter"),t(", the total number of files and size will be displayed under the input.")],-1),T=l("p",null,[t(" The "),l("code",null,"v-file-input"),t(" can contain multiple files at the same time when using the "),l("code",null,"multiple"),t(" prop. ")],-1),O=l("p",null,[t(" The "),l("code",null,"v-file-input"),t(" has a default "),l("code",null,"prepend-icon"),t(" that can be set on the component or adjusted globally. ")],-1),Y=l("p",null,[t("The displayed size of the selected file(s) can be configured with the "),l("code",null,"show-size"),t(" property.")],-1),W=l("p",null,[t("You can use the "),l("code",null,"rules"),t(" prop to create your own custom validation parameters.")],-1),q=l("p",null,[t("Using the "),l("code",null,"selection"),t(" slot, you can customize the appearance of your input selections.")],-1),E=l("p",null,[t("Use "),l("code",null,"loading"),t(" prop to displays linear progress bar.")],-1),$={__name:"file-input",setup(G){return(H,J)=>{const p=o("DemoFileInputBasic"),n=o("AppCardCode"),s=o("DemoFileInputDensity"),c=o("DemoFileInputVariant"),u=o("DemoFileInputAccept"),d=o("DemoFileInputChips"),m=o("DemoFileInputCounter"),r=o("DemoFileInputMultiple"),f=o("DemoFileInputPrependIcon"),_=o("DemoFileInputShowSize"),F=o("DemoFileInputValidation"),h=o("DemoFileInputSelectionSlot"),V=o("DemoFileInputLoading");return b(),g(I,{class:"match-height"},{default:i(()=>[e(a,{cols:"12",md:"6"},{default:i(()=>[e(n,{title:"Basic",code:v},{default:i(()=>[k,e(p)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:i(()=>[e(n,{title:"Density",code:D},{default:i(()=>[P,e(s)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12"},{default:i(()=>[e(n,{title:"Variant",code:B},{default:i(()=>[U,e(c)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:i(()=>[e(n,{title:"Accept",code:C},{default:i(()=>[x,e(u)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:i(()=>[e(n,{title:"Chips",code:y},{default:i(()=>[M,e(d)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:i(()=>[e(n,{title:"Counter",code:w},{default:i(()=>[R,e(m)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:i(()=>[e(n,{title:"Multiple",code:j},{default:i(()=>[T,e(r)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:i(()=>[e(n,{title:"Prepend icon",code:S},{default:i(()=>[O,e(f)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:i(()=>[e(n,{title:"Show size",code:L},{default:i(()=>[Y,e(_)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:i(()=>[e(n,{title:"Validation",code:A},{default:i(()=>[W,e(F)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:i(()=>[e(n,{title:"Selection slot",code:N},{default:i(()=>[q,e(h)]),_:1},8,["code"])]),_:1}),e(a,{cols:"12",md:"6"},{default:i(()=>[e(n,{title:"Loading",code:z},{default:i(()=>[E,e(V)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{$ as default};
