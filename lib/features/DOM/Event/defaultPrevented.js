var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.defaultPrevented"] = 
        (event && event.defaultPrevented === false);
};
input.click();