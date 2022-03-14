// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пор
// попадает этот месяц (зима, лето, весна, осень).

let month = Number(prompt('enter mongth value')); 
 
let season; 
 
if(month >= 1 && month <= 2 || month === 12) { 
  season = 'winter' 
} 
else if (month >= 3 && month <= 5) { 
  season = 'spring' 
} 
else if (month >= 6 && month <= 8) { 
  season = 'sumer' 
} 
else if (month >= 9 && month <= 11) { 
  season = 'autumn' 
}
