/*Напишите функцию которая находит максимальное значение из трех значений*/

let a = [1, 2, 3, 8, 9, 56, 33, 57]
let b = Math.max(...a)
console.log(b)

console.log(Math.max(4, 7, 9, 6))

function max(a, b, c) {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else {
        return c
    }
}