import { mount } from '@vue/test-utils';
import Select from '@/components/select';

describe('Select', () => {
  let wrapper;

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(Select);
    });

    test('is not disabled', () => {
      expect(wrapper.vm.disabled).toBe(false);
    });

    test('label text is "Select"', () => {
      expect(wrapper.vm.label).toBe('Select');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can be disabled', () => {

    beforeAll(() => {
      wrapper = mount(Select, {
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
        const control = wrapper.find('.vnt-select__options-item');
        control.trigger('click');
      });

      test('event is not emitted', () => {
        expect(wrapper.emitted()['input']).toBeUndefined();
      });

    });

  });

  describe('allows to select a new value', () => {

    beforeAll(() => {
      wrapper = mount(Select, {
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
        const option = wrapper.find('.vnt-select__options-item');
        option.trigger('click');
      });

      test('event is emitted', () => {
        expect(wrapper.emitted()['input']).toHaveLength(1);
      });

    });

  });

  describe('can have custom label', () => {

    beforeAll(() => {
      wrapper = mount(Select, {
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

});
