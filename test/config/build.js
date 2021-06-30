const esbuild = require('esbuild');
const esbuildBuildNotifier = require('../../index.js');

esbuild.build({
  entryPoints: ['src/app.jsx'],
  bundle: true,
  outfile: 'build/bundle.js',
  watch: false,
  plugins: [
    esbuildBuildNotifier()
  ]
}).catch(() => process.exit(1))