# Input

## How to use
```html
<!-- Text field -->
<vnt-input v-model="[prop]" label="Text field"></vnt-input>

<!-- Password -->
<vnt-input v-model="[prop]" type="password" label="Password"></vnt-input>
```

## Properties

#### `disabled`
Default: `false`

Determines whether the input field should be in disabled mode or not.

#### `label`
Default: `''`

The control's label text.

#### `placeholder`
Default: `'Hint text'`

The input's placeholder text.

#### `type`
Default: `'text'`

Similar to standard HTML's `input`, could be one of `text`, `number` or `password` etc.

#### `value`
Default: `''`

Can be used instead of `v-model` as following:
```html
<vnt-input :value.sync="message" ...></vnt-input>
```
