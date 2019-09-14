<script>
import VntIconContact from './icons/Contact.vue';
import VntIconEdit from './icons/Edit.vue';
import VntIconGlobalNav from './icons/GlobalNavigation.vue';
import VntIconSave from './icons/Save.vue';
import VntIconSettings from './icons/Settings.vue';

export default {
  name: 'VntIcon',

  functional: true,

  components: {
    VntIconContact,
    VntIconEdit,
    VntIconGlobalNav,
    VntIconSave,
    VntIconSettings
  },

  props: {
    name: {
      type: String,
      default: undefined
    }
  },

  render(createElement, { props, data }) {
    function resolveIcon(name) {
      switch (name) {
      case 'contact':
        return VntIconContact;
      case 'edit':
        return VntIconEdit;
      case 'global-nav':
      case 'global-navigation':
        return VntIconGlobalNav;
      case 'settings':
        return VntIconSettings;
      case 'save':
        return VntIconSave;
      default:
        return null;
      }
    }

    return createElement('span', {
      class: 'vnt-icon',
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
