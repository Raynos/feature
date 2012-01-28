var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.stopImmediatePropagation"] = 
        (event && !!event.stopImmediatePropagation);
};
input.click();