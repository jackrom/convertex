import{V as r}from"./VCol.55ec6a95.js";import{V as c}from"./VAlert.ab9ba40f.js";import{V as y}from"./VRow.6bece164.js";import{r as a,o as w,b as k,x as o,p as t,z as n,m as e}from"./index.f5778ade.js";/* empty css              */import"./createSimpleFunctional.f5669897.js";import"./router.aceff5aa.js";import"./location.c31d3587.js";import"./position.1e434685.js";import"./VBtn.1b313c05.js";import"./group.e7225ded.js";const I={ts:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`,js:`<template>
  <VRow>
    <VCol
      cols="12"
      sm="6"
    >
      <VBtn block>
        Block Button
      </VBtn>
    </VCol>

    <VCol
      cols="12"
      sm="6"
    >
      <VBtn
        variant="outlined"
        block
      >
        Block Button
      </VBtn>
    </VCol>
  </VRow>
</template>
`},S={ts:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn color="primary">
      Primary
    </VBtn>
    <VBtn color="secondary">
      Secondary
    </VBtn>
    <VBtn color="success">
      Success
    </VBtn>
    <VBtn color="info">
      Info
    </VBtn>
    <VBtn color="warning">
      Warning
    </VBtn>
    <VBtn color="error">
      Error
    </VBtn>
  </div>
</template>
`},D={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="flat">
      primary
    </VBtn>

    <VBtn
      variant="flat"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="flat"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="flat"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="flat"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="flat"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},T={ts:`<script lang="ts" setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    divided
    color="primary"
    variant="outlined"
  >
    <VBtn icon="tabler-align-left" />
    <VBtn icon="tabler-align-center" />
    <VBtn icon="tabler-align-right" />
    <VBtn icon="tabler-align-justified" />
  </VBtnToggle>
</template>
`,js:`<script setup>
const toggleExclusive = ref(1)
<\/script>

<template>
  <VBtnToggle
    v-model="toggleExclusive"
    divided
    color="primary"
    variant="outlined"
  >
    <VBtn icon="tabler-align-left" />
    <VBtn icon="tabler-align-center" />
    <VBtn icon="tabler-align-right" />
    <VBtn icon="tabler-align-justified" />
  </VBtnToggle>
</template>
`},C={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="tabler-checkbox"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="tabler-circle-minus"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="tabler-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="tabler-settings" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="tabler-circle-off" />
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Accept
      <VIcon
        end
        icon="tabler-checkbox"
      />
    </VBtn>

    <VBtn color="secondary">
      <VIcon
        start
        icon="tabler-circle-minus"
      />Cancel
    </VBtn>

    <VBtn color="success">
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn color="info">
      <VIcon
        start
        icon="tabler-arrow-left"
      />
      Back
    </VBtn>

    <VBtn color="warning">
      <VIcon icon="tabler-settings" />
    </VBtn>

    <VBtn color="error">
      <VIcon icon="tabler-circle-off" />
    </VBtn>
  </div>
</template>
`},j={ts:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="tabler-briefcase"
      variant="text"
    />

    <VBtn
      icon="tabler-user-plus"
      variant="text"
      color="secondary"
    />

    <VBtn
      icon="tabler-search"
      variant="text"
      color="success"
    />

    <VBtn
      icon="tabler-thumb-up"
      variant="text"
      color="info"
    />

    <VBtn
      icon="tabler-star"
      variant="text"
      color="warning"
    />

    <VBtn
      icon="tabler-heart"
      variant="text"
      color="error"
    />
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn
      icon="tabler-briefcase"
      variant="text"
    />

    <VBtn
      icon="tabler-user-plus"
      variant="text"
      color="secondary"
    />

    <VBtn
      icon="tabler-search"
      variant="text"
      color="success"
    />

    <VBtn
      icon="tabler-thumb-up"
      variant="text"
      color="info"
    />

    <VBtn
      icon="tabler-star"
      variant="text"
      color="warning"
    />

    <VBtn
      icon="tabler-heart"
      variant="text"
      color="error"
    />
  </div>
</template>
`},L={ts:`<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn href="https://pixinvent.com/">
      String Literal
    </VBtn>

    <VBtn
      href="https://pixinvent.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open New Tab
    </VBtn>
  </div>
</template>
`},P={ts:`<script lang="ts" setup>
const loadings = ref<boolean[]>([])

const load = (i: number) => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="tabler-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="tabler-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>

`,js:`<script setup>
const loadings = ref([])

const load = i => {
  loadings.value[i] = true
  setTimeout(() => {
    loadings.value[i] = false
  }, 3000)
}
<\/script>

<template>
  <div class="demo-space-x">
    <VBtn
      :loading="loadings[0]"
      :disabled="loadings[0]"
      color="primary"
      @click="load(0)"
    >
      Accept Terms
    </VBtn>

    <VBtn
      :loading="loadings[1]"
      :disabled="loadings[1]"
      color="secondary"
      @click="load(1)"
    >
      Upload
      <VIcon
        end
        icon="tabler-cloud-upload"
      />
    </VBtn>

    <VBtn
      :loading="loadings[2]"
      :disabled="loadings[2]"
      color="success"
      @click="load(2)"
    >
      Loader slot
      <template #loader>
        <span>Loading...</span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[3]"
      :disabled="loadings[3]"
      color="info"
      @click="load(3)"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <VIcon icon="tabler-refresh" />
        </span>
      </template>
    </VBtn>

    <VBtn
      :loading="loadings[4]"
      :disabled="loadings[4]"
      color="warning"
      icon="tabler-cloud-upload"
      @click="load(4)"
    />
  </div>
</template>

  <style lang="scss" scoped>
  .custom-loader {
    display: flex;
    animation: loader 1s infinite;
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }
  </style>

`},E={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="outlined">
      Primary
    </VBtn>
    <VBtn
      variant="outlined"
      color="secondary"
    >
      Secondary
    </VBtn>
    <VBtn
      variant="outlined"
      color="success"
    >
      Success
    </VBtn>
    <VBtn
      variant="outlined"
      color="info"
    >
      Info
    </VBtn>
    <VBtn
      variant="outlined"
      color="warning"
    >
      Warning
    </VBtn>
    <VBtn
      variant="outlined"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},z={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="plain">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="plain"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="plain"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="plain"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="plain"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="plain"
    >
      error
    </VBtn>
  </div>
</template>
`},R={ts:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn>
      Normal Button
    </VBtn>
    <VBtn
      rounded="lg"
      color="secondary"
    >
      Rounded Button
    </VBtn>
    <VBtn
      :rounded="0"
      color="success"
    >
      Tile Button
    </VBtn>
    <VBtn
      rounded="pill"
      color="info"
    >
      Pill Button
    </VBtn>
  </div>
</template>
`},N={ts:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: '/alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: '/alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn to="alert">
      String Literal
    </VBtn>

    <VBtn
      color="warning"
      :to="{ path: '/alert' }"
    >
      Object Path
    </VBtn>

    <VBtn
      color="success"
      :to="{ name: 'components-alert' }"
    >
      Named Router
    </VBtn>

    <VBtn
      color="secondary"
      :to="{ path: '/alert', query: { plan: 'private' } }"
    >
      With Query
    </VBtn>
  </div>
</template>
`},O={ts:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn size="x-large">
      Extra large Button
    </VBtn>

    <VBtn
      color="success"
      size="large"
    >
      Large Button
    </VBtn>

    <VBtn color="info">
      Normal Button
    </VBtn>

    <VBtn
      size="small"
      color="warning"
    >
      Small Button
    </VBtn>

    <VBtn
      size="x-small"
      color="error"
    >
      Extra small Button
    </VBtn>
  </div>
</template>
`},U={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="text">
      Primary
    </VBtn>

    <VBtn
      variant="text"
      color="secondary"
    >
      Secondary
    </VBtn>

    <VBtn
      variant="text"
      color="success"
    >
      Success
    </VBtn>

    <VBtn
      variant="text"
      color="info"
    >
      Info
    </VBtn>

    <VBtn
      variant="text"
      color="warning"
    >
      Warning
    </VBtn>

    <VBtn
      variant="text"
      color="error"
    >
      Error
    </VBtn>
  </div>
</template>
`},W={ts:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      error
    </VBtn>
  </div>
</template>
`,js:`<template>
  <div class="demo-space-x">
    <VBtn variant="tonal">
      Primary
    </VBtn>

    <VBtn
      color="secondary"
      variant="tonal"
    >
      Secondary
    </VBtn>

    <VBtn
      color="success"
      variant="tonal"
    >
      Success
    </VBtn>

    <VBtn
      color="info"
      variant="tonal"
    >
      Info
    </VBtn>

    <VBtn
      color="warning"
      variant="tonal"
    >
      warning
    </VBtn>

    <VBtn
      color="error"
      variant="tonal"
    >
      error
    </VBtn>
  </div>
</template>
`},A=e("p",null,[n("The "),e("code",null,"color"),n(" prop is used to change the background color of the alert.")],-1),F=e("p",null,[n("The "),e("code",null,"outlined"),n(" variant option is used to create outlined buttons.")],-1),G=e("p",null,[n("The "),e("code",null,"flat"),n(" buttons still maintain their background color, but have no box shadow.")],-1),Y=e("p",null,[n("Use the "),e("code",null,"rounded"),n(" prop to control the border radius of buttons.")],-1),q=e("p",null,[n("Use "),e("code",null,"text"),n(" variant option to create text button. Text buttons have no box shadow and no background.")],-1),Q=e("p",null,[n("Use "),e("code",null,"plain"),n(" variant option to a create a plain button. Plain buttons have a lower baseline opacity that reacts to hover and focus.")],-1),H=e("p",null,[n("Use "),e("code",null,"tonal"),n(" variant option to a create a light background button.")],-1),J=e("p",null,"Icons can be used inside of buttons to add emphasis to the action.",-1),K=e("p",null,[n("Use "),e("code",null,"icon"),n(" prop to create button with icon only. This property makes the button rounded and applies the text prop styles.")],-1),M=e("p",null,"Buttons can be given different sizing options to fit a multitude of scenarios.",-1),X=e("p",null,[n("The "),e("code",null,"block"),n(" prop allows buttons to extend the full available width.")],-1),Z=e("p",null,[n("Using the "),e("code",null,"loading"),n(" prop, you can notify a user that there is processing taking place. The default behavior is to use a "),e("code",null,"v-progress-circular"),n(" component but this can be customized.")],-1),$=e("p",null,[n("Use "),e("code",null,"to"),n(" prop to create button with router support.")],-1),tt=e("p",null,[n("Designates that the component is a link. This is automatic when using the "),e("code",null,"href"),n(" or "),e("code",null,"to"),n(" prop.")],-1),ot=e("p",null,[n(" Wrap buttons with the "),e("code",null,"v-btn-toggle"),n(" component to create a group button. You can add a visual divider between buttons with the "),e("code",null,"divided"),n(" prop. ")],-1),vt={__name:"button",setup(nt){return(et,at)=>{const i=a("DemoButtonColors"),l=a("AppCardCode"),s=a("DemoButtonOutlined"),d=a("DemoButtonFlat"),B=a("DemoButtonRounded"),V=a("DemoButtonText"),u=a("DemoButtonPlain"),p=a("DemoButtonTonal"),m=a("DemoButtonIcon"),v=a("DemoButtonIconOnly"),g=a("DemoButtonSizing"),f=a("DemoButtonBlock"),b=a("DemoButtonLoaders"),_=a("DemoButtonRouter"),h=a("DemoButtonLink"),x=a("DemoButtonGroup");return w(),k(y,null,{default:o(()=>[t(r,{cols:"12"},{default:o(()=>[t(l,{title:"Colors",code:S},{default:o(()=>[A,t(i)]),_:1},8,["code"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(l,{title:"Outlined",code:E},{default:o(()=>[F,t(s)]),_:1},8,["code"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(l,{title:"Flat",code:D},{default:o(()=>[G,t(d)]),_:1},8,["code"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(l,{title:"Rounded",code:R},{default:o(()=>[Y,t(B)]),_:1},8,["code"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(l,{title:"Text",code:U},{default:o(()=>[q,t(V)]),_:1},8,["code"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(l,{title:"Plain",code:z},{default:o(()=>[Q,t(u)]),_:1},8,["code"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(l,{title:"Tonal",code:W},{default:o(()=>[H,t(p)]),_:1},8,["code"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(l,{title:"Icon",code:C},{default:o(()=>[J,t(m)]),_:1},8,["code"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(l,{title:"Icon Only",code:j},{default:o(()=>[K,t(v)]),_:1},8,["code"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(l,{title:"Sizing",code:O},{default:o(()=>[M,t(g)]),_:1},8,["code"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(l,{title:"Block",code:I},{default:o(()=>[X,t(f)]),_:1},8,["code"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(l,{title:"Loaders",code:P},{default:o(()=>[Z,t(b)]),_:1},8,["code"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(l,{title:"Router",code:N},{default:o(()=>[$,t(c,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>[n(" Note: On click of the link button, You will get redirected to another page. ")]),_:1}),t(_)]),_:1},8,["code"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(l,{title:"Link",code:L},{default:o(()=>[tt,t(c,{color:"warning",variant:"tonal",class:"mb-4"},{default:o(()=>[n(" Note: On click of the link button, You will get redirected to another page. ")]),_:1}),t(h)]),_:1},8,["code"])]),_:1}),t(r,{cols:"12"},{default:o(()=>[t(l,{title:"Group",code:T},{default:o(()=>[ot,t(x)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{vt as default};
