import { createLocalVue, mount } from '@vue/test-utils';
import { VntDialog } from '@/components';
import { isInstalled } from './utils';

describe('Dialog', () => {
  let wrapper;

  test('can be installed separately', () => {
    const localVue = createLocalVue();
    localVue.use(VntDialog);

    expect(isInstalled(localVue, VntDialog)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntDialog);
    });

    test('title is empty', () => {
      expect(wrapper.vm.title).toBe('');
    });

    test('content is empty', () => {
      expect(wrapper.vm.content).toBe('');
    });

    test('dialog is hidden', () => {
      expect(wrapper.vm.opened).toBe(false);
    });

    test('nothing is rendered as dialog should be hidden', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

});
