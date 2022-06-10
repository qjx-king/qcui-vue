import { defaultTheme } from 'vuepress'


export default defaultTheme({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  theme: defaultTheme({
    darkMode: true
  }),
  navbar: [
    { text: '首页', link: '/' },
    { text: '关于', link: '/about' },
    { text: 'Components', link: '/components' },
  ],
  sidebar: [
    {
      text: '组件',
      collapsible: false,
      children: [
        '/components/Input-text',
      ],
    },
    {
      text: 'GitHub',
      link: 'https://github.com/copperlib',
      children: [],
    },
  ]
})
