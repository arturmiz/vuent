import * as components from './components';

class Vuent {

  install(Vue, options = {}) {
    const comps = Array.isArray(options.components) ?
      options.components :
      components;

    Object.values(comps).forEach(component => Vue.use(component));
  }

}

const vuent = new Vuent();
export default vuent;
