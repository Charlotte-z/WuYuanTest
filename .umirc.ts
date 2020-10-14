import { defineConfig } from 'umi';
import px2rem from 'postcss-px2rem';

export default defineConfig({
  publicPath:'./',
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
  ssr:{},
  dva:{
    immer: true,
    hmr:true
  },
  extraPostCSSPlugins:[ px2rem({viewportWidth: 7})]
});