import "./style.css";

const display = document.getElementById("display");
const btns = document.querySelectorAll(".btn");
const clrButton = document.getElementById("clr");
const delBtn = document.getElementById("del");
const eql = document.getElementById("eql");

// SELECTION OF INDIVIDUAL BTN
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    display.value += e.target.value;
    saveData();
  });
});

// CLEAR THE INPUT
clrButton.addEventListener("click", () => {
  display.value = "";
  saveData();
});

// DELETION ACTION
delBtn.addEventListener("click", () => {
  display.value = display.value.toString().slice(0, -1);
  saveData();
});

// EVALUTION OF THE OPERATOPS
eql.addEventListener("click", () => {
  const expression = display.value.replace(/x/g, "*");
  let result = eval(expression);
  if (isNaN(result) || !isFinite(result)) {
    result = "Error";
  } else {
    result = parseFloat(result).toFixed(2);
  }
  display.value = result;
  saveData();
});

// SAVING THT VALUES IN THE LOCAL STORAGE
function saveData() {
  localStorage.setItem("calculator_data", display.value);
}
function showData() {
  display.value = localStorage.getItem("calculator_data") || "";
}
showData();
