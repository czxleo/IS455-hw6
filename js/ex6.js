const words = [
  {
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  },
  {
    term: "Tautology",
    definition: "Logical argument constructed in such a way that it is logically irrefutable"
  },
  {
    term: "Oxymoron",
    definition: "Figure of speech that juxtaposes elements that appear to be contradictory"
  }
];

const displayDictionary = () => {
  const content = document.querySelector("#content");
  const definitionList = document.createElement("dl");

  words.forEach((word) => {
    const term = document.createElement("dt");
    const definition = document.createElement("dd");
    const strong = document.createElement("strong");

    strong.textContent = word.term;
    term.appendChild(strong);
    definition.textContent = word.definition;

    definitionList.appendChild(term);
    definitionList.appendChild(definition);
  });

  content.appendChild(definitionList);
};

displayDictionary();