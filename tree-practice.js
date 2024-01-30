const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
  // Your code here
  let min = rootNode.val
  const currentQueue = [rootNode]

  while (currentQueue.length > 0) {
    let currentNode = currentQueue.shift()

    if (currentNode.val < min) min = currentNode.val

    if (currentNode.left) currentQueue.push(currentNode.left)

    if (currentNode.right) currentQueue.push(currentNode.right)
  }

  return min
}

function findMaxBST (rootNode) {
  // Your code here
  let max = rootNode.val
  const currentQueue = [rootNode]

  while (currentQueue.length > 0) {
    let currentNode = currentQueue.shift()

    if (currentNode.val > max) max = currentNode.val

    if (currentNode.left) currentQueue.push(currentNode.left)

    if (currentNode.right) currentQueue.push(currentNode.right)
  } 

  return max
}

function findMinBT (rootNode) {
  // Your code here
  let min = rootNode.val
  const currentQueue = [rootNode]

  while (currentQueue.length > 0) {
    let currentNode = currentQueue.shift()

    if (currentNode.val < min) min = currentNode.val

    if (currentNode.left) currentQueue.push(currentNode.left)

    if (currentNode.right) currentQueue.push(currentNode.right)
  }

  return min
}

function findMaxBT (rootNode) {
  // Your code here
  let max = rootNode.val
  const currentQueue = [rootNode]

  while (currentQueue.length > 0) {
    let currentNode = currentQueue.shift()

    if (currentNode.val > max) max = currentNode.val

    if (currentNode.left) currentQueue.push(currentNode.left)

    if (currentNode.right) currentQueue.push(currentNode.right)
  }

  return max
}

function getHeight (rootNode, height = -1) {
  // Your code here
  let currentHeihgt = 0
  let leftHeight = 0
  let rightHeight = 0

  if (!rootNode) return height

  height++

  if (rootNode.left) {
    leftHeight = getHeight(rootNode.left, currentHeihgt)
  }

  if (rootNode.right) {
    rightHeight = getHeight(rootNode.right, currentHeihgt)
  }

  if (leftHeight > rightHeight) {
    height += leftHeight
  } else {
    height += rightHeight
  }

  return height
}

function balancedTree (rootNode) {
  // Your code here
  if (rootNode === null) {
    return true;
  }

  const leftHeight = getHeight(rootNode.left);
  const rightHeight = getHeight(rootNode.right);

  const isCurrentNodeBalanced = Math.abs(leftHeight - rightHeight) <= 1;

  const isLeftSubtreeBalanced = balancedTree(rootNode.left);
  const isRightSubtreeBalanced = balancedTree(rootNode.right);

  return isCurrentNodeBalanced && isLeftSubtreeBalanced && isRightSubtreeBalanced;
}

function countNodes (rootNode) {
  // Your code here
  let count = 0
  let queue = []

  if (rootNode) queue.push(rootNode)

  while (queue.length > 0) {
    let node = queue.shift()

    count++

    if (node.right) queue.push(node.right)
    if (node.left) queue.push(node.left)
  }

  return count
}

function getParentNode (rootNode, target) {
  // Your code here
  if (rootNode.val === target) return null
  let queue = []
  
  if (rootNode) queue.push(rootNode)

  while (queue.length > 0) {
    let item = queue.shift()

    if (item.left) {
      if (item.left.val === target) return item
      queue.push(item.left)
    }

    if (item.right) {
      if (item.right.val === target) return item
      queue.push(item.right)
    }
  }
}

function inOrderPredecessor (rootNode, target, order = []) {
  // Your code here
  if (rootNode.left) {
    inOrderPredecessor(rootNode.left, target, order)
  }

  order.push(rootNode.val)

  if (rootNode.right) {
    inOrderPredecessor(rootNode.right, target, order)
  }

  let indexOfResult = order.indexOf(target) - 1

  if (indexOfResult === -1) return null

  return order[indexOfResult]
}

function inOrderSuccessor(rootNode, target, order = []) {
  if (rootNode.left) {
    inOrderSuccessor(rootNode.left, target, order)
  }

  order.push(rootNode.val)

  if (rootNode.right) {
    inOrderSuccessor(rootNode.right, target, order)
  }

  let indexOfResult = order.indexOf(target) + 1

  if (indexOfResult === -1) return null

  return order[indexOfResult]
}

function deleteNodeBST(rootNode, target) {
  // Your code here
  if (!rootNode) {
    return null;
  }

  let parent = null;
  let current = rootNode;

  while (current !== null && current.val !== target) {
    parent = current;

    if (target < current.val) {
      current = current.left;
    } else {
      current = current.right;
    }
  }

  if (current === null) {
    return;
  }

  if (current.left && current.right) {
    const predecessor = inOrderPredecessor(rootNode, current.val);
    const successor = inOrderSuccessor(rootNode, current.val);

    current.val = (successor !== null) ? successor : predecessor;

    current.right = deleteNodeBST(current.right, current.val);
  } else {
    const child = current.left || current.right;

    if (parent === null) {
      return child;
    }

    if (current === parent.left) {
      parent.left = child;
    } else {
      parent.right = child;
    }
  }

  return rootNode;
}



module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}