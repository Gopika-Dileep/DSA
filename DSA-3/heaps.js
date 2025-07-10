
// // ----------------------------------------------------MinHeap----------------------------------------------------------------

// class MinHeap {
//     constructor() {
//         this.heap = [];
//     }

//     getParentIndex(index) {
//         return Math.floor((index -1)/2);
//     }

//     getLeftChildIndex(index) {
//         return 2 * index + 1;
//     }

//     getRightChildIndex(index) {
//         return 2 * index + 2;
//     }

//     swap(i, j) {
//         [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapifyUp();
//     }

//     heapifyUp() {
//         let index = this.heap.length -1;

//         while(index > 0) {
//             let parentIndex = this.getParentIndex(index);
//             if(this.heap[index] < this.heap[parentIndex]) {
//                 this.swap(index, parentIndex);
//                 index = parentIndex;
//             } else {
//                 break;
//             }
//         }
//     }

//     peek() {
//         return this.heap[0]
//     }

//     extractMin() {
//         if(this.heap.length === 0) return null;
//         if(this.heap.length === 1) return this.heap.pop();

//         const min = this.heap[0]; // Smallest element
//         this.heap[0] = this.heap.pop(); // Last element to root
//         this.heapifyDown(0) // restore heap property

//         return min;
//     }

//     heapifyDown(index) {
//         let smallest = index;
//         let leftChildIndex = this.getLeftChildIndex(index);
//         let rightChildIndex = this.getRightChildIndex(index);

//         if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallest]){
//             smallest = leftChildIndex;
//         }

//         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallest]) {
//             smallest = rightChildIndex;
//         }

//         if(smallest !== index) {
//             this.swap(index, smallest);
//             this.heapifyDown(smallest);
//         }
//     }

//     displayHeap() {
//         console.log(this.heap);
//     }
// }

// const minHeap = new MinHeap();
// minHeap.insert(10);
// minHeap.insert(15);
// minHeap.insert(30);
// minHeap.insert(40);
// minHeap.insert(50);
// minHeap.insert(8);

// console.log("Min-Heap:", minHeap.heap);  
// console.log("Extracted Min:", minHeap.extractMin());  
// console.log("Heap after extracting min:", minHeap.heap);




// // ------------------------------------------maxHeap--------------------------------------------------------------------


// class MaxHeap {
//     constructor() {
//         this.heap = [];
//     }

//     getParentIndex(index) {
//         return Math.floor((index -1)/2)
//     }

//     getLeftChildIndex(index) {
//         return 2 * index + 1;
//     }

//     getRightChildIndex(index) {
//         return 2 * index + 2;
//     }

//     insert(value) {
//         this.heap.push(value);
//         this.heapfiyUp();
//     }

//     swap(i, j) {
//         [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//     }

//     heapfiyUp() {
//         let index = this.heap.length -1;

//         while(index > 0) {
//             let parentIndex = this.getParentIndex(index);
//             if(this.heap[index] > this.heap[parentIndex]) {
//                 this.swap(index, parentIndex);
//                 index = parentIndex;
//             } else {
//                 break;
//             }
//         }
//     }

//     extractMax() {
//         if(this.heap.length === 0) return null;
//         if(this.heap.length === 1) return this.heap.pop();

//         const max = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.heapfiyDown(0);

//         return max;
//     }

//     heapfiyDown(index) {
//         let largest = index;
//         let leftChildIndex = this.getLeftChildIndex(index);
//         let rightChildIndex = this.getRightChildIndex(index);

//         if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largest]) {
//             largest = leftChildIndex
//         }

//         if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largest]) {
//             largest = rightChildIndex;
//         }

//         if(largest !== index) {
//             this.swap(index, largest);
//             this.heapfiyDown(largest);
//         }
//     }

//     displayHeap() {
//         console.log(this.heap);
//     }
// }

// const maxHeap = new MaxHeap();
// maxHeap.insert(10);
// maxHeap.insert(15);
// maxHeap.insert(20);
// maxHeap.insert(17);
// maxHeap.insert(8);

// console.log("Max-Heap:", maxHeap.heap); // Output: [20, 17, 15, 10, 8]
// console.log("Extract Max:", maxHeap.extractMax()); // Output: 20
// console.log("After Extracting Max:", maxHeap.heap);



// // --------------------------------------------heapsort--------------------------------------------------------


// function heapify(arr, n, i) {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if(left < n && arr[left] > arr[largest]) {
//         largest = left;        
//     }

//     if(right < n && arr[right] > arr[largest]) {
//         largest = right;        
//     }

//     if(largest !== i) {
//         [arr[i], arr[largest]] = [arr[largest], arr[i]];
//         heapify(arr, n, largest);
//     }
// }

// function heapSort(arr) {
//     let n = arr.length;
//     for(let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }

