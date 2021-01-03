import Toggle from './Toggle.vue';

export default {
  title: 'Toggle',
  argTypes: {
    disabled: { control: { type: 'boolean' } }
  }
};

const createData = () => ({
  isChecked: false
});

const template = `
  <div>
    <vnt-toggle v-model="isChecked" :disabled="disabled">Option</vnt-toggle>
    <p class="result">isChecked: {{ isChecked }}</p>
</div>
`;

export const Default = (args, { argTypes }) => ({
  components: { Toggle },
  data: () => createData(),
  props: Object.keys(argTypes),
  template
});

export const Checked = (args, { argTypes }) => ({
  components: { Toggle },
  data: () => ({
    isChecked: true
  }),
  props: Object.keys(argTypes),
  template
});


export const OnOffLabels = (args, { argTypes }) => ({
  components: { Toggle },
  data: () => createData(),
  props: Object.keys(argTypes),
  template: `
    <div>
      <vnt-toggle v-model="isChecked" label-on="Yes" label-off="No"></vnt-toggle>
      <p class="result">isChecked: {{ isChecked }}</p>
    </div>
  `
});

