//Даны 3 вещественные числа a, b, c. Определить, имеется ли среди них хотя бы одна пара равных между собой чисел.

let a = Number(prompt('число'));
let b = Number(prompt('число'));
let c = Number(prompt('число'));


{
    if(a==b || b==c || a==c){
        console.log('yes');
    }else{
        console.log('no');
    }
}