module.exports = {
  buildOptions: {
    out: '../server/build/',
  },
  devOptions: {
    open: "none"
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
  },
  root: "src/",
}