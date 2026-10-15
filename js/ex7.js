const content = document.querySelector("#content");

const getInteger = (message) => {
  while (true) {
    const input = prompt(message);

    if (input === null) {
      return { value: null, error: "cancelled" };
    }

    const trimmedInput = input.trim();

    if (trimmedInput === "") {
      return { value: input, error: "alphanumeric" };
    }

    if (!/^-?\d+$/.test(trimmedInput)) {
      if (/^-?\d+\.\d+$/.test(trimmedInput)) {
        return { value: input, error: "decimal" };
      }

      return { value: input, error: "alphanumeric" };
    }

    return { value: Number(trimmedInput), error: null };
  }
};

const first = getInteger("Enter the first integer:");
const second = getInteger("Enter the second integer:");

const showMessage = (message) => {
  const span = document.createElement("span");
  span.style.color = "red";
  span.style.fontWeight = "bold";
  span.textContent = message;
  content.appendChild(span);
};

if (first.error === "cancelled" || second.error === "cancelled") {
  showMessage("Input was cancelled.");
} else if (first.error === "alphanumeric" || second.error === "alphanumeric") {
  const invalidValue =
    first.error === "alphanumeric" ? first.value : second.value;

  showMessage(`Error – Alphanumeric input: "${invalidValue}"`);
} else if (first.error === "decimal" || second.error === "decimal") {
  const invalidValue =
    first.error === "decimal" ? first.value : second.value;

  showMessage(`Error – Decimal input: "${invalidValue}"`);
} else {
  const sum = first.value + second.value;
  showMessage(`The sum is ${sum}`);
}