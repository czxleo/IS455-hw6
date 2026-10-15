const createNumberTable = () => {
  const output = document.querySelector("#output");
  const table = document.createElement("table");

  table.className = "number-table";

  for (let number = 1; number <= 12; number++) {
    const row = document.createElement("tr");
    const cell = document.createElement("td");

    cell.textContent = number;

    if (number % 4 === 0) {
      cell.classList.add("blue");
    }

    row.appendChild(cell);
    table.appendChild(row);
  }

  output.appendChild(table);
};

createNumberTable();