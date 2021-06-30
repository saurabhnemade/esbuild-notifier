# esbuild-notifier

Inspired by webpack-build-notifier(https://www.npmjs.com/package/webpack-build-notifier).

Stumbled upon this awsome build tool named `esbuild` (https://esbuild.github.io/) at 2 A.M. in morning and found that no one has yet created build notifier plugin for this. So starting this project to have a nice build notifier.

# Setup

```
npm install --save-dev esbuild-notifier
```

```diff
const esbuild = require('esbuild');
+ const esbuildBuildNotifier = require('esbuild-notifier');

esbuild.build({
  entryPoints: ['src/app.jsx'],
  bundle: true,
  outfile: 'build/bundle.js',
  watch: true,
+  plugins: [
+    esbuildBuildNotifier()
+  ]
}).catch(() => process.exit(1))

```

# License
MIT