
// ---------------------doubly linked list--------------------------------------------------

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//         this.prev=null
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
//         const node =new Node(value)
//             if(!this.head){
//                 this.head=node
//             }else{
//                 node.next=this.head
//                 this.head.prev=node
//                 this.head=node
//             }
//             this.size++
        
//     }
    
//     append(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
//         }else{
//             let curr = this.head
//             while(curr.next){
//                 curr=curr.next
//             }
//             node.prev=curr
//             curr.next=node
//         }
//         this.size++
//     }
    
//     print(){
//         let curr=this.head
//         let listvalue=""
//         while(curr){
//             listvalue+=`${curr.value} `
//             curr=curr.next
//         }
//         console.log(listvalue)
//     }
    
// }

// const list=new linkedlist()
// list.prepend(3)
// list.prepend(2)
// list.prepend(1)
// list.print()
// list.append(4)
// list.append(5)
// list.append(6)
// list.print()


// -----------------------------------remove value-------------------------------------------------

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//         this.prev=null
//     }
// }
// class linkedlist{
//     constructor(){
//         this.head=null
//         this.size=0
//     }
//     getsize(){
//         return this.size()
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
            
//         }else{
//             node.next=this.head
//             this.head.prev=node
//             this.head=node
//         }
//         this.size++
//     }
//     append(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
//         }else{
//             let curr=this.head
//             while(curr.next){
//                 curr=curr.next
//             }
//             node.prev=curr
//             curr.next=node
//         }
//         this.size++
//     }
//   delete(value){
//       if(this.head.value==value){
//           this.head=this.head.next
//           if(this.head){
//               this.head.prev=null
//           }
        
//           }
//             let curr=this.head
//           while(curr){
//               if(curr.value==value){
//                   if(curr.prev){
//                       curr.prev.next=curr.next
//                   }
//                   if(curr.next){
//                       curr.next.prev=curr.prev
//                   }
//                   this.size--
//                   return
//               }
//               curr=curr.next
//       }
//   }
//         print(){
//         let curr=this.head
//         let listvalue=""
//         while(curr){
//             listvalue+=`${curr.value} `
//             curr=curr.next
//         }
//         console.log(listvalue)
//     }
// }

// const list=new linkedlist()
// list.prepend(1)
// list.prepend(2)
// list.print()
// list.append(3)

// list.append(4)
// list.print()
// list.delete(2)
// list.print()