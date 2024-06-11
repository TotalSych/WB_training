"use strict";

// Арифметические операции
const calcInput1 = document.getElementById("number1");
const calcInput2 = document.getElementById("number2");
const calcOperation = document.getElementById("calc-operation");
const calcResult = document.getElementById("calc-result");
const calcResultButton = document.getElementById("calc-button");
let num1 = 0;
let num2 = 0;
let op = "+";

calcInput1.addEventListener("keyup", function () {
  num1 = +this.value;
});

calcInput2.addEventListener("keyup", function () {
  num2 = +this.value;
});

calcOperation.addEventListener("click", function () {
  op = this.value;
});

function applyOperator(op, num1, num2) {
  switch (op) {
    case "+":
      calcResult.textContent = num1 + num2;
      break;
    case "-":
      calcResult.textContent = num1 - num2;
      break;
    case "*":
      calcResult.textContent = num1 * num2;
      break;
    case "/":
      calcResult.textContent = num1 / num2;
      break;
    case "%":
      calcResult.textContent = num1 % num2;
      break;
    case "^":
      calcResult.textContent = Math.pow(num1, num2);
      break;
    default:
      throw Error(`unsupported operator: ${op}`);
  }
}

calcResultButton.addEventListener("click", function () {
  applyOperator(op, num1, num2);
  calcResult.textContent = calcResult.textContent;
});

// Работа со строками и вывод в консоль
const stringInput1 = document.getElementById("input1");
const stringInput2 = document.getElementById("input2");
const concatButton = document.getElementById("concatButton");
const escapeButton = document.getElementById("escapeButton");
const templateButton = document.getElementById("templateButton");
const resultDiv = document.getElementById("string-result");

concatButton.addEventListener("click", () => {
  const string1 = stringInput1.value;
  const string2 = stringInput2.value;
  const concatenatedString = string1.concat(string2);
  resultDiv.textContent = concatenatedString;
  console.log(concatenatedString);
});

escapeButton.addEventListener("click", () => {
  const string1 = stringInput1.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const string2 = stringInput2.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const escapedString = `${string1} ${string2}`;
  resultDiv.textContent = escapedString;
  console.log(escapedString);
});

templateButton.addEventListener("click", () => {
  const string1 = stringInput1.value;
  const string2 = stringInput2.value;
  const templateString = `${string1} ${string2} is a template string`;
  resultDiv.textContent = templateString;
  console.log(templateString);
});

// Присвоение переменных
const catsImg = document.getElementById("cats-img");
const imageText = document.getElementById("image-text");
imageText.textContent = "Hover over image";
let mouseoverCount = 0;
let mouseoutCount = 0;

catsImg.addEventListener("mouseover", mouseoverCountHandler);
catsImg.addEventListener("mouseout", mouseoutCountHandler);

function mouseoverCountHandler() {
  mouseoverCount++;
  imageText.innerHTML = `Mouseover count: ${mouseoverCount} Mouseout count: ${mouseoutCount}`;
}

function mouseoutCountHandler() {
  mouseoutCount++;
  imageText.innerHTML = `Mouseover count: ${mouseoverCount} Mouseout count: ${mouseoutCount}`;
}

// Логические операции и обработка ошибок
const logicalInput1 = document.getElementById("logical-input1");
const logicalInput2 = document.getElementById("logical-input2");
const logicalOperation = document.getElementById("logical-operation");
const logicalButton = document.getElementById("logical-button");
const errorButton = document.getElementById("error-button");
const logicalResult = document.getElementById("logical-result");

logicalButton.addEventListener("click", function () {
  try {
    const value1 = logicalInput1.value;
    const value2 = logicalInput2.value;

    let result = "";

    switch (logicalOperation.value) {
      case "&&":
        result = value1 && value2;
        break;
      case "||":
        result = value1 || value2;
        break;
      case "!":
        result = !value1;
        break;
      case "??":
        result = value1 ?? value2;
        break;
      default:
        result = "Invalid operator";
    }

    logicalResult.textContent = result;
  } catch (error) {
    console.error(error);
    logicalResult.textContent = "An error occurred";
  }
});

errorButton.addEventListener("click", function () {
  try {
    const value1 = logicalInput1.value;
    const value2 = logicalInput2.value;

    let result = "";

    switch (logicalOperation.value) {
      case "&&":
        result = value1 && value2;
        break;
      case "||":
        result = value1 || value2;
        break;
      case "!":
        result = !value1;
        break;
      case "??":
        result = value1 ?? value2;
        break;
      default:
        result = "Invalid operator";
    }

    console.log(x);

    logicalResult.textContent = result;
  } catch (error) {
    console.error(error);
    logicalResult.textContent = "An error occurred";
  }
});
