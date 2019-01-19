<template>
  <div class="playground">
    <vnt-button :click="showDialog">Open Dialog</vnt-button>

    <div class="result"><br />opened: {{ opened }}<br />result: {{ result }}</div>

    <vnt-dialog :opened.sync="opened" v-on:result="onresult"
      title="Question"
      content="This is a dialog with primary and secondary buttons.">
      <vnt-dialog-btn-primary result="ok">OK</vnt-dialog-btn-primary>
      <vnt-dialog-btn-secondary result="later">Later</vnt-dialog-btn-secondary>
    </vnt-dialog>
  </div>
</template>

<script>
import DialogMixin from './dialog.mixin';

export default {
  name: 'DialogSecondary',
  mixins: [
    DialogMixin
  ]
}
</script>
