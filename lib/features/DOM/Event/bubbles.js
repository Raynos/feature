var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.bubbles"] = (event && event.bubbles);
};
input.click();