import {backendNavbar} from './backend';
import {frontendNavbar} from './frontend';
import { navbar } from 'vuepress-theme-hope'
export const zhNavbar = navbar([
    '/',
    frontendNavbar,
    backendNavbar,
    {
        text: 'V2 文档',
        icon: 'note',
        link: 'https://vuepress-theme-hope.github.io/v2/zh/',
    },
    {
        text    : '读书笔记',
        icon    : 'book',
        prefix  : '/booknotes/',
        children: [
            {
                text: '彷徨',
                icon: 'note',
                link: 'panghuang'
            }
        ]
    },
    {
        text: '联系我',
        icon: 'wechat',
        link: '/contract/'
    },
])
