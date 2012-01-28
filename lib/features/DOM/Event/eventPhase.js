var input = document.createElement("input");

input.onclick = function (event) {
    features["DOM.Event.eventPhase"] = (event && event.eventPhase === 2);
}
input.click();