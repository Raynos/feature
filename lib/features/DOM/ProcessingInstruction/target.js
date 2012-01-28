var works = false, p;
try {
    p = document.createProcessingInstruction("xyz", "abc");
} catch (err) { /* false */ }
works = p && ("target" in p);
features["DOM.ProcessingInstruction.target"] = works;