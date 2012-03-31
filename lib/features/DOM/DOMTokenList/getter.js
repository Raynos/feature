var node = document.createElement("div")
node.className = "foo"

features["DOM.DOMTokenList.getter"] = !!(
    node.classList && 
    node.classList[0]);