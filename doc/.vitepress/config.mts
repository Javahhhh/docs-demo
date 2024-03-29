import { defineConfig } from 'vitepress'
import ElementPlus from 'element-plus'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:'/跬步/',
  title: "跬步-step by Steps",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: '介绍', link: '/mdfiles/introduce' },
      { text: '上传', link: '/mdfiles/upload' },
      
    ],

    search:{ provider:'local'},
   
    sidebar: [
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Runtime test Examples', link: '/test' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
