;(function () { window.features = []; 

(function () { 
var exception;

try {
    document.appendChild(0);
} catch (error) {
    exception = error;
}

window.features["DOMException.code"] = exception.code === 8 ? true : false;
}());

(function () { 
features["DOMException"] = window.DOMException ? true : false;
}());

(function () { 
features["DOMException.constants"] = 
    DOMException.DATA_CLONE_ERR === 25 ? true : false;
}());


}())