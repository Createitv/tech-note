
import {cSidebar} from './c';
import {cssSidebar, engineeringSidebar, tsSidebar} from './frontend';
import {sidebar} from 'vuepress-theme-hope';
//
export const zhSidebar = sidebar({
    //  TypeScript 侧边栏
    "/frontend/04-TS": [tsSidebar],

    // 工程化侧边栏
    "/frontend/05-Engineering": [engineeringSidebar],

    //  CSS 侧边栏
    "/frontend/02-CSS": [cssSidebar],

    //  c 侧边栏栏
    "/backend/c": [cSidebar],

    "/demo/": []
})


