import{V as t}from"./VCol.55ec6a95.js";import{V as a}from"./VRow.6bece164.js";import{r as l,o as C,c as u,p as e,x as o,m as f}from"./index.f5778ade.js";/* empty css              */const w={ts:`<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- \u{1F449} Username -->
        <VTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Email -->
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Password -->
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Autocomplete -->
        <VAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- \u{1F449} submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)

const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref([])
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <!-- \u{1F449} Username -->
        <VTextField
          v-model="username"
          label="Username"
          placeholder="Username"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Email -->
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Password -->
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          persistent-hint
          placeholder="Password"
          hint="Your password must be 8-20 characters long."
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Autocomplete -->
        <VAutocomplete
          v-model="values"
          :items="items"
          chips
          multiple
          label="Autocomplete"
        />
      </VCol>

      <VCol cols="12">
        <!-- \u{1F449} Checkbox -->
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- \u{1F449} submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},F={ts:`<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import type { VForm } from 'vuetify/components'
import { emailValidator, requiredValidator } from '@validators'

const name = ref('')
const email = ref('')
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'] as const
const select = ref<typeof items[number]>()
const checkbox = ref(false)
const form = ref<VForm>()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
import {
  emailValidator,
  requiredValidator,
} from '@validators'

const name = ref('')
const email = ref('')

const items = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
]

const select = ref()
const checkbox = ref(false)
const form = ref()
<\/script>

<template>
  <VForm
    ref="form"
    lazy-validation
  >
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="name"
          :rules="[requiredValidator]"
          label="Name"
          required
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          :rules="[emailValidator, requiredValidator]"
          label="E-mail"
          required
        />
      </VCol>

      <VCol cols="12">
        <VSelect
          v-model="select"
          :items="items"
          :rules="[requiredValidator]"
          label="Item"
          name="select"
          require
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          :rules="[requiredValidator]"
          label="Do you agree?"
          required
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex flex-wrap gap-4"
      >
        <VBtn
          color="success"
          @click="form?.validate()"
        >
          Validate
        </VBtn>

        <VBtn
          color="error"
          @click="form?.reset()"
        >
          Reset Form
        </VBtn>

        <VBtn
          color="warning"
          @click="form?.resetValidation()"
        >
          Reset Validation
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},v={ts:`<script lang="ts" setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref<number>()
const countryList = ['USA', 'Canada', 'UK', 'Denmark', 'Germany', 'Iceland', 'Israel', 'Mexico']
const languageList = ['English', 'German', 'French', 'Spanish', 'Portuguese', 'Russian', 'Korean'] as const
const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref<typeof languageList[number][]>([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>
  <VDivider />

  <VCard flat>
    <VCardText>
      <VWindow v-model="tab">
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`,js:`<script setup>
const tab = ref('personal-info')
const firstName = ref('')
const lastName = ref('')
const country = ref()
const birthDate = ref('')
const phoneNo = ref()

const countryList = [
  'USA',
  'Canada',
  'UK',
  'Denmark',
  'Germany',
  'Iceland',
  'Israel',
  'Mexico',
]

const languageList = [
  'English',
  'German',
  'French',
  'Spanish',
  'Portuguese',
  'Russian',
  'Korean',
]

const username = ref('')
const email = ref('')
const password = ref('')
const cPassword = ref('')
const twitterLink = ref('')
const facebookLink = ref('')
const googlePlusLink = ref('')
const linkedInLink = ref('')
const instagramLink = ref('')
const quoraLink = ref('')
const languages = ref([])
const isPasswordVisible = ref(false)
const isCPasswordVisible = ref(false)
<\/script>

<template>
  <VTabs v-model="tab">
    <VTab value="personal-info">
      Personal Info
    </VTab>
    <VTab value="account-details">
      Account Details
    </VTab>
    <VTab value="social-links">
      Social Links
    </VTab>
  </VTabs>
  <VDivider />

  <VCard flat>
    <VCardText>
      <VWindow v-model="tab">
        <VWindowItem value="personal-info">
          <VForm class="mt-2">
            <VRow>
              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="firstName"
                  label="First name"
                />
              </VCol>

              <VCol
                md="6"
                cols="12"
              >
                <VTextField
                  v-model="lastName"
                  label="Last name"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="country"
                  :items="countryList"
                  label="Country"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VSelect
                  v-model="languages"
                  :items="languageList"
                  multiple
                  chips
                  clearable
                  label="Language"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="birthDate"
                  label="Birth Date"
                  placeholder="YYYY-MM-DD"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="phoneNo"
                  type="number"
                  label="Phone No."
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="account-details">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="username"
                  label="Username"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="email"
                  label="Email"
                  suffix="@example.com"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="password"
                  label="Password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="cPassword"
                  label="Confirm Password"
                  :type="isCPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCPasswordVisible ? 'tabler-eye' : 'tabler-eye-off'"
                  @click:append-inner="isCPasswordVisible = !isCPasswordVisible"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>

        <VWindowItem value="social-links">
          <VForm class="mt-2">
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="twitterLink"
                  label="Twitter"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="facebookLink"
                  label="Facebook"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="googlePlusLink"
                  label="Google+"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="linkedInLink"
                  label="LinkedIn"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="instagramLink"
                  label="Instagram"
                />
              </VCol>
              <VCol
                cols="12"
                md="6"
              >
                <VTextField
                  v-model="quoraLink"
                  label="Quora"
                />
              </VCol>
            </VRow>
          </VForm>
        </VWindowItem>
      </VWindow>
    </VCardText>

    <VDivider />

    <VCardText class="d-flex gap-4">
      <VBtn>Submit</VBtn>
      <VBtn
        color="secondary"
        variant="tonal"
      >
        Cancel
      </VBtn>
    </VCardText>
  </VCard>
</template>
`},x={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} First Name -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstName">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Email -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="email">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="email"
              v-model="email"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Mobile -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobile">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Password -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="password">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>

