import { configure, addDecorator } from '@storybook/vue';
import { withA11y } from '@storybook/addon-a11y';

import Vue from 'vue';
import Vuent from '../src/Vuent'

Vue.use(Vuent);

addDecorator(withA11y)
configure(require.context('../stories', true, /\.stories\.js$/), module);
