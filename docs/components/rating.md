# Rating

[[toc]]

## Basic

<rating-basic />

```html
<vnt-rating v-model="ratingValue" />
```

## Read-only

<rating-readonly />

```html
<vnt-rating v-model="ratingValue" readonly />
```

## Disabled

<rating-disabled />

```html
<vnt-rating v-model="ratingValue" disabled />
```

## Custom scale

<rating-max />

```html
<vnt-rating v-model="ratingValue" max="10" />
```

## Configuration

### `disabled`
Default: `false`

Determines whether the rating control should be in disabled mode or not.

### `max`
Default: `5`

Controls the number of stars.

### `readonly`
Default: `false`

Determines whether the rating control should be in read-only mode or not.

### `value`
Default: `0`

Sets the rating's initial value.
