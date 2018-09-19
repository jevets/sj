module.exports = function (config) {
  config.dir = {
    input: 'src',
    output: '_site',
  }

  config.addPassthroughCopy('src/img')

  return config
}
