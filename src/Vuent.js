import * as components from './components';
import vnt from './components/Vnt.vue';

class Vuent {

  install(Vue, options = {}) {
    Vue.prototype.$vuent = vnt;

    const comps = Array.isArray(options.components) ?
      options.components :
      components;

    Object.values(comps).forEach(component => Vue.use(component));

    if (options.accentColor) {
      vnt.setAccentColor(options.accentColor);
    }
  }

}

const vuent = new Vuent();
export default vuent;
