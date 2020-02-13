import { createLocalVue, shallowMount } from '@vue/test-utils';
import { VntTooltip } from '@/components';
import { isInstalled } from './utils';

describe('Tooltip', () => {
  let localVue, wrapper;

  beforeAll(() => {
    localVue = createLocalVue();
    localVue.use(VntTooltip);
  });

  test('can be installed separately', () => {
    expect(isInstalled(localVue, VntTooltip)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = shallowMount(VntTooltip);
    });

  });

});
