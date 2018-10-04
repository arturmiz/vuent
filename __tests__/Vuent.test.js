import { createLocalVue, mount } from '@vue/test-utils';
import { isInstalled, countInstalledPlugins } from './utils';

import {
  VntAutosuggest,
  VntButton,
  VntCheckbox,
  VntHeader,
  VntInput,
  VntLink,
  VntRadio,
  VntSelect,
  VntSlider,
  VntToggle
} from '@/components';

import Vuent from '@/';
import vnt from '@/components/Vnt.vue';

describe('Vuent', () => {
  let localVue;

  beforeEach(() => {
    localVue = createLocalVue();
  });

  describe('by default', () => {

    beforeEach(() => {
      localVue.use(Vuent);
    });

    test('installs all components', () => {
      expect(isInstalled(localVue, VntAutosuggest)).toBe(true);
      expect(isInstalled(localVue, VntButton)).toBe(true);
      expect(isInstalled(localVue, VntCheckbox)).toBe(true);
      expect(isInstalled(localVue, VntHeader)).toBe(true);
      expect(isInstalled(localVue, VntInput)).toBe(true);
      expect(isInstalled(localVue, VntLink)).toBe(true);
      expect(isInstalled(localVue, VntRadio)).toBe(true);
      expect(isInstalled(localVue, VntSelect)).toBe(true);
      expect(isInstalled(localVue, VntSlider)).toBe(true);
      expect(isInstalled(localVue, VntToggle)).toBe(true);
      expect(countInstalledPlugins(localVue)).toBe(10);
    });

    test('has $vuent instance object', () => {
      const wrapper = mount(VntButton, {
        localVue,
      });
      expect(wrapper.vm.$vuent).toBe(vnt);
    });

  });

  describe('when custom configured', () => {

    test('installs only given components', () => {
      Vuent.install(localVue, {
        components: [VntButton, VntLink]
      });
      expect(isInstalled(localVue, VntButton)).toBe(true);
      expect(isInstalled(localVue, VntLink)).toBe(true);
      expect(countInstalledPlugins(localVue)).toBe(2);
    });

    test('sets given accent color', () => {
      const spy = jest.spyOn(vnt, 'setAccentColor').mockImplementation(() => {});

      Vuent.install(localVue, {
        accentColor: '#f0f0f0'
      });

      expect(spy).toHaveBeenCalledWith('#f0f0f0');

      spy.mockRestore();
    });

  });

});
