;(function () { window.features = []; 

(function () { 
var works = true;
try {
    new CustomEvent("click");
} catch (e) {
    works = false;
}
features["DOM.CustomEvent.Constructor"] = works;
}());

(function () { 
features["DOM.CustomEvent.exists"] = !!window.CustomEvent;
}());

(function () { 
var works = false,
    ev,
    detail = {};

try {
    ev = new CustomEvent("click", { 
        bubbles: true, 
        cancelable: true, 
        detail: detail
    });
} catch (e) { /* empty */ }


features["DOM.CustomEvent.detail"] = (ev && ev.detail === detail);
}());

(function () { 
features["DOM.EventTarget.addEventListener"] = !!document.addEventListener;
}());

(function () { 
features["DOM.EventTarget.removeEventListener"] = !!document.removeEventListener;
}());

(function () { 
features["DOM.EventTarget.dispatchEvent"] = !!document.dispatchEvent;
}());

(function () { 
features["DOM.DOMError.exists"] = !!window.DOMError;
}());

(function () { 
var input = document.createElement("input");
features["DOM.Node.nodeName"] = (input.nodeName === "INPUT");
}());

(function () { 
features["DOM.Node.baseURI"] = (document.baseURI === location.href);
}());

(function () { 
features["DOM.Node.exists"] = !!window.Node;
}());

(function () { 
features["DOM.Node.parentNode"] = 
    (document.childNodes[0].parentNode === document);
}());

(function () { 
features["DOM.Node.ownerDocument"] = 
    (document.childNodes[0].ownerDocument === document);
}());

(function () { 
features["DOM.Node.hasChildNodes"] = !!(document.hasChildNodes);
}());

(function () { 
var input = document.createElement("input");
features["DOM.Node.nodeType"] = (input.nodeType === 1);
}());

(function () { 
features["DOM.Node.constants"] = 
    (window.Node && window.Node.DOCUMENT_TYPE_NODE === 10);
}());

(function () { 
var node = document.documentElement;
features["DOM.Node.parentElement"] = (node.childNodes[0].parentElement === node);
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
features["DOM.DOMException.exists"] = !!window.DOMException;

}());

(function () { 
features["DOM.DOMException.constants"] = 
    (window.DOMException && window.DOMException.DATA_CLONE_ERR === 25);

}());

(function () { 
features["DOM.Event.initEvent"] = !!document.createEvent("Event").initEvent;
}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.bubbles"] = (event && event.bubbles);
};
input.click();
}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.cancelable"] = (event && event.cancelable);
};
input.click();
}());

(function () { 
var div = document.createElement("div"),
    input = document.createElement("input");

div.appendChild(input);
div.onclick = function (event) {
    features["DOM.Event.target"] = (event && event.target === input);
}
input.click();
}());

(function () { 
var works = true;
try {
    new Event("click");
} catch (e) {
    works = false;
}
features["DOM.Event.Constructor"] = works;
}());

(function () { 
features["DOM.Event.exists"] = !!window.Event;

}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.preventDefault"] = (event && !!event.preventDefault);
};
input.click();
}());

(function () { 
var div = document.createElement("div"),
    input = document.createElement("input");

div.appendChild(input);
div.onclick = function (event) {
    features["DOM.Event.currentTarget"] = (event && event.currentTarget === div);
}
input.click();
}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.isTrusted"] = 
        (event && event.isTrusted === false);
};
input.click();
}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.stopImmediatePropagation"] = 
        (event && !!event.stopImmediatePropagation);
};
input.click();
}());

(function () { 
var input = document.createElement("input");

input.onclick = function (event) {
    features["DOM.Event.type"] = (event && event.type === "click");
};

input.click();
}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.stopPropagation"] = (event && !!event.stopPropagation);
};
input.click();
}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.timeStamp"] = (event && !!event.timeStamp);
};
input.click();
}());

(function () { 
var input = document.createElement("input");
input.onclick = function (event) {
    features["DOM.Event.defaultPrevented"] = 
        (event && event.defaultPrevented === false);
};
input.click();
}());

(function () { 
var input = document.createElement("input");

input.onclick = function (event) {
    features["DOM.Event.eventPhase"] = (event && event.eventPhase === 2);
}
input.click();
}());

(function () { 
features["DOM.Event.constants"] = (window.Event && window.Event.AT_TARGET === 2);
}());


}())