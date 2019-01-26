'use strict';

import Vuent from './Vuent';

console.log('import window.Vue', window.Vue)

if (window && window.Vue) {
  console.log('use Vue');
  window.Vue.use(Vuent);
}

export default Vuent;
