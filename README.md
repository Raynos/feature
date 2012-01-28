# Feature

Detecting those host environment features for you

## Example

```
<script src="cdn/../feature.js"></script>
<script>
    if ([
        "DOM.EventTarget.addEventListener",
        "DOM.Element.classList",
        "DOM.Element.append",
        "DOM.Element.before",
        "DOM.Node.textContent"
    ].every(function (v) { return window.features[v] })) {
        console.log("your browser has modern DOM features!");
    }
</script>
```

## Motivation

 - Dynamic APIs
 - Only polyfilling the missing features
 - Quickly check what host features your browser has

## Documentation

### features

`window.features` is a global object containing all the features that are present in this browser. If the feature is present it's value is `true` and `false` if the feature test failed.

```
if (features["DOM.EventTarget.addEventListener"]) {
    window.addEventListener("click", handler);
} else {
    window.attachEvent("onclick", handler);
}
```

### Dynamic APIS

Dynamic APIs require you to feature detect any part of the host environment you want to use. This is an extension of the progressive enhancement technique.

The basic idea is that you have a HTML/CSS page that works. Then include a javascript enhancement file which checks whether the host environment has the features it needs. If it has them (either natively or by polyfill) it will safely enhance the page without throwing an error. If the browser doesn't have the features then rather then throwing a run-time error it will just do nothing.

## Installation

Just include `<script src="feature.js"></script>`

## Test

See test/test.html

## Contributors

 - Raynos

## MIT Licenced