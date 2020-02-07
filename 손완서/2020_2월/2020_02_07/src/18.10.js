const highlightsActions = document.querySelectorAll(
  '[data-action="highlight"]'
);
for (let a of highlightActions) {
  a.addEventListener("click", evt => {
    evt.preventDefault();
    highlightParas(a.dataset.containing);
  });
}

const removeHighlightActions = document.querySelectorAll(
  '[data-action="removeHighlights"]'
);
for (let a of removeHighlightActions) {
  a.addEventListener("click", evt => {
    evt.preventDefault();
    removeParaHighlights();
  });
}
