import { createLocalVue, mount } from '@vue/test-utils';
import { VntCalendarDatePicker } from '@/components';
import { isInstalled } from './utils';

describe('CalendarDatePicker', () => {
  let localVue, wrapper;

  beforeAll(() => {
    localVue = createLocalVue();
    localVue.use(VntCalendarDatePicker);
  });

  test('can be installed separately', () => {
    expect(isInstalled(localVue, VntCalendarDatePicker)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntCalendarDatePicker);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

    test('value is empty', () => {
      expect(wrapper.vm.value).toBe('');
    });

  });

  describe('can be disabled', () => {

    beforeAll(() => {
      wrapper = mount(VntCalendarDatePicker, {
        propsData: {
          disabled: true
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

});
