let a = Number (prompt('Введите колличество'))

for (let i = 0; i < a; i++){
    let n = prompt('Введите слово')
    if (n.length > 10){
        console.log(n[0] + (n.length - 2) + n[n.length - 1])
    }
}
console.log(a);
