# PostCSS Unroll Sass Selectors [![Build Status][ci-img]][ci]

[PostCSS] plugin Unrolls nested Sass selectors.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/JodiWarren/postcss-unroll-sass-selectors.svg
[ci]:      https://travis-ci.org/JodiWarren/postcss-unroll-sass-selectors

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-unroll-sass-selectors') ])
```

See [PostCSS] docs for examples for your environment.
