var fs = require("fs"),
    path = require("path"),
    readDirFiles = require("read-dir-files"),
    featurePath = path.join(__dirname, "lib", "features")

var loadScript = ";(function () {\n" +
    "   var features = window.features,\n" +
    "       load = {},\n" +
    "       script = document.createElement('script')\n" +
    "\n" +
    "   Object.keys(features).forEach(function (key) {\n" +
    "        if (features[key] === false) {\n" +
    "            load[key] = true\n" +
    "        }\n" +
    "    })\n" +
    "\n" +
    "   script.type = 'text/javascript'\n" +
    "   script.src = 'http://localhost:8084?features=' + \n" +
    "       encodeURIComponent(JSON.stringify(load))\n" +
    "\n" +
    "    document.getElementsByTagName('head')[0].appendChild(script)\n" +
    "}())"

readDirFiles(featurePath, "utf8", function (err, files) {
    if (err) {
        throw err
    }
    files = flatten(files).map(function (v) {
        return "(function () { \n" + v.toString() + "\n}());\n\n"
    }).join("")

    var src = ";(function () { window.features = {}; \n\n" + 
        files + "\n}())" + loadScript

    fs.writeFile(path.join(".", "feature.js"), src)
});

function flatten(o) {
    var arr = [];
    Object.keys(o).forEach(function (k) {
        var v = o[k];
        if (typeof v === "object") {
            arr = arr.concat(flatten(v));    
        } else {
            arr.push(v);    
        }
    });
    return arr;
}