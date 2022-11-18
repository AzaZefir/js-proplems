let n = Number(prompt('vvedite kol slov'));

for (let i = 0; i < n; i++){
    let s = prompt('vvedite slovo' + (i + 1))
    
    if (s.length > 10) {

        //dlya nahojdeniya dinamichnoi poslednei bukvy simvola v console pishem 'slovo'['slovo'.length-1]

        console.log(s[0] + s.length - 2 + s[s.length - 1]);
        
    } else {
        console.log(s);
    }
}