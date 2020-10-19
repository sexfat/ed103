"use strict";

var aa = function aa(a, b) {
  return a * b;
};

var numbers = [1, 2, 3]; // callback 用 Arrow Functions 的寫法更精簡

var doubles = numbers.map(function (num) {
  return num * 2;
});
console.log(doubles);