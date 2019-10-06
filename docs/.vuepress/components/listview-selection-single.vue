<template>
  <div class="playground">
    <div style="max-width: 300px">
      <vnt-listview selectionMode="single">
        <vnt-listview-item v-for="fruit in fruits" :key="fruit" :click="pickFruit" :item="fruit">
          {{ fruit }}
        </vnt-listview-item>
      </vnt-listview>
    </div>
  </div>
</template>

<script>
import VntListView from '../../../src/components/listview/ListView.vue';
import VntListViewItem from '../../../src/components/listview/ListViewItem.vue';

export default {
  name: 'ListviewSelectionSingle',
  components: {
    VntListview: VntListView,
    VntListviewItem: VntListViewItem
  },
  methods: {
    pickFruit(event, fruit) {
      window.alert(fruit)
    }
  },
  data() {
    return {
      fruits: [
        'Banana',
        'Apple',
        'Raspberry',
        'Orange',
        'Peach',
        'Strawberry'
      ]
    }
  }
}
</script>
