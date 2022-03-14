// В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это 
// число (в первую, вторую, третью или четвертую).

let min = Number(prompt('От 1 до 59'))

if (min>=0 && min <=15){
    alert('1')
}else if (min>=16 && min <=30){
    alert('2')
}else if (min>=31 && min <=45){
    alert('3')
}else if (min>=46 && min <=59){
    alert('4')
}else {
    alert('error')
}
