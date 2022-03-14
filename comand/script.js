let n = Number(prompt('Колличество задач'))
let score = 0
let ch = 0
for(let i=0;i<n;i++){
    score = 0
    let friend = prompt('friends').split(' ')
    friend.forEach(function(item){
        if(Number(item)>0){
            score++
        }
    })
    if(score>1){
        ch++
    }
}
console.log(ch)