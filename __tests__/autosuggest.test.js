import { createLocalVue, mount } from '@vue/test-utils';
import { VntAutosuggest } from '@/components';
import { isInstalled } from './utils';

describe('Auto-suggest', () => {
  let wrapper;

  test('can be installed separately', () => {
    const localVue = createLocalVue();
    localVue.use(VntAutosuggest);

    expect(isInstalled(localVue, VntAutosuggest)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntAutosuggest);
    });

    test('is not disabled', () => {
      expect(wrapper.vm.disabled).toBe(false);
    });

    test('label text is empty', () => {
      expect(wrapper.vm.label).toBe('');
    });

    test('placeholder text is empty', () => {
      expect(wrapper.vm.placeholder).toBe('');
    });

    test('options array is empty', () => {
      expect(wrapper.vm.options).toHaveLength(0);
    });

    test('hints array is empty', () => {
      expect(wrapper.vm.hints).toHaveLength(0);
    });

    test('hints are hidden', () => {
      expect(wrapper.vm.showHints).toBe(false);
    });

    test('value is empty', () => {
      expect(wrapper.vm.value).toBe('');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can have custom label', () => {

    beforeAll(() => {
      wrapper = mount(VntAutosuggest, {
        propsData: {
          label: 'Custom Auto-suggest'
        }
      });
    });

    test('is correct', () => {
      expect(wrapper.vm.label).toBe('Custom Auto-suggest');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can have a custom placeholder', () => {

    beforeAll(() => {
      wrapper = mount(VntAutosuggest, {
        propsData: {
          placeholder: 'Type something'
        }
      });
    });

    test('is placeholder correct', () => {
      expect(wrapper.vm.placeholder).toBe('Type something');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can be disabled', () => {

    beforeAll(() => {
      wrapper = mount(VntAutosuggest, {
        propsData: {
          disabled: true,
          options: [
            'List item 1',
            'List item 2',
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

  });

  describe('can have custom label and be disabled', () => {

    beforeAll(() => {
      wrapper = mount(VntAutosuggest, {
        propsData: {
          disabled: true,
          label: 'Custom Auto-suggest'
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

});
