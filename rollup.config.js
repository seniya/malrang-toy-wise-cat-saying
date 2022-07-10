import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import css from "rollup-plugin-import-css";

export default {
  input: 'src/index.js',
  output: [
  {
    name: 'WiseCatSaying',
    file: 'dist/main.umd.js',
    format: 'umd',    
  },
  {
    file: 'dist/main.esm.js',
    format: 'esm',    
  }
  ],
  plugins: [css(), nodeResolve(), commonjs(), terser()]
  // plugins: [css()]
} 