"use strict";

const form = document.querySelector(".search-form");
const searchInput = document.querySelector("#result-search");
const results = [...document.querySelectorAll(".serp-result-link")];
const noResultsMessage = document.querySelector("#no-results");

function filterResults(query) {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  let visibleCount = 0;

  for (const result of results) {
    const matches = result.textContent.toLocaleLowerCase().includes(normalizedQuery);
    result.hidden = !matches;

    if (matches) visibleCount += 1;
  }

  noResultsMessage.hidden = visibleCount > 0;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  filterResults(searchInput.value);
});

searchInput.addEventListener("input", () => {
  filterResults(searchInput.value);
});
