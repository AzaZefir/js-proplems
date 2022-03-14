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


let nums = [5, 2, 6, 1]
let count = []

for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
        if (i == nums.length - 1 || nums[i] < 0) {
            count.push(0)
        } else {
            if (nums[i] > nums[j + 1]) {
                count.push(nums[j + 1])
                break
            }
        }

    }
}
console.log(count)