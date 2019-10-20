import { shallowMount } from '@vue/test-utils';
import ListViewItem from '@/components/listview/ListViewItem.vue';
import { SELECTION_MODE } from '@/components/listview/SelectionMode';

describe('ListViewItem', () => {
  let wrapper;

  describe('by default', () => {

    beforeAll(() => {
      wrapper = shallowMount(ListViewItem, {
        provide: {
          selectionMode: SELECTION_MODE.none
        }
      });
    });

    test('item is undefined', () => {
      expect(wrapper.vm.item).toBeUndefined();
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

  describe('when clicked', () => {

    test('by default does not throw error', () => {
      expect(() => {
        wrapper.trigger('click');
      }).not.toThrow();
    });

    test('by default does not emit pick event', () => {
      wrapper = shallowMount(ListViewItem, {
        provide: {
          selectionMode: SELECTION_MODE.none
        }
      });

      wrapper.trigger('click');

      expect(wrapper.emitted()).toEqual({});
    });

    test(`emits correct pick event when selectionMode is '${SELECTION_MODE.single}'`, () => {
      const item = 'Some item';

      wrapper = shallowMount(ListViewItem, {
        propsData: {
          item
        },
        provide: {
          selectionMode: SELECTION_MODE.single
        }
      });

      wrapper.trigger('click');

      expect(wrapper.emitted()['pick'][0]).toEqual([item]);
    });

  });

});
