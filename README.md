# Feature

Detecting those host environment features for you. [See what your browser supports][5]

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

The [tests file][5] shows the list of features currently being detected. It's encourage that rather then use the entire file, you build your own file using only the features you want.

Currently the easiest way to make a custom build is to

 - clone this project
 - delete any files from lib/features you don't want
 - run `node build.js`
 - take your fresh feature.js file and use it

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

  [5]: http://raynos.github.com/feature/test/test.html