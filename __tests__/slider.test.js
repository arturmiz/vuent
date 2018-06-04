import { createLocalVue, mount } from '@vue/test-utils';
import { VntSlider } from '@/components';
import { isInstalled } from './utils';

describe('Slider', () => {
  let wrapper;

  test('can be installed separately', () => {
    const localVue = createLocalVue();
    localVue.use(VntSlider);

    expect(isInstalled(localVue, VntSlider)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntSlider);
    });

    test('is not disabled', () => {
      expect(wrapper.vm.disabled).toBe(false);
    });

    test('label text is "Slider"', () => {
      expect(wrapper.vm.label).toBe('Slider');
    });

    test('min equals 0', () => {
      expect(wrapper.vm.min).toBe(0);
    });

    test('max equals 100', () => {
      expect(wrapper.vm.max).toBe(100);
    });

    test('value equals 50', () => {
      expect(wrapper.vm.value).toBe(50);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can be disabled', () => {

    beforeAll(() => {
      wrapper = mount(VntSlider, {
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

  describe('can have custom label', () => {

    beforeAll(() => {
      wrapper = mount(VntSlider, {
        propsData: {
          label: 'Custom Slider'
        }
      });
    });

    test('is correct', () => {
      expect(wrapper.vm.label).toBe('Custom Slider');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can have custom min', () => {

    beforeAll(() => {
      wrapper = mount(VntSlider, {
        propsData: {
          min: 15
        }
      });
    });

    test('is correct', () => {
      expect(wrapper.vm.min).toBe(15);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can have custom max', () => {

    beforeAll(() => {
      wrapper = mount(VntSlider, {
        propsData: {
          max: 200
        }
      });
    });

    test('is correct', () => {
      expect(wrapper.vm.max).toBe(200);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  test('can have some other attribute set', () => {
    wrapper = mount(VntSlider, {
      attrs: {
        step: '5',
        'aria-label': 'a11y label'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('can have content set using slot', () => {
    wrapper = mount(VntSlider, {
      slots: {
        default: '<span>Custom content</span>'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  describe('when not disabled, updates passed value prop', () => {

    beforeAll(() => {
      wrapper = mount(VntSlider, {
        propsData: {
          value: 30
        }
      });

      const slider = wrapper.find('input');
      slider.element.value = 44;
      slider.trigger('input');
    });

    test('event is emitted', () => {
      expect(wrapper.emitted()['input']).toBeDefined();
    });

    test('new value state is emitted', () => {
      expect(wrapper.emitted()['input'][0]).toEqual([44]);
    });

  });

  describe('when disabled, doesn\'t change state', () => {

    beforeAll(() => {
      wrapper = mount(VntSlider, {
        propsData: {
          value: 3,
          disabled: true
        }
      });

      const slider = wrapper.find('input[type=range]');
      slider.element.value = 44;
      slider.trigger('input');
    });

    test('event is not emitted', () => {
      expect(wrapper.emitted()['input']).toBeUndefined();
    });

  });

});
