# Auto-suggest

[[toc]]

## Basic

<autosuggest-basic />

```html
<vnt-autosuggest v-model="country" placeholder="Type something..."></vnt-autosuggest>
```

## Disabled

<autosuggest-disabled />

```html
<vnt-autosuggest v-model="country" disabled></vnt-autosuggest>
```

## Placeholder

<autosuggest-placeholder />

```html
<vnt-autosuggest v-model="country" placeholder="Type something..."></vnt-autosuggest>
```

## Custom label

<autosuggest-label />

```html
<vnt-autosuggest v-model="country" label="Country"></vnt-autosuggest>
```

## Configuration

### `disabled`
Default: `false`

Determines whether the input field should be in disabled mode or not.

### `label`
Default: `''`

The control's label text.

### `options`
Default: `[]`

An array of options to loo.

### `placeholder`
Default: `''`

The input's placeholder text.

### `value`
Default: `''`

Can be used instead of `v-model` as following:

```html
<vnt-autosuggest :value.sync="message" ...></vnt-autosuggest>
```
