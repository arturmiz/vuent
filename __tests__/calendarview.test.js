import { createLocalVue, shallowMount } from '@vue/test-utils';
import { VntCalendarView } from '@/components';
import { isInstalled } from './utils';

describe('CalendarView', () => {
  let localVue, wrapper;

  beforeAll(() => {
    localVue = createLocalVue();
    localVue.use(VntCalendarView);
  });

  test('can be installed separately', () => {
    expect(isInstalled(localVue, VntCalendarView)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = shallowMount(VntCalendarView);
    });

  });

});
