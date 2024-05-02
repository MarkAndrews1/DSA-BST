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
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);

    const insertNode = (node, val) => {
        if (!node) {
            return newNode;
        }

        if (val < node.val) {
            node.left = insertNode(node.left, val);
        } else if (val > node.val) {
            node.right = insertNode(node.right, val);
        }

        return node;
    };

    this.root = insertNode(this.root, val);
    return this;

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
        if (val === current.val) {
            return current;
        } else if (val < current.val) {
            current = current.left;
        } else {
            current = current.right;
        }
    }

    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    const search = (node, val) => {
      if (!node) {
          return undefined;
      }

      if (val === node.val) {
          return node;
      } else if (val < node.val) {
          return search(node.left, val);
      } else {
          return search(node.right, val);
      }
  };

  return search(this.root, val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const values = [];
    const traverse = (node) => {
        if (node) {
            values.push(node.val);
            traverse(node.left);
            traverse(node.right);
        }
    };
    traverse(this.root);
    return values;

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const values = [];

    const traverse = (node) => {
        if (node) {
            traverse(node.left);
            values.push(node.val);
            traverse(node.right);
        }
    };

    traverse(this.root);
    return values;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const values = [];

    const traverse = (node) => {
        if (node) {
            traverse(node.left);
            traverse(node.right);
            values.push(node.val);
        }
    };

    traverse(this.root);
    return values;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const values = [];
    const queue = [];
    
    if (!this.root) {
        return values;
    }
    
    queue.push(this.root);
    
    while (queue.length > 0) {
        const node = queue.shift();
        values.push(node.val);
        
        if (node.left) {
            queue.push(node.left);
        }
        
        if (node.right) {
            queue.push(node.right);
        }
    }
    
    return values;
  }
}

module.exports = BinarySearchTree;
