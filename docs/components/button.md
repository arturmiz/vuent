# Button

[[toc]]

## Basic

<button-basic />

```html
<vnt-button>Button</vnt-button>
```

or

```html
<vnt-button label="Button"></vnt-button>
```

## Primary

<button-primary />

```html
<vnt-button primary>Primary</vnt-button>
```

## Disabled

<button-disabled />

```html
<vnt-button disabled>Button</vnt-button>
```

## Configuration

### `click`
Default: `() => {}`

The action handler invoked once user clicks the button. Must be a JS function.

### `disabled`
Default: `false`

Determines whether the button should be in disabled mode or not.

### `label`
Default: `'Button'`

The button's text.

### `primary`
Default: `false`

Determines whether the button has primary button styling or not.

### `type`
Default: `button`

Similar to standard HTML's `button`, could be one of `button`, `submit` or `reset`.
