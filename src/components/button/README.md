# Button

## How to use
```html
<vnt-button label="Button"></vnt-button>

<vnt-button>Button</vnt-button>
```

## Properties
#### `label`
Default: `'Button'`

The button's text

#### `type`
Default: `button`

Similar to standard HTML's `button`, could be one of `button`, `submit` or `reset`.

#### `click`
Default: `() => {}`

The action handler invoked once user clicks the button. Must be a JS function.

#### `disabled`
Default: `false`

Determines whether the button should be in disabled mode or not.

#### `primary`
Default: `false`

Determines whether the button has primary button styling or not.
