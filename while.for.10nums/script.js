// / ДЗ: С помощью циклов while/for получить 10 чисел из promt и вывести их сумму.


let sum = 0;

while (true) {

  let number = +prompt("Введите число");

  if (sum == 45) break;

  sum += number;

}
alert( 'Сумма: ' + sum );

for(a = 1; a <= 10; a++) {
    console.log(a)
}


let sum = 0;
let i = 0;

while (i < 10) {

  let num = prompt("Введите число");

  num = Number(num);
  sum += num;
  i += 1;
}
console.log(sum);



let sum = 0;
for(let a = 0; a < 10; a++) {
  let num = prompt("Введите число");
  num = Number(num);
  sum += num;
}
console.log(sum);

