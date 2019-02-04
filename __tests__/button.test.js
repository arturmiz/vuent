import { createLocalVue, mount } from '@vue/test-utils';
import { VntButton } from '@/components';
import { isInstalled } from './utils';

describe('Button', () => {
  let wrapper;

  test('can be installed separately', () => {
    const localVue = createLocalVue();
    localVue.use(VntButton);

    expect(isInstalled(localVue, VntButton)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntButton);
    });

    test('has correct type', () => {
      expect(wrapper.vm.type).toBe('button');
    });

    test('is not disabled', () => {
      expect(wrapper.vm.disabled).toBe(false);
    });

    test('label text is "Button"', () => {
      expect(wrapper.vm.label).toBe('Button');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('click invokes default handler', () => {
      const clickSpy = jest.spyOn(wrapper.vm, 'click');
      wrapper.find('button').trigger('click');

      expect(clickSpy).toHaveBeenCalled();

      clickSpy.mockRestore();
    });

  });

  describe('can be disabled', () => {

    beforeAll(() => {
      wrapper = mount(VntButton, {
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

  test('can have content set using slot', () => {
    wrapper = mount(VntButton, {
      slots: {
        default: '<span>Custom content</span>'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('when clicked invokes passed handler', () => {
    const mockClick = jest.fn();
    wrapper = mount(VntButton, {
      propsData: {
        click: mockClick
      }
    });
    wrapper.find('button').trigger('click');
    expect(mockClick).toHaveBeenCalled();
  });

});
