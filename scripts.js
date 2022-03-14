// let azat = 'hello world!!!' ///string
// let pi = 3.14 // float // number
// let a = 3 // integer //number
// let boolean = true  // false /// boolean
// var b = 5
// const pi2 = 3.14

// pi = 5.14
// // pi2 = 5.14

// //+
// //-
// //*
// // /
// // **
// // %

// console.log(2 + 2)
// console.log('я' + 'изучаю')
// console.log(3 + (3 - 2) * 2) //2 //8 //5
// console.log(azat)
// console.log('всем привет')

// alert('я изучаю JS ES5')
// prompt('Сколько вам лет?' , '12')
// confirm('Вам есть 18?')

// ///операторы сравнения
// //>
// //<
// //>=
// //<=
// //==
// //===
// //!=


// // 2 > 3 //false

// преобразование типов
// let name = prompt('Возраст')
// console.log(Number(name))
// console.log(30)
// console.log(String(30))


// // if
// if (2 > 1) {
//     console.log('YES')
// } else {
//     console.log('NO')
// }

// Задачи

// let input1 = prompt('Введите данные')
// let input2 = prompt('Введите данные')

// console.log(Number(input1) + Number(input2))


// let a = prompt ('Введите данные')

// console.log (Number(a) +1)



// let A = prompt ('Введите данные')

// if (A % 2){
//     console.log(yes)
// } else if (A > B){
//     console.log(no)
// }else 


//  Циклы

// let a = 1
// while (a <= 10){
//     console.log(a)
//     a += 1
// }

// for(a = 1; a <= 10; a++) {
//     console.log(a)
// }


// do {
//     console.log(a)
//     a +- 1
// } while(a <= 10)

// Задачи

// let a = prompt ('Возраст:')
// while(a <= 18) {
//     if ( a == 18) break
//     console.log(a)
// }


// while (true) {
//     let age = prompt('age')
//     age = Number(age)

//     if (age >= 18){
//         alert ('yes')
//         break
//     }
//     else {
//         alert ('no')
//     }
// }


// for ( age = 1; age <= 10; age++){
//     let age = prompt('age')
//     age = Number(age)
//     if (age == 18) {break
//         alert(age)
//         }
//         else {
//             alert ('no')
//         }
// }

// for (let i = 0; i < 10; i += 2){
//     console.log(i)
// }

// let a = 0

// while (a < 10){
//     console.log(a)
//     a += 2
// }


// swith

// let a = 10
// switch(a) {

//     case 3:{
//         alert('a==3')
//         break;
//     }
//     case 4:{
//         alert('a==4')
//         break;
//     }
//     default:{
//         alert('dont know')
//     }
// }

// let number = Number(prompt ('number')) 
//  switch(number){
//       case 2:{
//           alert('number==1')
//           break;
//       }
//       case 3:{
//         alert('number==3')
//         break;
//     }
//     case 4:{
//         alert('number==4')
//         break;
//     }
//     case 5:{
//         alert('number==5')
//         break;
//     }
//     case 6:{
//         alert('number==6')
//         break;
//     }
//     case 7:{
//         alert('number==7')
//         break;
//     }
//     default:{
//         alert('dont know')
//         break;
//     }
//  }


//  дз Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1',
//  то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и 
//  так далее. Решите задачу через switch-case.

// let num = Number(prompt ('num')) 

// switch (num) {
//     case 1:
//         alert( 'весна' );
//         break;
//     case 2:
//         alert( 'зима' );
//         break;
//     case 3:
//         alert( 'лето' );
//         break;
//     case 4:
//         alert( 'осень' );
//         break;
//     default:
//         alert('weather unknown');
//         break;
// }


// ДЗ: С помощью циклов while/for получить 10 чисел из promt и вывести их сумму.


// let sum = 0;

// while (true) {

//   let number = +prompt("Введите число");

//   if (sum == 45) break;

//   sum += number;

// }
// alert( 'Сумма: ' + sum );

