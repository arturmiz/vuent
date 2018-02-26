import Button from './Button.vue';

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};

export default Button;
