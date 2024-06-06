"use strict";

const input1 = document.getElementById("number1");
const input2 = document.getElementById("number2");
const result = document.getElementById("result");
const num1 = 0;
const num2 = 0;

input1.addEventListener("keyup", function () {
  if (this.value) {
    console.log(typeof this.value);
  }
});

input2.addEventListener("keyup", function () {
  if (this.value) {
    const num2 = parseInt(this.value);
    result.textContent = num1 + num2;
    return;
  }
});
