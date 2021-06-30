module.exports = {
  buildOptions: {
    out: '../public',
  },
  devOptions: {
    open: 'none',
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
  },
  root: 'src/',
}
