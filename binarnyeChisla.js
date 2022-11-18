let n = Number(prompt()) //1024
let s = 1
while (n > s) { //1024 > 2,4,6,8,16,32,64,128,256,512,1024
    s*= 2 //2,4,8,16,32,64,128,256,512,1024
    // s= s *2
}
if (s == n) {
    console.log('yes');
} else {
    console.log('no');
}