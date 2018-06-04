import { createLocalVue, mount } from '@vue/test-utils';
import { VntHeader } from '@/components';
import { isInstalled } from './utils';

describe('Header', () => {
  let wrapper;

  test('can be installed separately', () => {
    const localVue = createLocalVue();
    localVue.use(VntHeader);

    expect(isInstalled(localVue, VntHeader)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntHeader);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  test('can have only main header content set', () => {
    wrapper = mount(VntHeader, {
      slots: {
        default: 'Header'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('can have main header content set using named slot', () => {
    wrapper = mount(VntHeader, {
      slots: {
        header: 'Header'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('can have both header and subheader content set', () => {
    wrapper = mount(VntHeader, {
      slots: {
        header: 'Header',
        subheader: 'Subheader'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('can have only subheader content set', () => {
    wrapper = mount(VntHeader, {
      slots: {
        subheader: 'Subheader'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

});
