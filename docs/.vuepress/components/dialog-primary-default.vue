<template>
  <div class="playground">
    <vnt-button :click="showDialog">Open Dialog</vnt-button>

    <div class="result"><br />opened: {{ opened }}<br />result: {{ result }}</div>

    <vnt-dialog :opened.sync="opened" v-on:result="onresult"
      title="Notice"
      content="This is a dialog with a default action button.">
      <vnt-dialog-btn-primary result="ok" default>OK</vnt-dialog-btn-primary>
    </vnt-dialog>
  </div>
</template>

<script>
import DialogMixin from './dialog.mixin';

export default {
  name: 'DialogPrimaryDefault',
  mixins: [
    DialogMixin
  ]
}
</script>
