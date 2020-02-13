import { createLocalVue, mount } from '@vue/test-utils';
import { isInstalled, countInstalledPlugins } from './utils';

import {
  VntAutosuggest,
  VntButton,
  VntCheckbox,
  VntDialog,
  VntHeader,
  VntIcon,
  VntInput,
  VntLink,
  VntNavView,
  VntListView,
  VntPivot,
  VntRadio,
  VntRating,
  VntSelect,
  VntSlider,
  VntToggle,
  VntTooltip,
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
      expect(isInstalled(localVue, VntDialog)).toBe(true);
      expect(isInstalled(localVue, VntHeader)).toBe(true);
      expect(isInstalled(localVue, VntIcon)).toBe(true);
      expect(isInstalled(localVue, VntInput)).toBe(true);
      expect(isInstalled(localVue, VntLink)).toBe(true);
      expect(isInstalled(localVue, VntListView)).toBe(true);
      expect(isInstalled(localVue, VntNavView)).toBe(true);
      expect(isInstalled(localVue, VntPivot)).toBe(true);
      expect(isInstalled(localVue, VntRadio)).toBe(true);
      expect(isInstalled(localVue, VntRating)).toBe(true);
      expect(isInstalled(localVue, VntSelect)).toBe(true);
      expect(isInstalled(localVue, VntSlider)).toBe(true);
      expect(isInstalled(localVue, VntToggle)).toBe(true);
      expect(isInstalled(localVue, VntTooltip)).toBe(true);

      expect(countInstalledPlugins(localVue)).toBe(17);
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

    describe('sets given accent color', () => {
      let spy;

      beforeEach(() => {
        spy = jest.spyOn(vnt, 'setAccentColor').mockImplementation(() => {});
      });

      test('using Vuent.install', () => {
        Vuent.install(localVue, {
          accentColor: '#f0f0f0'
        });

        expect(spy).toHaveBeenCalledWith('#f0f0f0');
      });

      test('using Vue.use', () => {
        localVue.use(Vuent, {
          accentColor: '#ff0000'
        });

        expect(spy).toHaveBeenCalledWith('#ff0000');
      });

      test('using $vuent instance', () => {
        const testComponent = {
          name: 'AppTest',
          template: '<div></div>',
          mounted() {
            this.$vuent.setAccentColor('#ffff00');
          }
        };

        localVue.use(Vuent);
        mount(testComponent, {
          localVue
        });

        expect(spy).toHaveBeenCalledWith('#ffff00');
      });

      afterEach(() => {
        spy.mockRestore();
      });

    });

  });

});
