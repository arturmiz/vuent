# Link

[[toc]]

## Basic

<link-basic />

```html
<vnt-link href="http://google.com"  title="Link to Google">Google</vnt-link>
```

## Disabled

<link-disabled />

```html
<vnt-link href="http://google.com" disabled></vnt-link>
```

## Configuration

All properties from standard HTML's `<a>` link are applicable (like `title` in the basic example above). The additional ones are:

### `disabled`
Default: `false`

Determines whether the link should be in disabled mode or not.

### `href`
Default: `#`

Link's target URL.
