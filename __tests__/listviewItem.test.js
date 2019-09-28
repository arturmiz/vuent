import { shallowMount } from '@vue/test-utils';
import ListViewItem from '@/components/listview/ListViewItem.vue';

describe('ListViewItem', () => {
  let wrapper;

  describe('by default', () => {

    beforeAll(() => {
      wrapper = shallowMount(ListViewItem);
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

});