`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} First Name -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstName">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstName"
              v-model="firstName"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Email -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="email">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="email"
              v-model="email"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Mobile -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobile">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobile"
              v-model="mobile"
              type="number"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <VCol cols="12">
        <VRow no-gutters>
          <!-- \u{1F449} Password -->
          <VCol
            cols="12"
            md="3"
          >
            <label for="password">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          variant="tonal"
          type="reset"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>

`},h={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstNameHorizontalIcons">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="emailHorizontalIcons">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="passwordHorizontalIcons">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="firstNameHorizontalIcons">First Name</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="firstNameHorizontalIcons"
              v-model="firstName"
              prepend-inner-icon="tabler-user"
              placeholder="First Name"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="emailHorizontalIcons">Email</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="emailHorizontalIcons"
              v-model="email"
              prepend-inner-icon="tabler-mail"
              placeholder="Email"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Mobile -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="mobileHorizontalIcons">Mobile</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="mobileHorizontalIcons"
              v-model="mobile"
              type="number"
              prepend-inner-icon="tabler-device-mobile"
              placeholder="Number"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Password -->
      <VCol cols="12">
        <VRow no-gutters>
          <VCol
            cols="12"
            md="3"
          >
            <label for="passwordHorizontalIcons">Password</label>
          </VCol>

          <VCol
            cols="12"
            md="9"
          >
            <VTextField
              id="passwordHorizontalIcons"
              v-model="password"
              prepend-inner-icon="tabler-lock"
              type="password"
              placeholder="Password"
              persistent-placeholder
            />
          </VCol>
        </VRow>
      </VCol>

      <!-- \u{1F449} Checkbox -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
      >
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <!-- \u{1F449} submit and reset button -->
      <VCol
        offset-md="3"
        cols="12"
        md="9"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>
        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},y={ts:`<script lang="ts" setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- \u{1F449} Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- \u{1F449} City -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- \u{1F449} Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- \u{1F449} Company -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const lastName = ref('')
const city = ref('')
const country = ref('')
const company = ref('')
const email = ref('')
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <!-- \u{1F449} First Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <!-- \u{1F449} Last Name -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="lastName"
          label="Last Name"
          placeholder="Last Name"
        />
      </VCol>

      <!-- \u{1F449} Email -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="email"
          label="Email"
          placeholder="Email"
        />
      </VCol>

      <!-- \u{1F449} City -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="city"
          label="City"
          placeholder="City"
        />
      </VCol>

      <!-- \u{1F449} Country -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="country"
          label="Country"
          placeholder="Country"
        />
      </VCol>

      <!-- \u{1F449} Company -->
      <VCol
        cols="12"
        md="6"
      >
        <VTextField
          v-model="company"
          label="Company"
          placeholder="Company"
        />
      </VCol>

      <!-- \u{1F449} Remember me -->
      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},T={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <VBtn type="submit">
          Submit
        </VBtn>

        <VBtn
          type="reset"
          color="secondary"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},R={ts:`<script lang="ts" setup>
const firstName = ref('')
const email = ref('')
const mobile = ref<number>()
const password = ref<string>()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`,js:`<script setup>
const firstName = ref('')
const email = ref('')
const mobile = ref()
const password = ref()
const checkbox = ref(false)
<\/script>

<template>
  <VForm @submit.prevent="{}">
    <VRow>
      <VCol cols="12">
        <VTextField
          v-model="firstName"
          prepend-inner-icon="tabler-user"
          label="First Name"
          placeholder="First Name"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="email"
          prepend-inner-icon="tabler-mail"
          label="Email"
          type="email"
          placeholder="Email"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="mobile"
          prepend-inner-icon="tabler-device-mobile"
          label="Mobile"
          type="number"
          placeholder="Number"
        />
      </VCol>

      <VCol cols="12">
        <VTextField
          v-model="password"
          prepend-inner-icon="tabler-lock"
          label="Password"
          type="password"
          placeholder="password"
        />
      </VCol>

      <VCol cols="12">
        <VCheckbox
          v-model="checkbox"
          label="Remember me"
        />
      </VCol>

      <VCol cols="12">
        <VBtn
          type="submit"
          class="me-2"
        >
          Submit
        </VBtn>

        <VBtn
          color="secondary"
          type="reset"
          variant="tonal"
        >
          Reset
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
`},k=f("h4",{class:"text-h6 font-weight-medium mb-5"}," Collapsible Section ",-1),E={__name:"form-layouts",setup(g){return(N,B)=>{const r=l("DemoFormLayoutHorizontalForm"),s=l("AppCardCode"),i=l("DemoFormLayoutHorizontalFormWithIcons"),m=l("DemoFormLayoutVerticalForm"),c=l("DemoFormLayoutVerticalFormWithIcons"),n=l("DemoFormLayoutMultipleColumn"),V=l("DemoFormLayoutFormHint"),d=l("DemoFormLayoutFormValidation"),p=l("DemoFormLayoutFormWithTabs"),b=l("DemoFormLayoutCollapsible");return C(),u("div",null,[e(a,null,{default:o(()=>[e(t,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Horizontal Form",code:x},{default:o(()=>[e(r)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Horizontal Form with Icons",code:h},{default:o(()=>[e(i)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Vertical Form",code:T},{default:o(()=>[e(m)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Vertical Form with Icons",code:R},{default:o(()=>[e(c)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12"},{default:o(()=>[e(s,{title:"Multiple Column",code:y},{default:o(()=>[e(n)]),_:1},8,["code"])]),_:1})]),_:1}),e(a,{class:"match-height my-3"},{default:o(()=>[e(t,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Form Hint",code:w},{default:o(()=>[e(V)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12",md:"6"},{default:o(()=>[e(s,{title:"Form Validation",code:F},{default:o(()=>[e(d)]),_:1},8,["code"])]),_:1})]),_:1}),e(a,null,{default:o(()=>[e(t,{cols:"12"},{default:o(()=>[e(s,{title:"Form with Tabs","no-padding":"",code:v},{default:o(()=>[e(p)]),_:1},8,["code"])]),_:1}),e(t,{cols:"12"},{default:o(()=>[k,e(b)]),_:1})]),_:1})])}}};export{E as default};
