# Toggle

## How to use
```html
<vnt-toggle v-model="checkedBoolean">Option</vnt-toggle>

<!-- Checked -->
<vnt-toggle checked>Option</vnt-toggle>

<!-- Unchecked & disabled -->
<vnt-toggle disabled>Option</vnt-toggle>

<!-- Checked & disabled -->
<vnt-toggle checked disabled>Option</vnt-toggle>

<!-- Custom 'On/Off' labels -->
<vnt-toggle label-on="Yes" label-off="No">Option</vnt-toggle>
```

## Properties

#### `checked`
Default: `false`

Decides about the toggle's state.

#### `disabled`
Default: `false`

Determines whether the toggle should be in disabled mode or not.

#### `label`
Default: `'Toggle'`

The toggle's label text.

#### `labelOff`
Default: `'Off'`

Unchecked state's text information.

#### `labelOn`
Default: `'On'`

Checked state's text information.
