
import {cSidebar} from './c';
import {cssSidebar, tsSidebar} from './frontend';
import {sidebar} from 'vuepress-theme-hope';
//
export const zhSidebar = sidebar({
    //  TypeScript 侧边栏
    "/frontend/04-TS/": [tsSidebar],
    //  CSS 侧边栏
    "/frontend/02-CSS/": [cssSidebar],
    //  c 侧边栏栏
    "/backend/c": [cSidebar]
})


