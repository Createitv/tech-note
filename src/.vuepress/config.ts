import { defineUserConfig } from 'vuepress'
import theme from './theme.js'

export default defineUserConfig({
    base: '/',

    locales: {
        '/': {
            lang       : 'zh-CN',
            title      : '彷丶徨丶',
            description: '彷丶徨丶自留地',
        },
    },

    theme,

    shouldPrefetch: false,
})
