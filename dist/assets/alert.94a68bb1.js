import{V as i}from"./VCol.55ec6a95.js";import{V as g}from"./VRow.6bece164.js";import{r as l,o as f,b as w,x as r,p as o,m as e,z as t}from"./index.f5778ade.js";/* empty css              */const _={ts:`<template>
  <VAlert color="primary">
    Good Morning! Start your day with some alerts.
  </VAlert>
</template>
`,js:`<template>
  <VAlert color="primary">
    Good Morning! Start your day with some alerts.
  </VAlert>
</template>
`},k={ts:`<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      border="top"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="end"
      color="secondary"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="bottom"
      color="success"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="start"
      color="info"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      border="top"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="end"
      color="secondary"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="bottom"
      color="success"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>

    <VAlert
      border="start"
      color="info"
      variant="tonal"
    >
      Good Morning! Start your day with some alerts.
    </VAlert>
  </div>
</template>
`},I={ts:`<script lang="ts" setup>
const isAlertVisible = ref(true)
<\/script>

<template>
  <VAlert
    v-model="isAlertVisible"
    closable
    close-label="Close Alert"
    color="primary"
  >
    Pudding wafer I love chocolate bar wafer chupa chups wafer. Cake gummies pudding gummies cake.
  </VAlert>

  <!-- Button -->
  <div class="text-center">
    <VBtn
      v-if="!isAlertVisible"
      @click="isAlertVisible = true"
    >
      Reset
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const isAlertVisible = ref(true)
<\/script>

<template>
  <VAlert
    v-model="isAlertVisible"
    closable
    close-label="Close Alert"
    color="primary"
  >
    Pudding wafer I love chocolate bar wafer chupa chups wafer. Cake gummies pudding gummies cake.
  </VAlert>

  <!-- Button -->
  <div class="text-center">
    <VBtn
      v-if="!isAlertVisible"
      @click="isAlertVisible = true"
    >
      Reset
    </VBtn>
  </div>
</template>
`},C={ts:`<template>
  <div class="demo-space-y">
    <VAlert
      border="start"
      border-color="primary"
    >
      Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake.
    </VAlert>
    <VAlert
      border="start"
      border-color="secondary"
    >
      Cookie brownie tootsie roll pudding biscuit chupa chups. Drag\xE9e gingerbread carrot.
    </VAlert>
    <VAlert
      border="start"
      border-color="success"
    >
      Gingerbread jelly beans macaroon croissant souffl\xE9. Muffin halvah cake brownie cake.
    </VAlert>
    <VAlert
      border="start"
      border-color="info"
    >
      Muffin I love wafer pudding caramels jelly beans fruitcake I love cotton candy.
    </VAlert>

    <VAlert
      border="start"
      border-color="warning"
    >
      Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake.
    </VAlert>

    <VAlert
      border="start"
      border-color="error"
    >
      Lemon drops tootsie roll liquorice marzipan lollipop I love tiramisu tootsie roll.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert
      border="start"
      border-color="primary"
    >
      Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake.
    </VAlert>
    <VAlert
      border="start"
      border-color="secondary"
    >
      Cookie brownie tootsie roll pudding biscuit chupa chups. Drag\xE9e gingerbread carrot.
    </VAlert>
    <VAlert
      border="start"
      border-color="success"
    >
      Gingerbread jelly beans macaroon croissant souffl\xE9. Muffin halvah cake brownie cake.
    </VAlert>
    <VAlert
      border="start"
      border-color="info"
    >
      Muffin I love wafer pudding caramels jelly beans fruitcake I love cotton candy.
    </VAlert>

    <VAlert
      border="start"
      border-color="warning"
    >
      Cake sweet roll sesame snaps cheesecake halvah apple pie gingerbread cake.
    </VAlert>

    <VAlert
      border="start"
      border-color="error"
    >
      Lemon drops tootsie roll liquorice marzipan lollipop I love tiramisu tootsie roll.
    </VAlert>
  </div>
</template>
`},D={ts:`<template>
  <div class="demo-space-y">
    <VAlert color="primary">
      I'm an alert with primary background color.
    </VAlert>

    <VAlert color="secondary">
      I'm an alert with secondary background color.
    </VAlert>

    <VAlert color="success">
      I'm an alert with success background color.
    </VAlert>

    <VAlert color="info">
      I'm an alert with info background color.
    </VAlert>

    <VAlert color="warning">
      I'm an alert with warning background color.
    </VAlert>

    <VAlert color="error">
      I'm an alert with error background color.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert color="primary">
      I'm an alert with primary background color.
    </VAlert>

    <VAlert color="secondary">
      I'm an alert with secondary background color.
    </VAlert>

    <VAlert color="success">
      I'm an alert with success background color.
    </VAlert>

    <VAlert color="info">
      I'm an alert with info background color.
    </VAlert>

    <VAlert color="warning">
      I'm an alert with warning background color.
    </VAlert>

    <VAlert color="error">
      I'm an alert with error background color.
    </VAlert>
  </div>
</template>
`},S={ts:`<template>
  <div class="demo-space-y">
    <VAlert
      density="compact"
      color="primary"
      variant="tonal"
    >
      I'm a compact alert with a <strong>color</strong> of primary.
    </VAlert>

    <VAlert
      density="comfortable"
      color="secondary"
      variant="tonal"
    >
      I'm a comfortable alert with the <strong>variant</strong> prop and a <strong>color</strong> of secondary.
    </VAlert>

    <VAlert
      density="default"
      color="success"
      variant="tonal"
    >
      I'm a default alert with the <strong>color</strong> of success.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert
      density="compact"
      color="primary"
      variant="tonal"
    >
      I'm a compact alert with a <strong>color</strong> of primary.
    </VAlert>

    <VAlert
      density="comfortable"
      color="secondary"
      variant="tonal"
    >
      I'm a comfortable alert with the <strong>variant</strong> prop and a <strong>color</strong> of secondary.
    </VAlert>

    <VAlert
      density="default"
      color="success"
      variant="tonal"
    >
      I'm a default alert with the <strong>color</strong> of success.
    </VAlert>
  </div>
</template>
`},j={ts:`<script lang="ts" setup>
const alertShadow = ref(5)
<\/script>

<template>
  <VSlider
    v-model="alertShadow"
    color="primary"
    :max="24"
    :min="0"
    :step="1"
    thumb-label
  />

  <VAlert
    color="primary"
    :elevation="alertShadow"
  >
    I'm an alert with box shadow.
  </VAlert>
</template>
`,js:`<script setup>
const alertShadow = ref(5)
<\/script>

<template>
  <VSlider
    v-model="alertShadow"
    color="primary"
    :max="24"
    :min="0"
    :step="1"
    thumb-label
  />

  <VAlert
    color="primary"
    :elevation="alertShadow"
  >
    I'm an alert with box shadow.
  </VAlert>
</template>
`},M={ts:`<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      icon="tabler-egg-cracked"
    >
      Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
    </VAlert>

    <VAlert
      color="secondary"
      icon="tabler-device-desktop-analytics"
    >
      Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit.
    </VAlert>

    <VAlert
      color="success"
      icon="tabler-brand-vue"
    >
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert
      color="primary"
      icon="tabler-egg-cracked"
    >
      Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
    </VAlert>

    <VAlert
      color="secondary"
      icon="tabler-device-desktop-analytics"
    >
      Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit.
    </VAlert>

    <VAlert
      color="success"
      icon="tabler-brand-vue"
    >
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
    </VAlert>
  </div>
</template>
`},B={ts:`<template>
  <div class="demo-space-y">
    <VAlert
      variant="outlined"
      color="primary"
    >
      Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
    </VAlert>

    <VAlert
      variant="outlined"
      color="secondary"
    >
      Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent ac massa at ligula laoreet iaculis.
    </VAlert>

    <VAlert
      variant="outlined"
      color="success"
    >
      Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum.
    </VAlert>

    <VAlert
      variant="outlined"
      color="info"
    >
      Marshmallow jelly beans toffee. Sweet roll lemon drops muffin biscuit. Gummies jujubes halvah dessert cream croissant.
    </VAlert>

    <VAlert
      variant="outlined"
      color="warning"
    >
      Tootsie roll candy canes wafer icing sweet jelly macaroon. Caramels icing fruitcake chocolate cake cake donut.
    </VAlert>

    <VAlert
      variant="outlined"
      color="error"
    >
      Jelly beans drag\xE9e jelly. Cotton candy danish chocolate cake. Carrot cake pastry jelly beans gummi bears.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert
      variant="outlined"
      color="primary"
    >
      Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
    </VAlert>

    <VAlert
      variant="outlined"
      color="secondary"
    >
      Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent ac massa at ligula laoreet iaculis.
    </VAlert>

    <VAlert
      variant="outlined"
      color="success"
    >
      Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum.
    </VAlert>

    <VAlert
      variant="outlined"
      color="info"
    >
      Marshmallow jelly beans toffee. Sweet roll lemon drops muffin biscuit. Gummies jujubes halvah dessert cream croissant.
    </VAlert>

    <VAlert
      variant="outlined"
      color="warning"
    >
      Tootsie roll candy canes wafer icing sweet jelly macaroon. Caramels icing fruitcake chocolate cake cake donut.
    </VAlert>

    <VAlert
      variant="outlined"
      color="error"
    >
      Jelly beans drag\xE9e jelly. Cotton candy danish chocolate cake. Carrot cake pastry jelly beans gummi bears.
    </VAlert>
  </div>
</template>
`},T={ts:`<template>
  <div class="demo-space-y">
    <VAlert
      prominent
      type="info"
    >
      <template #text>
        Macaroon I love tiramisu I love wafer apple pie jelly beans shortbread.
      </template>
    </VAlert>

    <VAlert
      color="success"
      icon="tabler-school"
      prominent
    >
      Cotton candy tart tiramisu lollipop gummi bears oat cake cupcake macaroon.
    </VAlert>

    <VAlert
      icon="tabler-shield-lock"
      prominent
      type="warning"
    >
      Ice cream candy I love wafer bonbon gingerbread candy canes tiramisu.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert
      prominent
      type="info"
    >
      <template #text>
        Macaroon I love tiramisu I love wafer apple pie jelly beans shortbread.
      </template>
    </VAlert>

    <VAlert
      color="success"
      icon="tabler-school"
      prominent
    >
      Cotton candy tart tiramisu lollipop gummi bears oat cake cupcake macaroon.
    </VAlert>

    <VAlert
      icon="tabler-shield-lock"
      prominent
      type="warning"
    >
      Ice cream candy I love wafer bonbon gingerbread candy canes tiramisu.
    </VAlert>
  </div>
</template>
`},P={ts:`<template>
  <div class="demo-space-y">
    <VAlert
      variant="tonal"
      color="primary"
    >
      Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus.
    </VAlert>

    <VAlert
      variant="tonal"
      color="secondary"
    >
      Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="success"
    >
      Vestibulum ullamcorper mauris at ligula. Nulla porta dolor.
    </VAlert>

    <VAlert
      variant="tonal"
      color="info"
    >
      Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc.
    </VAlert>

    <VAlert
      variant="tonal"
      color="warning"
    >
      Marzipan topping croissant cake sweet roll ice cream souffl\xE9 chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="error"
    >
      Marzipan topping croissant cake sweet roll ice cream souffl\xE9 chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert
      variant="tonal"
      color="primary"
    >
      Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus.
    </VAlert>

    <VAlert
      variant="tonal"
      color="secondary"
    >
      Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="success"
    >
      Vestibulum ullamcorper mauris at ligula. Nulla porta dolor.
    </VAlert>

    <VAlert
      variant="tonal"
      color="info"
    >
      Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc.
    </VAlert>

    <VAlert
      variant="tonal"
      color="warning"
    >
      Marzipan topping croissant cake sweet roll ice cream souffl\xE9 chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>

    <VAlert
      variant="tonal"
      color="error"
    >
      Marzipan topping croissant cake sweet roll ice cream souffl\xE9 chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </VAlert>
  </div>
</template>
`},x={ts:`<template>
  <div class="demo-space-y">
    <VAlert type="info">
      I'm a alert with a <strong>type</strong> of info
    </VAlert>

    <VAlert type="success">
      I'm a alert with a <strong>type</strong> of success
    </VAlert>

    <VAlert type="warning">
      I'm a alert with a <strong>type</strong> of warning
    </VAlert>

    <VAlert type="error">
      I'm a alert with a <strong>type</strong> of error
    </VAlert>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-y">
    <VAlert type="info">
      I'm a alert with a <strong>type</strong> of info
    </VAlert>

    <VAlert type="success">
      I'm a alert with a <strong>type</strong> of success
    </VAlert>

    <VAlert type="warning">
      I'm a alert with a <strong>type</strong> of warning
    </VAlert>

    <VAlert type="error">
      I'm a alert with a <strong>type</strong> of error
    </VAlert>
  </div>
</template>
`},G={ts:`<script lang="ts" setup>
const isAlertVisible = ref(true)
<\/script>

<template>
  <div class="alert-demo-v-model-wrapper">
    <VAlert
      v-model="isAlertVisible"
      color="warning"
      variant="tonal"
    >
      non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    </VAlert>
  </div>

  <!-- button -->
  <VBtn @click="isAlertVisible = !isAlertVisible">
    {{ isAlertVisible ? "Hide Alert" : "Show Alert" }}
  </VBtn>
</template>

<style lang="scss">
.alert-demo-v-model-wrapper {
  margin-block-end: 1rem;
  min-block-size: 80px;
}
</style>
`,js:`<script setup>
const isAlertVisible = ref(true)
<\/script>

<template>
  <div class="alert-demo-v-model-wrapper">
    <VAlert
      v-model="isAlertVisible"
      color="warning"
      variant="tonal"
    >
      non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    </VAlert>
  </div>

  <!-- button -->
  <VBtn @click="isAlertVisible = !isAlertVisible">
    {{ isAlertVisible ? "Hide Alert" : "Show Alert" }}
  </VBtn>
</template>

<style lang="scss">
.alert-demo-v-model-wrapper {
  margin-block-end: 1rem;
  min-block-size: 80px;
}
</style>
`},q=e("p",null,[t("The "),e("code",null,"color"),t(" prop is used to change the background color of the alert.")],-1),z=e("p",null,[t("The "),e("code",null,"icon"),t(" prop allows you to add an icon to the beginning of the alert component. If a "),e("code",null,"type"),t(" is provided, this will override the default type icon. Additionally, setting the "),e("code",null,"icon"),t(" prop to false will remove the icon altogether.")],-1),N=e("p",null,[t("The "),e("code",null,"border"),t(" prop adds a simple border to one of the 4 sides of the alert. This can be combined with props like "),e("code",null,"color"),t(", "),e("code",null,"type"),t(" and "),e("code",null,"icon"),t(" to provide unique accents to the alert.")],-1),J=e("p",null,[t("The "),e("code",null,"colored-border"),t(" prop removes the alert background in order to accent the "),e("code",null,"border"),t(" prop. If a type is set, it will use the type's default color. If no "),e("code",null,"color"),t(" or "),e("code",null,"type"),t(" is set, the color will default to the inverted color of the applied theme (black for light and white/gray for dark).")],-1),E=e("p",null,[t("The "),e("code",null,"density"),t(" prop decreases the height of the alert based upon 1 of 3 levels of density. "),e("code",null,"default"),t(", "),e("code",null,"comfortable"),t(", and "),e("code",null,"compact"),t(".")],-1),O=e("p",null,[t("The "),e("code",null,"type"),t(" prop provides 4 default v-alert styles: "),e("code",null,"success"),t(", "),e("code",null,"info"),t(", "),e("code",null,"warning"),t(", and "),e("code",null,"error"),t(". Each of these styles provide a default icon and color.")],-1),R=e("p",null,[t("The "),e("code",null,"closable"),t(" prop adds a close button to the end of the alert component. Clicking this button will set its value to false and effectively hide the alert.")],-1),H=e("p",null,[t("Clicking this button will set its value to "),e("code",null,"false"),t(" and effectively hide the alert. You can restore the alert by binding "),e("code",null,"v-model"),t(" and setting it to true.")],-1),L=e("p",null,[t("The "),e("code",null,'variant="outlined"'),t(" prop inverts the style of an alert, inheriting the currently applied "),e("code",null,"color"),t(", applying it to the text and border, and making its background transparent.")],-1),U=e("p",null,[t("The "),e("code",null,"variant"),t(" prop provides an easy way to change the overall style of your alerts. The "),e("code",null,'variant="tonal"'),t(" prop is a simple alert variant that applies a reduced opacity background of the provided color.")],-1),Y=e("p",null,[t("Use "),e("code",null,"elevation"),t(" prop to set a box-shadow to alert.")],-1),F=e("p",null,[t("The "),e("code",null,"prominent"),t(" prop provides a more pronounced alert by increasing the size of the icon.")],-1),te={__name:"alert",setup(K){return(Q,W)=>{const s=l("DemoAlertBasic"),a=l("AppCardCode"),n=l("DemoAlertColors"),c=l("DemoAlertIcons"),d=l("DemoAlertBorder"),u=l("DemoAlertColoredBorder"),p=l("DemoAlertDensity"),m=l("DemoAlertType"),A=l("DemoAlertClosable"),V=l("DemoAlertVModelSupport"),b=l("DemoAlertOutlined"),h=l("DemoAlertTonal"),y=l("DemoAlertElevation"),v=l("DemoAlertProminent");return f(),w(g,null,{default:r(()=>[o(i,{cols:"12"},{default:r(()=>[o(a,{title:"Basic",code:_},{default:r(()=>[o(s)]),_:1},8,["code"])]),_:1}),o(i,{cols:"12"},{default:r(()=>[o(a,{title:"Colors",code:D},{default:r(()=>[q,o(n)]),_:1},8,["code"])]),_:1}),o(i,{cols:"12"},{default:r(()=>[o(a,{title:"Icons",code:M},{default:r(()=>[z,o(c)]),_:1},8,["code"])]),_:1}),o(i,{cols:"12"},{default:r(()=>[o(a,{title:"Border",code:k},{default:r(()=>[N,o(d)]),_:1},8,["code"])]),_:1}),o(i,{cols:"12"},{default:r(()=>[o(a,{title:"Colored Border",code:C},{default:r(()=>[J,o(u)]),_:1},8,["code"])]),_:1}),o(i,{cols:"12"},{default:r(()=>[o(a,{title:"Density",code:S},{default:r(()=>[E,o(p)]),_:1},8,["code"])]),_:1}),o(i,{cols:"12"},{default:r(()=>[o(a,{title:"Type",code:x},{default:r(()=>[O,o(m)]),_:1},8,["code"])]),_:1}),o(i,{cols:"12"},{default:r(()=>[o(a,{title:"Closable",code:I},{default:r(()=>[R,o(A)]),_:1},8,["code"])]),_:1}),o(i,{cols:"12"},{default:r(()=>[o(a,{title:"v-model support",code:G},{default:r(()=>[H,o(V)]),_:1},8,["code"])]),_:1}),o(i,{cols:"12"},{default:r(()=>[o(a,{title:"Outlined",code:B},{default:r(()=>[L,o(b)]),_:1},8,["code"])]),_:1}),o(i,{cols:"12"},{default:r(()=>[o(a,{title:"Tonal",code:P},{default:r(()=>[U,o(h)]),_:1},8,["code"])]),_:1}),o(i,{cols:"12"},{default:r(()=>[o(a,{title:"Elevation",code:j},{default:r(()=>[Y,o(y)]),_:1},8,["code"])]),_:1}),o(i,{cols:"12"},{default:r(()=>[o(a,{title:"Prominent",code:T},{default:r(()=>[F,o(v)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{te as default};
