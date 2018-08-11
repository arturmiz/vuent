import { createLocalVue, mount } from '@vue/test-utils';
import VntDropdownOptions from '@/components/dropdown/Options.vue';
import { isInstalled } from './utils';

describe('DropdownOptions', () => {
  let wrapper;

  test('can be installed separately', () => {
    const localVue = createLocalVue();
    localVue.use(VntDropdownOptions);

    expect(isInstalled(localVue, VntDropdownOptions)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntDropdownOptions);
    });

    test('is not opened', () => {
      expect(wrapper.vm.opened).toBe(false);
    });

    test('options array is empty', () => {
      expect(wrapper.vm.options).toHaveLength(0);
    });

    test('option\'s label path is empty', () => {
      expect(wrapper.vm.optionText).toBeNull();
    });

    test('option\'s value path is empty', () => {
      expect(wrapper.vm.optionValue).toBeNull();
    });

    test('is not visible', () => {
      expect(wrapper.find('.vnt-dropdown-options').isVisible()).toBe(false);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('when have some options', () => {

    beforeAll(() => {
      wrapper = mount(VntDropdownOptions, {
        propsData: {
          options: [
            'List item 1'
          ]
        }
      });
    });

    describe('by default', () => {

      test('is not visible', () => {
        expect(wrapper.find('.vnt-dropdown-options').isVisible()).toBe(false);
      });

    });

  });

  describe('when opened', () => {

    beforeAll(() => {
      wrapper = mount(VntDropdownOptions, {
        propsData: {
          opened: true,
          options: [
            'List item 1',
            'List item 2',
            'List item 3',
          ]
        }
      });
    });

    test('is visible', () => {
      expect(wrapper.find('.vnt-dropdown-options').isVisible()).toBe(true);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('when options array is a simple list', () => {

    beforeAll(() => {
      wrapper = mount(VntDropdownOptions, {
        propsData: {
          options: [
            'List item 1',
            'List item 2',
            'List item 3',
          ]
        }
      });
    });

    test('getText() is correct', () => {
      const [option] = wrapper.vm.options;
      expect(wrapper.vm.getText(option)).toBe('List item 1');
    });

    test('getKey() is correct', () => {
      const [option] = wrapper.vm.options;
      expect(wrapper.vm.getKey(option)).toBe('List item 1');
    });

    describe('allows to select a hint', () => {

      beforeAll(() => {
        wrapper.vm.opened = true;

        const option = wrapper.find('.vnt-dropdown-options__item');
        option.trigger('click');
      });

      test('event is emitted', () => {
        const [[eventValue]] = wrapper.emitted()['on-select'];
        expect(eventValue).toBe('List item 1');
      });

    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('when options array is a list of objects', () => {

    beforeAll(() => {
      wrapper = mount(VntDropdownOptions, {
        propsData: {
          optionText: 'text',
          optionValue: 'val',
          options: [
            { text: 'List item 1', val: 1 },
            { text: 'List item 2', val: 2 },
            { text: 'List item 3', val: 3 },
          ]
        }
      });
    });

    test('getText() is correct', () => {
      const [option] = wrapper.vm.options;
      expect(wrapper.vm.getText(option)).toBe('List item 1');
    });

    test('getKey() is correct', () => {
      const [option] = wrapper.vm.options;
      expect(wrapper.vm.getKey(option)).toBe(1);
    });

    describe('allows to select a hint', () => {

      beforeAll(() => {
        const option = wrapper.find('.vnt-dropdown-options__item');
        option.trigger('click');
      });

      test('event is emitted', () => {
        const [option] = wrapper.vm.options;
        const [[eventValue]] = wrapper.emitted()['on-select'];
        expect(eventValue).toBe(option);
      });

    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  test('hide emits opened change', () => {
    wrapper.vm.hide();

    const [[eventValue]] = wrapper.emitted()['update:opened'];
    expect(eventValue).toBe(false);
  });

});
