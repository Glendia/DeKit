import { defineConfig } from 'vitepress'
export default defineConfig({
  title: "DeKit - 开源项目文档",
  description: "一个汇聚了多个开源小工具的文档网站，提供多个开源项目的教程以及项目",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '项目', link: '/project' }
    ],
  }
})
