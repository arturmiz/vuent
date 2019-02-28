# Dialog

[[toc]]

## Basic

<dialog-basic />

```html
<vnt-dialog :opened.sync="opened" v-on:result="onresult"
  title="Basic dialog"
  content="This is a basic dialog. As default it has only 'Cancel' button." />
```

## Primary action

<dialog-primary />

```html
<vnt-dialog :opened.sync="opened" v-on:result="onresult"
  title="Notice"
  content="This is a dialog with a primary action button.">
  <vnt-dialog-btn-primary result="ok">OK</vnt-dialog-btn-primary>
</vnt-dialog>
```

## Default action

<dialog-primary-default />

```html
<vnt-dialog :opened.sync="opened" v-on:result="onresult"
  title="Notice"
  content="This is a dialog with a default action button.">
  <vnt-dialog-btn-primary result="ok" default>OK</vnt-dialog-btn-primary>
</vnt-dialog>
```

## Secondary action

<dialog-secondary />

```html
<vnt-dialog :opened.sync="opened" v-on:result="onresult"
  title="Question"
  content="This is a dialog with primary and secondary buttons.">
  <vnt-dialog-btn-primary result="ok">OK</vnt-dialog-btn-primary>
  <vnt-dialog-btn-secondary result="later">Later</vnt-dialog-btn-secondary>
</vnt-dialog>
```

## Fully custom buttons

<dialog-full />

```html
<vnt-dialog :opened.sync="opened" v-on:result="onresult"
  title="Question"
  content="This is a dialog with two action buttons and a custom dismiss button.">
  <vnt-dialog-btn-primary result="ok" default>OK</vnt-dialog-btn-primary>
  <vnt-dialog-btn-secondary result="later">Later</vnt-dialog-btn-secondary>
  <vnt-dialog-btn-dismiss result="cancel">Close</vnt-dialog-btn-dismiss>
</vnt-dialog>
```

## Configuration

### `content`
Default: `''`

Dialog's content message.

### `title`
Default: `''`

Dialog's title.

### `opened`
Default: `false`

Controls dialog's state - whether it's visible or not.

## Events

### `result`
Emits `result` of chosen action button to determine the outcome of interaction with the dialog.

### `update:opened`
Emitted when dialog is requested to hide. Dialog's state is controlled by `opened` prop.
