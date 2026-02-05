
let expression = "";
const display = document.getElementById("display");
const expressionDisplay = document.getElementById("expression");

function appendNumber(num) {
  if (display.innerText === "0" && num !== ".") {
    display.innerText = num;
  } else {
    display.innerText += num;
  }
}

function appendOperator(op) {
  expression += display.innerText + " " + op + " ";
  expressionDisplay.innerText = expression;
  display.innerText = "0";
}

function calculate() {
  expression += display.innerText;
  try {
    display.innerText = Function("return " + expression)();
  } catch {
    display.innerText = "Error";
  }
  expression = "";
  expressionDisplay.innerText = "";
}

function clearAll() {
  expression = "";
  display.innerText = "0";
  expressionDisplay.innerText = "";
}

function undo() {
  if (display.innerText.length > 1) {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}
