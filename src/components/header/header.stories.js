import Header from './Header.vue';

export default {
  title: 'Header'
};

export const Default = () => ({
  components: { Header },
  template: '<vnt-header>Header</vnt-header>'
});

export const Subheader = () => ({
  components: { Header },
  template: `
    <vnt-header>
      <span slot="subheader">Subheader</span>
    </vnt-header>
  `
});

export const HeaderAndSubheader = () => ({
  components: { Header },
  template: `
    <vnt-header>
      <span slot="header">Header</span>
      <span slot="subheader">Subheader</span>
    </vnt-header>
  `
});
