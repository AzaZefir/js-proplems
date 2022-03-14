let n = prompt ('введите слово')

let x = 0


for (let i = 0; i < n.length; i++){
    if (n[i] == 'H' || n[i] == 'Q' || n[i] == '9' || n[i] == '+'){
        x++
        
    }
}
if(x) {
    console.log('yes')
}else{
    console.log('no')
}
