import { defineConfig } from 'dumi';

export default defineConfig({
  styles: [
    `.dumi-default-header-left {
        width: 300px !important;
    }`
  ],

  autoAlias: false,
  
  themeConfig: {
    hd: { rules: [] },
    logo: '/logo.svg',
    name: '',
    nav: [{ title: 'Linux基础', link: '/linux/linux001' },{ title: '笔试题', link: '/examination/examination001' },{ title: '面试题', link: '/interview/interview001' }],
    footer: `Generation for love | Copyright © 2023-present
    <br />
    Powered by Nanxi`,
    showLineNum: true,
    prefersColor: { default: 'auto'},
    devtool: eval,
    sidebar: { '/linux/': [] },
    nprogress: true,
    socialLinks: {
      github: 'https://github.com/umijs/dumi',
    },
  },
});
