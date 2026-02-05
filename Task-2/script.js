const display = document.getElementById("display");
const expressionDisplay = document.getElementById("expression");
const buttons = document.querySelectorAll("button");

let expression = "";
let current = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (!isNaN(value) || value === ".") {
      appendNumber(value);
    } else if (["+", "−", "×", "÷"].includes(value)) {
      appendOperator(value);
    } else if (value === "=") {
      calculate();
    } else if (value === "AC") {
      clearAll();
    } else if (value === "⌫") {
      deleteLast();
    }
  });
});

function appendNumber(num) {
  if (num === "." && current.includes(".")) return;
  current += num;
  display.innerText = current;
}

function appendOperator(op) {
  if (current === "") return;

  expression += current + " " + convertOperator(op) + " ";
  expressionDisplay.innerText = expression;
  current = "";
  display.innerText = "0";
}

function calculate() {
  if (current === "") return;

  expression += current;
  try {
    const result = eval(expression);
    display.innerText = result;
    expression = "";
    expressionDisplay.innerText = "";
    current = result.toString();
  } catch {
    display.innerText = "Error";
    current = "";
    expression = "";
  }
}

function clearAll() {
  current = "";
  expression = "";
  display.innerText = "0";
  expressionDisplay.innerText = "";
}

function deleteLast() {
  current = current.slice(0, -1);
  display.innerText = current || "0";
}

function convertOperator(op) {
  if (op === "×") return "*";
  if (op === "÷") return "/";
  if (op === "−") return "-";
  return op;
}

