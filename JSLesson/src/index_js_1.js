function calc(a, b, operation) {
  if (operation == "+") {
    return a + b;
  } else if (operation == "-") {
    return a - b;
  } else if (operation == "*") {
    return a * b;
  } else if (operation == "/") {
    if (b == 0) {
    } else {
      return a / b;
    }
  } else {
    return "Неизвестная операция попробуй еще раз";
  }
}
function calcPas() {
  let x = Number(document.getElementsByName("num1")[0].value);
  let y = Number(document.getElementsByName("num2")[0].value);
  let op = document.getElementsByName("operation")[0].value;
  let res = calc(x, y, op);
  alert("Результат операции: " + res);
}

window.onload = () => {
  let buttonCalc = document.getElementById("calculate");
  buttonCalc.addEventListener("click", calcPas);
};
