// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }
    
//     insert(value) {
//         const node = new Node(value);
        
//         if(this.root === null) {
//             this.root = node;
//             return;
//         }
        
//         let current = this.root;
        
//         while(true) {
//             if(value < current.value) {
//                 if(current.left === null) {
//                     current.left = node;
//                     return;
//                 }
//                 current = current.left;
//             } else {
//                 if(current.right === null) {
//                     current.right = node;
//                     return;
//                 }
//                 current = current.right;
//             }
//         }
//     }
    
//     inorder(node) {
//         if(node !== null) {
//             this.inorder(node.left);
//             console.log(node.value);
//             this.inorder(node.right);
//         }
//     }
    
//     postOrder(node) {
//         if(node !== null) {
//             this.postOrder(node.left);
//             this.postOrder(node.right);
//             console.log(node.value);
//         }
//     }
    
//     Preorder(node) {
//         if(node !== null) {
//             console.log(node.value);
//             this.Preorder(node.left);
//             this.Preorder(node.right);
//         }
//     }
    
// }

// const bst = new BinarySearchTree();

// bst.insert(10);
// bst.insert(5);
// bst.insert(15);
// bst.insert(2);
// bst.insert(7);
// bst.insert(12);
// bst.insert(20);
// bst.inorder(bst.root);
// console.log("-----------------------")
// bst.postOrder(bst.root);
// console.log("-----------------------")
// bst.Preorder(bst.root);


// --------------------------------------binary search --------------

//  search(value){
//          let curr = this.root
//          while(curr!==null){
//              if(value==curr.value){
//                  return true
//              }else if(value<curr.value){
//                  curr=curr.left
//              }else{
//                  curr=curr.right
//              }
//          }
//          return false
//      }



        // console.log(bst.search(10))
        // console.log(bst.search(28))



// -----------------------------------------------recursive binary search----------------------------------------


  
    //  recsearch(root,value){
    //      if(root==null){
    //          return false
    //      }
    //      if(root.value==value){
    //          return true
    //      }else if(value<root.value){
    //          return this.recsearch(root.left,value)
    //      }else{
    //          return this.recsearch(root.right,value)
    //      }
    //  }



        // console.log(bst.recsearch(bst.root,15))
        // console.log(bst.recsearch(bst.root,16))



        // --------------------------------------bft ---levelorder---------------------------------

    //         levelOrder(root){
    //     const queue=[]
    //     queue.push(root)
    //     while(queue.length){
    //         const curr = queue.shift()
    //         console.log(curr.value)
            
    //         if(curr.left){
    //             queue.push(curr.left)
    //         }
    //         if(curr.right){
    //             queue.push(curr.right)
    //         }
    //     }
    // }

        //    bst.levelOrder(bst.root)


        // ---------------------------------------------max min ------------------------------------------------------

    //         min(){
    // if(this.root==null){
    //     return "empty"
    // }    
    // let curr=this.root
    // while(curr.left!==null){
    //     curr=curr.left
    // }
    // return curr.value
    // }  
    
    // max(){
    //     if(this.root==null){
    //         return "empty"
    //     }
    //     let curr = this.root
    //     while(curr.right!==null){
    //         curr = curr.right
    //     }
    //     return curr.value
    // }


    // console.log(bst.min())

    // console.log(bst.max())  
    // 



    // ------------------------------------------to check is valid------------------------------------------


    //  isvalid(node,min=-Infinity,max=Infinity){
    //     if(node==null){
    //         return true;
    //     }
    //     if(node.value<=min||node.value>=max){
    //         return false
    //     }
    //     return (this.isvalid(node.left,min,node.value)&&this.isvalid(node.right,node.value,max))
    // }

    // console.log(bst.isvalid(bst.root))





    // -----------------------------------------------everything together-------------------------------------------------------------

//     class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// class BinarySearchTree{
//     constructor(){
//         this.root=null
//     }
//     insert(value){
//         const node = new Node(value)
//         if(this.root==null){
//             this.root = node
//             return 
//         }
//         let curr = this.root
//         while(true){
//             if(value<curr.value){
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
//         let curr = this.root
//         while(curr!==null){
//             if(value==curr.value){
//                 return true
//             }else if(value<curr.value){
//                 curr=curr.left
//             }else{
//                 curr=curr.right
//             }
//         }
//         return false
//     }
//       min(){
//       if(this.root==null){
//           return "empty"
//       }
//       let curr = this.root
//       while(curr.left!==null){
//           curr=curr.left
//       }
//       return curr.value
//   }
//   max(){
//       if(this.root== null){
//           return "empty"
//       }
//       let curr = this.root
//       while(curr.right!=null){
//           curr=curr.right
//       }
//       return curr.value
//   }
//   maxdepth(node){
//       if(node==null){
//           return 0
//       }
//       let leftd=this.maxdepth(node.left)
//       let rightd=this.maxdepth(node.right)
//       return Math.max(leftd,rightd)+1
//   }
  
//   isvalid(node,min=-Infinity,max=Infinity){
//       if(node==null){
//           return true
//       }
//       if(node.value<=min||node.value>=max){
//           return false
//       }
//       return this.isvalid(node.left,min,node.value)&&this.isvalid(node.right,node.value,max)
//   }
//     inorder(node){
//         if(node!==null){
//             this.inorder(node.left)
//             console.log(node.value)
//             this.inorder(node.right)
//         }
        
//     }
//     postorder(node){
//         if(node!==null){
//             this.postorder(node.left)
//             this.postorder(node.right)
//             console.log(node.value)
//         }
//     }
//     preorder(node){
//         if(node!==null){
//             console.log(node.value)
//             this.preorder(node.left)
//             this.preorder(node.right)
//         }
//     }
//   levelorder(node){
//       const queue=[]
//     queue.push(node)
//     while(queue.length){
//         let curr = queue.shift()
//         console.log(curr.value)
//         if(curr.left){
//             queue.push(curr.left)
//         }
//         if(curr.right){
//             queue.push(curr.right)
//         }
//     }
//   }

// }


// let bst = new BinarySearchTree()
// bst.insert(10)
// bst.insert(4)
// bst.insert(23)
// bst.insert(13)
// bst.insert(6)
// bst.insert(7)
// bst.insert(12)
// bst.insert(18)
// bst.insert(5)
// console.log(bst.search(7))
// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))
// console.log(bst.maxdepth(bst.root))
// console.log(bst.isvalid(bst.root))
// console.log("fdg")
// bst.inorder(bst.root)
// bst.postorder(bst.root)
// bst.preorder(bst.root)
