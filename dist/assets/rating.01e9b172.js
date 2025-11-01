import{V as s}from"./VCol.55ec6a95.js";import{V as f}from"./VRow.6bece164.js";import{r as l,o as v,b as R,x as t,p as e,m as o,z as n}from"./index.f5778ade.js";/* empty css              */const V={ts:`<template>
  <VRating />
</template>
`,js:`<template>
  <VRating />
</template>
`},b={ts:`<template>
  <VRating clearable />
</template>
`,js:`<template>
  <VRating clearable />
</template>
`},y={ts:`<script lang="ts" setup>
const rating = ref(4)
const ratingColors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)

const ratingColors = [
  'primary',
  'secondary',
  'success',
  'info',
  'warning',
  'error',
]
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-for="color in ratingColors"
      :key="color"
      v-model="rating"
      :color="color"
    />
  </div>
</template>
`},D={ts:`<template>
  <VRating density="compact" />
</template>
`,js:`<template>
  <VRating density="compact" />
</template>
`},x={ts:`<template>
  <VRating hover />
</template>
`,js:`<template>
  <VRating hover />
</template>
`},C={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating
    v-model="rating"
    half-increments
    hover
  />
</template>
`},z={ts:`<script lang="ts" setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`,js:`<script setup>
const rating = ref(4.5)
<\/script>

<template>
  <VRating v-model="rating">
    <template #item="props">
      <VIcon
        v-bind="props"
        :size="25"
        :color="props.isFilled ? 'success' : 'secondary'"
        class="me-3"
        :icon="props.isFilled ? 'tabler-mood-smile-beam' : 'tabler-mood-sad'"
      />
    </template>
  </VRating>
</template>
`},w={ts:`<script lang="ts" setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-semibold mb-0">
    Model: {{ rating }}
  </p>
</template>
`,js:`<script setup>
const length = ref(5)
const rating = ref(2)
<\/script>

<template>
  <div class="text-caption">
    Custom length
  </div>

  <VSlider
    v-model="length"
    :min="1"
    :max="7"
  />

  <VRating
    v-model="rating"
    :length="length"
  />
  <p class="font-weight-semibold mb-0">
    Model: {{ rating }}
  </p>
</template>
`},j={ts:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`,js:`<template>
  <VRating
    readonly
    :model-value="4"
  />
</template>
`},S={ts:`<script lang="ts" setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`,js:`<script setup>
const rating = ref(4)
<\/script>

<template>
  <div class="d-flex flex-column">
    <VRating
      v-model="rating"
      size="x-small"
    />

    <VRating
      v-model="rating"
      size="small"
    />

    <VRating v-model="rating" />

    <VRating
      v-model="rating"
      size="large"
    />

    <VRating
      v-model="rating"
      size="x-large"
    />
  </div>
</template>
`},I=o("p",null,[n("The "),o("code",null,"v-rating"),n(" component provides a simple interface for gathering user feedback.")],-1),k=o("p",null,[n("Control the space occupied by "),o("code",null,"v-rating"),n(" items using the "),o("code",null,"density"),n(" prop.")],-1),B=o("p",null,[n("The "),o("code",null,"v-rating"),n(" component can be colored as you want, you can set both selected and not selected colors.")],-1),F=o("p",null,[n("Utilize the same sizing classes available in "),o("code",null,"v-icon"),n(" or provide your own with the "),o("code",null,"size"),n(" prop.")],-1),T=o("p",null,[n("Change the number of items by modifying the the "),o("code",null,"length"),n(" prop.")],-1),H=o("p",null,[n("Use "),o("code",null,"clearable"),n(" prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.")],-1),L=o("p",null,[n("For ratings that are not meant to be changed you can use "),o("code",null,"readonly"),n(" prop.")],-1),N=o("p",null,"Provides visual feedback when hovering over icons",-1),A=o("p",null,[n("The "),o("code",null,"half-increments"),n(" prop increases the granularity of the ratings, allow for .5 values as well.")],-1),M=o("p",null,"Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.",-1),O={__name:"rating",setup(U){return(P,q)=>{const i=l("DemoRatingBasic"),a=l("AppCardCode"),c=l("DemoRatingDensity"),r=l("DemoRatingColors"),m=l("DemoRatingSize"),d=l("DemoRatingLength"),p=l("DemoRatingClearable"),g=l("DemoRatingReadonly"),u=l("DemoRatingHover"),_=l("DemoRatingIncremented"),h=l("DemoRatingItemSlot");return v(),R(f,{class:"match-height"},{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Basic",code:V},{default:t(()=>[I,e(i)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Density",code:D},{default:t(()=>[k,e(c)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Colors",code:y},{default:t(()=>[B,e(r)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Size",code:S},{default:t(()=>[F,e(m)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Length",code:w},{default:t(()=>[T,e(d)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Clearable",code:b},{default:t(()=>[H,e(p)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Readonly",code:j},{default:t(()=>[L,e(g)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Hover",code:x},{default:t(()=>[N,e(u)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Incremented",code:C},{default:t(()=>[A,e(_)]),_:1},8,["code"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(a,{title:"Item slot",code:z},{default:t(()=>[M,e(h)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{O as default};
