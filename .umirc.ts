import { defineConfig } from 'umi';
import px2rem from 'postcss-px2rem';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/test', component: '@/pages/test' },
  ],
  // dynamicImport:{},
  // ssr:{
  //   devServerRender: false,
  // },
  extraPostCSSPlugins:[ px2rem({viewportWidth: 7})]
});