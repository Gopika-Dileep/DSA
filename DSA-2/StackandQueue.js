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



// -------------------------------------------------------------stack linkedlist-------------------------------------------------------------


// // stack Linked list
// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }

// class Stack{
//     constructor(){
//         this.head=null
//     }
//     isEmpty(){
//         return this.head==null
//     }
//     push(value){
//         let node=new Node(value)
//         node.next=this.head
//         this.head=node
//     }
//     pop(){
//         if(!this.isEmpty()){
//             let temp=this.head
//             this.head=this.head.next
//             return temp.value
//         }else{
//             return "underflow"
//         }
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.head.value
//         }else{
//             return "stack is empty"
//         }
//     }
//     print(){
//         let curr=this.head
//         while(curr !==null){
//             console.log(curr.value);
            
//             curr=curr.next
//         }
//     }
// }

// let stack=new Stack()
// let i=0
// while(i<=5){

//     stack.push(i)
//     i++
// }
// console.log("stack values are ");
// stack.print()
// console.log( "popped value is "+ stack.pop())

// console.log("value in the top is ", stack.peek());



// stack.print()  


//  ---------------------------------------------stack linkedlist another method----------------------------------------------------

// class Node{
//     constructor(value){
//         this.value=value
//         this.next = null
//     }
// }
// class Stack{
//     constructor(){
//         this.head=null
//         this.size=0;
//     }
//     isEmpty(){
//         return this.head==null
//     }
//     Size(){
//         return this.size
//     }
//     push(value){
//         const node =  new Node(value)
//         node.next=this.head
//         this.head=node
//         this.size++
//     }
//     pop(){
//         if(this.isEmpty()){
//             return null
//         }
//         const removenode=this.head
//         this.head=this.head.next
//         this.size--
//         return removenode.value
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.head.value
    
//     }
//     print(){
//         let curr = this.head
//         let listvalue=''
//         while(curr){
//             listvalue+=`${curr.value} `
//             curr= curr.next
//         }
//         console.log(listvalue)
//     }
    
// }

// let stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()
// console.log(stack.pop())
// console.log(stack.peek())
// console.log(stack.isEmpty())
// console.log(stack.Size())
// stack.print()


// ----------------------------------------------------------queue-------------------------------------------------------------

// class Queue{
//     constructor(){
//         this.items = []
//     }
//     isEmpty(){
//         return this.items.size===0
//     }
//     size(){
//         return this.items.length
//     }
//     enqueue(value){
//         this.items.push(value)
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return "empty"
//         }
//         return this.items.shift()
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }
//     display(){
//         console.log(this.items.toString())
//     }
    
// }
// const queue= new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.display()
// console.log(queue.dequeue())
// console.log(queue.peek())
// queue.display()

// -------------------------------------------queue in linkedlist-----------------------------------------------------------------

// class Node{
//     constructor(value){
//         this.value=value
//         this.next = null
//     }
// }

// class Queue{
//     constructor(){
//         this.head=null
//         this.rear=null
//         this.size=0
//     }
//     isEmpty(){
//         return this.head==null
//     }
//     getSize(){
//         return this.size
//     }
//     enqueue(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//             this.rear=node
//         }else{
//             this.rear.next = node
//             this.rear=node
//         }
//         this.size++
//     }
//     dequeue(){
//         if(this.isEmpty()){
//             return null
//         }
//         const removenode=this.head
//         this.head=this.head.next
//         if(!this.head){
//             this.rear=null
//         }
//         this.size--
//         return removenode.value
//     }
//     peek(){
//         if(this.isEmpty()){
//             return null
//         }
//         return this.head.value
//     }
//     print(){
//         let curr= this.head
//         let listvalue=''
//         while(curr){
//             listvalue+=`${curr.value} `
//             curr=curr.next
//         }
//         console.log(listvalue)
//     }
// }

// const queue=new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.print()
// console.log(queue.dequeue())
// console.log(queue.peek())
// console.log(queue.isEmpty())
// console.log(queue.getSize())
// queue.print()

// -----------------------------using stack reverse the string--------------------------------------------------------------

// function split(s){
//     let stackstring=s.split(' ')
//     let newstring=""
//     while(stackstring.length>0){
//         newstring+=stackstring.pop()+" "
//     }
//     return newstring.trim()
// }
// console.log(split("i love you"))


// ----------------------------------------

// function reverse(s){
//     let split = s.split(' ')
//     let stack = []
//     for(i=0;i<split.length;i++){
//         stack.push(split[i])
//     }
//     let final=""
//     while(stack.length){
//         final+=stack.pop()+" "
//     }
//     return final
// }
// console.log(reverse("hello world"))



// ---------------------------------------to get the max value using stack ---------------------------------------------------------


// class Stack {
//     constructor() {
//         this.mainStack = [];
//         this.maxStack = [];
//     }
    
//     push(val) {
//         this.mainStack.push(val);
//         if(this.maxStack.length === 0 || val > this.maxStack[this.maxStack.length - 1]) {
//             this.maxStack.push(val);
//         }
//     }
    
//     pop() {
//         let popped = this.mainStack.pop();
//         if(popped === this.maxStack[this.maxStack.length -1]) {
//             this.maxStack.pop();
//         }
//     }
    
//     getMax() {
//         return this.maxStack[this.maxStack.length -1];
//     }
// }

// let stack = new Stack();
// stack.push(5)
// stack.push(1)
// stack.push(3)
// stack.push(4)
// stack.push(2)
// stack.push(7)
// stack.push(9)

// console.log(stack)
// stack.pop()
// console.log(stack.getMax())