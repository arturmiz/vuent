# Radio

## How to use
```html
<!-- Unchecked -->
<vnt-radio>Option</vnt-radio>

<!-- Checked -->
<vnt-radio checked="true">Option</vnt-radio>

<!-- Unchecked & disabled -->
<vnt-radio disabled>Option</vnt-radio>

<!-- Checked & disabled -->
<vnt-radio checked="true" disabled>Option</vnt-radio>

<!-- Vue instance use case  -->
<vnt-radio name="abc" value="123" v-model="radioValue">Radio 1</vnt-radio>
<vnt-radio name="abc" value="456" v-model="radioValue">Radio 2</vnt-radio>
```

## Properties
#### `label`
Default: `'Checkbox'`

The radio's label text.

#### `checked`
Default: `undefined`

Decides about the radio's state.

#### `disabled`
Default: `false`

Determines whether the radio button should be in disabled mode or not.

#### `name`
Default: `'radio'`

HTML's standard `name` attribute. Used in forms to group radio buttons.

#### `value`
Default: `undefined`

HTML's standard `value` attribute. Sets the radio's value.
