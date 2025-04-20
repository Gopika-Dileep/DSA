// // ---------------------------------stack array -------------------------------------------

// class Stack{
//     constructor(){
//         this.items = [];
//     }
//     isEmpty(){
//         return this.items.size===0
//     }
//     size(){
//         return this.items.length
//     }
//     push(value){
//         this.items.push(value)
//     }
    
//     pop(){
//         if(this.isEmpty()){
//             return "under flow"
//         }
//         return this.items.pop()
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[this.items.length-1]
//         }
//         return null
//     }
//     display(){
//         console.log(this.items)
//     }
// }
// let stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.display()
// console.log(stack.peek())
// console.log(stack.pop())
// stack.display()
// console.log(stack.isEmpty())
// console.log(stack.size())