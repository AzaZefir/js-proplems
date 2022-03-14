// Реализуйте класс Student(Студент), который будет наследовать от класса User,
// подобно тому, как это сделано в теоретической части урока.Этот класс должен
// иметь следующие свойства: name(имя, наследуется от User), surname(фамилия, наследуется от User),
// year(год поступления в вуз).Класс должен иметь метод getFullName()(наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.Также класс должен
// иметь метод getCourse(), который будет выводить текущий курс студента(от 1 до 5).Курс
// вычисляется так: нужно от текущего года отнять год поступления в вуз.Текущий год получите самостоятельно.

// Вот так должен работать наш класс:

// var student = new Student('Иван', 'Иванов', 2018);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.getFullName()); //выведет 'Иван Иванов'
// console.log(worker.year); //выведет 2018console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2021

class User {
    constructor(name, surname, year, curYear) {
        this.name = name;
        this.surname = surname;
        this.year = year;
        this.curYear = curYear;

    }
    getFullName() {
        return this.name + this.surname;
    }
    getCourse() {
        return this.curYear - this.year;
    }
}
class Student extends User {
    name = "aza";
    surname = 'azat';
    year = 2018;
    curYear = 2021;
    getFullName() {
        return this.name + ' ' + this.surname;
    }
    getCourse() {
        return this.curYear - this.year;
    }

}

let student = new Student('aza', 'azat', 2018);

console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());