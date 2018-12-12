# Rating

## How to use

```html
<vnt-rating></vnt-rating>

<!-- Disabled -->
<vnt-rating disabled></vnt-rating>

<!-- Vue instance use case  -->
<vnt-rating v-model="ratingValue"></vnt-rating>

<vnt-rating v-model="ratingValue" readonly></vnt-rating>

<!-- Custom number of stars -->
<vnt-rating v-model="ratingValue" max="10"></vnt-rating>
```

## Properties

#### `disabled`
Default: `false`

Determines whether the rating should be in disabled mode or not.

#### `readonly`
Default: `false`

Determines whether the rating control should be in read-only mode or not.

#### `max`
Default: `5`

Controls the number of stars.

#### `value`
Default: `0`

Sets the rating's initial value.
