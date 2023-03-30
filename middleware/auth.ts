const noAuthPages = [
  '/login',
  '/register'
]

export default defineNuxtRouteMiddleware((to) => {
  const token = useState('token')

  if (noAuthPages.includes(to.path)) {
    if (token.value) return navigateTo('/login')
  }

  return
})