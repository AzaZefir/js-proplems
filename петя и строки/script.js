let s = prompt('Введите первую строку')
let w = prompt('Введите вторую строку')

if (s.toLocaleLowerCase()<w.toLocaleLowerCase()){
    console.log(-1)
}
else if (s.toLocaleLowerCase()>w.toLocaleLowerCase()){
    console.log(1)
}
else {
    console.log (0)
 }
