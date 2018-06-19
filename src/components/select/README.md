# Select

## How to use

```html
<vnt-select value="1">Select</vnt-select>

<!-- Disabled -->
<vnt-select disabled>Select</vnt-select>

<!-- Vue instance use case  -->
<vnt-select v-model="chosenValue" :options="arrayWithOptions">Select</vnt-select>
```

## Properties

#### `disabled`

Default: `false`

Determines whether the select component should be in disabled mode or not.

#### `label`

Default: `''`

The select's label text.

#### `optionText`

Default: `'label'`

Name of property containing an option's label visible on options list.

#### `optionValue`

Default: `'value'`

Name of property containing an option's value.

#### `options`

Default: `[]`

An array of options to choose from.

#### `value`

Default: `undefined`

Sets the select's value. Accepts `Number`, `String` or `Object`.
