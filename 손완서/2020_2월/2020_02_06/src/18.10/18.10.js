const highlightActions = document.querySelectorAll('[data-action="highlight"]');

highlightActions[0].dataset;
// DOMStringMap { containing: "unique", action: "highlight" }

highlightActions[0].dataset.containing = "giraffe";
highlightActions[0].dataset.caseSensitive = "true";
