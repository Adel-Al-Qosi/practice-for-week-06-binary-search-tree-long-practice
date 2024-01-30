// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      // Your code here
      this.root = null
    }
  
    insert(val, currentNode=this.root) {
      // Your code here
      let node = new TreeNode(val)
  
      if (this.root === null) {
        this.root = node
        return this
      }
  
      if (!currentNode) {
        this.root = node
        return this
      } else {
        if (currentNode.val < val) {
          if (currentNode.right) {
            this.insert(val, currentNode.right) 
          } else {
            currentNode.right = node
          }
        }
  
        if (currentNode.val > val) {
          if (currentNode.left) {
            this.insert(val, currentNode.left) 
          } else {
            currentNode.left = node
          }
        }
      }
    }
  
    search(val, currentNode = this.root) {
      // Your code here 
      while (currentNode) {
        if (val === currentNode.val) {
          return true
        }
        if (currentNode.val > val) {
          currentNode = currentNode.left
        } else {
          currentNode = currentNode.right
        }
      } 
  
      return false
    }
  
  
    preOrderTraversal(currentNode = this.root) {
      // Your code here
      if (currentNode) {
        console.log(currentNode.val)
      }
  
      if (currentNode.left) {
        this.preOrderTraversal(currentNode.left)
      }
  
      if (currentNode.right) {
        this.preOrderTraversal(currentNode.right)
      }
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      // Your code here
      if (currentNode.left) {
        this.inOrderTraversal(currentNode.left)
      }
  
      if (currentNode) {
        console.log(currentNode.val)
      }
      
      if (currentNode.right) {
        this.inOrderTraversal(currentNode.right)
      }
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      // Your code here
       if (currentNode.left) {
        this.postOrderTraversal(currentNode.left)
      }
  
      if (currentNode.right) {
        this.postOrderTraversal(currentNode.right)
      }
  
      if (currentNode) {
        console.log(currentNode.val)
      }
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // your code here
      const queue = []
      let currentNode = this.root
      queue.push(currentNode)
  
      while (queue.length > 0) {
        const nextElement = queue.shift()
  
        console.log(nextElement.val)
  
        if (nextElement.left) queue.push(nextElement.left)
        if (nextElement.right) queue.push(nextElement.right)
      }
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // your code here
      const stack = []
      let currentNode = this.root
      stack.push(currentNode)
  
      while (stack.length > 0) {
        const nextElement = stack.pop()
  
        console.log(nextElement.val)
  
        if (nextElement.left) stack.push(nextElement.left)
        if (nextElement.right) stack.push(nextElement.right)
      }
  
    }
  }
  
  module.exports = { BinarySearchTree, TreeNode };