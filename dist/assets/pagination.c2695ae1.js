import{V as i}from"./VCol.55ec6a95.js";import{V as P}from"./VRow.6bece164.js";import{r as a,o as f,b as h,x as o,p as e,m as t,z as n}from"./index.f5778ade.js";/* empty css              */const _={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
  />
</template>
`},v={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
</template>
`},V={ts:`<script setup lang="ts">
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`,js:`<script setup>
const pageSuccess = ref(1)
const pageError = ref(2)
const pageInfo = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="pageSuccess"
      :length="7"
      active-color="success"
    />
    <VPagination
      v-model="pageError"
      :length="7"
      active-color="error"
    />
    <VPagination
      v-model="pageInfo"
      :length="7"
      active-color="info"
    />
  </div>
</template>
`},b={ts:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`,js:`<template>
  <VPagination
    :length="5"
    disabled
  />
</template>
`},x={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="tabler-caret-left"
    next-icon="tabler-caret-right"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="5"
    prev-icon="tabler-caret-left"
    next-icon="tabler-caret-right"
  />
</template>
`},D={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
  />
</template>
`},C={ts:`<script setup lang="ts">
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      size="large"
    />
  </div>
</template>
`,js:`<script setup>
const xSmallPagination = ref(1)
const smallPagination = ref(2)
const largePagination = ref(3)
<\/script>

<template>
  <div class="d-flex flex-column gap-6">
    <VPagination
      v-model="xSmallPagination"
      :length="7"
      size="small"
    />
    <VPagination
      v-model="smallPagination"
      :length="7"
    />
    <VPagination
      v-model="largePagination"
      :length="7"
      size="large"
    />
  </div>
</template>
`},z={ts:`<script lang="ts" setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="7"
  />
</template>
`,js:`<script setup>
const currentPage = ref(1)
<\/script>

<template>
  <VPagination
    v-model="currentPage"
    :length="15"
    :total-visible="7"
  />
</template>
`},S=t("p",null,[n("The "),t("code",null,"v-pagination"),n(" component is used to separate long sets of data.")],-1),w=t("p",null,[n("The "),t("code",null,"rounded"),n(" prop allows you to render pagination buttons with alternative styles.")],-1),j=t("p",null,[n("Pagination items can be manually deactivated using the "),t("code",null,"disabled"),n(" prop.")],-1),I=t("p",null,[n("Previous and next page icons can be customized with the "),t("code",null,"prev-icon"),n(" and "),t("code",null,"next-icon"),n(" props.")],-1),B=t("p",null,[n("Using the "),t("code",null,"length"),n(" prop you can set the length of "),t("code",null,"v-pagination"),n(", if the number of page buttons exceeds the parent container, it will truncate the list.")],-1),T=t("p",null,[n("You can also manually set the maximum number of visible page buttons with the "),t("code",null,"total-visible"),n(" prop.")],-1),y=t("p",null,[n("Use "),t("code",null,"active-color"),n(" prop for create different color pagination.")],-1),E=t("p",null,[n("Use "),t("code",null,"size"),n(" prop to sets the height and width of the component. Default unit is px. Can also use the following predefined sizes: "),t("strong",null,"x-small"),n(", "),t("strong",null,"small"),n(", "),t("strong",null,"default"),n(", "),t("strong",null,"large"),n(", and "),t("strong",null,"x-large"),n(".")],-1),q={__name:"pagination",setup(L){return(N,U)=>{const s=a("DemoPaginationBasic"),l=a("AppCardCode"),c=a("DemoPaginationCircle"),r=a("DemoPaginationDisabled"),g=a("DemoPaginationIcons"),p=a("DemoPaginationLength"),d=a("DemoPaginationTotalVisible"),m=a("DemoPaginationColor"),u=a("DemoPaginationSize");return f(),h(P,{class:"match-height"},{default:o(()=>[e(i,{cols:"12",md:"6"},{default:o(()=>[e(l,{title:"Basic",code:_},{default:o(()=>[S,e(s)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(l,{title:"Circle",code:v},{default:o(()=>[w,e(c)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(l,{title:"Disabled",code:b},{default:o(()=>[j,e(r)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(l,{title:"Icons",code:x},{default:o(()=>[I,e(g)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(l,{title:"Length",code:D},{default:o(()=>[B,e(p)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(l,{title:"Total visible",code:z},{default:o(()=>[T,e(d)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(l,{title:"Color",code:V},{default:o(()=>[y,e(m)]),_:1},8,["code"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(l,{title:"Size",code:C},{default:o(()=>[E,e(u)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{q as default};
