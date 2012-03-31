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


features["DOM.CustomEvent.detail"] = !!(ev && ev.detail === detail);