// for(a = 1; a <= 10; a++) {
//     console.log(a)
// }


// let sum = 0;
// let i = 0;

// while (i < 10) {

//   let num = prompt("Введите число");

//   num = Number(num);
//   sum += num;
//   i += 1;
// }
// console.log(sum);



// let sum = 0;
// for(let a = 0; a < 10; a++) {
//   let num = prompt("Введите число");
//   num = Number(num);
//   sum += num;
// }
// console.log(sum);



//фибоначчи 


// let n = Number (prompt('Введите номер'))

// let one = 1;
// let two = 1;

// let i = 2

// while (i < n){
//     let sum = one + two;
// 	one = two;
// 	two = sum;
//     i++
// }

// console.log(two);


// let n = Number (prompt('Введите номер'))
// let one = 0;
// let two = 1;
// for (let n = 1; n <= 1000; n++) {
// 	let sum = one + two;
	
// 	one = two;
// 	two = sum;
	
// }
// console.log(two);

// factorial

// let n = Number (prompt('Введите номер'))
// f = 1
// while (n < 1) {
//     f *= n
    
    
// }
// console.log(f);


// let n = Number (prompt('Введите номер'))
// let summa = 1
// for(let i = 1; i<=n; i++){
//     summa *= i
// }
// console.log(summa);


// length

// let a = Number (prompt('Введите колличество'))

// for (let i = 0; i < a; i++){
//     let n = prompt('Введите слово')
//     if (n.length > 10){
//         console.log(n[0] + (n.length - 2) + n[n.length - 1])
//     }
// }
// console.log(a);



// bit++



// let n = Number (prompt('Введите кол-во операций'))
// let x = 0
    
//     for(let i = 0; i < n; i++){
//         let operation = prompt('Введите операцию')
      

//         if(operation == 'x++' || operation == '++x'){
//             x++
//         }
//         else if(operation == 'x--' || operation == '--x'){
//             x--
//         }
        
//     }
   
//     console.log (x)

//петя и строки


// let s = prompt('Введите первую строку')
// let w = prompt('Введите вторую строку')

// if (s.toLocaleLowerCase()<w.toLocaleLowerCase()){
//     console.log(-1)
// }
// else if (s.toLocaleLowerCase()>w.toLocaleLowerCase()){
//     console.log(1)
// }
// else {
//     console.log (0)
//  }


// Солдат и бананы

// let k = Number (prompt('Цена банана'))
// let n = Number (prompt('Деньги'))
// let w = Number (prompt('Колличество бананов'))
// let summa = 0
// for (let i=0; i<=w; i++){
//     summa += k * i
// }
// if (summa < n){
//     console.log(0)
// }else {
//     console.log(summa - n)
// }


// почти счастливое число

// let n = prompt ('Введите число')

// let ch = 0

// for (let i = 0; i < n.length; i++){
//     if(n[i] == '4' || n[i] == '7'){
//         ch++
//     }
// }
//     if (ch == 4 || ch == 7){
//         console.log('yes')
//     }else {
//         console.log('no')
//     }


// Перевод

// let a = prompt ('Введите первое слово')
// let b = prompt ('Введите второе слово')
// let c = '';


//     for(let i = a.length-1; i>=0; i--){
//         c += a [i]
//     }
    

//     if(c == b){
//         console.log('yes')
//     } else{
//         console.log('no')
//     }

    


//красивый год

// let year = Number(prompt ('Введите год'))//2021
// year ++
// let stringYear = String(year)
    
// while(stringYear[0] == stringYear[1] || stringYear[0]==stringYear[2] || stringYear[0] == stringYear[3] || stringYear[1] == stringYear[2] || stringYear[1] == stringYear[3] || stringYear[2] == stringYear[3]){
//     year++
//     stringYear = String(year)
// }
// console.log(Number(stringYear))


// hq9+


// let n = prompt ('введите слово')

// let x = 0


