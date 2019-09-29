import { createLocalVue, shallowMount } from '@vue/test-utils';
import { VntListView } from '@/components';
import { isInstalled } from './utils';

describe('ListView', () => {
  let localVue, wrapper;

  beforeAll(() => {
    localVue = createLocalVue();
    localVue.use(VntListView);
  });

  test('can be installed separately', () => {
    expect(isInstalled(localVue, VntListView)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = shallowMount(VntListView);
    });

    test('selectionMode is none', () => {
      expect(wrapper.vm.selectionMode).toBe('none');
    });

  });

  test('renders correctly simple static list', () => {
    wrapper = shallowMount(VntListView, {
      localVue,
      slots: {
        default: `
         <vnt-listview-item>
          Banana
         </vnt-listview-item>
         <vnt-listview-item>
          Apple
         </vnt-listview-item>
         <vnt-listview-item>
          Orange
         </vnt-listview-item>
        `
      }
    });
    expect(wrapper).toMatchSnapshot();
  });

  test('renders correctly single selection list', () => {
    wrapper = shallowMount(VntListView, {
      localVue,
      propsData: {
        selectionMode: 'single',
      },
      slots: {
        default: `
         <vnt-listview-item>
          Banana
         </vnt-listview-item>
         <vnt-listview-item>
          Apple
         </vnt-listview-item>
         <vnt-listview-item>
          Orange
         </vnt-listview-item>
        `
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});
