import { mount } from '@vue/test-utils';
import Toggle from '@/components/toggle';

describe('Toggle', () => {
  let wrapper;

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(Toggle);
    });

    test('is not disabled', () => {
      expect(wrapper.vm.disabled).toBe(false);
    });

    test('is not checked', () => {
      expect(wrapper.vm.checked).toBe(false);
    });

    test('label text is "Toggle"', () => {
      expect(wrapper.vm.label).toBe('Toggle');
    });

    test('label Off text is "Off"', () => {
      expect(wrapper.vm.labelOff).toBe('Off');
    });

    test('label On text is "On"', () => {
      expect(wrapper.vm.labelOn).toBe('On');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can be disabled', () => {

    beforeAll(() => {
      wrapper = mount(Toggle, {
        propsData: {
          disabled: true
        }
      });
    });

    test('is disabled', () => {
      expect(wrapper.vm.disabled).toBe(true);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can be checked', () => {

    beforeAll(() => {
      wrapper = mount(Toggle, {
        propsData: {
          checked: true
        }
      });
    });

    test('is checked', () => {
      expect(wrapper.vm.checked).toBe(true);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can have custom "Off" state label', () => {

    beforeAll(() => {
      wrapper = mount(Toggle, {
        propsData: {
          labelOff: 'Custom Off'
        }
      });
    });

    test('is correct', () => {
      expect(wrapper.vm.labelOff).toBe('Custom Off');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });


  describe('can have custom "On" state label', () => {

    beforeAll(() => {
      wrapper = mount(Toggle, {
        propsData: {
          labelOn: 'Custom On'
        }
      });
    });

    test('is correct', () => {
      expect(wrapper.vm.labelOn).toBe('Custom On');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can be checked and disabled', () => {

    beforeAll(() => {
      wrapper = mount(Toggle, {
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
    wrapper = mount(Toggle, {
      slots: {
        default: '<span>Custom content</span>'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe('when not disabled, updates passed checked prop', () => {

    beforeAll(() => {
      wrapper = mount(Toggle, {
        propsData: {
          checked: false
        }
      });

      const label = wrapper.find('label');
      label.trigger('click');
    });

    test('event is emitted', () => {
      expect(wrapper.emitted()['update:checked']).toHaveLength(1);
    });

    test('new checked state is emitted', () => {
      const [updateChecked] = wrapper.emitted()['update:checked'];
      expect(updateChecked).toEqual([true]);
    });

  });

  describe('when disabled, doesn\'t change state', () => {

    beforeAll(() => {
      wrapper = mount(Toggle, {
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
