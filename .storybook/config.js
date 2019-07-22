import { configure, addDecorator } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';

import Vue from 'vue';
import Vuent from '../src/Vuent'

Vue.use(Vuent);

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withA11y)
configure(loadStories, module);
