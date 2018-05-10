import { mount } from '@vue/test-utils';
import Link from '@/components/link';

describe('Link', () => {
  let wrapper;

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(Link);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('target is #', () => {
      expect(wrapper.vm.href).toBe('#');
    });

    test('is not disabled', () => {
      expect(wrapper.vm.disabled).toBe(false);
    });

  });

  describe('can be disabled', () => {

    beforeAll(() => {
      wrapper = mount(Link, {
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

  describe('can set target', () => {

    beforeAll(() => {
      wrapper = mount(Link, {
        propsData: {
          href: 'http://fluent.microsoft.com'
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('is correct', () => {
      expect(wrapper.vm.href).toBe('http://fluent.microsoft.com');
    });

  });

  describe('can create proper link', () => {

    beforeAll(() => {
      wrapper = mount(Link, {
        propsData: {
          href: 'http://fluent.microsoft.com'
        },
        slots: {
          default: 'Fluent'
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('when passed other standard href attributes', () => {

    test('passes correctly target attr', () => {
      wrapper = mount(Link, {
        propsData: {
          href: 'http://fluent.microsoft.com'
        },
        attrs: {
          target: '_blank'
        }
      });

      // TODO: replace with following once https://github.com/vuejs/vue-test-utils/issues/146 is fixed
      // expect(wrapper.html()).toMatchSnapshot();
      expect(wrapper.vm.$attrs.target).toBe('_blank');
    });

  });

});

