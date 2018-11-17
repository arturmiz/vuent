# Accent color

The default accent color is `#0078d7` <span style="background-color: #0078d7; display: inline-block; border-radius: 5px; height: 10px; width: 10px"></span>

The accent color used across all components can be easily changed as it's controlled by a single CSS Variable `--vnt-accent-color` (introduced in `v0.4.0`).

It can be achieved in several ways:

## Vuent `options`

```javascript
import Vue from 'vue';
import Vuent from 'vuent';

Vue.use(Vuent, {
  accentColor: '#ff0000'
});
```

## `$vuent.setAccentColor`

Once Vuent is installed in a Vue instance, `$vuent` object is registered in the Vue instance's scope exposing `setAccentColor` method which modifies `--vnt-accent-color` CSS Variable.

```javascript
export default {
  name: 'App',
  template: '...'
  mounted() {
    this.$vuent.setAccentColor('#ff0000');
  }
}
```

## `--vnt-accent-color` manipulation

```javascript
document.body.style.setProperty('--vnt-accent-color', '#ff0000');
```
