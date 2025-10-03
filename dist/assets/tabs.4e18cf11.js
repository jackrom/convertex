import{V as n}from"./VCol.4ace162b.js";import{V as g}from"./VRow.92104217.js";import{r as i,o as f,b as h,x as t,p as e,m as a,z as s}from"./index.33948166.js";/* empty css              */const I={ts:`<template>
  <div class="d-flex flex-column gap-4">
    <!-- Default -->
    <div>
      <VTabs>
        <VTab>Home</VTab>
        <VTab>Service</VTab>
        <VTab>Account</VTab>
      </VTabs>
      <VDivider />
    </div>

    <!-- Center -->
    <div>
      <VTabs centered>
        <VTab>Home</VTab>
        <VTab>Service</VTab>
        <VTab>Account</VTab>
      </VTabs>
      <VDivider />
    </div>

    <!-- Right -->
    <div>
      <VTabs end>
        <VTab>Home</VTab>
        <VTab>Service</VTab>
        <VTab>Account</VTab>
      </VTabs>
      <VDivider />
    </div>
  </div>
</template>
`,js:`<template>
  <div class="d-flex flex-column gap-4">
    <!-- Default -->
    <div>
      <VTabs>
        <VTab>Home</VTab>
        <VTab>Service</VTab>
        <VTab>Account</VTab>
      </VTabs>
      <VDivider />
    </div>

    <!-- Center -->
    <div>
      <VTabs centered>
        <VTab>Home</VTab>
        <VTab>Service</VTab>
        <VTab>Account</VTab>
      </VTabs>
      <VDivider />
    </div>

    <!-- Right -->
    <div>
      <VTabs end>
        <VTab>Home</VTab>
        <VTab>Service</VTab>
        <VTab>Account</VTab>
      </VTabs>
      <VDivider />
    </div>
  </div>
</template>
`},k={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in 3"
      :key="item"
    >
      {{ tabItemContent }}
    </VWindowItem>
  </VWindow>
</template>
`},_={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const currentTab = ref(0)
const tabItemContent = 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pudding candy canes sugar plum cookie chocolate cake powder croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    class="v-tabs-pill"
  >
    <VTab>Tab One</VTab>
    <VTab>Tab Two</VTab>
    <VTab>Tab Three</VTab>
  </VTabs>

  <VCard class="mt-5">
    <VCardText>
      <VWindow v-model="currentTab">
        <VWindowItem
          v-for="item in 3"
          :key="item"
        >
          {{ tabItemContent }}
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
`},W={ts:`<template>
  <VTabs
    next-icon="tabler-arrow-right"
    prev-icon="tabler-arrow-left"
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
  <VDivider />
</template>
`,js:`<template>
  <VTabs
    next-icon="tabler-arrow-right"
    prev-icon="tabler-arrow-left"
  >
    <VTab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
  <VDivider />
</template>
`},C={ts:`<script lang="ts" setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>
  <VDivider />

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const totalTabs = ref(3)
const currentTab = ref(0)

watch(totalTabs, newValue => {
  currentTab.value = newValue - 1
})
<\/script>

<template>
  <VTabs v-model="currentTab">
    <VTab
      v-for="n in totalTabs"
      :key="n"
      :value="n"
    >
      Tab {{ n }}
    </VTab>
  </VTabs>
  <VDivider />

  <!-- buttons -->
  <div class="text-center mt-9">
    <VBtn
      :disabled="!totalTabs"
      variant="text"
      @click="totalTabs--"
    >
      Remove Tab
    </VBtn>

    <VBtn
      variant="text"
      @click="totalTabs++"
    >
      Add Tab
    </VBtn>
  </div>
</template>
`},y={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Fixed Tab 1', 'Fixed Tab 2', 'Fixed Tab 3', 'Fixed Tab 4']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    fixed-tabs
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Fixed Tab 1',
  'Fixed Tab 2',
  'Fixed Tab 3',
  'Fixed Tab 4',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    fixed-tabs
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},x={ts:`<script lang="ts" setup>
const currentTab = ref('Appetizers')
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('Appetizers')

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'hortbread chocolate bar marshmallow bear claw tiramisu chocolate cookie wafer. Gummies sweet brownie brownie marshmallow chocolate cake pastry. Topping macaroon shortbread liquorice drag\xE9e macaroon.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ item }}
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-6"
  >
    <VWindowItem
      v-for="item in items"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},D={ts:`<template>
  <VTabs>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
  <VDivider />
</template>
`,js:`<template>
  <VTabs>
    <VTab
      v-for="i in 10"
      :key="i"
      :value="i"
    >
      Item {{ i }}
    </VTab>
  </VTabs>
  <VDivider />
</template>
`},q={ts:`<script lang="ts" setup>
const currentTab = ref(0)
const items = ['Appetizers', 'Entrees', 'Deserts', 'Cocktails']
const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`,js:`<script setup>
const currentTab = ref(0)

const items = [
  'Appetizers',
  'Entrees',
  'Deserts',
  'Cocktails',
]

const tabItemText = 'Chocolate cake marshmallow toffee sweet caramels tootsie roll chocolate bar. Chocolate candy lemon drops cupcake macaroon liquorice. Icing tiramisu cake pastry jujubes lollipop gummies sugar plum pie.'
const totalTabs = items.length

const preTab = () => {
  if (currentTab.value !== 1)
    currentTab.value -= 1
}

const nextTab = () => {
  if (currentTab.value !== totalTabs)
    currentTab.value += 1
}
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
  >
    <VTab
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ items[item - 1] }}
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="item in items.length"
      :key="item"
      :value="item"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>

  <div class="text-center">
    <VBtn
      variant="text"
      :disabled="currentTab === 1"
      @click="preTab"
    >
      Previous
    </VBtn>

    <VBtn
      variant="text"
      :disabled="currentTab === totalTabs"
      @click="nextTab"
    >
      Next
    </VBtn>
  </div>
