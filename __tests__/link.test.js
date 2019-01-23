import { createLocalVue, mount } from '@vue/test-utils';
import { VntLink } from '@/components';
import { isInstalled } from './utils';

describe('Link', () => {
  let wrapper;

  test('can be installed separately', () => {
    const localVue = createLocalVue();
    localVue.use(VntLink);

    expect(isInstalled(localVue, VntLink)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntLink);
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

    test('click handler is undefined', () => {
      expect(wrapper.vm.click).toBeUndefined();
    });

  });

  describe('can be disabled', () => {

    beforeAll(() => {
      wrapper = mount(VntLink, {
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
      wrapper = mount(VntLink, {
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
      wrapper = mount(VntLink, {
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

    test('click handler is not invoked', () => {
      const mockClick = jest.fn();
      wrapper.vm.handlerClick = mockClick;
      wrapper.find('a').trigger('click');
      expect(mockClick).not.toBeCalled();
    });

  });

  describe('when passed other standard href attributes', () => {

    test('passes correctly target attr', () => {
      wrapper = mount(VntLink, {
        propsData: {
          href: 'http://fluent.microsoft.com'
        },
        attrs: {
          target: '_blank'
        }
      });

      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  test('when clicked invokes passed handler', () => {
    const mockClick = jest.fn();
    wrapper = mount(VntLink, {
      propsData: {
        click: mockClick
      }
    });
    wrapper.find('a').trigger('click');
    expect(mockClick).toBeCalled();
  });

  describe('when both href and click handler passed', () => {

    test('invokes the click handler', () => {
      const mockClick = jest.fn();
      wrapper = mount(VntLink, {
        propsData: {
          click: mockClick,
          href: 'http://fluent.microsoft.com'
        }
      });
      wrapper.find('a').trigger('click');
      expect(mockClick).toBeCalled();
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

});

