import ListView from './ListView.vue';
import ListViewItem from './ListViewItem.vue';

ListView.install = function (Vue) {
  Vue.component(ListViewItem.name, ListViewItem);
  Vue.component(ListView.name, ListView);
};

export default ListView;
