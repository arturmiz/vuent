# Get started

## Global

The simplest and the fastest way to get started with Vuent is to add `<script>` reference to `vuent.umd.js` file which registers Vuent as Vue's global plugin.

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

## npm / Yarn

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
