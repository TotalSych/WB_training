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

calcInput1.addEventListener("input", function () {
  num1 = +this.value;
});

calcInput2.addEventListener("input", function () {
  num2 = +this.value;
});

calcOperation.addEventListener("click", function () {
  op = this.value;
});

function applyOperator(op, num1, num2) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    case "^":
      return Math.pow(num1, num2);
    default:
      throw Error(`unsupported operator: ${op}`);
  }
}

const calcResultHandler = function () {
  const result = applyOperator(op, num1, num2);
  calcResult.textContent = result;
};

calcResultButton.addEventListener("click", calcResultHandler);

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
    console.error(`Error: ${error.message}`);
    logicalResult.textContent = "An error occurred";
  }
});

errorButton.addEventListener("click", function () {
  try {
    throw new Error("An error occurred");
  } catch (error) {
    console.error(error);
    logicalResult.textContent = `${error}`;
  }
});

const milkyWayText = document.getElementById("milky-way-figcaption");
const milkyWayImg = document.getElementById("milky-way-img");

milkyWayText.textContent = "Hover over Milky Way image";

milkyWayImg.addEventListener("mouseover", () => {
  milkyWayText.textContent = "Nice";
  milkyWayText.style.backgroundColor = "ivory";
});
milkyWayImg.addEventListener("mouseout", () => {
  milkyWayText.textContent = "Not nice";
  milkyWayText.style.backgroundColor = "lightgray";
});

const colorChangeButton = document.getElementById("color-change-button");
const nav = document.getElementById("nav");

function randomColors() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

colorChangeButton.addEventListener("click", () => {
  nav.style.backgroundColor = randomColors();
});

const inputTextarea = document.getElementById("input-textarea");

inputTextarea.addEventListener("focus", () => {
  inputTextarea.value = "Nice";
});

const w3schoolsLink = document.getElementById("w3schools-link");

w3schoolsLink.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(`${w3schoolsLink.href} link was cancelled`);
});

// Iteration 5

// Arrow function
const inputSubmit = document.getElementById("input-submit");
inputSubmit.style.color = "red";

inputSubmit.addEventListener("click", () => alert("Arrow function works!"));

// Default parameter
function multiply(a, b = 10) {
  console.log(a * b);
}

multiply(5); // 50
multiply(5, 2); // 10

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr, "Spread");

// Rest operator
const rest = (...args) => {
  console.log(args, "Rest");
};
rest(1, 2, 3, 4, 5, "Hello", true);

// Деструктуризация объекта
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
const { a, b, c } = obj;
console.log(c, c, b, b, a, a, "Destructuring object");

// Строковый шаблон
const name1 = "John";
const name2 = "Jane";
const age = 10;

const message = `${name1} is ${
  age * 5
} years old and his daughter ${name2} is ${age + 15} years old`;

console.log(message);

// Методы консоли
const consoleButton = document.getElementById("console-button");

consoleButton.addEventListener("click", function consoleLog() {
  console.log("Console Methods");
  console.clear();
  console.time("Execution time took");
  console.group("Group Title");
  console.log("Message 1");
  console.log("Message 2");
  console.groupEnd();
  console.info("Info");
  console.error("Error");
  console.warn("Warn");
  console.assert(1 === 2, "1 doesn't equal 2");
  console.timeEnd("Execution time took");
});

// Убираем слушатели событий
const removeListenerButton = document.getElementById("remove-listener-button");

removeListenerButton.addEventListener("click", function () {
  calcResultButton.removeEventListener("click", calcResultHandler);
});

// Iteration 6

// Получение текущего URL и alert
const getURLButton = document.getElementById("get-url-button");
const getCurURL = () => {
  alert(`Current URL: ${window.location.href}`);
};
getURLButton.addEventListener("click", getCurURL);

const array1 = [1, 2, 3];
const array2 = [...arr1]; // Создает новый массив с теми же элементами, что и arr1

console.log(array1, array2);

function sum(...args) {
  return args.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// Cookie

document.cookie = "name=John; expires=Thu, 17 Jul 2024 12:00:00 GMT; path=/";
console.log(document.cookie);

const cookies = document.cookie;
const cookieArray = cookies.split(";");
console.log(cookieArray);

for (let i = 0; i < cookieArray.length; i++) {
  const cookie = cookieArray[i].trim();
  if (cookie.startsWith("name=")) {
    const cookieValue = cookie.substring("name=".length).trim();
    console.log(cookieValue);
  }
}

document.cookie = `name=John; expires=${new Date(0)}; path=/`;
console.log(document.cookie);

// Local Storage
localStorage.setItem("name", "John");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");
console.log(localStorage.getItem("name"));

// Session Storage
sessionStorage.setItem("name", "John");
console.log(sessionStorage.getItem("name"));
sessionStorage.removeItem("name");
console.log(sessionStorage.getItem("name"));

// Debugger
const debuggerFunction = (num1, num2, operator) => {
  debugger;

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    default:
      throw new Error("Unsupported operator");
  }

  return result;
};

try {
  const result = debuggerFunction(1, 2, "+");
  console.log(result);
} catch (error) {
  console.error(error.message);
}
