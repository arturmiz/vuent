import ListView from './ListView.vue';

export default {
  title: 'ListView'
};

const fruits = [
  'Banana',
  'Apple',
  'Raspberry',
  'Orange',
  'Peach',
  'Strawberry'
];

const createData = () => ({
  items: [...fruits]
});

export const Default = () => ({
  components: { ListView },
  data: () => createData(),
  template: `
    <vnt-listview>
      <vnt-listview-item v-for="item in items" :key="item">
        {{ item }}
      </vnt-listview-item>
    </vnt-listview>
  `
});


export const Selectable = () => ({
  components: { ListView },
  data: () => createData(),
  methods: {
    pickFruit: () => {
      // console.debug('pick', arguments)
    }
  },
  template: `
    <vnt-listview selectionMode="single">
      <vnt-listview-item
        v-for="item in items" :key="item"
        @pick="pickFruit"
        :item="item">
        {{ item }}
      </vnt-listview-item>
    </vnt-listview>
  `
});
