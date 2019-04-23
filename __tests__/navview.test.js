import { createLocalVue, mount } from '@vue/test-utils';
import { VntNavView } from '@/components';
import { isInstalled } from './utils';

describe('NavView', () => {
  let localVue, wrapper;

  beforeAll(() => {
    localVue = createLocalVue();
    localVue.use(VntNavView);
  });

  test('can be installed separately', () => {
    expect(isInstalled(localVue, VntNavView)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntNavView, {
        localVue
      });
    });

    test('pane is hidden', () => {
      expect(wrapper.vm.isPaneOpened).toBe(false);
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

  describe('generates correct structure', () => {

    beforeAll(() => {
      wrapper = mount(VntNavView, {
        localVue,
        propsData: {
          paneTitle: 'App name',
          header: 'Header',
        },
        slots: {
          default: `
            <vnt-navview-items>
              <vnt-navview-item-header>Nav item header</vnt-navview-item-header>
              <vnt-navview-item icon="save" active>Link 1</vnt-navview-item>
              <vnt-navview-item-separator />
              <vnt-navview-item icon="contact">Link 2</vnt-navview-item>
            </vnt-navview-items>
            <vnt-navview-content>
              Some content
            </vnt-navview-content>
          `
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('pane can be toggled', () => {
      const menuButton = wrapper.find('.vnt-navview__pane-toggle');
      menuButton.trigger('click');

      expect(wrapper.vm.isPaneOpened).toBe(true);
    });

  });

  describe('when using custom pane header', () => {

    beforeAll(() => {
      wrapper = mount(VntNavView, {
        localVue,
        propsData: {
          paneTitle: 'App name'
        },
        slots: {
          default: `
            <vnt-navview-pane-header>
              <div>App name with logo</div>
            </vnt-navview-pane-header>
            <vnt-navview-content>
              Some content
            </vnt-navview-content>
          `
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

  describe('when using custom pane footer', () => {

    beforeAll(() => {
      wrapper = mount(VntNavView, {
        localVue,
        propsData: {
          paneTitle: 'App name',
        },
        slots: {
          default: `
            <vnt-navview-pane-footer>
              <vnt-navview-item icon="contact">Account</vnt-navview-item>
              <vnt-navview-item icon="settings">Settings</vnt-navview-item>
            </vnt-navview-pane-footer>
            <vnt-navview-content>
              Some content
            </vnt-navview-content>
          `
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

});
