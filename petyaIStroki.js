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
//codeforces petya i stroki, pokazat ascii code

// 'a' > 'A' //true
// 'cot' > 'cod' // true
// 'kot' < 'kod' // false

// let s1 = prompt('vvedite 1 stroku').toLocaleLowerCase()
// let s2 = prompt('vvedite 2 stroku').toLocaleLowerCase()

// if (s1 > s2) {
//     console.log(1);
// } else if (s1 < s2) {
//     console.log(-1);
// } else {
//     console.log(0);
// }