import { createLocalVue, mount } from '@vue/test-utils';
import { VntCalendarDatepicker } from '@/components';
import { isInstalled } from './utils';

describe('CalendarDatePicker', () => {
  let localVue, wrapper;

  beforeAll(() => {
    localVue = createLocalVue();
    localVue.use(VntCalendarDatepicker);
  });

  test('can be installed separately', () => {
    expect(isInstalled(localVue, VntCalendarDatepicker)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntCalendarDatepicker);
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
      wrapper = mount(VntCalendarDatepicker, {
        propsData: {
          disabled: true
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('updates passed value', () => {

    beforeAll(async () => {
      wrapper = mount(VntCalendarDatepicker, {
        propsData: {
          value: '12345'
        }
      });
      const input = wrapper.find('input');
      input.setValue('123456');
    });

    test('event is emitted', () => {
      expect(wrapper.emitted().input).toHaveLength(1);
    });

    test('entered value is emitted', () => {
      wrapper.vm.input('123456');

      expect(wrapper.emitted().input[1]).toEqual(['123456']);
    });

  });

});
