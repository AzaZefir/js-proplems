let k = Number (prompt('Цена банана'))
let n = Number (prompt('Деньги'))
let w = Number (prompt('Колличество бананов'))
let summa = 0
for (let i=0; i<=w; i++){
    summa += k * i
}
if (summa < n){
    console.log(0)
}else {
    console.log(summa - n)
}
