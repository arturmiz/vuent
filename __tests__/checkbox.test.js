import { mount } from '@vue/test-utils';
import Checkbox from '@/components/checkbox';

describe('Checkbox', () => {
  let wrapper;

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(Checkbox);
    });

    test('is not disabled', () => {
      expect(wrapper.vm.disabled).toBe(false);
    });

    test('is not checked', () => {
      expect(wrapper.vm.checked).toBe(false);
    });

    test('label text is "Checkbox"', () => {
      expect(wrapper.vm.label).toBe('Checkbox');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can be disabled', () => {

    beforeAll(() => {
      wrapper = mount(Checkbox, {
        propsData: {
          disabled: true
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('is disabled', () => {
      expect(wrapper.vm.disabled).toBe(true);
    });

  });

  describe('can be checked', () => {

    beforeAll(() => {
      wrapper = mount(Checkbox, {
        propsData: {
          checked: true
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('is checked', () => {
      expect(wrapper.vm.checked).toBe(true);
    });

  });

  describe('can be checked and disabled', () => {

    beforeAll(() => {
      wrapper = mount(Checkbox, {
        propsData: {
          checked: true,
          disabled: true
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('is checked', () => {
      expect(wrapper.vm.checked).toBe(true);
    });

    test('is disabled', () => {
      expect(wrapper.vm.disabled).toBe(true);
    });

  });

  test('can have content set using slot', () => {
    wrapper = mount(Checkbox, {
      slots: {
        default: '<span>Custom content</span>'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe('when not disabled, updates passed checked prop', () => {

    beforeAll(() => {
      wrapper = mount(Checkbox, {
        propsData: {
          checked: false
        }
      });

      const label = wrapper.find('label');
      label.trigger('click');
    });

    test('event is emitted', () => {
      expect(wrapper.emitted()['update:checked']).toBeDefined();
    });

    test('new checked state is emitted', () => {
      expect(wrapper.emitted()['update:checked'][0]).toEqual([true]);
    });

  });

  describe('when disabled, doesn\'t change state', () => {

    beforeAll(() => {
      wrapper = mount(Checkbox, {
        propsData: {
          checked: false,
          disabled: true
        }
      });

      const label = wrapper.find('label');
      label.trigger('click');
    });

    test('event is not emitted', () => {
      expect(wrapper.emitted()['update:checked']).toBeUndefined();
    });

  });

});
