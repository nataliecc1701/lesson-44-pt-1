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

  dfsPreOrder(node=this.root) {
    const leftNodes = (node.left) ? this.dfsPreOrder(node.left) : [];
    const rightNodes = (node.right) ? this.dfsPreOrder(node.right) : [];
    
    return [node, ...leftNodes, ...rightNodes].map(n => n.val)
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node=this.root) {
    const leftNodes = (node.left) ? this.dfsInOrder(node.left) : [];
    const rightNodes = (node.right) ? this.dfsInOrder(node.right) : [];
    
    return [...leftNodes, node, ...rightNodes].map(n => n.val)
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node=this.root) {
    const leftNodes = (node.left) ? this.dfsPostOrder(node.left) : [];
    const rightNodes = (node.right) ? this.dfsPostOrder(node.right) : [];
    
    return [...leftNodes, ...rightNodes, node].map(n => n.val)

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const nodes = [this.root];
    let i = 0;
    
    while (i < nodes.length) {
      if (nodes[i].left) nodes.push(nodes[i].left);
      if (nodes[i].right) nodes.push(nodes[i].right);
      i++;
    }
    
    return nodes.map(n => n.val);

  }
  
  /** helper function for remove
   * insertAllRecursively(vals, node):
   * calls insertRecursively for all values in array vals
   * starting at node
   * in random order
   */
  
  insertAllRecursively(vals, node=this.root) {
    while(vals.length > 0) {
      let i = Math.floor(Math.random()*vals.length);
      this.insertRecursively(vals.splice(i,1)[0], node);
    }
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    let parent = null;
    let currNode = this.root;
    
    while(currNode.val !== val) {
      if (currNode.val > this.val) {
        if (currNode.left) {
          parent = currNode;
          currNode = currNode.left;
        }
        else return undefined;
      }
      else if (currNode.val < this.val) {
        if (currNode.right) {
          parent = currNode;
          currNode = currNode.right;
        }
        else return undefined;
      }
      else {
        // incomparable
        throw new Error ("val is incomparable to elements in tree")
      }
    }
    const children = [currNode.left, currNode.right]
    if (children.length === 0) {
      if (parent) {
        if (parent.left === currNode) parent.left = null;
        if (parent.right === currNode) parent.right = null;
      }
      else {
        this.root = null;
      }
    }
    else if (children.length === 1) {
      if (parent) {
        if (parent.left === currNode) parent.left = children[0];
        if (parent.right === currNode) parent.right = children[0];
      }
    }
    else {
      // two children
      // this doesn't actually shuffle the nodes around neatly it just scoops them all
      // up and re-inserts them (inefficient)
      const descendants = this.dfsPreOrder(currNode).map(n => n.val);
      descendants.unshift() // remove currNode
      if (parent) {
        if (parent.left === currNode) parent.left = null;
        else parent.right = null;
        
        this.insertAllRecursively(descendants, parent);
      }
      else {
        this.root = null;
        this.insertAllRecursively(descendants);
      }
      
    }

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
