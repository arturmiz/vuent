# Link

## How to use
```html
<vnt-link href="http://google.com">Google</vnt-link>

<vnt-link :click="[click handler]">Some action</vnt-link>
```

## Properties
All properties from standard HTML's `<a>` link are applicable. The additional ones are:

#### `click`
Default: `undefined`

Allows to pass a function invoked once user clicks the link.

#### `disabled`
Default: `false`

Determines whether the link should be in disabled mode or not.

#### `href`
Default: `#`

Link's target URL.
