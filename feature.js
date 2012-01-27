;(function () { window.features = []; 

(function () { 
var exception;

try {
    document.appendChild(document);
} catch (error) {
    exception = error;
}

window.features["DOMException.code"] = (exception.code === 3 ? true : false);
}());

(function () { 
features["DOMException"] = (window.DOMException ? true : false);
}());

(function () { 
features["DOMException.constants"] = 
    (DOMException.DATA_CLONE_ERR === 25) ? true : false;
}());


}())