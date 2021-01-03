import Dialog from './Dialog.vue';

export default {
  title: 'Dialog'
};

const mixin = {
  data() {
    return {
      result: undefined,
      opened: false
    };
  },
  methods: {
    showDialog() {
      this.opened = true;
    },
    onresult(result) {
      this.result = result;
    }
  }
};

export const Default = () => ({
  components: { Dialog },
  ...mixin,
  template: `
    <div>
      <vnt-button :click="showDialog">Open Dialog</vnt-button>

      <vnt-dialog
        title="Basic dialog"
        content="This is a basic dialog. As default it has only 'Cancel' button."
        :opened.sync="opened"
        v-on:result="onresult" />

      <p class="result"><br />opened: {{ opened }}<br />result: {{ result }}</p>
    </div>
  `
});

export const PrimaryButton = () => ({
  components: { Dialog },
  ...mixin,
  template: `
    <div>
      <vnt-button :click="showDialog">Open Dialog</vnt-button>

      <vnt-dialog :opened.sync="opened" v-on:result="onresult"
        title="Notice"
        content="This is a dialog with a primary action button.">
        <vnt-dialog-btn-primary result="ok">OK</vnt-dialog-btn-primary>
      </vnt-dialog>

      <p class="result"><br />opened: {{ opened }}<br />result: {{ result }}</p>
    </div>
  `
});

export const PrimaryDefaultButton = () => ({
  components: { Dialog },
  ...mixin,
  template: `
    <div>
      <vnt-button :click="showDialog">Open Dialog</vnt-button>

      <vnt-dialog :opened.sync="opened" v-on:result="onresult"
        title="Notice"
        content="This is a dialog with a default action button.">
        <vnt-dialog-btn-primary result="ok" default>OK</vnt-dialog-btn-primary>
      </vnt-dialog>

      <p class="result"><br />opened: {{ opened }}<br />result: {{ result }}</p>
    </div>
  `
});

export const SecondaryButton = () => ({
  components: { Dialog },
  ...mixin,
  template: `
    <div>
      <vnt-button :click="showDialog">Open Dialog</vnt-button>

      <vnt-dialog :opened.sync="opened" v-on:result="onresult"
        title="Question"
        content="This is a dialog with primary and secondary buttons.">
        <vnt-dialog-btn-primary result="ok">OK</vnt-dialog-btn-primary>
        <vnt-dialog-btn-secondary result="later">Later</vnt-dialog-btn-secondary>
      </vnt-dialog>

      <p class="result"><br />opened: {{ opened }}<br />result: {{ result }}</p>
    </div>
  `
});

export const ThreeButons = () => ({
  components: { Dialog },
  ...mixin,
  template: `
    <div>
      <vnt-button :click="showDialog">Open Dialog</vnt-button>

      <vnt-dialog :opened.sync="opened" v-on:result="onresult"
        title="Question"
        content="This is a dialog with two action buttons and a custom dismiss button.">
        <vnt-dialog-btn-primary result="ok" default>OK</vnt-dialog-btn-primary>
        <vnt-dialog-btn-secondary result="later">Later</vnt-dialog-btn-secondary>
        <vnt-dialog-btn-dismiss result="cancel">Close</vnt-dialog-btn-dismiss>
      </vnt-dialog>

      <p class="result"><br />opened: {{ opened }}<br />result: {{ result }}</p>
    </div>
  `
});
