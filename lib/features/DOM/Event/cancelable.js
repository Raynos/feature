var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.cancelable"] = (event && event.cancelable);
};
input.click();