import { defineConfig } from "vitepress"; //导入管理器
//导入外部JS 文件
//import { algolia } from "./js/algolia.js"; //搜索
//import {carbonAds} from './js/carbonAds.js';//广告
import { editLink } from "./js/editLink.js"; //编辑链接
import { footer } from "./js/footer.js"; //页脚
import { head } from "./js/head.js"; //页头
import { lastUpdated } from "./js/lastUpdated.js";
import { logo } from "./js/logo.js";
import { nav } from "./js/nav.js"; //导航栏
import { outline } from "./js/outline.js";
import { search } from "./js/search.js";
import { sidebar } from "./js/sidebar.js"; //侧边栏
import { socialLinks } from "./js/socialLinks.js"; //社交链接
//import { markdown } from "./js/markdown.js"; //markdown配置
import { sitemap } from "./js/sitemap.js"; //站点地图

export default defineConfig({
  base: "/", //项目地址
  lang: "zh-CN", //语言
  title: "My Awesome Project", //项目名称
  titleTemplate: "%s - My Site", //项目标题
  description: "A VitePress Site", //项目描述
  head: head,//头部信息
  cleanUrls: false,//去掉url中的.html
  rewrites: { "/": "/index.html", },//重定向
  srcDir: ".",//源文件目录
  srcExclude: ["README.md"],//排除文件
  outDir: "./.vitepress/dist",//输出目录
  assetsDir: "static",//静态资源目录
  cacheDir: "./.vitepress/cache",//缓存文件的目录
  ignoreDeadLinks: true,//设置为 true 时，VitePress 不会因为死链而导致构建失败
  metaChunk: true,//当设置为 true 时，将页面元数据提取到单独的 JavaScript 块中，而不是内联在初始 HTML 中。这使每个页面的 HTML 负载更小，并使页面元数据可缓存，从而当站点中有很多页面时可以减少服务器带宽。
  mpa: false,//设置为 true 时，生产应用程序将在 MPA 模式下构建。MPA 模式默认提供 零 JavaScript 支持，代价是禁用客户端导航，并且需要明确选择加入才能进行交互。
  appearance: true,//主题
  lastUpdated: lastUpdated,//最后更新时间
  sitemap: sitemap,//站点地图
  //主题设置
  themeConfig: {
    logo: logo,//logo
    siteTitle: false,//站点标题
    nav: nav,//导航栏
    sidebar: sidebar,//左侧边栏
    outline: outline,//右侧边目录
    editLink: editLink,//编辑链接
    socialLinks: socialLinks,//社交链接
    footer: footer,//页脚
    search: search,//搜索
  },
  docFooter: {
    prev: '上一篇',
    next: '下一篇'
  },//文档页脚
  darkModeSwitchLabel: '深色模式',
  lightModeSwitchLabel: '浅色模式',
  darkModeSwitchTitle: '深色模式',
  sidebarMenuLabel: '菜单',
  returnToTopLabel: '返回顶部',
  langMenuLabel: '语言',
  externalLinkIcon: true,//外部链接图标
},
);
