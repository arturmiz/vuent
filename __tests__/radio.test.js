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
      expect(wrapper.attributes().checked).toBe(undefined);
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
        attrs: {
          checked: 'true'
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can be checked and disabled', () => {

    beforeAll(() => {
      wrapper = mount(RadioButton, {
        attrs: {
          checked: 'true'
        },
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

  describe('when not disabled, emits selected value', () => {

    beforeAll(() => {
      wrapper = mount(RadioButton, {
        attrs: {
          value: 'red'
        },
        propsData: {
          disabled: false
        }
      });

      const label = wrapper.find('label');
      label.trigger('click');
    });

    test('event is emitted', () => {
      expect(wrapper.emitted()['input']).toBeDefined();
    });

    test('new checked state is emitted', () => {
      expect(wrapper.emitted()['input'][0]).toEqual(['red']);
    });

  });

  describe('when disabled, doesn\'t emit selected value', () => {

    beforeAll(() => {
      wrapper = mount(RadioButton, {
        attrs: {
          value: 'blue'
        },
        propsData: {
          disabled: true
        }
      });

      const label = wrapper.find('label');
      label.trigger('click');
    });

    test('event is not emitted', () => {
      expect(wrapper.emitted()['input']).toBeUndefined();
    });

  });

});
