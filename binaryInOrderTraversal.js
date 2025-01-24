/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if(root === null) return [];
    //in order traversal is defined as the following steps:
    //visit the left subtree
    //visit the root
    //visit the right subtree

    //most tree problems are really just recursive problems.
    const out = [];
    function traversalHelper(root, out){
      const left = root.left;
      const right = root.right;

      if(left !== null) traversalHelper(left, out)
      out.push(root.val);
      if(right !== null) traversalHelper(right, out);
    }

    traversalHelper(root, out)

    return out;
};