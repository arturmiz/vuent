import { createLocalVue } from '@vue/test-utils';
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

  });

});
