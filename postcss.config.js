const presetEnv = require('postcss-preset-env')
const postcssJitProps = require('postcss-jit-props')
const openProps = require('open-props')

module.exports = {
  plugins: [presetEnv(), postcssJitProps(openProps)],
}
