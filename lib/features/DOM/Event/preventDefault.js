var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.preventDefault"] = (event && !!event.preventDefault);
};
input.click();