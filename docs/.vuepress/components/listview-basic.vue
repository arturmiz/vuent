<template>
  <div class="playground">
    <div style="max-width: 300px">
      <vnt-listview>
        <vnt-listview-item v-for="fruit in fruits" :key="fruit">
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
  name: 'ListviewBasic',
  components: {
    VntListview: VntListView,
    VntListviewItem: VntListViewItem
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
