import { createLocalVue, mount } from '@vue/test-utils';
import { VntIcon } from '@/components';
import { isInstalled } from './utils';

describe('Icon', () => {
  let wrapper;

  test('can be installed separately', () => {
    const localVue = createLocalVue();
    localVue.use(VntIcon);

    expect(isInstalled(localVue, VntIcon)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntIcon);
    });

    test('name is undefined', () => {
      expect(wrapper.vm.name).toBeUndefined();
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

  describe('given icon\'s key', () => {

    beforeAll(() => {
      wrapper = mount(VntIcon, {
        propsData: {
          name: 'settings'
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

});
