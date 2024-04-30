import en from './en.json'
import ua from './ua.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'ua',
  fallbackLocale: 'en',
  messages: Object.assign({ en, ua }),
}))
