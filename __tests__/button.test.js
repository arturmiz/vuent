import { mount } from '@vue/test-utils';
import Button from '@/components/button';

describe('Button', () => {
  let wrapper;

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(Button);
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

  });

  describe('can be disabled', () => {

    beforeAll(() => {
      wrapper = mount(Button, {
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
    wrapper = mount(Button, {
      slots: {
        default: '<span>Custom content</span>'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('when clicked invokes passed handler', () => {
    const mockClick = jest.fn();
    wrapper = mount(Button, {
      propsData: {
        click: mockClick
      }
    });
    wrapper.find('button').trigger('click');
    expect(mockClick).toBeCalled();
  });

});
