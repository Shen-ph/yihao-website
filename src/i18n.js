import { createI18n } from 'vue-i18n'
import en from './locales/en-US.json'
import zhCN from './locales/zh-CN.json'
import ar from './locales/ar.json'

// 准备语言包
const messages = {
  'ar': ar,
  'en-US': en,
  'zh-CN': zhCN
}

// 创建 i18n 实例
const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: 'en-US',     // 默认语言
  fallbackLocale: 'en-US', // 回退语言
  messages
})

export default i18n