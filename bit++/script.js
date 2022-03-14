let n = Number (prompt('Введите кол-во операций'))
let x = 0
    
    for(let i = 0; i < n; i++){
        let operation = prompt('Введите операцию')
      

        if(operation == 'x++' || operation == '++x'){
            x++
        }
        else if(operation == 'x--' || operation == '--x'){
            x--
        }
        
    }
   
    console.log (x)
