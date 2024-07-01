class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let currNode = this.root;
    let toIns = new Node(val);
    
    if (this.root === null) {
      this.root = toIns;
      return this;
    }
    
    while (true) {
      if (val < currNode.val) {
        if (currNode.left) {
          currNode = currNode.left;
        }
        else {
          currNode.left = toIns;
          return this;
        }
      }
      else if (val > currNode.val) {
        if (currNode.right) {
          currNode = currNode.right;
        }
        else {
          currNode.right = toIns;
          return this
        }
      }
      else if (val === currNode.val) {
        // val is already in the tree
        return this;
      }
      else {
        // val is incomparable to values in the tree
        throw new Error("Value to insert is incomparable to values in tree")
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node=this.root) {
    if (this.root === null) {
      // special case: insert into an empty tree, starting with the root
      this.root = new Node(val);
      return this;
    }
    
    // normal insertions (left and right)
    if (val < node.val) {
      if (node.left) {
        return this.insertRecursively(val, node.left);
      }
      else {
        node.left = new Node(val);
        return this;
      }
    }
    else if (val > node.val) {
      if (node.right) {
        return this.insertRecursively(val, node.right);
      }
      else {
        node.right = new Node(val);
        return this;
      }
    }
    else if (val === node.val) {
      // val is already in tree
      return this;
    }
    else {
      // val is incomparable to values in tree
      throw new Error("Value to insert is incomparable to values in tree")
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currNode = this.root;
    while (currNode.val !== val) {
      if (currNode.val > val) {
        if (currNode.left) {
          currNode = currNode.left;
        }
        else return undefined;
      }
      else if (currNode.val < val) {
        if (currNode.right) {
          currNode = currNode.right;
        }
        else return undefined
      }
      else {
        // incomparable
        throw new Error("Value to find is incomparable to values in tree")
      }
    }
    if (currNode.val === this.val) {
      return currNode;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (node === null) {
      return undefined
    }
    else if (node.val > val) {
      return this.findRecursively(val, node.left);
    }
    else if (node.val < val) {
      return this.findRecursively(val, node.right);
    }
    else if (node.val === val) {
      return node;
    }
    else {
      // incomparable
      throw new Error("Value to find is incomparable to values in tree")
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const nodes = []
    const branch = [this.root]
    
    while (branch) {
      // follow as many left branches as we can
      while (branch[branch.length-1].left) {
        branch.push(branch[branch.length-1].left)
      }
      // now we're at something with no left branch
      nodes.push(branch.pop())
      // now we check the right-hand side
      if (nodes[nodes.length-1].right) {
        branch.push(nodes[nodes.length-1].right)
      }
    }
    return nodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
