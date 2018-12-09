import { createLocalVue, mount } from '@vue/test-utils';
import { VntRating } from '@/components';
import { isInstalled } from './utils';

describe('Rating', () => {
  let wrapper;

  test('can be installed separately', () => {
    const localVue = createLocalVue();
    localVue.use(VntRating);

    expect(isInstalled(localVue, VntRating)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntRating);
    });

    test('is not disabled', () => {
      expect(wrapper.vm.disabled).toBe(false);
    });

    test('stars number is 5', () => {
      expect(wrapper.vm.max).toBe(5);
    });

    test('value is 0', () => {
      expect(wrapper.vm.value).toBe(0);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('when not 0 value provided', () => {

    beforeAll(() => {
      wrapper = mount(VntRating, {
        propsData: {
          value: 2.64
        }
      });
    });

    test('calculated value is 2', () => {
      expect(wrapper.vm.starsValue).toBe(2);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can be disabled', () => {

    beforeAll(() => {
      wrapper = mount(VntRating, {
        propsData: {
          disabled: true,
          value: 3
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

  describe('when not disabled, updates rating', () => {

    beforeAll(() => {
      wrapper = mount(VntRating, {
        propsData: {
          value: 2
        }
      });

      const label = wrapper.find('label[aria-label="3"]');
      label.trigger('click');
    });

    test('event is emitted', () => {
      expect(wrapper.emitted()['change']).toHaveLength(1);
    });

    test('new rating value is emitted', () => {
      const [newRating] = wrapper.emitted()['change'];
      expect(newRating).toEqual([3]);
    });

  });

  describe('when disabled, doesn\'t change rating', () => {

    beforeAll(() => {
      wrapper = mount(VntRating, {
        propsData: {
          value: 2,
          disabled: true
        }
      });

      const label = wrapper.find('label[aria-label="3"]');
      label.trigger('click');
    });

    test('event is not emitted', () => {
      expect(wrapper.emitted()['change']).toBeUndefined();
    });

  });

});
