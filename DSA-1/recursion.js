// -----------------------factorial of a number------------------------------------------



// function recursion(n){
//     if(n<=1){
//         return 1
//     }
//     return n*recursion(n-1)
// }
// console.log(recursion(5))



// ----------------------------------------sum of array -------------------------------------------------------

// function sum(arr,index=0){
//     if(index==arr.length){
//         return 0
//     }
//     return arr[index]+sum(arr,index+1)
// }


// console.log(sum([1,2,3]))



// ------------------------------string reverse------------------------------------------------------


// function recursion(str,word="",final="",index=0){
    
//     if(str.length === index){
//         return final += word.split('').reverse().join('')
//     }
    
//     if(str[index] !== " "){
//         word += str[index]
//     }else{
//         final += word.split('').reverse().join('')+" "
//         word =""
//     }
    
//     return recursion(str,word,final,index+1)
// }

// let str = "GOPIKA HELLO"

// console.log(recursion(str))


// -------------------------




// function reverse(str,index=0){
//     if(index===str.length){
//         return ""
//     }
    
//     return reverse(str,index+1)+str[index]
// }

// console.log(reverse("Gopika Dileep"))



// -------------------------------------reverse array----------------------------------------


// function reversearr(arr,rev=[],index=arr.length-1){
//     if(index<0){
//         return rev
//     }
//     rev.push(arr[index])
//     return reversearr(arr,rev,index-1)
// }


// console.log(reversearr([1,2,3]))


// -------------------------------------check if the string is a palindrom----------------------------------------


// function recursion(str,left=0,right=str.length-1){
//     if(left>=right){
//         return true
//     }
//     if(str[left]!==str[right]){
//         return false
//     }
//     return recursion(str,left+1,right-1)
// }

// console.log(recursion("malayalam"))



// -------------------------find the power of a number------------------------------------------------


// function recursion(base,pow){
//     if(pow==0){
//         return 1
//     }
//     return base*recursion(base,pow-1)
// }

// console.log(recursion(2,3))


// ---------------count the number of occurance of a character in a string--------------------------


// function recursion(str,char,index=0,count=0){
//     if(index===str.length){
//         return count
//     }
//     return recursion(str,char,index+1,count+(str[index]==char?1:0))
// }


// console.log(recursion("gopika","a"))


// -------------------------------------------


// function occ(str,char,count=0,index=0){
//     if(index==str.length){
//         return count
//     }       
//     count+=str[index].toLowerCase()==char.toLowerCase()?1:0
//     return occ(str,char,count,index+1)
// }

// console.log(occ("gAopika","a"))




// ---------------------frequency of a string-----------------------------------------------------

// function frequency(str,freq={},index=0){
//     if(index==str.length){
//         return freq
//     }

// let key = str[index]
// freq[key]=(freq[key]||0)+1
//     return frequency(str,freq,index+1)
// }


// console.log(frequency("gopika dileep"))

// --------------------------------------------frequency of array------------------------------------------------


// function frequency(arr,freq={},index=0){
//     if(index==arr.length){
//         return freq
//     }
//     let key = arr[index]
//     freq[key]=(freq[key]||0)+1
//     return frequency(arr,freq,index+1)
// }
// console.log(frequency([1,2,3,4,2,4,5,6,7,6,7,1]))



// --------------------------------larget value of an array -----------------------------------------


// function maximum(arr,index=0,max=-Infinity){
//     if(index==arr.length){
//         return max
//     }
//     return maximum(arr,index+1,Math.max(max,arr[index]))
// }
// console.log(maximum([5,5,7,8,9,10,9]));



// --------------------second larget

// function sum(arr,i=0,lrg=-Infinity,sec=-Infinity){
//     if(i==arr.length){
//         return sec
//     }
    
//     if(arr[i]>lrg){
//         sec=lrg
//         lrg=arr[i]
//     }else if(arr[i]>sec&&arr[i]!==lrg){
//         sec=arr[i]
//     }
//     return sum(arr,i+1,lrg,sec)
     
//     }
    
//     console.log(sum([1,2,3,6,7,5,4]))
// ---------------------maximum occuring no in an array






// -------------------------------------greatest common divisor-----------------------------------


// function GCD(a,b){
//     if(b==0){
//         return a
//     }
//     return GCD(b,a%b)
// }

// console.log(GCD(24,36))



// --------------------------print first 5 elements of fibonacci---------------------------------


// function Fibonacci(n,str=[],fst=0,sec=1){
//     if(n==0){
//         return str
//     }
//     str.push(fst)
//     return Fibonacci(n-1,str,sec,fst+sec)
// }
// console.log(Fibonacci(5));



// ----------------------------------------remove charecter from a string----------------------------------------


// function removechar(str,char,index=0){
//     if(index==str.length){
//         return ""
//     }
//     let curr = str[index]==char?"":str[index]
//     return curr + removechar(str,char,index+1)
// }

// console.log(removechar("gopika",'o'))


// -------------------------------------  



