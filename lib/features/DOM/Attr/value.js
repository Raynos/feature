var node = document.createElement("div")
node.setAttribute("foo", "bar")
var attr = node.attributes[0]

features["DOM.Attr.value"] = !!("value" in attr)