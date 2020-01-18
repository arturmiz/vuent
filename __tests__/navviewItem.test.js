import { mount } from '@vue/test-utils';
import VntNavviewItem from '@/components/navview/MenuItem.vue';

describe('NavviewItem', () => {
  let wrapper;

  const linkSelector = '.vnt-navview__item-link';

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntNavviewItem);
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('is not active', () => {
      expect(wrapper.vm.active).toBe(false);
    });

    test('icon is null', () => {
      expect(wrapper.vm.icon).toBeNull();
    });

    test('click handler is undefined', () => {
      expect(wrapper.vm.click).toBeUndefined();
    });

    test('when clicked, no error is thrown', () => {
      expect(() => {
        wrapper.find(linkSelector).trigger('click');
      }).not.toThrow();
    });

  });

  describe('when icon is set', () => {

    beforeAll(() => {
      wrapper = mount(VntNavviewItem, {
        propsData: {
          icon: 'settings'
        },
        slots: {
          default: 'Settings'
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

  describe('when click handler is given', () => {
    let mockClick;

    beforeAll(() => {
      mockClick = jest.fn();

      wrapper = mount(VntNavviewItem, {
        propsData: {
          click: mockClick
        }
      });
    });

    test('when clicked, click handler is invoked', () => {
      wrapper.find(linkSelector).trigger('click');
      expect(mockClick).toHaveBeenCalled();
    });

  });

});
