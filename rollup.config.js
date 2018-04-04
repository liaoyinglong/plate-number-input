import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

const { NODE_ENV } = process.env
const fileName = 'plateNumberInput'

export default {
  input: './src/index.js',
  output: {
    file: `./dist/${fileName}.js`,
    format: 'umd',
    name: 'plateNumberInput',
  },
  plugins: [
    resolve(),
    babel(),
    replace({
      ENV: JSON.stringify(NODE_ENV),
    }),
    NODE_ENV !== 'dev' && uglify(),
  ],
}
