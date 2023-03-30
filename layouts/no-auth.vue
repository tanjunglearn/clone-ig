<script setup lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/solid'

const { $i18n } = useNuxtApp()
const lang = useCookie('ig-clone--lang')
const optCountry: { value: string, text: string }[] = [
  // { value: 'af', text: 'Afrikaans' },
  // { value: 'cs', text: 'Čeština' },
  // { value: 'da', text: 'Dansk' },
  // { value: 'de', text: 'Deutsch' },
  // { value: 'el', text: 'Ελληνικά' },
  { value: 'en', text: 'English' },
  // { value: 'en-gb', text: 'English(UK)' },
  // { value: 'es', text: 'Español(España)' },
  // { value: 'es-la', text: 'Español' },
  // { value: 'fi', text: 'Suomi' },
  // { value: 'fr', text: 'Français' },
  { value: 'id', text: 'Bahasa Indonesia' },
  // { value: 'it', text: 'Italiano' },
  // { value: 'ja', text: '日本語' },
  // { value: 'ko', text: '한국어' },
  // { value: 'ms', text: 'Bahasa Melayu' },
  // { value: 'nb', text: 'Norsk' },
  // { value: 'nl', text: 'Nederlands' },
  // { value: 'pl', text: 'Polski' },
  // { value: 'pt-br', text: 'Português(Brasil)' },
  // { value: 'pt', text: 'Português(Portugal)' },
  // { value: 'ru', text: 'Русский' },
  // { value: 'sv', text: 'Svenska' },
  // { value: 'th', text: 'ภาษาไทย' },
  // { value: 'tl', text: 'Filipino' },
  // { value: 'tr', text: 'Türkçe' },
  // { value: 'zh-cn', text: '中文(简体)' },
  // { value: 'zh-tw', text: '中文(台灣)' },
  // { value: 'bn', text: 'বাংলা' },
  // { value: 'gu', text: 'ગુજરાતી' },
  // { value: 'hi', text: 'हिन्दी' },
  // { value: 'hr', text: 'Hrvatski' },
  // { value: 'hu', text: 'Magyar' },
  // { value: 'kn', text: 'ಕನ್ನಡ' },
  // { value: 'ml', text: 'മലയാളം' },
  // { value: 'mr', text: 'मराठी' },
  // { value: 'ne', text: 'नेपाली' },
  // { value: 'pa', text: 'ਪੰਜਾਬੀ' },
  // { value: 'si', text: 'සිංහල' },
  // { value: 'sk', text: 'Slovenčina' },
  // { value: 'ta', text: 'தமிழ்' },
  // { value: 'te', text: 'తెలుగు' },
  // { value: 'vi', text: 'Tiếng Việt' },
  // { value: 'zh-hk', text: '中文(香港)' },
  // { value: 'bg', text: 'Български' },
  // { value: 'fr-ca', text: 'Français(Canada)' },
  // { value: 'ro', text: 'Română' },
  // { value: 'sr', text: 'Српски' },
  // { value: 'uk', text: 'Українська' }
]

const setLang = computed<string>(() => {
  let set: string = 'English'
  const checkLang: { text: string }|undefined = optCountry.find((f) => f.value === lang.value)

  if (checkLang) set = checkLang.text

  return set
})

const onLang = (event: any) => {
  lang.value = event.target.value
  window.location.reload()
}
</script>

<template>
  <div class="h-screen">
    <main>
      <slot />
    </main>
    <footer class="py-9 text-xs text-grey">
      <ul id="box:menus" class="flex justify-center gap-x-4">
        <li><a href="#">Meta</a></li>
        <li><a href="#">{{ $i18n('about') }}</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">{{ $i18n('jobs') }}</a></li>
        <li><a href="#">{{ $i18n('help') }}</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">{{ $i18n('privacy') }}</a></li>
        <li><a href="#">{{ $i18n('terms') }}</a></li>
        <li><a href="#">{{ $i18n('top-accounts') }}</a></li>
        <li><a href="#">{{ $i18n('locations') }}</a></li>
        <li><a href="#">Instagram Lite</a></li>
        <li><a href="#">{{ $i18n('contact-uploading') }}</a></li>
        <li><a href="#">{{ $i18n('meta-verified') }}</a></li>
      </ul>
      <div id="box:lang--copyright" class="flex justify-center gap-x-4 mt-3">
        <div id="box:lang" class="flex items-center relative">
          <div>{{ setLang }}</div>
          <div class="pl-1"><ChevronDownIcon class="h-[px] w-[14px]" /></div>
          <select
            v-model="lang"
            class="footer--select"
            aria-label="Switch Display Language"
            @change="onLang"
          >
            <option v-for="(opt, optIndex) in optCountry" :key="optIndex" :value="opt.value">
              {{ opt.text }}
            </option>
          </select>
        </div>
        <div>
          <small class="text-xs">© {{ $i18n('copyright') }}</small>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.footer--select {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
}
</style>
