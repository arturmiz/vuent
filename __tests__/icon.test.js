import { createLocalVue, mount } from '@vue/test-utils';
import { VntIcon } from '@/components';
import { isInstalled } from './utils';
import { resolveIcon } from '@/components/icon/Icon.vue';

import VntIconContact from '@/components/icon/icons/Contact.vue';
import VntIconEdit from '@/components/icon/icons/Edit.vue';
import VntIconGlobalNav from '@/components/icon/icons/GlobalNavigation.vue';
import VntIconSettings from '@/components/icon/icons/Settings.vue';
import VntIconSave from '@/components/icon/icons/Save.vue';

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

    test('uses correct component', () => {
      expect(resolveIcon('contact').name).toBe(VntIconContact.name);
      expect(resolveIcon('edit').name).toBe(VntIconEdit.name);
      expect(resolveIcon('global-navigation').name).toBe(VntIconGlobalNav.name);
      expect(resolveIcon('global-nav').name).toBe(VntIconGlobalNav.name);
      expect(resolveIcon('save').name).toBe(VntIconSave.name);
      expect(resolveIcon('settings').name).toBe(VntIconSettings.name);
      expect(resolveIcon('some-non-existing-icon')).toBeNull();
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

});
