# Select

[[toc]]

## Basic

<select-basic />

```html
<vnt-select v-model="country" :options="countries" label="Choose country"></vnt-select>
```

## Disabled

<select-disabled />

```html
<vnt-select v-model="color" :options="colors" label="Choose country" disabled></vnt-select>
```

## Configuration

### `disabled`

Default: `false`

Determines whether the select component should be in disabled mode or not.

### `label`

Default: `''`

The select's label text.

### `optionText`

Default: `'label'`

Name of property containing an option's label visible on options list.

### `optionValue`

Default: `'value'`

Name of property containing an option's value.

### `options`

Default: `[]`

An array of options to choose from.

### `value`

Default: `undefined`

Sets the select's value. Accepts `Number`, `String` or `Object`.
