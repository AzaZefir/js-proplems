let a = prompt ('Введите первое слово')
let b = prompt ('Введите второе слово')
let c = '';


    for(let i = a.length-1; i>=0; i--){
        c += a [i]
    }
    

    if(c == b){
        console.log('yes')
    } else{
        console.log('no')
    }

    