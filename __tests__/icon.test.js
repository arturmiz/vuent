import { createLocalVue, mount } from '@vue/test-utils';
import { VntIcon } from '@/components';
import { isInstalled } from './utils';
import { resolveIcon } from '@/components/icon/Icon.vue';

import VntIconAdd from '@/components/icon/icons/Add.vue';
import VntIconClose from '@/components/icon/icons/Close.vue';
import VntIconContact from '@/components/icon/icons/Contact.vue';
import VntIconDelete from '@/components/icon/icons/Delete.vue';
import VntIconEdit from '@/components/icon/icons/Edit.vue';
import VntIconFlag from '@/components/icon/icons/Flag.vue';
import VntIconGlobalNav from '@/components/icon/icons/GlobalNavigation.vue';
import VntIconHome from '@/components/icon/icons/Home.vue';
import VntIconSettings from '@/components/icon/icons/Settings.vue';
import VntIconSave from '@/components/icon/icons/Save.vue';
import VntIconTag from '@/components/icon/icons/Tag.vue';

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
      expect(resolveIcon('add').name).toBe(VntIconAdd.name);
      expect(resolveIcon('close').name).toBe(VntIconClose.name);
      expect(resolveIcon('contact').name).toBe(VntIconContact.name);
      expect(resolveIcon('delete').name).toBe(VntIconDelete.name);
      expect(resolveIcon('edit').name).toBe(VntIconEdit.name);
      expect(resolveIcon('flag').name).toBe(VntIconFlag.name);
      expect(resolveIcon('global-navigation').name).toBe(VntIconGlobalNav.name);
      expect(resolveIcon('global-nav').name).toBe(VntIconGlobalNav.name);
      expect(resolveIcon('home').name).toBe(VntIconHome.name);
      expect(resolveIcon('save').name).toBe(VntIconSave.name);
      expect(resolveIcon('settings').name).toBe(VntIconSettings.name);
      expect(resolveIcon('tag').name).toBe(VntIconTag.name);
      expect(resolveIcon('some-non-existing-icon')).toBeNull();
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

});
