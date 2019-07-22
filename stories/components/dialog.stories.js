import { storiesOf } from '@storybook/vue';

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

/* eslint no-undef: 0 */
storiesOf('Dialog', module)
  .add('default', () => ({
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
      </div>`
  }))
  .add('primary button', () => ({
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
      </div>`
  }))
  .add('primary default button', () => ({
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
      </div>`
  }))
  .add('secondary button', () => ({
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
      </div>`
  }))
  .add('full', () => ({
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
      </div>`
  }));
