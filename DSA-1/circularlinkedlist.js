// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class linkedlist{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }
//     getSize(){
//         return this.size
//     }
//     prepend(value){
//         const node = new Node(value)
//         if(!this.head){
//             this.head=node
//             this.tail=node
//             this.tail.next=this.head
//         }else{
//             node.next=this.head
//             this.head=node
//             this.tail.next=this.head
//         }
//         this.size++
//     }
    
//     append(value){
//         const node = new Node(value)
//             if(!this.head){
//                 this.head=node
//                 this.tail=node
//                 this.tail.next=node
//             }else{
//                 this.tail.next= node
//                 this.tail=node
//                 this.tail.next=this.head
//             }
//             this.size++
        
//     }
    
//     print(){
//         if(!this.head){
//             console.log("empty")
//         }else{
//             let curr= this.head
//             let listvalue=""
//             do{
//                 listvalue+=`${curr.value} `
//                 curr = curr.next
//             }while(curr!==this.head)
//             console.log(listvalue)
            
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
// list.print()