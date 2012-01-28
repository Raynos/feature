var works = true;
try {
    new Event("click");
} catch (e) {
    works = false;
}
features["DOM.Event.Constructor"] = works;