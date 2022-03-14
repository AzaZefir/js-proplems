
let year = Number(prompt ('Введите год'))//2021
year ++
let stringYear = String(year)
    
while(stringYear[0] == stringYear[1] || stringYear[0]==stringYear[2] || stringYear[0] == stringYear[3] || stringYear[1] == stringYear[2] || stringYear[1] == stringYear[3] || stringYear[2] == stringYear[3]){
    year++
    stringYear = String(year)
}
console.log(Number(stringYear))

