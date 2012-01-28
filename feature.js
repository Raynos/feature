;(function () { window.features = []; 

(function () { 
features["DOM.DOMError.exists"] = !!window.DOMError;
}());

(function () { 
features["DOM.DOMException.exists"] = !!window.DOMException;

}());

(function () { 
var exception;

try {
    document.appendChild(document);
} catch (error) {
    exception = error;
}

window.features["DOM.DOMException.code"] = (exception.code === 3);

}());

(function () { 
features["DOM.DOMException.constants"] = 
    (window.DOMException.DATA_CLONE_ERR === 25);

}());

(function () { 
features["DOM.Event.exists"] = !!window.Event;

}());

(function () { 
var input = document.createElement("input");

input.onclick = function (event) {
    features["DOM.Event.type"] = (event && event.type === "click");
};

input.click();
}());

(function () { 
features["DOM.Event.constants"] = (window.Event.AT_TARGET === 2);
}());


}())