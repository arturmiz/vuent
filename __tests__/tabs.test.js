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

  describe('generates correct stucture', () => {

    beforeAll(() => {
      wrapper = mount(VntTabs, {
        slots: {
          default: `
            <vnt-tab label="Pivot Item 1" active>
              <div>Tab 1</div>
            </vnt-tab>
            <vnt-tab label="Pivot Item 2">
              <p>Tab 2</p>
            </vnt-tab>
            <vnt-tab label="Tab 3">
              <p>Tab 3</p>
            </vnt-tab>`
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('once a tab is clicked', () => {

    beforeAll(() => {
      wrapper = mount(VntTabs, {
        slots: {
          default: `
            <vnt-tab label="Pivot Item 1" active>
              <p>Tab 1</p>
            </vnt-tab>
            <vnt-tab label="Pivot Item 2">
              <p>Tab 2</p>
            </vnt-tab>`
        }
      });

      const label = wrapper.findAll('.vnt-tabs__header').at(1);
      label.trigger('click');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

});
