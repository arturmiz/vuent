import NavView from './NavView.vue';
import NavViewMenuItem from './MenuItem.vue';
import NavViewMenuItemHeader from './MenuItemHeader.vue';
import NavViewMenuItemSeparator from './MenuItemSeparator.vue';

NavView.install = function (Vue) {
  Vue.component(NavViewMenuItemHeader.name, NavViewMenuItemHeader);
  Vue.component(NavViewMenuItem.name, NavViewMenuItem);
  Vue.component(NavViewMenuItemSeparator.name, NavViewMenuItemSeparator);
  Vue.component(NavView.name, NavView);
};

export default NavView;
