import { createLocalVue, mount } from '@vue/test-utils';
import { VntPivot } from '@/components';
import { isInstalled } from './utils';

describe('Pivot', () => {
  let wrapper;

  test('can be installed separately', () => {
    const localVue = createLocalVue();
    localVue.use(VntPivot);

    expect(isInstalled(localVue, VntPivot)).toBe(true);
  });

  describe('by default', () => {

    beforeAll(() => {
      wrapper = mount(VntPivot);
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('generates correct stucture', () => {

    beforeAll(() => {
      wrapper = mount(VntPivot, {
        slots: {
          default: `
            <vnt-pivot-item label="Pivot Item 1" active>
              <div>Item 1</div>
            </vnt-pivot-item>
            <vnt-pivot-item label="Pivot Item 2">
              <p>Item 2</p>
            </vnt-pivot-item>
            <vnt-pivot-item label="Pivot Item 3">
              <p>Item 3</p>
            </vnt-pivot-item>`
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

  describe('once a tab is clicked', () => {

    beforeAll(() => {
      wrapper = mount(VntPivot, {
        slots: {
          default: `
            <vnt-pivot-item label="Pivot Item 1" active>
              <p>Item 1</p>
            </vnt-pivot-item>
            <vnt-pivot-item label="Pivot Item 2">
              <p>Item 2</p>
            </vnt-pivot-item>`
        }
      });

      const label = wrapper.findAll('.vnt-pivot__header').at(1);
      label.trigger('click');
    });

    test('renders correctly', () => {
      expect(wrapper.html()).toMatchSnapshot();
    });

  });

});
