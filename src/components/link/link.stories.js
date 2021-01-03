import Link from './Link.vue';

export default {
  title: 'Link',
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    click: { action: 'clicked' }
  }
};

export const Default = (args, { argTypes }) => ({
  components: { Link },
  props: Object.keys(argTypes),
  template: `
    <vnt-link href="http://google.com" title="Link to Google" :disabled="disabled">Google</vnt-link>
  `
});

export const WithAction = (args, { argTypes }) => ({
  components: { Link },
  props: Object.keys(argTypes),
  methods: {
    sayHi: () => {
      // console.debug('click');
    }
  },
  template: `
    <vnt-link :click="sayHi" :disabled="disabled">Say Hi!</vnt-link>
  `
});