//     for(let i = n -1; i > 0; i--) {
//         [arr[0], arr[i]] = [arr[i], arr[0]];
//         heapify(arr, i, 0);
//     }
// }

// let arr = [5, 3, 8, 4, 2, 7, 1];
// heapSort(arr);
// console.log("Sorted array:", arr);






// ----------------------------------------------------practice min heap---------------------------------------------------------------------------


// class minHeap{
//     constructor(){
//         this.heap=[]
//     }
//     getparent(index){
//         return Math.floor((index-1)/2)
//     }
//     getleftchild(index){
//         return 2*index+1
//     }
//     getrightchild(index){
//         return 2*index+2
//     }
//     swap(i,j){
//         [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
//     }
    
//     insert(value){
//         this.heap.push(value)
//         this.heapifyup()
//     }
//     heapifyup(){
//         let index = this.heap.length-1
//         while(index>0){
//           let parentindex = this.getparent(index)
//           if(this.heap[index]<this.heap[parentindex]){
//               this.swap(index,parentindex);
//               index = parentindex
//           }else{
//               break;
//           }
//         }
//     }
//     peek(){
//         return this.heap[0]
//     }
//     extractmin(){
//         if(this.heap.length==0){
//             return null
//         }
//         if(this.heap.length==1){
//             return this.heap.pop()
//         }
//         let min = this.heap[0]
//         this.heap[0]=this.heap.pop()
//         this.heapifydown(0)
        
//         return min
        
//     }
//     heapifydown(index){
//        let  smallest = index 
//         let leftchildeindex = this.getleftchild(index)
//         let rightchildindex=this.getrightchild(index)
//         if(leftchildeindex<this.heap.length&&this.heap[leftchildeindex]<this.heap[smallest]){
//             smallest = leftchildeindex
//         }
//         if(rightchildindex<this.heap.length&&this.heap[rightchildindex]<this.heap[smallest]){
//             smallest = rightchildindex
//         }
//         if(smallest!==index){
//             this.swap(index,smallest)
//             this.heapifydown(smallest)
//         }
//     }
//     displayHeap(){
//         (console.log(this.heap))
//     }
// }
// let minheap = new minHeap()
// minheap.insert(10)
// minheap.insert(15)
// minheap.insert(30)
// minheap.insert(40)
// minheap.insert(50)
// minheap.insert(8)
// console.log(minheap.heap)
// console.log(minheap.peek())
// console.log(minheap.extractmin())
// console.log(minheap.heap)



// -----------------------------qns


//  qn number 1)  graph dfs

// qn number 2)   -------------------wrong ans 
// binary search tree ill target thannal athinod closest ayitolla value kand pidikanam


// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     insert(value){
//         const node = new Node(value)
//         if(this.root==null){
//             this.root==node
//             return
//         }
//         let curr = this.root
//         while(true){
//             if(curr<curr.value){
//                 if(curr.left==null){
//                     curr.left=node
//                     return
//                 }
//                 curr=curr.left
//             }else{
//                 if(curr.right==null){
//                     curr.right=node
//                     return
//                 }
//                 curr=curr.right
//             }
//         }
//     }
//     search(value){
//         let curr=this.root
//         while(curr!==null){
//             if(value==curr.value){
//                 let leftv=curr.left.value
//                 let rightv=curr.right.value
//                 if((curr.value-leftv)<(rightv-curr.value)){
//                     return leftv.value
//                 }else{
//                     return rightv.value
//                 }
//             }else if(value<curr.value){
//                 curr=curr.left
//             }else{
//                 curr=curr.right
//             }
//         }
        
//     }
// }
// let bst = new BinarySearchTree()
// bst.insert(10)
// bst.insert(4)
// bst.insert(15)
// bst.insert(23)
// bst.insert(12)
// bst.insert(6)
// bst.insert(1)
// console.log(bst.search(4))


// qn number 3)     -----------------------trie autocomplete
// qn number 4)            ----------------wrong ans
// heap sort 

// function hepify(arr,n,i){
//     let largest=i
//     let left=2*i+1
//     let right=2*i+2
//     if(left<n&&arr[left]>arr[largest]){
//         largest=left
//     }
//     if(right<n&&arr[right]>arr[largest]){
//         largest=right
//     }
//     if(largest!==i){
//         [arr[i],arr[largest]]=[arr[largest],arr[i]]
//          hepify(arr,n,largest)
//     }
// }
// function heapsort(arr){
//     n=arr.length
//     for(let i =Math.floor((n/2)-1);i>=0;i--){
//         hepify(arr,n,i)
//     }
//     for(let i =n-1;i>0;i--){
//         [arr[i],arr[n]]=[arr[n],arr[i]]
//         hepify(arr,i,0)
//     }
// }

// let arr =[1,4,10,25,12,8,7]
// heapsort(arr)
// console.log(arr)


