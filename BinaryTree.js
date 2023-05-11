import Array from './Array.js';

class Tree {
    constructor(treeArray, root) {
        this.treeArray = treeArray;
        this.root = treeArray[0];
    }

    // Underscores are used to mark elements as private.
    get treeArray() {
        return this._treeArray;
    }

    get root() {
        return this._root;
    }

    checkIfNodeIsFull(node) {
        if (node.left_child != null && node.right_child != null) {
            return true;
        } else {
            return false;
        }
    }

    addNode(datum) {

        currentNode = this.treeArray[this.treeArray.length()];

        if (this.checkIfNodeIsFull(currentNode) == true) {
            if ()
        } else {

        }
    }
}


class TreeNode {
    constructor(datum, left_child, right_child) {
        this.datum = datum;
        this.left_child = left_child;
        this.right_child = right_child;
}

}

// The static keyword defines a static method or field for a class. 
// Static properties (fields and methods) are defined on the class 
// itself instead of each instance.