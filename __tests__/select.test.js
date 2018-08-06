import { createLocalVue, mount } from '@vue/test-utils';
import { VntSelect } from '@/components';
import { isInstalled } from './utils';

describe('Select', () => {
  let wrapper;

  test('can be installed separately', () => {
    const localVue = createLocalVue();
    localVue.use(VntSelect);

    expect(isInstalled(localVue, VntSelect)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntSelect);
    });

    test('is not disabled', () => {
      expect(wrapper.vm.disabled).toBe(false);
    });

    test('label text is empty', () => {
      expect(wrapper.vm.label).toBe('');
    });

    test('option\'s label is under "label" property', () => {
      expect(wrapper.vm.optionText).toBe('label');
    });

    test('option\'s value is under "value" property', () => {
      expect(wrapper.vm.optionValue).toBe('value');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can be disabled', () => {

    beforeAll(() => {
      wrapper = mount(VntSelect, {
        propsData: {
          disabled: true,
          options: [
            { value: 1, label: 'List item 1'},
            { value: 2, label: 'List item 2'},
          ]
        }
      });
    });

    test('is disabled', () => {
      expect(wrapper.vm.disabled).toBe(true);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    describe('then does not allow to show options list', () => {

      beforeAll(() => {
        const control = wrapper.find('.vnt-select__chosen');
        control.trigger('click');
      });

      test('options list is not shown', () => {
        expect(wrapper.vm.isOpened).toBe(false);
      });

      test('renders correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });

    });

    describe('then does not allow to select a new value', () => {

      beforeAll(() => {
        const control = wrapper.find('.vnt-dropdown-options__item');
        control.trigger('click');
      });

      test('event is not emitted', () => {
        expect(wrapper.emitted()['input']).toBeUndefined();
      });

    });

  });

  describe('allows to select a new value', () => {

    beforeAll(() => {
      wrapper = mount(VntSelect, {
        propsData: {
          options: [
            { value: 1, label: 'List item 1'},
            { value: 2, label: 'List item 2'},
          ]
        }
      });
    });

    describe('shows options list on click', () => {

      beforeAll(() => {
        const control = wrapper.find('.vnt-select__chosen');
        control.trigger('click');
      });

      test('options list is shown', () => {
        expect(wrapper.vm.isOpened).toBe(true);
      });

      test('renders correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });

    });

    describe('allows to select a new value', () => {

      beforeAll(() => {
        const option = wrapper.find('.vnt-dropdown-options__item');
        option.trigger('click');
      });

      test('event is emitted', () => {
        expect(wrapper.emitted()['input']).toHaveLength(1);
      });

    });

  });

  describe('can have custom label', () => {

    beforeAll(() => {
      wrapper = mount(VntSelect, {
        propsData: {
          label: 'Custom Select'
        }
      });
    });

    test('is correct', () => {
      expect(wrapper.vm.label).toBe('Custom Select');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can have custom optionText', () => {

    beforeAll(() => {
      wrapper = mount(VntSelect, {
        propsData: {
          optionText: 'text',
          options: [
            { value: 1, text: 'List item 1'},
            { value: 2, text: 'List item 2'},
          ]
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can have custom optionValue', () => {

    beforeAll(() => {
      wrapper = mount(VntSelect, {
        propsData: {
          optionValue: 'id',
          options: [
            { id: 123, label: 'List item 1'},
            { id: 256, label: 'List item 2'},
          ]
        }
      });

      const option = wrapper.find('.vnt-dropdown-options__item');
      option.trigger('click');
    });

    test('correct value is resolved', () => {
      const [[newValue]] = wrapper.emitted()['input'];
      expect(newValue).toBe(123);
    });

  });

});
