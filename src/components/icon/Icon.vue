<script>
import VntIconAdd from './icons/Add.vue';
import VntIconClose from './icons/Close.vue';
import VntIconContact from './icons/Contact.vue';
import VntIconDelete from './icons/Delete.vue';
import VntIconEdit from './icons/Edit.vue';
import VntIconFlag from './icons/Flag.vue';
import VntIconGlobalNav from './icons/GlobalNavigation.vue';
import VntIconHome from './icons/Home.vue';
import VntIconSave from './icons/Save.vue';
import VntIconSettings from './icons/Settings.vue';
import VntIconTag from './icons/Tag.vue';

export function resolveIcon(name) {
  switch (name) {
  case 'add':
    return VntIconAdd;
  case 'close':
    return VntIconClose;
  case 'contact':
    return VntIconContact;
  case 'delete':
    return VntIconDelete;
  case 'edit':
    return VntIconEdit;
  case 'flag':
    return VntIconFlag;
  case 'global-nav':
  case 'global-navigation':
    return VntIconGlobalNav;
  case 'home':
    return VntIconHome;
  case 'save':
    return VntIconSave;
  case 'settings':
    return VntIconSettings;
  case 'tag':
    return VntIconTag;
  default:
    return null;
  }
}

export default {
  name: 'VntIcon',

  functional: true,

  components: {
    VntIconAdd,
    VntIconClose,
    VntIconContact,
    VntIconDelete,
    VntIconEdit,
    VntIconFlag,
    VntIconGlobalNav,
    VntIconHome,
    VntIconSave,
    VntIconSettings,
    VntIconTag
  },

  props: {
    name: {
      type: String,
      default: undefined
    }
  },

  render(createElement, { props, data }) {
    return createElement('span', {
      class: data.staticClass ? `vnt-icon ${data.staticClass}` : 'vnt-icon',
      attrs: data.attrs
    }, [
      createElement(resolveIcon(props.name))
    ]);
  }
};
</script>

<style lang="scss">
.vnt-icon {
  display: inline-block;
  width: 16px;
  height: 16px;
}
</style>
