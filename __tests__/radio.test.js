import { mount } from 'vue-test-utils';
import RadioButton from '@/components/radio';

describe('RadioButton', () => {
  let wrapper;

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(RadioButton);
    });

    test('is not disabled', () => {
      expect(wrapper.vm.disabled).toBe(false);
    });

    test('is not checked', () => {
      expect(wrapper.vm.checked).toBe(false);
    });

    test('name is "radio"', () => {
      expect(wrapper.vm.name).toBe('radio');
    });

    test('label text is "Radio"', () => {
      expect(wrapper.vm.label).toBe('Radio');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can be disabled', () => {

    beforeAll(() => {
      wrapper = mount(RadioButton, {
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
      wrapper = mount(RadioButton, {
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
      wrapper = mount(RadioButton, {
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
    wrapper = mount(RadioButton, {
      slots: {
        default: '<span>Custom content</span>'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe('can have name attribute', () => {

    beforeAll(() => {
      wrapper = mount(RadioButton, {
        propsData: {
          name: 'groupedRadios'
        }
      });
    });

    test('set correctly', () => {
      expect(wrapper.vm.name).toBe('groupedRadios');
    });

    test('rendered correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

});
