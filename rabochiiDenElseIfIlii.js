// запросите у пользователя время, если время меньше 9:00 выведите текст офис закрыт рабочий день не начался,
// если время с 9:00 - 12:00 выведите мы работаем, если время с 12:00 до 14:00 выведите мы на обеде,
// если время с 14:00 до 18:00, выведите мы работаем, если время 18:00 выведите рабочий день закончился

let hour = Number(prompt('enter time'));

if (hour <= 9) {
  alert('ofis zakryt,rabochii den ne nachalsya');
} else if (hour >= 9 && hour < 12) {
  alert('my rabotaem');
} else if (hour >= 12 && hour <= 14) {
  alert('na obede');
} else if (hour >= 14 && hour < 18) {
  alert('my rabotaem');
} else if (hour >= 18) {
  alert('rabochii den zakonchilsa');
}
