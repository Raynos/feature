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
features["DOM.DOMImplementation.hasFeature"] = !!(document.implementation.hasFeature);
}());

(function () { 
features["DOM.DOMImplementation.exists"] = !!(window.DOMImplementation);
}());

(function () { 
features["DOM.DOMImplementation.createDocumentType"] = !!(document.implementation.createDocumentType);
}());

(function () { 
features["DOM.DOMImplementation.createHTMLDocument"] = !!(document.implementation.createHTMLDocument);
}());

(function () { 
features["DOM.DOMImplementation.createDocument"] = !!(document.implementation.createDocument);
}());

(function () { 
features["DOM.Node.contains"] = !!(document.contains);
}());

(function () { 
var input = document.createElement("input");
features["DOM.Node.nodeName"] = (input.nodeName === "INPUT");
}());

(function () { 
features["DOM.Node.baseURI"] = (document.baseURI === location.href);
}());

(function () { 
features["DOM.Node.compareDocumentPosition"] = 
    !!(document.compareDocumentPosition);
}());

(function () { 
features["DOM.Node.replaceChild"] = !!(document.replaceChild);
}());

(function () { 
features["DOM.Node.exists"] = !!window.Node;
}());

(function () { 
features["DOM.Node.parentNode"] = 
    (document.childNodes[0].parentNode === document);
}());

(function () { 
features["DOM.Node.cloneNode"] = !!(document.cloneNode);
}());

(function () { 
features["DOM.Node.insertBefore"] = !!(document.insertBefore);
}());

(function () { 
features["DOM.Node.lookupPrefix"] = !!(document.lookupPrefix);
}());

(function () { 
features["DOM.Node.isDefaultNamespace"] = !!(document.isDefaultNamespace);
}());

(function () { 
features["DOM.Node.ownerDocument"] = 
    (document.childNodes[0].ownerDocument === document);
}());

(function () { 
features["DOM.Node.lookupNamespaceURI"] = !!(document.lookupNamespaceURI);
}());

(function () { 
features["DOM.Node.lastChild"] = !!(document.lastChild);
}());

(function () { 
features["DOM.Node.normalize"] = !!(document.normalize);
}());

(function () { 
features["DOM.Node.firstChild"] = !!(document.firstChild);
}());

(function () { 
features["DOM.Node.hasChildNodes"] = !!(document.hasChildNodes);
}());

(function () { 
features["DOM.Node.isEqualNode"] = !!(document.isEqualNode);
}());

(function () { 
features["DOM.Node.nodeValue"] = ("nodeValue" in document);
}());

(function () { 
features["DOM.Node.nextSibling"] = ("nextSibling" in document);
}());

(function () { 
features["DOM.Node.appendChild"] = !!(document.appendChild);
}());

(function () { 
features["DOM.Node.removeChild"] = !!(document.removeChild);
}());

(function () { 
features["DOM.Node.textContent"] = ("textContent" in document);
}());

(function () { 
var input = document.createElement("input");
features["DOM.Node.nodeType"] = (input.nodeType === 1);
}());

(function () { 
features["DOM.Node.constants"] = 
    (window.Node && window.Node.DOCUMENT_TYPE_NODE === 10 &&
        window.Node.DOCUMENT_POSITION_CONTAINS === 8);
}());

(function () { 
var node = document.documentElement;
features["DOM.Node.parentElement"] = (node.childNodes[0].parentElement === node);
}());

(function () { 
features["DOM.Node.childNodes"] = !!(document.childNodes);
}());

(function () { 
features["DOM.Node.previousSibling"] = ("previousSibling" in document);
}());

(function () { 
features["DOM.Document.createDocumentFragment"] = 
    !!(document.createDocumentFragment);
}());

(function () { 
features["DOM.Document.createTreeWalker"] = !!(document.createTreeWalker);
}());

(function () { 
features["DOM.Document.append"] = !!(document.append);
}());

(function () { 
features["DOM.Document.createElementNS"] = 
    !!(document.createElementNS);
}());

(function () { 
features["DOM.Document.getElementById"] = !!(document.getElementById);
}());

(function () { 
features["DOM.Document.importNode"] = !!(document.importNode);
}());

(function () { 
features["DOM.Document.contentType"] = ("contentType" in document);
}());

(function () { 
features["DOM.Document.createEvent"] = !!(document.createEvent);
}());

(function () { 
features["DOM.Document.exists"] = !!(window.Document);
}());

(function () { 
features["DOM.Document.createTextNode"] = 
    !!(document.createTextNode);
}());

(function () { 
features["DOM.Document.implementation"] = ("implementation" in document);
}());

(function () { 
features["DOM.Document.getElementsByTagNameNS"] =
    !!(document.getElementsByTagNameNS);
}());

(function () { 
features["DOM.Document.characterSet"] = ("characterSet" in document)
}());

(function () { 
features["DOM.Document.getElementsByTagName"] = 
    !!(document.getElementsByTagName);
}());

(function () { 
features["DOM.Document.documentURI"] = ("documentURI" in document);
}());

(function () { 
features["DOM.Document.documentElement"] = ("documentElement" in document)
}());

(function () { 
features["DOM.Document.createComment"] = 
    !!(document.createComment);
}());

(function () { 
features["DOM.Document.adoptNode"] = !!(document.adoptNode);
}());

(function () { 
features["DOM.Document.createRange"] = !!(document.createRange);
}());

(function () { 
features["DOM.Document.createNodeIterator"] = !!(document.createNodeIterator);
}());

(function () { 
features["DOM.Document.doctype"] = ("doctype" in document);
}());

(function () { 
features["DOM.Document.createProcessingInstruction"] = 
    !!(document.createProcessingInstruction);
}());

(function () { 
features["DOM.Document.prepend"] = !!(document.prepend);
}());

(function () { 
features["DOM.Document.URL"] = ("URL" in document);
}());

(function () { 
features["DOM.Document.getElementsByClassName"] =
    !!(document.getElementsByClassName);
}());

(function () { 
features["DOM.Document.createElement"] = 
    !!(document.createElement);
}());

(function () { 
features["DOM.Document.compatMode"] = ("compatMode" in document);
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