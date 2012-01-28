var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.timeStamp"] = (event && !!event.timeStamp);
};
input.click();