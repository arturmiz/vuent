import { mount } from '@vue/test-utils';
import Select from '@/components/select';

describe('Select', () => {
  let wrapper;

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(Select);
    });

    test('label text is "Select"', () => {
      expect(wrapper.vm.label).toBe('Select');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('can have custom label', () => {

    beforeAll(() => {
      wrapper = mount(Select, {
        propsData: {
          label: 'Custom Select'
        }
      });
    });

    test('is correct', () => {
      expect(wrapper.vm.label).toBe('Custom Select');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

});
