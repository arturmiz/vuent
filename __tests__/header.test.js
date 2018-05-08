import { mount } from 'vue-test-utils';
import Header from '@/components/header';

describe('Header', () => {
  let wrapper;

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(Header);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  test('can have only main header content set', () => {
    wrapper = mount(Header, {
      slots: {
        default: 'Header'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('can have main header content set using named slot', () => {
    wrapper = mount(Header, {
      slots: {
        header: 'Header'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('can have both header and subheader content set', () => {
    wrapper = mount(Header, {
      slots: {
        header: 'Header',
        subheader: 'Subheader'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('can have only subheader content set', () => {
    wrapper = mount(Header, {
      slots: {
        subheader: 'Subheader'
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

});
