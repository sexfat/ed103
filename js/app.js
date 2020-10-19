const aa = (a , b ) => a * b;



let numbers = [1, 2, 3];

// callback 用 Arrow Functions 的寫法更精簡
let doubles = numbers.map(num => {
    return num * 2;
});

console.log(doubles);