import NavView from './NavView.vue';

NavView.install = function (Vue) {
  Vue.component(NavView.name, NavView);
};

export default NavView;
