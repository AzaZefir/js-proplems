/*
1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства:
name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).
Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
*/

let azat = Object.create({}, {
    get: function () {
        return this.rate * this.days;

    },
    name: {
        value: 'azat',
        enumerable: true
    },
    surname: {
        value: 'arykov',
        enumerable:true,
        writable: true
    },
    rate: {
        value: 100,
        enumerable: true
    },
    days: {
        value: 22,
        enumerable: true
    }

})



function Worker(name, surname, rate, days) {
    this.rate = 'rate',
        this.days = 'days',
        this.name = 'name',
        this.surname = 'surname',
        this.getSalary= 0
}
function getSalary() {
    return this.rate * this.days
}

let aza = new Worker("azat", "arykov", 100,22);
azat.rate = 100;
azat.days = 22;
console.log(azat.getSalary());