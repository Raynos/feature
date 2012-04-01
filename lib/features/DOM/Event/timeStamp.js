var ev = document.createEvent("Event")
features["DOM.Event.timeStamp"] = (ev && !!ev.timeStamp)