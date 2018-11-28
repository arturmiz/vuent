# Toggle

[[toc]]

## Basic

<toggle-basic />

```html
<vnt-toggle v-model="isChecked"></vnt-toggle>
```

## Checked

<toggle-checked />

```html
<vnt-toggle checked></vnt-toggle>
```

## Disabled

<toggle-disabled />

```html
<vnt-toggle v-model="isChecked" disabled></vnt-toggle>
```

## Custom label

<toggle-label />

```html
<vnt-toggle v-model="isChecked">Custom label</vnt-toggle>
```

## Custom On/Off labels

<toggle-on-off-labels />

```html
<vnt-toggle v-model="isChecked" label-on="Yes" label-off="No"></vnt-toggle>
```

## Configuration

### `checked`
Default: `false`

Decides about the toggle's state.

### `disabled`
Default: `false`

Determines whether the toggle should be in disabled mode or not.

### `label`
Default: `'Toggle'`

The toggle's label text.

### `labelOff`
Default: `'Off'`

Unchecked state's text information.

### `labelOn`
Default: `'On'`

Checked state's text information.
