import { createLocalVue, mount } from '@vue/test-utils';
import { VntCheckbox } from '@/components';
import { isInstalled } from './utils';

describe('Checkbox', () => {
  let wrapper;

  test('can be installed separately', () => {
    const localVue = createLocalVue();
    localVue.use(VntCheckbox);

    expect(isInstalled(localVue, VntCheckbox)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntCheckbox);
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
      wrapper = mount(VntCheckbox, {
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
      wrapper = mount(VntCheckbox, {
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
      wrapper = mount(VntCheckbox, {
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
    wrapper = mount(VntCheckbox, {
      slots: {
        default: '<span>Custom content</span>'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe('when not disabled, updates passed checked prop', () => {

    beforeAll(() => {
      wrapper = mount(VntCheckbox, {
        propsData: {
          checked: false
        }
      });

      const label = wrapper.find('label');
      label.trigger('click');
    });

    test('event is emitted', () => {
      expect(wrapper.emitted()['change']).toHaveLength(1);
    });

    test('new checked state is emitted', () => {
      const [updateChecked] = wrapper.emitted()['change'];
      expect(updateChecked).toEqual([true]);
    });

  });

  describe('when disabled, doesn\'t change state', () => {

    beforeAll(() => {
      wrapper = mount(VntCheckbox, {
        propsData: {
          checked: false,
          disabled: true
        }
      });

      const label = wrapper.find('label');
      label.trigger('click');
    });

    test('event is not emitted', () => {
      expect(wrapper.emitted()['change']).toBeUndefined();
    });

  });

});
