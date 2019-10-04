<template>
  <div class="playground">
    <vnt-navview pane-title="App name" header="Header">
      <vnt-navview-pane-header>
        <i>App name with logo</i>
      </vnt-navview-pane-header>
      <vnt-navview-items>
        <vnt-navview-item-header>Nav item header</vnt-navview-item-header>
        <vnt-navview-item icon="save" active>Link 1</vnt-navview-item>
        <vnt-navview-item icon="edit">Link 2</vnt-navview-item>
        <vnt-navview-item icon="contact">Link 3</vnt-navview-item>
        <vnt-navview-item-separator></vnt-navview-item-separator>
        <vnt-navview-item>Link 4</vnt-navview-item>
        <vnt-navview-item icon="contact">Link 5</vnt-navview-item>
      </vnt-navview-items>
      <vnt-navview-pane-footer>
        <vnt-navview-item icon="settings">Settings</vnt-navview-item>
      </vnt-navview-pane-footer>
      <vnt-navview-content>
        Some content
      </vnt-navview-content>
    </vnt-navview>
  </div>
</template>

<script>
import VntNavview from '../../../src/components/navview/NavView.vue';
import VntNavviewItem from '../../../src/components/navview/MenuItem.vue';
import VntNavviewItemHeader from '../../../src/components/navview/MenuItemHeader.vue';
import VntNavviewItemSeparator from '../../../src/components/navview/MenuItemSeparator.vue';

export default {
  name: 'NavviewBasic',
  components: {
    VntNavview,
    VntNavviewItem,
    VntNavviewItemHeader,
    VntNavviewItemSeparator
  }
}
</script>
