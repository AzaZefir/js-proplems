// 11) В магазине скидка в 3% предоставляется, если сумма покупки больше 200$. По заданной 
// сумме покупки определить стоимость покупки.

let amount = Number(prompt('enter value'));

let totalAmount;

if (amount < 200) {
    totalAmount = amount;
} else {
    let discount = (amount / 100) * 3;

    totalAmount = amount - discount;
}

console.log(totalAmount);