// фибоначчи без циклов


let n = Number (prompt('Введите номер'))

let one = 1;
let two = 1;

let i = 2

while (i < n){
    let sum = one + two;
	one = two;
	two = sum;
    i++
}

console.log(two);


let n = Number(prompt('Введите номер'))

let a = 1;
let b = 1;


for(let n = 0; i<n; n++){
    let sum = a + b 
    a = b
    b = sum
}
console.log(b);


const fib = n => {
    const a = (1 + 5 ** 0.5) / 2;
    const b = (1 - 5 ** 0.5) / 2;
    return (a ** n  - b ** n) / 5 ** 0.5;
  }
  console.log()


  function fib(n) {
    let cur = 1, prev = 1;
    for (let i = 3; i <= n; i++) {
        [cur, prev] = [cur + prev, cur];
    }
    return cur;
}


function a(n) {
    return n <= 1 ? n : a(n - 1) + a(n - 2)
  }
  

  
  function a(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : a(n - 1) + a(n - 2)
 }