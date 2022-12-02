let a = prompt('Введите колличество');

if(a.lenght >= 10**3){
  alert('slishkom dlinnoe slovo')
}
else if(a[0] === a[0].toLocaleLowerCase()) {
  console.log(a.charAt(0).toUpperCase() + a.slice());
}
