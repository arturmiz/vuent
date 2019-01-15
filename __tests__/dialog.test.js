import { createLocalVue, mount } from '@vue/test-utils';
import { VntDialog } from '@/components';
import { isInstalled } from './utils';

describe('Dialog', () => {
  let wrapper;

  function emittedResult(wrapper, i = 0) {
    const { result } = wrapper.emitted();
    const [eventValue] = result[i];
    return eventValue;
  }

  function openedResult(wrapper) {
    const [[eventValue]] = wrapper.emitted()['update:opened'];
    return eventValue;
  }

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

  describe('by default, when opened', () => {

    beforeAll(() => {
      wrapper = mount(VntDialog, {
        propsData: {
          opened: true
        }
      });
    });

    test('closes on ESC key', () => {
      wrapper.find({ ref: 'dialog' }).trigger('keyup.esc');

      expect(openedResult(wrapper)).toBe(false);
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe('default dismiss button clicked', () => {

      beforeAll(() => {
        wrapper.find({ ref: 'vnt-dialog-btn-dismiss' }).trigger('click');
      });

      test('emits correct result', () => {
        expect(emittedResult(wrapper)).toBe(null);
      });

      test('closes dialog', () => {
        expect(openedResult(wrapper)).toBe(false);
      });

    });

  });

  describe('when opened after initialization', () => {

    beforeAll(() => {
      wrapper.setProps({ opened: true });
    });

    describe('on ESC key pressed', () => {

      test('emits correct result', () => {
        expect(emittedResult(wrapper)).toBe(null);
      });

      test('closes dialog', (done) => {
        wrapper.vm.$nextTick(() => {
          wrapper.find({ ref: 'dialog' }).trigger('keyup.esc');

          expect(openedResult(wrapper)).toBe(false);
          done();
        });
      });

    });

  });

  describe('with title and content given', () => {

    beforeAll(() => {
      wrapper = mount(VntDialog, {
        propsData: {
          opened: true,
          title: 'Warning',
          content: 'This operation is not allowed.'
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

  });

  describe('when custom dismiss button given', () => {

    beforeAll(() => {
      wrapper = mount(VntDialog, {
        propsData: {
          opened: true,
          title: 'Warning',
          content: 'This operation is not allowed.'
        },
        slots: {
          default: '<vnt-dialog-btn-dismiss result="cancel">Close</vnt-dialog-btn-dismiss>'
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe('dismiss button clicked', () => {

      beforeAll(() => {
        wrapper.find({ ref: 'vnt-dialog-btn-dismiss' }).trigger('click');
      });

      test('emits correct result', () => {
        expect(emittedResult(wrapper)).toBe('cancel');
      });

      test('closes dialog', () => {
        expect(openedResult(wrapper)).toBe(false);
      });

    });

  });

  describe('when custom primary button given', () => {

    beforeAll(() => {
      wrapper = mount(VntDialog, {
        propsData: {
          opened: true,
          title: 'Confirm Delete Action',
          content: 'Are you sure you want to delete this item?'
        },
        slots: {
          default: '<vnt-dialog-btn-primary result="ok">Delete</vnt-dialog-btn-primary>'
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe('primary button clicked', () => {

      beforeAll(() => {
        wrapper.find({ ref: 'vnt-dialog-btn-primary' }).trigger('click');
      });

      test('emits correct result', () => {
        expect(emittedResult(wrapper)).toBe('ok');
      });

      test('closes dialog', () => {
        expect(openedResult(wrapper)).toBe(false);
      });

    });

    describe('dismiss button clicked', () => {

      beforeAll(() => {
        wrapper.find({ ref: 'vnt-dialog-btn-dismiss' }).trigger('click');
      });

      test('emits correct result', () => {
        expect(emittedResult(wrapper, 1)).toBe(null);
      });

      test('closes dialog', () => {
        expect(openedResult(wrapper)).toBe(false);
      });

    });

  });

  describe('when custom secondary button given', () => {

    beforeAll(() => {
      wrapper = mount(VntDialog, {
        propsData: {
          opened: true,
          title: 'Confirm Delete Action',
          content: 'Are you sure you want to delete this item?'
        },
        slots: {
          default: '<vnt-dialog-btn-secondary result="skip">Ask later</vnt-dialog-btn-secondary>'
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe('secondary button clicked', () => {

      beforeAll(() => {
        wrapper.find({ ref: 'vnt-dialog-btn-secondary' }).trigger('click');
      });

      test('emits correct result', () => {
        expect(emittedResult(wrapper)).toBe('skip');
      });

      test('closes dialog', () => {
        expect(openedResult(wrapper)).toBe(false);
      });

    });

    describe('dismiss button clicked', () => {

      beforeAll(() => {
        wrapper.find({ ref: 'vnt-dialog-btn-dismiss' }).trigger('click');
      });

      test('emits correct result', () => {
        expect(emittedResult(wrapper, 1)).toBe(null);
      });

      test('closes dialog', () => {
        expect(openedResult(wrapper)).toBe(false);
      });

    });

  });

  describe('when custom primary and secondary buttons given', () => {

    describe('in rendering order', () => {

      beforeAll(() => {
        wrapper = mount(VntDialog, {
          propsData: {
            opened: true,
            title: 'Confirm Delete Action',
            content: 'Are you sure you want to delete this item?'
          },
          slots: {
            default: `
              <vnt-dialog-btn-primary result="ok">Delete</vnt-dialog-btn-primary>
              <vnt-dialog-btn-secondary result="skip">Ask later</vnt-dialog-btn-secondary>
            `
          }
        });
      });

      test('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });

      describe('dismiss button clicked', () => {

        beforeAll(() => {
          wrapper.find({ ref: 'vnt-dialog-btn-dismiss' }).trigger('click');
        });

        test('emits correct result', () => {
          expect(emittedResult(wrapper)).toBe(null);
        });

        test('closes dialog', () => {
          expect(openedResult(wrapper)).toBe(false);
        });

      });

    });

    describe('in mixed order', () => {

      beforeAll(() => {
        wrapper = mount(VntDialog, {
          propsData: {
            opened: true,
            title: 'Confirm Delete Action',
            content: 'Are you sure you want to delete this item?'
          },
          slots: {
            default: `
              <vnt-dialog-btn-secondary result="skip">Ask later</vnt-dialog-btn-secondary>
              <vnt-dialog-btn-primary result="ok">Delete</vnt-dialog-btn-primary>
            `
          }
        });
      });

      test('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
      });

    });

  });

  describe('when custom primary, secondary and dismiss buttons given', () => {

    beforeAll(() => {
      wrapper = mount(VntDialog, {
        propsData: {
          opened: true,
          title: 'Confirm Delete Action',
          content: 'Are you sure you want to delete this item?'
        },
        slots: {
          default: `
            <vnt-dialog-btn-primary result="ok">Delete</vnt-dialog-btn-primary>
            <vnt-dialog-btn-secondary result="skip">Ask later</vnt-dialog-btn-secondary>
            <vnt-dialog-btn-dismiss result="cancel">Close</vnt-dialog-btn-dismiss>
          `
        }
      });
    });

    test('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    describe('primary button clicked', () => {

      beforeAll(() => {
        wrapper.find({ ref: 'vnt-dialog-btn-primary' }).trigger('click');
      });

      test('emits correct result', () => {
        expect(emittedResult(wrapper)).toBe('ok');
      });

      test('closes dialog', () => {
        expect(openedResult(wrapper)).toBe(false);
      });

    });

    describe('secondary button clicked', () => {

      beforeAll(() => {
        wrapper.find({ ref: 'vnt-dialog-btn-secondary' }).trigger('click');
      });

      test('emits correct result', () => {
        expect(emittedResult(wrapper, 1)).toBe('skip');
      });

      test('closes dialog', () => {
        expect(openedResult(wrapper)).toBe(false);
      });

    });

    describe('dismiss button clicked', () => {

      beforeAll(() => {
        wrapper.find({ ref: 'vnt-dialog-btn-dismiss' }).trigger('click');
      });

      test('emits correct result', () => {
        expect(emittedResult(wrapper, 2)).toBe('cancel');
      });

      test('closes dialog', () => {
        expect(openedResult(wrapper)).toBe(false);
      });

    });

  });

});
