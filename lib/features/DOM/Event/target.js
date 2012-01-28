var div = document.createElement("div"),
    input = document.createElement("input");

div.appendChild(input);
div.onclick = function (event) {
    features["DOM.Event.target"] = (event && event.target === input);
}
input.click();