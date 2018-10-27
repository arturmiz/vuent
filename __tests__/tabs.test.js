import { createLocalVue, mount } from '@vue/test-utils';
import { VntTabs } from '@/components';
import { isInstalled } from './utils';

describe('Tabs', () => {
  let wrapper;

  test('can be installed separately', () => {
    const localVue = createLocalVue();
    localVue.use(VntTabs);

    expect(isInstalled(localVue, VntTabs)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntTabs);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

});
