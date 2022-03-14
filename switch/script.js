let a = 10
switch (a) {

    case 3: {
        alert('a==3')
        break;
    }
    case 4: {
        alert('a==4')
        break;
    }
    default: {
        alert('dont know')
    }
}

let number = Number(prompt('number'))
switch (number) {
    case 2: {
        alert('number==1')
        break;
    }
    case 3: {
        alert('number==3')
        break;
    }
    case 4: {
        alert('number==4')
        break;
    }
    case 5: {
        alert('number==5')
        break;
    }
    case 6: {
        alert('number==6')
        break;
    }
    case 7: {
        alert('number==7')
        break;
    }
    default: {
        alert('dont know')
        break;
    }
}


//  дз Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1',
//  то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и 
//  так далее. Решите задачу через switch-case.

let num = Number(prompt('num'))

switch (num) {
    case 1:
        alert('весна');
        break;
    case 2:
        alert('зима');
        break;
    case 3:
        alert('лето');
        break;
    case 4:
        alert('осень');
        break;
    default:
        alert('weather unknown');
        break;
}