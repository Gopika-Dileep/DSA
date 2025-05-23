// class Graph {
//     constructor() {
//         this.adjecencyList = {};
//     }
    
//     addVertex(vertex) {
//         if(!this.adjecencyList[vertex]) {
//             this.adjecencyList[vertex] = new Set();
//         }
//     }
    
//     addEdge(vertex1, vertex2) {
//          if(!this.adjecencyList[vertex1]) {
//             this.addVertex(vertex1);
//          }
         
//         if(!this.adjecencyList[vertex2]) {
//             this.addVertex(vertex2);
//         }
        
//         this.adjecencyList[vertex1].add(vertex2);
//         this.adjecencyList[vertex2].add(vertex1);
//     }
    
//     hasEdge(vertex1, vertex2) {
//         return  this.adjecencyList[vertex1].has(vertex2) &&  this.adjecencyList[vertex2].has(vertex1);
//     }
    
//     deleteEdge(vertex1, vertex2) {
//         this.adjecencyList[vertex1].delete(vertex2);
//         this.adjecencyList[vertex2].delete(vertex1);
//     }
    
//     deleteVertex(vertex) {
//         if(this.adjecencyList[vertex]) {
//             for(let vertexs of this.adjecencyList[vertex]) {
//                 this.deleteEdge(vertexs, vertex)
//             }
//             delete this.adjecencyList[vertex]
//         } 
//     }
    
//     dfs(start) {
//         let visited = new Set();
//         let stack = [start];
//         let results = [];
        
//         while(stack.length > 0) {
//             let vertex = stack.pop();
            
//                 if(!visited.has(vertex)) {
//                     results.push(vertex);
//                     visited.add(vertex);
                    
//                     for(let vertexs of this.adjecencyList[vertex]) {
//                         if(!visited.has(vertexs)) {
//                             stack.push(vertexs);
//                         }
                        
//                     }   
//                 }
//         }
//         console.log(results)
//     }
    
//     bfs(start) {
//         let queue= [start]
//         let visited = new Set();
//         let results = [];
        
//         while(queue.length > 0) {
//             let vertex = queue.shift();
            
//                 if(!visited.has(vertex)) {
//                     results.push(vertex);
//                     visited.add(vertex);
                    
//                     for(let vertexs of this.adjecencyList[vertex]) {
//                         if(!visited.has(vertexs)) {
//                             queue.push(vertexs);
//                         }
                        
//                     }   
//                 }
//         }
//         console.log(results)
//     }
// }

// let graph = new Graph();

// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');

// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("C", "B");
// graph.addEdge("D", "B");
// console.log(graph.adjecencyList)
// // graph.deleteVertex("A")
// // graph.deleteEdge("D", "B")
// // console.log(graph.hasEdge("D", "B"))
// console.log(graph.adjecencyList);

// graph.dfs("A")
// graph.bfs("A")






// ---------------------------------------practice---------------------------------------------------

// class Graph{
//     constructor(){
//         this.adjacencylist={}
//     }
//     addVertex(vertex){
//         if(!this.adjacencylist[vertex]){
//             this.adjacencylist[vertex]=new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjacencylist[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjacencylist[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjacencylist[vertex1].add(vertex2)
//         this.adjacencylist[vertex2].add(vertex1)
//     }
//     hasEdge(vertex1,vertex2){
//         return this.adjacencylist[vertex1].has(vertex2)&&this.adjacencylist[vertex2].has(vertex1)
//     }
//     deleteEdge(vertex1,vertex2){
//         this.adjacencylist[vertex1].delete(vertex2)
//         this.adjacencylist[vertex2].delete(vertex1)
//     }
//     deleteVertex(vertex){
//         if(this.adjacencylist[vertex]){
//             for(let vertexes of this.adjacencylist[vertex]){
//                 this.deleteEdge(vertexes,vertex)
//             }
//             delete this.adjacencylist[vertex]
//         }
//     }
//     dfs(start){
//         let visited=new Set()
//         let stack=[start]
//         let result=[]
        
//         while(stack.length>0){
//             let vertex = stack.push()
//             if(!visited.has(vertex)){
//                 result.push(vertex)
//                 visited.has(vertex)   
//             }
//             for(let vertexes of this.adjacencylist[vertex]){
//                 if(!visited.has(vertexes)){
//                     stack.push(vertexes)
//                 }
//             }
//         }
//         console.log(result)
//     }
//     bfs(start){
//         let visited= new Set()
//         let queue=[start]
//         let result=[]
//         while(queue.length>0){
//             let vertex = queue.shift()
//             if(!visited.has(vertex)){
//                 result.push(vertex)
//                 visited.add(vertex)
//             }
//             for(let vertexes of this.adjacencylist[vertex]){
//                 if(!visited.has(vertexes)){
//                     queue.push(vertexes)
//                 }
//             }
//         }
//         console.log(result)
//     }
// }
// let graph = new Graph()
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addEdge("A","B")
// graph.addEdge("B","C")
// graph.addEdge("C","A")
// console.log(graph.hasEdge("B","A"))
// console.log(graph)
// graph.deleteEdge("A","C")
// graph.deleteVertex("A")
// console.log(graph)