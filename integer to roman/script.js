let S = Number(prompt('number'))

let roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

let romanToInt = function (s) {
    let ans = 0
    for (let i = 0; i< s.length; i--) {
        let num = roman[S.charAt(i)]
        if (4 * num < ans) ans -= num
        else ans += num
    }
    return ans
};
console.log(S())