// for (let i = 0; i < n.length; i++){
//     if (n[i] == 'H' || n[i] == 'Q' || n[i] == '9' || n[i] == '+'){
//         x++
        
//     }
// }
// if(x) {
//     console.log('yes')
// }else{
//     console.log('no')
// }


// function

// let name= 'Nurislam'

// function sayHello(name){
//     console.log('hello' + name)
//     let name2 = 'Erhan'
//     console.log(name2)
//     return 'END'
// }

// sayHello('Azat')
// console.log(name)




// let a = prompt('название еды')
// let b = 'я хочу кушать '
// let person = {
//     name: 'Nurdan',
//     age: 28,
//     height: 173,
    
//     talk: function(){
//         return b + a;

//     }
    
    
// }
// console.log(b + a)


// let person = {
//     name: 'Nurdan',
//     age: 28,
//     height: 173,
//     eat: function(food){
//         return `я хочу кушать ${food}`
//     }
// }


/*ДЗ
Создайте объект city1 (var city1 = {}), укажите у него свойства name (название города, строка) со значением 
«ГородN» и population (населенность города, число) со значением 10 млн.
Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов
Создайте методы exportStr() у каждого из объектов. Этот метод должен возвращать информацию о городе в формате 
«name=ГородN\npopulation=10000000\n». Для второго города будет строка со своими значениями. 
Примечание: можно обращаться к каждому свойству через цикл for/in, но методы объекта возвращать не нужно
Напишите функцию которая находит максимальное значение из трех значений*/




// let city1 = {
//     name: "ГородN",
//     population: 10e6,
//     getName: function(){
//         return city1.name
    
//     },
//     exportStr:function(){
//         return `${city1.name} ${city1.population}`

//     }
// }


// let city2 = {
//     name: "ГородM",
//     population: 1e6,
//     getName: function(){
//         return city2.name

//      },
//     exportStr:function(){
//     return `${city2.name} ${city2.population}`

//      }
 
// }


/*Напишите функцию которая находит максимальное значение из трех значений*/

// let a = [1,2,3,8,9,56,33,57]
// let b = Math.max(... a)
// console.log(b)

// console.log(Math.max(4,7,9,6))

// function max (a,b,c){
//     if(a>b && a>c){
//         return a
//     }else  if(b>a && b>c){
//         return b
//     }else{
//         return c
//     }
// }


/*Напишите функцию hello1(), которая при вызове будет возвращать строку «Привет, JavaScript!».
Напишите функцию hello2(), которая при вызове будет принимать переменную name (например, «Василий»)и 
выводить строку (в нашем случае «Привет, Василий»).  В случае отсутствующего аргумента выводить «Привет, гость»*/

// function hello1(){
//     return 'привет, JavaScript'
// }
// function hello2(name){
//     if(name){
//         return `Привет ${name}`
//     }else{
//         return 'Привет гость'
//     }
//     return name ? `Привет ${name}`: 'привет гость'
// }

// Напишите функцию mul(n,m), которая принимает два аргумента и возвращает произведение этих аргументов. Проверьте ее работу.
// Создайте функцию repeat(str, n), которая возвращает строку, состоящую и n повторений строки str. n — по умолчанию 2, str — пустая строка

// function mul(n,m){
//     return n * m
// }

// function repeat(str, n){
//     let s = ''
//     for(let i = 0; i < n; i++){
//         s+=str
//         s+=' '
//     }
//         return s
// }


// фибоначчи без циклов


// let n = Number (prompt('Введите номер'))

// let one = 1;
// let two = 1;

// let i = 2

// while (i < n){
//     let sum = one + two;
// 	one = two;
// 	two = sum;
//     i++
// }

// console.log(two);


// let n = Number(prompt('Введите номер'))

// let a = 1;
// let b = 1;


// for(let n = 0; i<n; n++){
//     let sum = a + b 
//     a = b
//     b = sum
// }
// console.log(b);


