
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


let n = Number (prompt('Введите номер'))
let one = 0;
let two = 1;
for (let n = 1; n <= 1000; n++) {
	let sum = one + two;
	
	one = two;
	two = sum;
	
}
console.log(two);