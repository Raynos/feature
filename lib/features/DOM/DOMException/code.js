var exception;

try {
    document.appendChild(document);
} catch (error) {
    exception = error;
}

window.features["DOMException.code"] = (exception.code === 3 ? true : false);