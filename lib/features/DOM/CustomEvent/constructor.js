var works = true;
try {
    new CustomEvent("click");
} catch (e) {
    works = false;
}
features["DOM.CustomEvent.Constructor"] = works;