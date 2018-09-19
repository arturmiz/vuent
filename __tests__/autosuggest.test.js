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

    describe('when value has changed', () => {

      beforeAll(() => {
        const control = wrapper.find('.vnt-autosuggest__input');
        control.trigger('input', { value: 'lis' });
      });

      test('hints list is not shown', () => {
        expect(wrapper.vm.showHints).toBe(false);
      });

      test('hints list is not visible', () => {
        const list = wrapper.find('.vnt-dropdown-options');
        expect(list.isVisible()).toBe(false);
      });

      test('renders correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });

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

  describe('when have a value on init', () => {

    beforeAll(() => {
      wrapper = mount(VntAutosuggest, {
        propsData: {
          value: 'Li',
          options: [
            'List item 1',
            'List item 2',
          ]
        }
      });
    });

    test('hints list is not shown', () => {
      expect(wrapper.vm.showHints).toBe(false);
    });

    test('hints list is empty', () => {
      expect(wrapper.vm.hints).toHaveLength(0);
    });

    test('hints list is not visible', () => {
      const list = wrapper.find('.vnt-dropdown-options');
      expect(list.isVisible()).toBe(false);
    });

  });

  describe('when user types something', () => {

    describe('that match any option', () => {

      beforeAll(() => {
        wrapper = mount(VntAutosuggest, {
          propsData: {
            value: '',
            options: [
              'Austria',
              'Canada',
              'Australia',
              'Germany',
              'France',
              'United States',
            ]
          }
        });

        const input = wrapper.find('.vnt-autosuggest__input');
        input.trigger('input', { value: 'aus' });
      });

      test('returns hints', () => {
        const expectedHints = [
          'Australia',
          'Austria'
        ];
        expect(wrapper.vm.hints).toEqual(expectedHints);
      });

      test('event is emitted', () => {
        const [[eventValue]] = wrapper.emitted()['input'];
        expect(eventValue).toBe('aus');
      });

      test('hints list is shown', () => {
        expect(wrapper.vm.showHints).toBe(true);
      });

      test('hints list is visible', () => {
        const list = wrapper.find('.vnt-dropdown-options');
        expect(list.isVisible()).toBe(true);
      });

      test('renders correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });

    });

    describe('that doesn\'t match any option', () => {

      beforeAll(() => {
        wrapper = mount(VntAutosuggest, {
          propsData: {
            value: '',
            options: [
              'Austria',
              'Canada',
              'Australia',
              'Germany',
              'France',
              'United States',
            ]
          }
        });

        const input = wrapper.find('.vnt-autosuggest__input');
        input.trigger('input', { value: 'pol' });
      });

      test('returns no hints', () => {
        expect(wrapper.vm.hints).toHaveLength(0);
      });

      test('event is emitted', () => {
        const [[eventValue]] = wrapper.emitted()['input'];
        expect(eventValue).toBe('pol');
      });

      test('hints list is not shown', () => {
        expect(wrapper.vm.showHints).toBe(false);
      });

      test('hints list is not visible', () => {
        const list = wrapper.find('.vnt-dropdown-options');
        expect(list.isVisible()).toBe(false);
      });

      test('renders correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });

    });

    describe('that turns out to be nullable', () => {

      beforeAll(() => {
        wrapper = mount(VntAutosuggest, {
          propsData: {
            value: '',
            options: [
              'Austria',
              'Canada',
              'Australia',
              'Germany',
              'France',
              'United States',
            ]
          }
        });

        const input = wrapper.find('.vnt-autosuggest__input');
        input.trigger('input', { value: null });
      });

      test('returns all hints', () => {
        const expectedHints = [
          'Australia',
          'Austria',
          'Canada',
          'France',
          'Germany',
          'United States'
        ];
        expect(wrapper.vm.hints).toEqual(expectedHints);
      });

      test('event is emitted', () => {
        const [[eventValue]] = wrapper.emitted()['input'];
        expect(eventValue).toBe('');
      });

      test('hints list is shown', () => {
        expect(wrapper.vm.showHints).toBe(true);
      });

      test('hints list is visible', () => {
        const list = wrapper.find('.vnt-dropdown-options');
        expect(list.isVisible()).toBe(true);
      });

      test('renders correctly', () => {
        expect(wrapper.html()).toMatchSnapshot();
      });

    });

  });

  describe('when selects a hint', () => {

    describe('and not disabled', () => {

      beforeAll(() => {
        wrapper = mount(VntAutosuggest, {
          propsData: {
            disabled: false
          }
        });

        wrapper.vm.selectHint('Austria');
      });

      test('event is emitted', () => {
        const [[eventValue]] = wrapper.emitted()['input'];
        expect(eventValue).toBe('Austria');
      });

    });

    describe('and is disabled', () => {

      beforeAll(() => {
        wrapper = mount(VntAutosuggest, {
          propsData: {
            disabled: true
          }
        });

        wrapper.vm.selectHint('Austria');
      });

      test('event is not emitted', () => {
        const inputEvent = wrapper.emitted()['input'];
        expect(inputEvent).toBeUndefined();
      });

    });

  });

});
