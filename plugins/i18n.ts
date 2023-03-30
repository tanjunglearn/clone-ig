import i18n from '@/i18n'

export default defineNuxtPlugin(() => {
  const lang: any = useCookie('ig-clone--lang')

  return {
    provide: {
      i18n: (field: string) => i18n[(lang && lang.value) ? lang.value : 'en'][field]
    }
  }
})
