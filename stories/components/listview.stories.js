import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

const fruits = [
  'Banana',
  'Apple',
  'Raspberry',
  'Orange',
  'Peach',
  'Strawberry'
];

/* eslint no-undef: 0 */
storiesOf('ListView', module)
  .add('default', () => ({
    data() {
      return {
        items: [...fruits]
      };
    },
    template: `
      <vnt-listview>
        <vnt-listview-item v-for="item in items" :key="item">
          {{ item }}
        </vnt-listview-item>
      </vnt-listview>
    `
  }))
  .add('selectable', () => ({
    data() {
      return {
        items: [...fruits]
      };
    },
    methods: {
      pickFruit: action('click')
    },
    template: `
      <vnt-listview selectionMode="single">
        <vnt-listview-item
          v-for="item in items" :key="item"
          :click="pickFruit"
          :item="item">
          {{ item }}
        </vnt-listview-item>
      </vnt-listview>
    `
  }));
