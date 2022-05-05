const presetEnv = require('postcss-preset-env')
const postcssJitProps = require('postcss-jit-props')
const OpenProps = require('open-props')

module.exports = {
  plugins: [presetEnv({ stage: 2 }), postcssJitProps(OpenProps)],
}
