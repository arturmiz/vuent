<template>
  <div class="playground">
    <vnt-button :click="showDialog">Open Dialog</vnt-button>

    <div class="result"><br />opened: {{ opened }}<br />result: {{ result }}</div>

    <vnt-dialog
      title="Basic dialog"
      content="This is a basic dialog. As default it has only 'Cancel' button."
      :opened.sync="opened"
      v-on:result="onresult" />

  </div>
</template>

<script>
import DialogMixin from './dialog.mixin';

export default {
  name: 'DialogBasic',
  mixins: [
    DialogMixin
  ]
}
</script>
