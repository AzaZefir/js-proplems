//rgb

let div = document.querySelector('div')
let ch = 0
let colors = ['red', 'green', 'blue', 'orange', 'yellow', 'black'];
div.addEventListener('click', function () {
    if (ch == 0) {
        div.classList.remove(`color${3}`)
    }
    ch++
    div.classList.add(`color${ch}`)
    div.classList.remove(`color${ch-1}`)
    if (ch >= 3) {
        ch = 0
    }
    div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

})


//rgb

// let div = document.querySelectorAll('div');

// for (let i = 0; i < div.length; i++) {
//     let rgb = [];
//     for (let i = 0; i < 3; i++)
//         rgb.push(Math.floor(Math.random() * 255));

//     div[i].style.backgroundColor = 'rgb(' + rgb.join(',') + ')';
// }




// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }