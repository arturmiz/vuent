import Button from './Button.vue';

export default {
  title: 'Button',
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    label: { control: { type: 'text' } },
    primary: { control: { type: 'boolean' } }
  }
};

export const Default = () => ({
  components: { Button },
  template: `
    <vnt-button>Button</vnt-button>
  `
});

export const Primary = () => ({
  components: { Button },
  template: `
    <vnt-button primary>Button</vnt-button>
  `
});

export const Custom = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: `
    <vnt-button :disabled="disabled" :primary="primary" :label="label"></vnt-button>
  `
});

Custom.args = {
  label: 'Some button'
};
