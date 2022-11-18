function reverse(number) { // number = 323233332
  let str = String(number) // '323233332'
  let str2 = ''
  // console.log(str);
  for (let i = str.length - 1; i >= 0; i--) { 
      // console.log(str[i]);
      str2 += str[i]  // str2 = '2333323232'
  }
  console.log(Number(str2));
}
reverse(323233332)