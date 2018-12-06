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

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

});