// const fib = n => {
//     const a = (1 + 5 ** 0.5) / 2;
//     const b = (1 - 5 ** 0.5) / 2;
//     return (a ** n  - b ** n) / 5 ** 0.5;
//   }
//   console.log()


//   function fib(n) {
//     let cur = 1, prev = 1;
//     for (let i = 3; i <= n; i++) {
//         [cur, prev] = [cur + prev, cur];
//     }
//     return cur;
// }


// function a(n) {
//     return n <= 1 ? n : a(n - 1) + a(n - 2)
//   }
  

  
//   function a(n) {
//     return n < 1 ? 0
//          : n <= 2 ? 1
//          : a(n - 1) + a(n - 2)
//  }
 
// let array = [1, 2, 3, 4, 5, 9, -5, -6, 3];

// // let str = 'smth'
// let sum = 0;

// for(let i = 0; i < array.length; i++){
//   if(array[i] > 0){
    
//     sum+=array[i];
// }
// }
// console.log(sum);  



// let array = [];


// for(let i = 0; i < 5; i ++){
//   let item = prompt('enter item:');
//   array.unshift(item);
// }
// console.log(array);


// let div = document.querySelector(".test")
//   div.innerHTML = 'test.'
  
  
//   let title = document.querySelector("#title")
//   title.innerHTML = '#title.'

// let divs = document.querySelectorAll(".test");

// let colors = ["green", "yellow", "red", "blue", "violet"];

// for(let i=0; i< divs.length; i++){
//   divs[i].innerHTML = "<h2>text</h2>";
//   divs[i].style.color = colors[i];
// }


// Задано значение X. Вычислить Y по формуле 

// let x1 = Number(prompt('enter value of x1')); 
// let x2 = Number(prompt('enter value of x1')); 
 
// let y = (2**x1) + (4**x2);


// let num = Number(prompt('enter value'))

// let a = 569 % 10 //=9
// let b = num % 100 //=69
// let c = (b - a) / 10 //=6
// let d = (num - b) / 100 //=5

// let res = a + c + d

// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пор
// попадает этот месяц (зима, лето, весна, осень).

// let month = Number(prompt('enter mongth value')); 
 
// let season; 
 
// if(month >= 1 && month <= 2 || month === 12) { 
//   season = 'winter' 
// } 
// else if (month >= 3 && month <= 5) { 
//   season = 'spring' 
// } 
// else if (month >= 6 && month <= 8) { 
//   season = 'sumer' 
// } 
// else if (month >= 9 && month <= 11) { 
//   season = 'autumn' 
// }

// В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это 
// число (в первую, вторую, третью или четвертую).

// let min = Number(prompt('От 1 до 59'))

// if (min>=0 && min <=15){
//     alert('1')
// }else if (min>=16 && min <=30){
//     alert('2')
// }else if (min>=31 && min <=45){
//     alert('3')
// }else if (min>=46 && min <=59){
//     alert('4')
// }else {
//     alert('error')
// }


// 11) В магазине скидка в 3% предоставляется, если сумма покупки больше 200$. По заданной 
// сумме покупки определить стоимость покупки.

// let amount = Number(prompt('enter value')); 
 
// let totalAmount; 
 
// if(amount < 200) { 
//   totalAmount = amount; 
// } 
// else{ 
//   let discount = (amount / 100) * 3; 
   
//   totalAmount = amount - discount; 
// } 
 
// console.log(totalAmount);

//ДЗ

// Принимаем два натуральных числа в переменные A, B. Нужно найти сумму 
// двух этих чисел используя эти переменные.

// let a = 2;
// let b = 2;

// let sum = a + b;

// console.log(a+b);

// Пользователь вводит два числа. Одно присваивается одной переменной, а второе — другой. Необходимо поменять значения переменных так, что
// первой оказалось во второй, а второй — в первой.

// let a = Number(prompt('first number'));
// let b = Number(prompt('second number'));
// [a, b] = [b, a];

// console.log('a:', a, 'b:', b);

