import qs from 'qs'

const config = (method: any) => {
  return {
    baseURL: 'https://dummyjson.com',
    method: method,
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

export default config
