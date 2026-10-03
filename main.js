// ---------- Step 1: show numbers on the display ----------
const display = document.getElementById("display");
// ---------- Step 3: remember the first number and the operation ----------
let firstNumber = "";
let operator = "";

function setOperator(op) {
  firstNumber = display.value;
  operator = op;
  display.value = "";
  console.log(firstNumber, operator);
}
function press(value) {
  display.value = display.value + value;
}

function clearDisplay() {
  display.value = "";
}
  // Step 2 (next)


function calculate() {
  // 1) no operation chosen, or no second number: do nothing
  if (operator === "" || display.value === "") {
    return;
  }

  const a = Number(firstNumber);
  const b = Number(display.value);
  let result;

  // 2) division by zero
  if (operator === "/" && b === 0) {
    display.value = "Error";
    operator = "";
    firstNumber = "";
    return;
  }

  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    result = a / b;
  }

  display.value = result;

  // 3) reset, so pressing = again doesn't repeat the calculation
  operator = "";
  firstNumber = "";
}