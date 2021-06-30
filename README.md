# 🚀 esbuild-notifier 🚀

[![npm version](https://badge.fury.io/js/esbuild-notifier.svg)](https://badge.fury.io/js/esbuild-notifier)



Inspired by webpack-build-notifier(https://www.npmjs.com/package/webpack-build-notifier). Credits to @RoccoC 


Stumbled upon this awsome build tool named `esbuild` (https://esbuild.github.io/) at 2 in morning and found that no one has yet created build notifier plugin for this. So starting this project to have a nice build notifier. 🙌

# Status

This is initial draft of the plugin. It works but still has lots of improvements to be done. 


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

# Demo

https://user-images.githubusercontent.com/17445338/124036677-00a9ce80-da1c-11eb-94a3-1e51810e97d3.mp4


# License
MIT
