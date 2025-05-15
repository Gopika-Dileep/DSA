// ----------------------------------------------bubble sort--------------------------------------------------

// function bubble(arr){
//     for(i=0;i<arr.length-1;i++){
//         let flag =0
//         for(j=0;j<arr.length-1-i;j++){
//             if(arr[j]>arr[j+1]){
//               let  temp = arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=temp
//                 flag=1
//             }
//         }
//         if(flag==0){
//             break
//         }
//     }
//     return arr
// }
// console.log(bubble([4,6,7,4,2,1,9]))



// ----------------------------insertion sort-------------------------------------------------------------------

// function insertion(arr){
//     for(i=1;i<arr.length;i++){
//         let temp = arr[i]
//         let j = i-1
//         while(j>=0&&arr[j]>temp){
//             arr[j+1]=arr[j]
//             j--
//         }
//         arr[j+1]=temp
//     }
//     return arr
// }
// console.log(insertion([5,1,3,2,7,6,3,5,8,9,4]))


// ---------------------------------selection sort-------------------------------------------------------------


// function selection(arr){
//     for(let i =0; i<arr.length-1;i++){
//         let min =i
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min=j
//             }
//         }
//         if(min!=i){
//             let temp = arr[i]
//             arr[i]=arr[min]
//             arr[min]=temp    
//         }
//     }
//     return arr
// }
// console.log(selection([1,5,2,6,3,7,4,78,8,5]))


// ------------------------------------------------quick sort -----------------------------------------------
// // 
// function quickSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     const pivot=arr[0]
//     const left=[]
//     const right = []
    
//     for(i=1;i<arr.length;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
    
// }

// console.log(quickSort([1,5,2,6,3,7,4,78,8,5]))
// // 


// -----------------------------------------------merge sort--------------------------------------------------------------


// function mergeSort(arr){
//     if(arr.length<=1){
//         return arr
//     }
//     let midd = Math.floor(arr.length/2)
//     let left = mergeSort(arr.slice(0,midd))
//     let right=mergeSort(arr.slice(midd))
    
//     return merge(left,right)
// }

// function merge(left,right){
//     let sortedArr=[]
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             sortedArr.push(left.shift())
//         }else{
//             sortedArr.push(right.shift())
//         }
//     }
//     return [...sortedArr,...left,...right]
// }
// console.log(mergeSort([1,3,2,5,7,6,3,4]))

