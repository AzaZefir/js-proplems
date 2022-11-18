//Требуется найти сумму чисел, кратных 7, в диапазоне 
//от 0 до 100. Вывести сумму и их количество.

let sum = 0;
let quantity = 0;
for(let i = 0; i<=100; i++){
    
    if(i%7==0){
    sum+=i;
    quantity++
    }
}
console.log(sum, quantity);
