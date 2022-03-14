
// 5
// let text = prompt('Введите текст')
// function lengthOfLastWord(text)
// {
//     let len = 0;
//     text = text.trim();
 
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] == ' ') {
//             len = 0;
//         }
//         else {
//             len++;
//         }
//     }
 
//     return len;
    
// }console.log(lengthOfLastWord(text));




// 7

// let a = Number(prompt('введите число'))
// let b = Number(prompt('введите число'))

// function addBinary(a, b)
// {
//     let result = "";
//     let s = 0;        
//     let i = a.length - 1, j = b.length - 1;
//     while (i >= 0 || j >= 0 || s == 1)
//     {
//         s += ((i >= 0)? a.charAt(i).charCodeAt(0) -
//         '0'.charCodeAt(0): 0);
//         s += ((j >= 0)? b.charAt(j).charCodeAt(0) -
//         '0'.charCodeAt(0): 0);
//         result = String.fromCharCode(parseInt(s % 2) +
//         '0'.charCodeAt(0)) + result;
//         s = parseInt(s/2);
//         i--; j--;
//     }
     
// return result;

// }
// let a = "1101", b="100";
 
// document.write(addBinary(a, b));

//4

// let l1 = Number(prompt('Введите числа'))
// let l2 = Number(prompt('Введите числа'))

// function mergeTwoList( l1,  l2) {
 
//     if (l1 == null)
//         return l2;
//     if (l2 == null)
//         return l1;

//     if (l1.data < l2.data) {
//         l1.next = mergeTwoList(l1.next, l2);
//         return l1;
//     } else {
//         l2.next = mergeTwoList(l1, l2.next);
//         return l2;
//     }

// }
// let l1 = [1,2,4], l2= [1,3,4];
// document.write(mergeTwoList(l1,l2));


// function mergeTwoSortedList(node1, node2) {
//     if (null == node1) {
//         return node2;
//     }
//     if (null == node2) {
//         return node1;
//     }
//     if (node1.val <= node2.val) {
//         node1.next = mergeTwoSortedList(node1.next, node2);
//         return node1;
//     } else {
//         node2.next = mergeTwoSortedList(node1, node2.next);
//         return node2;
//     }
// }
// let node1 = [1,2,4], node2= [1,3,4];
// document.write(mergeTwoSortedList(node1,node2));



//2

// let S = Number(prompt('number'))

// let roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}

// let romanToInt = function(S) {
//     let ans = 0
//     for (let i = S.length-1; ~i; i--) {
//         let num = roman[S.charAt(i)]
//         if (4 * num < ans) ans -= num
//         else ans += num
//     }
//     return ans
// };
// console.log(romanToInt())


//1


// let L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
//      '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}

// let letterCombinations = function(D) {
//     let len = D.length, ans = []
//     if (!len) return []
//     const bfs = (pos, str) => {
//         if (pos === len) ans.push(str)
//         else {
//             let letters = L[D[pos]]
//             for (let i = 0; i < letters.length; i++)
//                 bfs(pos+1,str+letters[i])
//         }
//     }
//     bfs(0,"")
//     return ans
// }

// let D = "23"
// document.write(letterCombinations(D))

//6

// let plusOne = function(digits) {
//     let arrToStr=digits.join('');
//     arrToStr++;
//     let strToArr = arrToStr.toString().split('').map((x)=>parseInt(x));
    
    
//     return strToArr;
//  };
//  let digits = [6,1,4,5,3,9,0,1,9,5,1]
//  document.write(plusOne(digits))
 

 //8
// let s = Number(prompt('number'))
// function constructLowerArray(n)
// {
    
//     for (let i = 0; i < n.length; i++)
//         n[i] = 0;

//     for (i = 0; i < n.length; i++)
//     {
//         for ( s= i + 1; s < n.length; s++)
//         {
//             if (n[i] < n[s])
//                 n[i]++;
//         }
//     }
// }
// let n = [5,2,6,1]
// document.write(constructLowerArray(n))
 
  

// function printArray(arr, size)
// {
//     let i;
//     for (i = 0; i < size; i++)
//         document.write(arr[i] + " ");

//     document.write("</br>");
// }
   
// let arr = [12, 10, 5, 4, 2, 20, 6, 1, 0, 2];
// let n = arr.length;
// let low = new Array(n);

// constructLowerArray(arr, low, n);
// printArray(low, n);
     

// let nums = [5,2,6,1]
// let count = []

// for(let i=0;i<nums.length;i++){
//     for(let j=i;j<nums.length;j++){
//             if(i==nums.length-1 || nums[i]<0){
//                 count.push(0)
//             }else{
//                 if(nums[i]>nums[j+1]){
//                     count.push(nums[j+1])
//                     break
//                 }
//             }
        
//     }
// }
// console.log(count)

