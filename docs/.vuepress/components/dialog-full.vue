<template>
  <div class="playground">
    <vnt-button :click="showDialog">Open Dialog</vnt-button>

    <div class="result"><br />opened: {{ opened }}<br />result: {{ result }}</div>

    <vnt-dialog :opened.sync="opened" v-on:result="onresult"
      title="Question"
      content="This is a dialog with two action buttons and a custom dismiss button.">
      <vnt-dialog-btn-primary result="ok">OK</vnt-dialog-btn-primary>
      <vnt-dialog-btn-secondary result="later">Later</vnt-dialog-btn-secondary>
      <vnt-dialog-btn-dismiss result="cancel">Close</vnt-dialog-btn-dismiss>
    </vnt-dialog>
  </div>
</template>

<script>
import DialogMixin from './dialog.mixin';

export default {
  name: 'DialogFull',
  mixins: [
    DialogMixin
  ]
}
</script>
