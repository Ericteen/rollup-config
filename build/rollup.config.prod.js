import { terser } from 'rollup-plugin-terser';
import config from './rollup.config.common.js';

config.output.sourcemap = false;
config.plugins = [
  ...config.plugins,
  ...[terser()]
]

export default config;