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

    test('click is undefined', () => {
      expect(wrapper.vm.click).toBeUndefined();
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

    test('by default does not trigger click', () => {
      const clickHandler = jest.fn();

      wrapper = shallowMount(ListViewItem, {
        propsData: {
          click: clickHandler
        },
        provide: {
          selectionMode: SELECTION_MODE.none
        }
      });

      wrapper.trigger('click');

      expect(clickHandler).not.toHaveBeenCalled();
    });

    test(`trigger click when selectionMode is '${SELECTION_MODE.single}'`, () => {
      const clickHandler = jest.fn();

      wrapper = shallowMount(ListViewItem, {
        propsData: {
          click: clickHandler
        },
        provide: {
          selectionMode: SELECTION_MODE.single
        }
      });

      wrapper.trigger('click');

      expect(clickHandler).toHaveBeenCalledTimes(1);
    });

  });

});
