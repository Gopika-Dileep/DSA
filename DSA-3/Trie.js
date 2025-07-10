// class TireNode {
//     constructor() {
//         this.children = {};
//         this.isWordEnd = false;
//     }
// }

// class Trie {
//     constructor() {
//         this.root = new TireNode(); 
//     }

//     insert(word) {
//         let node = this.root;

//         for(let char of word) {
//             if(!node.children[char]) {
//                 node.children[char] = new TireNode();
//             }
//             node = node.children[char];
//         }

//         node.isWordEnd = true
//     }

//     search(word) {
//         let node = this.root;

//         for(let char of word) {
//             if(!node.children[char]) {
//                 return false
//             }
//             node = node.children[char];
//         }

//         return node.isWordEnd;
//     }

//     startsWith(prefix) {
//         let node = this.root;

//         for(let char of prefix) {
//             if(!node.children[char]) {
//                 return false;
//             }
//             node = node.children[char];
//         }
//         return true;
//     }

//   searchNode(prefix) {
//     let node = this.root;
//     for (let char of prefix) {
//       if (!node.children[char]) {
//         return null;
//       }
//       node = node.children[char];
//     }
//     return node;
//   }

//   // Recursive helper to get all words from a node
//   autoCompleteHelper(node, prefix, results) {
//     if (node.isWordEnd) {
//       results.push(prefix);
//     }
//     for (let char in node.children) {
//       this.autoCompleteHelper(node.children[char], prefix + char, results);
//     }
//   }

//   // Return autocomplete suggestions for a given prefix
//   autoComplete(prefix) {
//     const results = [];
//     const node = this.searchNode(prefix);
//     if (node) {
//       this.autoCompleteHelper(node, prefix, results);
//     }
//     return results;
//   }
// }

// const trie = new Trie();

// const words = ['apple', 'app', 'application', 'apt', 'bat', 'bath', 'banana'];

// words.forEach(word => trie.insert(word));

// console.log(trie.autoComplete('ap')); // ['apple', 'app', 'application', 'apt']
// console.log(trie.autoComplete('ba')); // ['bat', 'bath', 'banana']
// console.log(trie.autoComplete('cat')); // []



// ----------------------------------------------practice----------------------------------------------------------


// class TrieNode{
//     constructor(){
//         this.children={}
//         this.isWordEnd=false
//     }
// }
// class Trie{
//     constructor(){
//         this.root = new TrieNode()
//     }
//     insert(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 node.children[char]=new TrieNode()
//             }
//             node = node.children[char]
//         }
//         node.isWordEnd=true
//     }
//     search(word){
//         let node = this.root
//         for(let char of word){
//             if(!node.children[char]){
//                 return false
//             }
//             node= node.children[char]
//         }
//         return node.isWordEnd
//     }
//     startWith(prefix){
//         let node = this.root
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return false
//             }
//             node= node.children[char]
//         }
//         return true
//     }
//     autocomplete(prefix){
//         let result =[]
//         let node = this.searchNode(prefix)
//         if(node){
//             this.autocmpleteHelper(node,prefix,result)
//         }
//         return result
//     }
//     searchNode(prefix){
//         let node = this.root
//         for(let char of prefix){
//             if(!node.children[char]){
//                 return null
//             }
//             node = node.children[char]
//         }
//         return node
//     }
//     autocmpleteHelper(node,prefix,result){
//         if(node.isWordEnd){
//             result.push(prefix)
//         }
//         for(let char in node.children){
//             this.autocmpleteHelper(node.children[char],prefix+char,result)
//         }
//     }
// }

// let trie = new Trie()
// trie.insert("apple")
// trie.insert("app")
// trie.insert("application")
// trie.insert("apt")
// trie.insert("bat")
// trie.insert("bath")
// trie.insert("banana")
// console.log(trie.search("banana"))
// console.log(trie.startWith("ap"))
// console.log(trie.autocomplete("app"))