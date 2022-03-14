let a = Number(prompt('введите число'))
let b = Number(prompt('введите число'))

function addBinary(a, b) {
    let result = "";
    let s = 0;
    let i = a.length - 1,
        j = b.length - 1;
    while (i >= 0 || j >= 0 || s == 1) {
        s += ((i >= 0) ? a.charAt(i).charCodeAt(0) -
            '0'.charCodeAt(0) : 0);
        s += ((j >= 0) ? b.charAt(j).charCodeAt(0) -
            '0'.charCodeAt(0) : 0);
        result = String.fromCharCode(parseInt(s % 2) +
            '0'.charCodeAt(0)) + result;
        s = parseInt(s / 2);
        i--;
        j--;
    }

    return result;

}
let a = "1101",
    b = "100";

document.write(addBinary(a, b));