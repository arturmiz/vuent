import Vue from 'vue';
import Vuent from '../src/Vuent'

Vue.use(Vuent);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
