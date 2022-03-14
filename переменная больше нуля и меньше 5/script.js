// Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. 

let a = Number(prompt('число'));


for (let i=0; i<a;i++){
    if(a>0 && a<6){
        console.log('true');
    }
    else {
        console.log('false');
    }
}