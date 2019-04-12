import { createLocalVue, mount } from '@vue/test-utils';
import { VntNavView } from '@/components';
import { isInstalled } from './utils';

describe('NavView', () => {
  let wrapper;

  test('can be installed separately', () => {
    const localVue = createLocalVue();
    localVue.use(VntNavView);

    expect(isInstalled(localVue, VntNavView)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntNavView);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('generates correct stucture', () => {

    beforeAll(() => {
      wrapper = mount(VntNavView, {
        slots: {
          default: `
            <vnt-navview pane-title="App name">
              <vnt-navview-navitems>

              </vnt-navview-navitems>
              <vnt-navview-content>
                Some content
              </vnt-navview-content>
            </vnt-navview>`
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('when using custom pane header', () => {

    beforeAll(() => {
      wrapper = mount(VntNavView, {
        slots: {
          default: `
            <vnt-navview pane-title="App name">
              <vnt-navview-pane-header>
                <div>App name with logo</div>
              </vnt-navview-pane-header>
              <vnt-navview-content>
                Some content
              </vnt-navview-content>
            </vnt-navview>`
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

});
