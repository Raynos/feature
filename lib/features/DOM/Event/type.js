var input = document.createElement("input");

input.onclick = function (event) {
    features["DOM.Event.type"] = (event && event.type === "click");
};

input.click();