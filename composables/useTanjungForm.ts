const useTanjungForm = (schema?: any, fields?: any) => {
  const errors = ref<object[]>([])
  const state = reactive(fields)

  // group: action
  const onValidate = (fn: any): void => {
    errors.value = []

    try {
      schema.validateSync(state, { abortEarly: false })
      fn()
    } catch(error: any) {
      errors.value = error.errors
    }
  }

  return {
    state,
    errors: errors,
    onValidate
  }
}

export default useTanjungForm
