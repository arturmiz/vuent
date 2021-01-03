import NavView from './NavView.vue';

export default {
  title: 'NavView'
};

export const Default = () => ({
  components: { NavView },
  template: `
    <vnt-navview pane-title="App name" header="Header">
      <vnt-navview-pane-header>
        <i>App name with logo</i>
      </vnt-navview-pane-header>
      <vnt-navview-items>
        <vnt-navview-item-header>Nav item header</vnt-navview-item-header>
        <vnt-navview-item icon="save" active>Link 1</vnt-navview-item>
        <vnt-navview-item icon="edit">
          <a href="javascript:alert('Hi!')">Link 2</a>
        </vnt-navview-item>
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
  `
});