// Заданы значение трех сторон треугольника 
// A, B, C. Нужно найти периметр треугольника.

// let a = 5;
// let b = 5;
// let c = 5;

// let p = a + b + c;

// console.log(p);

// Вычислить возраст человека, 
// если известен год его рождения

// let year = Number(prompt('year of birth'));
// let currentYear = 2021;
// let age = currentYear - year;

// console.log(age);

// Дана величина А, выражающая объем информации в байтах. Перевести А в 
// более крупные единицы измерения информации. 

// let a = Number(prompt('enter number'));

// let k = a/ 1024;
// let m = k/ 1024;
// let g = m/ 1024;
// let t = g/ 1024;

// console.log(k);

// Даны два целых числа. Найти среднее арифметическое этих 

// let a = 3;
// let b = 4;
// let sum = 2;
// let c  = (a + b )/ sum;

// console.log(c);

// Найти площадь кольца, внутренний радиус которого равен 20, а внешний – заданному числу r (r>20).

// let r = 20;
// let p = 3.14;

// let sum = 3.14 * 20;
// console.log(sum);

// Дано четырехзначное целое число Х. Определить цифры числа. Ответ выдать в виде, например: 7346
// 7 – thousands
// 3 – hundreds
// 4 – tens
// 6 - ones

// let n = Number(prompt('четырехзначное число'));

// let thousands = n/1000;
// let hundreds = (n%1000)/100;
// let tens = (n%100)/10;
// let ones = n%10;


// console.log();

// Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. 

// let a = Number(prompt('число'));


// for (let i=0; i<a;i++){
//     if(a>0 && a<6){
//         console.log('true');
//     }
//     else {
//         console.log('false');
//     }
// }

//Даны 3 вещественные числа a, b, c. Определить, имеется ли среди них хотя бы одна пара равных между собой чисел.
// let a = Number(prompt('число'));
// let b = Number(prompt('число'));
// let c = Number(prompt('число'));


// {
//     if(a==b || b==c || a==c){
//         console.log('yes');
//     }else{
//         console.log('no');
//     }
// }

//Требуется найти сумму чисел, кратных 7, в диапазоне 
//от 0 до 100. Вывести сумму и их количество.

// let sum = 0;
// let quantity = 0;
// for(let i = 0; i<=100; i++){
    
//     if(i%7==0){
//     sum+=i;
//     quantity++
//     }
// }
// console.log(sum, quantity);

// const btn = document.querySelector("button")
// const input = document.querySelector("#inp")



// function click(){
//     alert("вы нажали на кнопку")
// }
// btn.addEventListener("click", function(){
    //alert("input")
    // alert(input.value * input.value);
//     input.value = (input.value * input.value);
//     input.style.background = 'cyan';
    
// });

// btn.addEventListener("mouseleave", click);

// const firstInp = document.querySelector('#first_val');
// const secondInp = document.querySelector('#second_val');
// const calcBtn = document.querySelector('#res');
// const action = document.querySelector('#action');

// calcBtn.addEventListener("click", function(){
//     console.log(firstInp.value + action.value + secondInp.value);
//     const res = eval(firstInp.value + action.value + secondInp.value) 
//     console.log(res);
// });


//12.11.21

// let input = document.querySelector('#calc')
// let btnSolve = document.querySelector('#solve')
// let result = document.querySelector('#result')


// btnSolve.addEventListener('click', function(){
//     let valueInput = eval(input.value)

//     result.textContent = valueInput
    // result.innerHTML = '<span style="color:red;">это java</span>'
    // result.innerHTML = 'from js'
    // result.insertAdjacentHTML('afterbegin', '<span>После начала</span>')
// })

// let link = document.querySelector('a')
// let btn2 = document.querySelector('#result2')

// console.log(link.getAttribute('href'))

// btn2.addEventListener('click', function(){
//     link.setAttribute('href','https://google.com')
//     console.log(link.getAttribute('href'))
//     link.removeAttribute('href')
// })

