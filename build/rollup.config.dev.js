import serve from 'rollup-plugin-serve';
import config from './rollup.config.common.js';
import html from '@rollup/plugin-html';

const PORT = 3000;

config.output.sourcemap = true;
config.plugins = [
  ...config.plugins,
  html(),
  serve({
    port: PORT,
    contentBase: 'dist'
  })
]
export default config;
