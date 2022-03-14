let n = prompt ('Введите число')

let ch = 0

for (let i = 0; i < n.length; i++){
    if(n[i] == '4' || n[i] == '7'){
        ch++
    }
}
    if (ch == 4 || ch == 7){
        console.log('yes')
    }else {
        console.log('no')
    }

