// // ---------------------------------------------HashTable--------------------------------------------------------

// class Hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total=0
//         for(let i =0 ;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         this.table[index]=value
//     }
//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index = this.hash(key)
//         this.table[index]=undefined
//     }
//     display(){
//         for(let i= 0 ;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
    
// }

// const table = new Hashtable(50)
// table.set("name","Gopika")
// table.set("age",20)
// table.display()
// table.get("age")
// table.remove("age")
// table.display()

// ------------------------------------------------collision---------------------------------------------------------------

// class Hashtable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+= key.charCodeAt(i)
//         }
//         return total%this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         let bucket = this.table[index]
//         if(!bucket){
//             this.table[index]=[[key,value]]
//         }else{
//             let samekey = bucket.find((item)=>item[0]===key)
//             if(samekey){
//                 samekey[1]=value
                
//             }else{
//                 bucket.push([key,value])
//             }
//         }
//     }
//     get(key){
//         const index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let samekey = bucket.find((item)=>item[0]===key)
//             if(samekey){
//                 return samekey[1]
//             }else{
//                 return undefined
//             }
//         }
//     }
    
//     remove(key){
//         const index = this.hash(key)
//         let bucket = this.table[index]
//         if(bucket){
//             let samekey = bucket.find((item)=>item[0]===key)
//             if(samekey){
//                 bucket.splice(bucket.indexOf(samekey),1)
//             }else{
//                 return -1
//             }
//         }
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// const table = new Hashtable(10)
// table.set("name","gopika")
// table.set("age",20)
// table.set("mane","jyothika")
// table.display()
// console.log(table.get("age"))
// table.remove("name")
// table.display()

// -------------------------------------------least occur----------------------------------------------------------------------

// function least(arr){
//     let table={}
//     for(i=0;i<arr.length;i++){
//         table[arr[i]]=(table[arr[i]]||0)+1
//     }
//     let occur=Infinity
//     let key
//     for(let i in table){
//         if(occur>table[i]){
//             key =i
//             occur=table[i]
//         }
//     }
//     console.log(key,occur)
//     return table
// }

// console.log(least([1,6,5,4,9,8,1,1,2,2,3,3,3,4,4,5,5,4,6,9,4,4,7,7,7,7]))


// ---------------------------------------isAnagram-----------------------------------------------------------------------

// function isAnagram(s,t){
//     if(s.length!==t.length){
//         return false
//     }
//     let table={}
//     for(let char of s){
//         table[char]=(table[char]||0)+1
        
//     }
//     for(let char of t ){
//         if(!table[char]){
//             return false
//         }else{
//             table[char]--
//         }
        
//     }
//     return true
// }

// console.log(isAnagram("ollo","olol"))


// -------------------------------------------------2nd largest----------------------------------


// function least(arr){
//     let table={}
//     for(i=0;i<arr.length;i++){
//         table[arr[i]]=(table[arr[i]]||0)+1
//     }
//     let max= -Infinity
//     let sec=-Infinity
//     for(let i in table){
//         if(i>max){
//             sec=max
//             max = i
//             // occur=table[i]
//         }
//         if(i>sec&&i!==max){
//             sec=i
//         }
//     }
//     console.log(sec)
//     return table
// }

// console.log(least([9,1,6,5,4,8,1,1,2,2,3,3,3,4,4,5,5,4,6,4,4,7,7,7,7]))

// ------------------------------------max val-----------------------------


// function least(arr){
//     let table={}
//     for(i=0;i<arr.length;i++){
//         table[arr[i]]=(table[arr[i]]||0)+1
//     }
//     let max= -Infinity
//     for(let i in table){
//         if(i>max){
//             max = i
//             // occur=table[i]
//         }
//     }
//     console.log(max)
//     return table
// }

// console.log(least([9,1,6,5,4,8,1,1,2,2,3,3,3,4,4,5,5,4,6,4,4,7,7,7,7]))


// ------------------------------------------least occure-----------------------------------------


// function least(arr){
//     let table={}
//     for(i=0;i<arr.length;i++){
//         table[arr[i]]=(table[arr[i]]||0)+1
//     }
//     let occur=Infinity
//     let key
//     for(let i in table){
//         if(occur>table[i]){
//             key =i
//             occur=table[i]
//         }
//     }
//     console.log(key,occur)
//     return table
// }

// console.log(least([1,6,5,4,9,8,1,1,2,2,3,3,3,4,4,5,5,4,6,9,4,4,7,7,7,7]))