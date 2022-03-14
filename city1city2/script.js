// Создайте объект city1 (var city1 = {}), укажите у него свойства name (название города, строка) со значением 
// «ГородN» и population (населенность города, число) со значением 10 млн.
// Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}.
// Создайте у объектов city1 и city2 методы getName(), которые вернут соответствующие названия городов
// Создайте методы exportStr() у каждого из объектов. Этот метод должен возвращать информацию о городе в формате 
// «name=ГородN\npopulation=10000000\n». Для второго города будет строка со своими значениями. 
// Примечание: можно обращаться к каждому свойству через цикл for/in, но методы объекта возвращать не нужно
// Напишите функцию которая находит максимальное значение из трех значений




let city1 = {
    name: "ГородN",
    population: 10e6,
    getName: function () {
        return city1.name

    },
    exportStr: function () {
        return `${city1.name} ${city1.population}`

    }
}


let city2 = {
    name: "ГородM",
    population: 1e6,
    getName: function () {
        return city2.name

    },
    exportStr: function () {
        return `${city2.name} ${city2.population}`

    }

}