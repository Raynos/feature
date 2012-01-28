var div = document.createElement("div"),
    input = document.createElement("input");

input.id = "foo";
div.appendChild(input);

features["DOM.HTMLCollection.namedGetter"] = 
    !!(div.children && div.children["foo"]);