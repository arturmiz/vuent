# Radio Button

[[toc]]

## Basic

<radio-basic />

```html
<vnt-radio name="abc" value="123" v-model="radioValue">Radio 1</vnt-radio>
<vnt-radio name="abc" value="456" v-model="radioValue">Radio 2</vnt-radio>
<vnt-radio name="abc" value="789" v-model="radioValue">Radio 3</vnt-radio>
```

## Disabled

<radio-disabled />

```html
<vnt-radio name="xyz" value="123" v-model="radioValue" disabled>Radio 1</vnt-radio>
```

## Configuration

### `checked`
Default: `undefined`

Decides about the radio's state.

### `disabled`
Default: `false`

Determines whether the radio button should be in disabled mode or not.

### `label`
Default: `'Radio'`

The radio's label text.

### `name`
Default: `'radio'`

HTML's standard `name` attribute. Used in forms to group radio buttons.

### `value`
Default: `undefined`

HTML's standard `value` attribute. Sets the radio's value.
