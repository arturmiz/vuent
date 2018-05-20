# Vuent

[![Build Status](https://travis-ci.com/arturmiz/vuent.svg?branch=master)](https://travis-ci.com/arturmiz/vuent)
[![Build status](https://ci.appveyor.com/api/projects/status/4skkgpjpg1j8nhi6/branch/master?svg=true)](https://ci.appveyor.com/project/arturmiz/vuent/branch/master)
[![codecov](https://codecov.io/gh/arturmiz/vuent/branch/master/graph/badge.svg)](https://codecov.io/gh/arturmiz/vuent)

> Status: In development

Vuent is a set of reusable UI components for [Vue][vue] created according to Microsoft [Fluent Design][fluent], in particular [its official variation][fluent-uwp] about building [Universal Windows Platform (UWP)][uwp] applications.

The project aims to help developers build [UWP][uwp] or web apps with Fluent's look'n'feel leveraging [Vue][vue] as a framework for UI/view layer.

## How to use

As Vuent is not (yet) released if you'd like to try it out you can build it right from the source code. To do that clone this repository, then in the project directory run in your terminal `npm run build` (alternatively `yarn build`). Having done that there should be generated `dist` folder with all necessary Vuent files.

The following snippets can get you up and running with simple demo containing basic text field:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />

  <title>Vuent Demo</title>

  <link href="/dist/vuent.css" type="text/css" rel="stylesheet" media="screen" />
</head>
<body>
  <div id="app">
    <p>{{ message }}</p>

    <vnt-input v-model="message" label="Text field"></vnt-input>

    <script src="https://unpkg.com/vue@2.5.13/dist/vue.js"></script>
    <script src="/dist/vuent.umd.js"></script>
    <script src="main.js"></script>
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

## Contributing

Any contribution is more than welcome! More details can be found in [CONTRIBUTING][contributing-file] file.

## License

Vuent is [MIT licensed](https://github.com/arturmiz/vuent/blob/master/LICENSE).

[vue]: https://vuejs.org
[fluent]: https://fluent.microsoft.com/
[fluent-uwp]: https://developer.microsoft.com/en-us/windows/apps/design
[uwp]: https://developer.microsoft.com/en-us/windows/apps
[contributing-file]: https://github.com/arturmiz/vuent/blob/master/.github/CONTRIBUTING.md
