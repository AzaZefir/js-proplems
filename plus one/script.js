let plusOne = function (digits) {
    let arrToStr = digits.join('');
    arrToStr++;
    let strToArr = arrToStr.toString().split('').map((x) => parseInt(x));


    return strToArr;
};
let digits = [4,3,2,1]
document.write(plusOne(digits))