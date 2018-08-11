# Input

[[toc]]

## Basic

<input-basic />

```html
<vnt-input v-model="message"></vnt-input>
```

## Disabled

<input-disabled />

```html
<vnt-input v-model="message" disabled></vnt-input>
```

## Custom label

<input-label />

```html
<vnt-input v-model="message" label="Custom label"></vnt-input>
```

## Password

<input-password />

```html
<vnt-input v-model="pass" type="password"></vnt-input>
```

## Placeholder

<input-placeholder />

```html
<vnt-input v-model="message" placeholder="Type message here"></vnt-input>
```

## Configuration

### `disabled`
Default: `false`

Determines whether the input field should be in disabled mode or not.

### `label`
Default: `''`

The control's label text.

### `placeholder`
Default: `''`

The input's placeholder text.

### `type`
Default: `'text'`

Similar to standard HTML's `input`, could be one of `text`, `number` or `password` etc.

### `value`
Default: `''`

Can be used instead of `v-model` as following:

```html
<vnt-input :value.sync="message" ...></vnt-input>
```