</template>
`},P={ts:`<script lang="ts" setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="tabler-phone"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="tabler-heart"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="tabler-user"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`,js:`<script setup>
const currentTab = ref('tab-1')
const tabItemText = 'Biscuit cheesecake gingerbread oat cake tiramisu. Marzipan tiramisu jelly-o muffin biscuit jelly cake pie. Chocolate cookie candy croissant brownie cupcake powder cheesecake. Biscuit sesame snaps biscuit topping tiramisu croissant.'
<\/script>

<template>
  <VTabs
    v-model="currentTab"
    grow
    stacked
  >
    <VTab value="tab-1">
      <VIcon
        icon="tabler-phone"
        class="mb-2"
      />
      <span>Recent</span>
    </VTab>

    <VTab value="tab-2">
      <VIcon
        icon="tabler-heart"
        class="mb-2"
      />
      <span>Favorites</span>
    </VTab>

    <VTab value="tab-3">
      <VIcon
        icon="tabler-user"
        class="mb-2"
      />
      <span>Nearby</span>
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-5"
  >
    <VWindowItem
      v-for="i in 3"
      :key="i"
      :value="\`tab-\${i}\`"
    >
      {{ tabItemText }}
    </VWindowItem>
  </VWindow>
</template>
`},j={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="5"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
      >
        <VTab>
          <VIcon
            start
            icon="tabler-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-access-point"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VDivider vertical />

    <VCol
      cols="7"
      sm="8"
    >
      <VWindow
        v-model="currentTab"
        class="ms-3"
      >
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="5"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
      >
        <VTab>
          <VIcon
            start
            icon="tabler-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-access-point"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VDivider vertical />

    <VCol
      cols="7"
      sm="8"
    >
      <VWindow
        v-model="currentTab"
        class="ms-3"
      >
        <VWindowItem>
          <p>
            Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
          </p>

          <p class="mb-0">
            Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>

          <p class="mb-0">
            Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>
`},S={ts:`<script setup lang="ts">
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="5"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="tabler-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-access-point"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="7"
      sm="8"
    >
      <VCard>
        <VCardText>
          <VWindow v-model="currentTab">
            <VWindowItem>
              <p>
                Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
              </p>

              <p class="mb-0">
                Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
              </p>
            </VWindowItem>

            <VWindowItem>
              <p>
                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
              </p>

              <p class="mb-0">
                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
              </p>
            </VWindowItem>

            <VWindowItem>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>

              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </VWindowItem>
          </VWindow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
`,js:`<script setup>
const currentTab = ref(0)
<\/script>

<template>
  <VRow>
    <VCol
      cols="5"
      sm="4"
    >
      <VTabs
        v-model="currentTab"
        direction="vertical"
        class="v-tabs-pill"
      >
        <VTab>
          <VIcon
            start
            icon="tabler-user"
          />
          Option 1
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-lock"
          />
          Option 2
        </VTab>

        <VTab>
          <VIcon
            start
            icon="tabler-access-point"
          />
          Option 3
        </VTab>
      </VTabs>
    </VCol>

    <VCol
      cols="7"
      sm="8"
    >
      <VCard>
        <VCardText>
          <VWindow v-model="currentTab">
            <VWindowItem>
              <p>
                Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
              </p>

              <p class="mb-0">
                Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
              </p>
            </VWindowItem>

            <VWindowItem>
              <p>
                Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
              </p>

              <p class="mb-0">
                Donec venenatis vulputate lorem. Aenean viverra rhoncus pede. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Fusce commodo aliquam arcu. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
              </p>
            </VWindowItem>

            <VWindowItem>
              <p>
                Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
              </p>

              <p class="mb-0">
                Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nam at tortor in tellus interdum sagittis.
              </p>
            </VWindowItem>
          </VWindow>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
`},B=a("p",null,[s("The "),a("code",null,"v-tabs"),s(" component is used for hiding content behind a selectable item.")],-1),F=a("p",null,[s("Using "),a("code",null,"stacked"),s(" prop you can have buttons that use both icons and text.")],-1),A=a("p",null,[s("The "),a("code",null,"vertical"),s(" prop allows for "),a("code",null,"v-tab"),s(" components to stack vertically.")],-1),N=a("p",null,[s("Use "),a("code",null,"centered"),s(", "),a("code",null,"right"),s(" prop to change the tabs alignment.")],-1),z=a("p",null,"If the tab items overflow their container, pagination controls will appear on desktop.",-1),O=a("p",null,[a("code",null,"prev-icon"),s(" and "),a("code",null,"next-icon"),s(" props can be used for applying custom pagination icons.")],-1),R=a("p",null,[s("The "),a("code",null,"fixed-tabs"),s(" prop forces "),a("code",null,"v-tab"),s(" to take up all available space up to the maximum width (300px).")],-1),M=a("p",null,[s("The "),a("code",null,"grow"),s(" prop will make the tab items take up all available space with no limit.")],-1),E=a("p",null,[s("Tabs can be dynamically added and removed. This allows you to update to any number and the "),a("code",null,"v-tabs"),s(" component will react.")],-1),G=a("p",null,[s("Use our custom class "),a("code",null,".v-tabs-pill"),s(" along with "),a("code",null,"v-tabs"),s(" component to style pill tabs.")],-1),H=a("p",null,"Use our custom class .v-tabs-pill along with v-tabs component to style pill tabs.",-1),Y={__name:"tabs",setup(U){return($,J)=>{const c=i("DemoTabsBasic"),o=i("AppCardCode"),r=i("DemoTabsStacked"),l=i("DemoTabsVertical"),u=i("DemoTabsAlignment"),m=i("DemoTabsPagination"),b=i("DemoTabsCustomIcons"),d=i("DemoTabsFixed"),p=i("DemoTabsGrow"),V=i("DemoTabsProgrammaticNavigation"),T=i("DemoTabsDynamic"),v=i("DemoTabsBasicPill"),w=i("DemoTabsVerticalPill");return f(),h(g,{class:"match-height"},{default:t(()=>[e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Basic",code:k},{default:t(()=>[B,e(c)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Stacked",code:P},{default:t(()=>[F,e(r)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Vertical",code:j},{default:t(()=>[A,e(l)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Alignment",code:I},{default:t(()=>[N,e(u)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Pagination",code:D},{default:t(()=>[z,e(m)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Custom Icons",code:W},{default:t(()=>[O,e(b)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Fixed",code:y},{default:t(()=>[R,e(d)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Grow",code:x},{default:t(()=>[M,e(p)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Programmatic Navigation",code:q},{default:t(()=>[e(V)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{title:"Dynamic",code:C},{default:t(()=>[E,e(T)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{border:"",title:"Basic Pill",variant:"text",code:_},{default:t(()=>[G,e(v)]),_:1},8,["code"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(o,{border:"",title:"Vertical Pill",variant:"text",code:S},{default:t(()=>[H,e(w)]),_:1},8,["code"])]),_:1})]),_:1})}}};export{Y as default};
