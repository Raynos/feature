# Feature

Detecting those host environment features for you

## Example

```
<script src="cdn/../feature.js"></script>
<script>
    if ([
        "EventTarget.addEventListener",
        "Element.classList",
        "Element.append",
        "Element.before",
        "Node.textContent"
    ].every(function (v) { return window.features[v] })) {
        console.log("your browser has modern DOM features!");
    }
</script>
```

## Motivation

 - Dynamic APIs
 - Only polyfilling the missing features

## Documentation

### features

`window.features` is a global object containing all the features that are present in this browser. If the feature is present it's value is `true` and `false` if the feature test failed.

## Installation

Just include `<script src="feature.js"></script>`

## Test

See test/test.html

## Contributors

 - Raynos

## MIT Licenced