// let block1 = document.querySelector('block1')
// let btn1 = document.querySelector('#btn1')

// block1.addEventListener('click', function(){

// })

// btn1.addEventListener('click', function(){
//     btn1.style.backgroundImg = 'url(frontend/js/2.jpg)'
// })

//15.11.21


//rgb

// let div = document.querySelector('div')
// let ch = 0
// let colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black'];
// div.addEventListener('click', function(){
//     if(ch==0){
//         div.classList.remove(`color${3}`)
//     }
//     ch++ 
//     div.classList.add(`color${ch}`)
//     div.classList.remove(`color${ch-1}`)
//     if(ch>=3){
//         ch=0
//     }
//     div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

// })


//rgb

// let div = document.querySelectorAll('div');

// for (let i = 0; i < div.length; i++) {
//    let rgb = [];
//    for (let i = 0; i < 3; i++)
//       rgb.push(Math.floor(Math.random() * 255));

//    div[i].style.backgroundColor = 'rgb(' + rgb.join(',') + ')';
// }




// function getRandomArbitrary(min, max){
//     return Math.random() * (max - min) + min;    
//}



// let sendBtn = document.querySelector('#sendBtn')

// let user = {}
// let usersList = []


// sendBtn.addEventListener('click', function(){
//     let name = document.querySelector('#name')
//     let phone = document.querySelector('#phone')
//     let job = document.querySelector('#job')

//     user.name = name.value
//     user.phone = phone.value
//     user.job = job.value
//     usersList = JSON.parse(localStorage.getItem('list'))
//     usersList.pusher(user)
//     user = {}
//     localStorage.setItem('list', JSON.stringify(usersList))
    
// })
// let showBtn = document.querySelector('#showBtn')

// showBtn.addEventListener('click', function(){
//     let listFromDataBase = JSON.parse(localStorage.getItem('list'))
//     let info = document.querySelector('#info')
//     info.innerHTML = ''
//     for(let i=0; i<usersList.length; i++){
//         info.insertAdjacentHTML('afterbegin',`<h1>${ulistFromDataBase[0].name}</h1>`)
//         info.insertAdjacentHTML('afterbegin', `<h1>${listFromDataBase[0].phone}</h1>`)
//         info.insertAdjacentHTML('afterbegin', `<h1>${listFromDataBase[0].job}</h1>`)
//     }
// })




// let data = JSON.stringify('#sendBtn')
// let data1 = JSON.parse(data)
// localStorage.setItem('user', data)


// function getRan(min , max) {
//     return Math.floor(Math.random() * (max - min) + min);
//   }
  
//   let div = document.querySelector('div')
//   div.addEventListener('click' , function(){
//   div.style.backgroundColor = `rgb(${getRan(0,255)} , ${getRan(0,255)} , ${getRan(0,255)})`
//   })




//01.12.21

// let arr = ['nur', 'aza', 'abdu', 'erhan']

// arr.splice(1,2)

// console.log(arr);

// arr.splice(2,0, 'bai')
// console.log(arr)


// console.log(arr.concat(['vlad','islam'], 'alex'))


// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
// console.log(element);
// })

// let list = [
//     {name: 'erhan', age:19},
//     {name: 'klara', age:21},
//     {name: 'aza', age:12}
// ]

// console.log(arr.indexOf('erhan'));

// console.log(arr.includes('erhan'));

// list.find(function(item){
//     if(item.age < 18){
//         console.log(item.name);
//     }
// })

// let list = [4,5,7,9,3,1,4,6]
// function compareNumeric(a,b){
//     if(a>b) return 1;
//     if(a==b) return 0;
//     if(a<b) return -1;
// }
// arr.sort(compareNumeric)
// console.log(arr);

// let stroka = 'erhan,nur'
// let ar = stroka.split(',')
// console.log(ar);

// let n = prompt('введите a i b').split(' ')
// console.log(Number(n[0]) + Number(n[1]));


// console.log(arr.join('!?'));

