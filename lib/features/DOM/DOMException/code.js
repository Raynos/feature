var exception;

try {
    document.appendChild(0);
} catch (error) {
    exception = error;
}

window.features["DOMException.code"] = exception.code === 8 ? true : false;