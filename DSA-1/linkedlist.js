// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     getSize(){
//         return this.size
//     }
    
//     prepend(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     append(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
//         }else{
//          let curr=this.head
//          while(curr.next){
//              curr=curr.next
//          }
//          curr.next=node
//         }
//         this.size++
//     }
    
//     // ---------------------insert a value at index 3---------------------
//     insert(value,index){
//         const node = new Node(value)
//         if(index<0||index>this.size){
//             console.log("invalid")
//             return 
//         }
//         if(!this.head){
//             console.log("empty")
//             return
//         }
//         if(index===0){
//             this.prepend(value)
//         }else{
//             let curr= this.head
//             for(let i=0;i<index-1;i++){
//                 curr=curr.next
//             }
//             node.next=curr.next
//             curr.next=node
//         }
//         this.size++
//     }
    
//     // ---------------insert a value after index 3--------------------------
//     insert1(value,index){
//         if(index<0||index>this.size){
//             console.log("invalid")
//         }
//         if(!this.head){
//             console.log("empty")
//         }
//         const node=new Node(value)
//         if(index==0){
//             this.prepend(value)
//         }else{
//             let curr= this.head
//             for(let i=0; i<index;i++){
//                 curr=curr.next
                
//             }
//             node.next=curr.next
//             curr.next=node
            
//         }
//         this.size++
//     }
    
//     // ----------------------insert a value at target value---------------
//     insertval(value,target){
//         const node = new Node(value)
//         if(this.head.value==target){
//             this.prepend(value)
//         }else{
//             let curr= this.head
//             while(curr.next){
//                 if(curr.next.value==target){
//                     node.next=curr.next
//                     curr.next=node
//                     this.size++
//                     return
//                 }
//                 curr=curr.next
//             }
            
//         }
//     }
//     // -------------------insert value after specific index-----------------
    
//     insertval2(value,target){
//         const node=new Node(value)
//         if(this.head==target){
//             node.next=this.head.next
//             this.head.next=node
//             this.size++
//             return
//         }else{
//             let curr=this.head
//             while(curr.next){
//                 if(curr.value==target){
//                     node.next=curr.next
//                     curr.next=node
//                     this.size++
//                     return
                    
//                 }
//                 curr=curr.next
                
//             }
//         }
//     }
    
//     // ---------remove value at  specific index---------------
    
//     remove(index){
//         if(index<0||index>this.size){
//             console.log("invalid")
//         }
//         if(index===0){
//             this.head=this.head.next
//         }else{
//             let curr=this.head
//           for( let i= 0;i<index-1;i++){
//               curr=curr.next
//           }
//           curr.next=curr.next.next
//         }
        
//     }
    
//     // ------------remove value after a specific index--------------------
//     // ------------need to fix this it is not right one 
//     remove2(index){
//         if(index<0||index>this.size){
//             console.log("invalid")
//         }
//         if(index===0){
//             this.head.next=this.head.next.next
//         }else{
//             let curr=this.head
//             for(let i=0;i<index;i++){
//                 curr=curr.next
//             }
//             curr.next=curr.next.next
//         }
//     }
//     // -------------------------------
    
//     // --------------------------remove a specif value-----------------
//     removeval(value){
//         if(this.head.value==value){
//             this.head=this.head.next
//             this.size--
//         }else{
//             let curr=this.head
//             while(curr.next){
//                 if(curr.next.value==value){
//                       curr.next=curr.next.next
//             this.size--
//                 }
//                 curr=curr.next
//             } 
//             }
        
//          }
    
//     search(value){
//         if(!this.head){
//             return -1
//         }
//         let i=0
//         let curr = this.head
//         while(curr){
//             if(curr.value===value){
//                 return i
//             }
//             curr=curr.next
//             i++
//         }
//         return -1
        
//     }
    
//     reverse(){
//         let prev=null
//         let curr = this.head
//         while(curr){
//             let next = curr.next
//             curr.next=prev
//             prev=curr
//             curr=next
//         }
//         this.head=prev
//     }
    
//     print(){
//         if(!this.head){
//             console.log("empty")
//         }else{
//         let curr=this.head
//         let listvalue=""
//         while(curr){
//             listvalue+= `${curr.value} `
//             curr=curr.next
//         }
//         console.log(listvalue)
//         }
//     }
    
// }

// const  list = new linkedlist()
// list.prepend(1)
// list.prepend(2)
// list.prepend(3)
// list.print()
// list.append(4)
// list.append(5)
// list.append(6)
// list.print()
// list.insert(0,3)
// list.print()
// list.insert1(7,6)
// list.print()
// list.insertval(8,6)
// list.print()
// list. insertval2(2,8)
// list.print()
// list.remove(4)
// list.print()
// list.remove(2)
// list.print()
// list. removeval(2)
// list.print()
// console.log(list.search(6))
// list.reverse()
// list.print()



// --------------------------------deletemiddle------------------------------------------------------

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
    
// }

// class linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     getSize(){
//         return this.size()
//     }
    
//     prepend(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
          
//         }else{
//          node.next=this.head
//          this.head=node
          
//         }
//           this.size++
        
//     }
    
//     append(value){
//         const node = new Node(value)
//             if(!this.head){
//                 this.head=node
//             }else{
//                 let curr = this.head
//                 while(curr.next){
//                     curr=curr.next
                    
//                 }
//                 curr.next=node
//             }
//             this.size++
        
//     }
//     deletemiddle(){
//         if(!this.head){
//             return null
//         }
//         let slow=this.head
//         let fast=this.head
//         let prev=null
//         while(fast&&fast.next){
//             prev=slow
//             slow=slow.next
//             fast=fast.next.next
//         }
//          prev.next=slow.next
//          this.size--
//     }
    
    
//     print(){
//         if(!this.head){
//             console.log("empty")
//         }else{
//         let curr=this.head
//         let listvalue=""
//         while(curr){
//             listvalue+=`${curr.value} `
//             curr=curr.next
//         }
//         console.log(listvalue)
//         }
//     }
    
    
// }

// const list = new linkedlist()
// list.prepend(3)
// list.prepend(2)
// list.prepend(1)
// list.print()
// list.append(4)
// list.append(5)
// list.append(6)
// list.append(7)
// list.print()
// list.deletemiddle()
// list.print()

// ---------------------------array to linkedlist---------------------------------------------------
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
//         }else{
//             node.next=this.head
//             this.head=node
//         }
//         this.size++
//     }
//     array(arr){
//         arr.forEach((val)=>this.prepend(val))
//     }
    
//     print(){
//         if(!this.head){
//             console.log("invalid")
//         }else{
//             let curr = this.head
//             let listvalue=""
//             while(curr){
//                 listvalue+=`${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listvalue)
//         }
//     }
// }

// const list = new linkedlist()
// list.prepend(1)
// list.prepend(2)
// list.prepend(3)
// list.array([11,12,13])
// list.print()
