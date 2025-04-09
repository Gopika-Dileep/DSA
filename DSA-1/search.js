// ----------------------------------linear search-----------------------------------------------------------


// function linearsearch(arr,target){
//     for(i=0;i<arr.length;i++){
//         if(arr[i]===target){
//             return i
//         }
//     }
//     return -1
// }


// console.log(linearsearch([1,2,3,4,5],6))


// -------------------------------------binarysearch------------------------------------------------------


// function binary(arr,target){
//     let left=0
//     let right=arr.length-1
//     while(left<=right){
//         let middle=Math.floor((left+right)/2)
//         if(arr[middle]===target){
//             return middle
//         }
//         if(target<arr[middle]){
//             right=middle-1
//         }else{
//             left=middle+1
//         }
//     }
//     return -1
// }

// console.log(binary([1,2,3,4,5,6,7],3))


// -------------------------------binary search recursion-----------------------------------------------

// function binary(arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,left,right){
//     if(left>right){
//         return -1
//     }
//     let middle=Math.floor((left+right)/2)
//     if(arr[middle]==target){
//         return middle
//     }
//     if(target<arr[middle]){
//         return search(arr,target,left,middle-1)
//     }else{
//         return search(arr,target,middle+1,right)
//     }
// }

// console.log(binary([1,2,3,4,5,6,7],5))
