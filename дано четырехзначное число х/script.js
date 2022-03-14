// Дано четырехзначное целое число Х. Определить цифры числа. Ответ выдать в виде, например: 7346

// 7 – thousands
// 3 – hundreds
// 4 – tens
// 6 - ones

let n = Number(prompt('четырехзначное число'));

let thousands = n/1000;
let hundreds = (n%1000)/100;
let tens = (n%100)/10;
let ones = n%10;


console.log();