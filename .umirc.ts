import { defineConfig } from 'umi';
import path from 'path';

export default defineConfig({
  publicPath: './',
  alias: {
    '@public': path.resolve('public'),
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  // dynamicImport:{},
  // ssr:{
  //   devServerRender: false,
  // },
  // ssr: {},
  dva: {
    immer: true,
    hmr: true,
  },
});
