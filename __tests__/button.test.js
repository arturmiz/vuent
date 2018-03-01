import { mount } from 'vue-test-utils';
import Button from '@/components/button';

describe('Button', () => {

  describe('by default', () => {
    let wrapper;

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

  });

  test('can be disabled', () => {
    const wrapper = mount(Button, {
      propsData: {
        disabled: true
      }
    });
    expect(wrapper.vm.disabled).toBe(true);
  });

});

