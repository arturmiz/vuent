# Vuent

<p align="center">
  <img src="https://vuentjs.org/logo.svg" alt="Vuent" width="280" />
</p>

[![Build Status](https://dev.azure.com/vuent/vuent/_apis/build/status/arturmiz.vuent)](https://dev.azure.com/vuent/vuent/_build/latest?definitionId=1)
[![Build Status](https://travis-ci.com/arturmiz/vuent.svg?branch=master)](https://travis-ci.com/arturmiz/vuent)
[![codecov](https://codecov.io/gh/arturmiz/vuent/branch/master/graph/badge.svg)](https://codecov.io/gh/arturmiz/vuent)
[![License](https://img.shields.io/npm/l/vuent.svg)](https://www.npmjs.com/package/vuent)
[![Version](https://img.shields.io/npm/v/vuent.svg)](https://www.npmjs.com/package/vuent)
[![Downloads in total](https://img.shields.io/npm/dt/vuent.svg)](https://www.npmjs.com/package/vuent)

Vuent is a set of reusable UI components for [Vue][vue] created according to Microsoft [Fluent Design][fluent], in particular [its official variation][fluent-uwp] about building [Universal Windows Platform (UWP)][uwp] applications.

The project aims to help developers build web or [UWP][uwp] apps with Fluent's look'n'feel leveraging [Vue][vue] as a framework for UI/view layer.

## How to use

### Quickstart

The following snippets can get you up and running with simple demo containing basic text field:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />

  <title>Vuent Demo</title>

  <link href="https://unpkg.com/vuent/dist/vuent.css" type="text/css" rel="stylesheet" media="screen" />

  <script src="https://unpkg.com/vue@2.5.13/dist/vue.js" defer></script>
  <script src="https://unpkg.com/vuent/dist/vuent.umd.js" defer></script>
  <script src="main.js" defer></script>
</head>
<body>
  <div id="app">
    <p>{{ message }}</p>

    <vnt-input v-model="message" label="Text field"></vnt-input>
  </div>
</body>
</html>
```

```javascript
// main.js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vuent!'
  }
});
```

For more details visit the Vuent's website - [https://vuentjs.org][vuent-website].

### npm / Yarn

Go to your project's directory and run in terminal:

```bash
npm install vuent --save # OR yarn add vuent
```

Once Vuent is installed in your project, somewhere in your JavaScript code use it as follows:

```js
import Vue from 'vue';
import Vuent from 'vuent';

Vue.use(Vuent);
```

## Documentation

Documentation and playground with live examples are available on the Vuent's website - [https://vuentjs.org][vuent-website].

## Changelog

Changes for released versions are documented in [CHANGELOG][changelog-file] file.

## Contributing

Any contribution is more than welcome! More details can be found in [CONTRIBUTING][contributing-file] file.

## License

Vuent is [MIT licensed](https://github.com/arturmiz/vuent/blob/master/LICENSE).

[vue]: https://vuejs.org
[fluent]: https://fluent.microsoft.com/
[fluent-uwp]: https://developer.microsoft.com/en-us/windows/apps/design
[uwp]: https://developer.microsoft.com/en-us/windows/apps
[contributing-file]: https://github.com/arturmiz/vuent/blob/master/.github/CONTRIBUTING.md
[changelog-file]: https://github.com/arturmiz/vuent/blob/master/CHANGELOG.md]
[vuent-website]: https://vuentjs.org
