import{V as l}from"./VCol.4ace162b.js";import{V as u}from"./VRow.92104217.js";import{r as i,o as x,b as P,x as o,p as e,m as a,z as n}from"./index.33948166.js";/* empty css              */const V={ts:`<template>
  <VExpansionPanels variant="accordion">
    <VExpansionPanel
      v-for="item in 4"
      :key="item"
    >
      <VExpansionPanelTitle>
        Accordion {{ item }}
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`,js:`<template>
  <VExpansionPanels variant="accordion">
    <VExpansionPanel
      v-for="item in 4"
      :key="item"
    >
      <VExpansionPanelTitle>
        Accordion {{ item }}
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`},E={ts:`<template>
  <VExpansionPanels multiple>
    <VExpansionPanel
      v-for="i in 4"
      :key="i"
    >
      <VExpansionPanelTitle>
        Item {{ i }}
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`,js:`<template>
  <VExpansionPanels multiple>
    <VExpansionPanel
      v-for="i in 4"
      :key="i"
    >
      <VExpansionPanelTitle>
        Item {{ i }}
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`},h={ts:`<script setup lang="ts">
const panel = ref(0)
<\/script>

<template>
  <VExpansionPanels v-model="panel">
    <VExpansionPanel>
      <VExpansionPanelTitle disable-icon-rotate>
        Server Down
        <template #actions>
          <VIcon
            icon="tabler-alert-circle"
            color="error"
          />
        </template>
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Gummies biscuit dessert macaroon liquorice carrot cake oat cake jelly beans cake. Candy wafer tiramisu sugar plum sweet. Ice cream topping gummies biscuit souffl\xE9 marzipan topping brownie marshmallow. Chocolate cake cookie pudding gummies cotton candy ice cream. Pie liquorice marzipan cake carrot cake macaroon jelly toffee. Lollipop donut gummi bears caramels icing marzipan.
      </VExpansionPanelText>
    </VExpansionPanel>

    <VExpansionPanel>
      <VExpansionPanelTitle
        disable-icon-rotate
      >
        Sales report generated
        <template #actions>
          <VIcon
            icon="tabler-check"
            color="success"
          />
        </template>
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Bear claw ice cream icing gummies gingerbread cotton candy tootsie roll cupcake macaroon. Halvah brownie souffl\xE9. Pie drag\xE9e macaroon. Tart tootsie roll chocolate bar biscuit jujubes lemon drops. Pudding cotton candy tart jelly-o bear claw lollipop. Jelly-o apple pie candy bonbon chupa chups cupcake cotton candy. Sweet roll cotton candy toffee caramels. Jelly-o chocolate cake toffee pastry halvah. Muffin tiramisu ice cream danish jelly-o brownie powde
      </VExpansionPanelText>
    </VExpansionPanel>

    <VExpansionPanel>
      <VExpansionPanelTitle disable-icon-rotate>
        High Memory usage
        <template #actions>
          <VIcon
            icon="tabler-alert-triangle"
            color="warning"
          />
        </template>
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Jelly beans wafer lemon drops macaroon muffin gummies muffin. Ice cream oat cake chocolate bar sesame snaps. Halvah macaroon caramels gummies. Marshmallow jelly beans danish. Cake chocolate cake tiramisu chocolate bar sugar plum biscuit jelly danish. Pudding gummi bears sesame snaps cake souffl\xE9 ice cream chocolate bar. Cotton candy ice cream danish chocolate cake topping ice cream. Brownie muffin gingerbread.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`,js:`<script setup>
const panel = ref(0)
<\/script>

<template>
  <VExpansionPanels v-model="panel">
    <VExpansionPanel>
      <VExpansionPanelTitle disable-icon-rotate>
        Server Down
        <template #actions>
          <VIcon
            icon="tabler-alert-circle"
            color="error"
          />
        </template>
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Gummies biscuit dessert macaroon liquorice carrot cake oat cake jelly beans cake. Candy wafer tiramisu sugar plum sweet. Ice cream topping gummies biscuit souffl\xE9 marzipan topping brownie marshmallow. Chocolate cake cookie pudding gummies cotton candy ice cream. Pie liquorice marzipan cake carrot cake macaroon jelly toffee. Lollipop donut gummi bears caramels icing marzipan.
      </VExpansionPanelText>
    </VExpansionPanel>

    <VExpansionPanel>
      <VExpansionPanelTitle
        disable-icon-rotate
      >
        Sales report generated
        <template #actions>
          <VIcon
            icon="tabler-check"
            color="success"
          />
        </template>
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Bear claw ice cream icing gummies gingerbread cotton candy tootsie roll cupcake macaroon. Halvah brownie souffl\xE9. Pie drag\xE9e macaroon. Tart tootsie roll chocolate bar biscuit jujubes lemon drops. Pudding cotton candy tart jelly-o bear claw lollipop. Jelly-o apple pie candy bonbon chupa chups cupcake cotton candy. Sweet roll cotton candy toffee caramels. Jelly-o chocolate cake toffee pastry halvah. Muffin tiramisu ice cream danish jelly-o brownie powde
      </VExpansionPanelText>
    </VExpansionPanel>

    <VExpansionPanel>
      <VExpansionPanelTitle disable-icon-rotate>
        High Memory usage
        <template #actions>
          <VIcon
            icon="tabler-alert-triangle"
            color="warning"
          />
        </template>
      </VExpansionPanelTitle>
      <VExpansionPanelText>
        Jelly beans wafer lemon drops macaroon muffin gummies muffin. Ice cream oat cake chocolate bar sesame snaps. Halvah macaroon caramels gummies. Marshmallow jelly beans danish. Cake chocolate cake tiramisu chocolate bar sugar plum biscuit jelly danish. Pudding gummi bears sesame snaps cake souffl\xE9 ice cream chocolate bar. Cotton candy ice cream danish chocolate cake topping ice cream. Brownie muffin gingerbread.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`},b={ts:`<template>
  <VExpansionPanels variant="inset">
    <VExpansionPanel
      v-for="item in 4"
      :key="item"
    >
      <VExpansionPanelTitle>Inset {{ item }}</VExpansionPanelTitle>
      <VExpansionPanelText>
        Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut chocolate cake oat cake I love gummi bears.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`,js:`<template>
  <VExpansionPanels variant="inset">
    <VExpansionPanel
      v-for="item in 4"
      :key="item"
    >
      <VExpansionPanelTitle>Inset {{ item }}</VExpansionPanelTitle>
      <VExpansionPanelText>
        Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut chocolate cake oat cake I love gummi bears.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`},g={ts:`<script lang="ts" setup>
const openedPanels = ref<number[]>([])

const items = ref(5)

const all = () => {
  // [...Array(5).keys()] => [0, 1, 2, 3, 4]
  openedPanels.value = [...Array(items.value).keys()]
}

const none = () => {
  openedPanels.value = []
}
<\/script>

<template>
  <div>
    <div class="mb-4">
      <VBtn
        class="me-4"
        @click="all"
      >
        all
      </VBtn>

      <VBtn
        color="error"
        @click="none"
      >
        none
      </VBtn>

      <div class="mt-3">
        <span class="font-weight-bold">Selected: </span>{{ openedPanels }}
      </div>
    </div>

    <VExpansionPanels
      v-model="openedPanels"
      multiple
    >
      <VExpansionPanel
        v-for="item in items"
        :key="item"
      >
        <VExpansionPanelTitle>Header {{ item }}</VExpansionPanelTitle>
        <VExpansionPanelText>
          I love I love jujubes halvah cheesecake cookie macaroon sugar plum. Sugar plum I love bear claw marzipan wafer. Wafer sesame snaps danish candy cheesecake carrot cake tootsie roll.
        </VExpansionPanelText>
      </VExpansionPanel>
    </VExpansionPanels>
  </div>
</template>
`,js:`<script setup>
const openedPanels = ref([])
const items = ref(5)

const all = () => {

  // [...Array(5).keys()] => [0, 1, 2, 3, 4]
  openedPanels.value = [...Array(items.value).keys()]
}

const none = () => {
  openedPanels.value = []
}
<\/script>

<template>
  <div>
    <div class="mb-4">
      <VBtn
        class="me-4"
        @click="all"
      >
        all
      </VBtn>

      <VBtn
        color="error"
        @click="none"
      >
        none
      </VBtn>

      <div class="mt-3">
        <span class="font-weight-bold">Selected: </span>{{ openedPanels }}
      </div>
    </div>

    <VExpansionPanels
      v-model="openedPanels"
      multiple
    >
      <VExpansionPanel
        v-for="item in items"
        :key="item"
      >
        <VExpansionPanelTitle>Header {{ item }}</VExpansionPanelTitle>
        <VExpansionPanelText>
          I love I love jujubes halvah cheesecake cookie macaroon sugar plum. Sugar plum I love bear claw marzipan wafer. Wafer sesame snaps danish candy cheesecake carrot cake tootsie roll.
        </VExpansionPanelText>
      </VExpansionPanel>
    </VExpansionPanels>
  </div>
</template>
`},f={ts:`<template>
  <VExpansionPanels variant="popout">
    <VExpansionPanel
      v-for="item in 4"
      :key="item"
    >
      <VExpansionPanelTitle>Popout {{ item }}</VExpansionPanelTitle>
      <VExpansionPanelText>
        Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes gummi bears ice cream. Cheesecake tiramisu toffee cheesecake sugar plum candy canes bonbon candy.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`,js:`<template>
  <VExpansionPanels variant="popout">
    <VExpansionPanel
      v-for="item in 4"
      :key="item"
    >
      <VExpansionPanelTitle>Popout {{ item }}</VExpansionPanelTitle>
      <VExpansionPanelText>
        Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes gummi bears ice cream. Cheesecake tiramisu toffee cheesecake sugar plum candy canes bonbon candy.
      </VExpansionPanelText>
    </VExpansionPanel>
  </VExpansionPanels>
</template>
`},k=a("p",null,[n("Expansion panels in their simplest form display a list of expandable items. However, with the "),a("code",null,"multiple"),n(" prop, the expansion-panel can remain open until explicitly closed.")],-1),v=a("p",null,[n("Use "),a("code",null,"accordion"),n(" variant option to create "),a("strong",null,"Accordion"),n(" Panels. Accordion expansion-panel hasn't got margins around active panel.")],-1),y=a("p",null,[n("Use "),a("code",null,"inset"),n(" variant option to create Inset Panels. The Inset expansion-panel becomes smaller when activated.")],-1),T=a("p",null,[n(" Use "),a("code",null,"popout"),n(" variant option to create expansion-panel with popout design. With it, expansion-panel is enlarged when activated. ")],-1),w=a("p",null,[n("Expand action icon can be customized with "),a("code",null,"expand-icon"),n(" prop or the "),a("code",null,"actions"),n(" slot.")],-1),I=a("p",null,[n("Expansion panels can be controlled externally by modifying the "),a("code",null,"v-model"),n(". If "),a("code",null,"multiple"),n(" prop is used then it is an array containing the indices of the open items.")],-1),S={__name:"expansion-panel",setup(_){return(j,C)=>{const s=i("DemoExpansionPanelBasic"),t=i("AppCardCode"),c=i("DemoExpansionPanelAccordion"),r=i("DemoExpansionPanelInset"),p=i("DemoExpansionPanelPopout"),m=i("DemoExpansionPanelCustomIcon"),d=i("DemoExpansionPanelModel");return x(),P(u,{class:"match-height"},{default:o(()=>[e(l,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Basic",variant:"text",border:"",code:E},{default:o(()=>[k,e(s)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Accordion",variant:"text",border:"",code:V},{default:o(()=>[v,e(c)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Inset",variant:"text",border:"",code:b},{default:o(()=>[y,e(r)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Popout",variant:"text",border:"",code:f},{default:o(()=>[T,e(p)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Custom Icon",variant:"text",border:"",code:h},{default:o(()=>[w,e(m)]),_:1},8,["code"])]),_:1}),e(l,{cols:"12",md:"6"},{default:o(()=>[e(t,{title:"Model",variant:"text",border:"",code:g},{default:o(()=>[I,e(d)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{S as default};
