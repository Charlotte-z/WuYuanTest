import { defineConfig } from 'umi';
import px2rem from 'postcss-px2rem';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  // dynamicImport:{},
  // ssr:{
  //   devServerRender: false,
  // },
  dva:{
    immer: true,
    hmr:true
  },
  extraPostCSSPlugins:[ px2rem({viewportWidth: 7})]
});