var fs = require("fs"),
    path = require("path"),
    readDirFiles = require("read-dir-files"),
    featurePath = path.join(__dirname, "lib", "features");

readDirFiles(featurePath, "utf8", function (err, files) {
    if (err) throw err;
    files = flatten(files).map(function (v) {
        return "(function () { \n" + v.toString() + "\n}());\n\n";
    }).join("");
    var src = ";(function () { window.features = []; \n\n" + files + "\n}())";
    fs.writeFile(path.join(".", "feature.js"), src);
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

writeArray({
    interface: "DOMSettableTokenList",
    path: path.join(__dirname, "lib", "features", "DOM"),
    writeFolder: false,
    methods: [
    ],
    props: [
    ]
});

function writeArray(options) {
    if (options.writeFolder) {
        fs.mkdirSync(
            path.join(options.path, options.interface)
        );
        fs.writeFileSync(
            path.join(options.path, options.interface, "exists.js"),
            "features[\"DOM." + options.interface + ".exists\"] = " +
                "!!(window." + options.interface + ");"
        );
    }
    options.methods.forEach(function (name) {
        var str = "features[\"DOM." + options.interface + "." + name + 
            "\"] = !!(document.documentElement.classList && document.documentElement.classList." + name + ");"
        fs.writeFileSync(
            path.join(options.path, options.interface, name + ".js"),
            str
        );
    });
    options.props.forEach(function (name) {
        var str = "features[\"DOM." + options.interface + "." + name + 
            "\"] = !!(document.documentElement.classList && \"" + name + "\" in document.documentElement.classList);"
        fs.writeFileSync(
            path.join(options.path, options.interface, name + ".js"),
            str
        );
    });
}