import { createLocalVue, mount } from '@vue/test-utils';
import { VntInput } from '@/components';
import { isInstalled } from './utils';

describe('Input', () => {
  let wrapper;

  test('can be installed separately', () => {
    const localVue = createLocalVue();
    localVue.use(VntInput);

    expect(isInstalled(localVue, VntInput)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntInput);
    });

    test('has correct type', () => {
      expect(wrapper.vm.type).toBe('text');
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

    test('value is empty', () => {
      expect(wrapper.vm.value).toBe('');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can be disabled', () => {

    beforeAll(() => {
      wrapper = mount(VntInput, {
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

  describe('can have a custom label', () => {

    beforeAll(() => {
      wrapper = mount(VntInput, {
        propsData: {
          label: 'Custom label'
        }
      });
    });

    test('is label correct', () => {
      expect(wrapper.vm.label).toBe('Custom label');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can be a password field', () => {

    beforeAll(() => {
      wrapper = mount(VntInput, {
        propsData: {
          type: 'password'
        }
      });
    });

    test('is type correct', () => {
      expect(wrapper.vm.type).toBe('password');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can have a custom placeholder', () => {

    beforeAll(() => {
      wrapper = mount(VntInput, {
        propsData: {
          placeholder: 'Custom hint'
        }
      });
    });

    test('is placeholder correct', () => {
      expect(wrapper.vm.placeholder).toBe('Custom hint');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can be fully customized', () => {

    beforeAll(() => {
      wrapper = mount(VntInput, {
        propsData: {
          type: 'number',
          label: 'Custom label',
          placeholder: 'Custom hint',
          value: '12345'
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('updates passed value', () => {

    beforeAll(() => {
      wrapper = mount(VntInput, {
        propsData: {
          value: '12345'
        }
      });
      const input = wrapper.find('input');
      input.element.value = '123456';
      input.trigger('input');
    });

    test('event is emitted', () => {
      expect(wrapper.emitted().input).toHaveLength(1);
    });

    test('entered value is emitted', () => {
      expect(wrapper.emitted().input[0]).toEqual(['123456']);
    });

  });

});
