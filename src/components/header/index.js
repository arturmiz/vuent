import Header from './Header.vue';

Header.install = function (Vue) {
  Vue.component(Header.name, Header);
};

export default Header;
