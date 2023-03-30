export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('focus', {
    mounted: (el, binding) => {
      if (binding.value) el.classList.add('--valid')
      else el.classList.remove('--valid')
    },
    updated: (el, binding) => {
      if (binding.value) el.classList.add('--valid')
      else el.classList.remove('--valid')
    }
  })
})
