var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.isTrusted"] = 
        (event && event.isTrusted === false);
};
input.click();