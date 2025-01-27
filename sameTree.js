/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/

/**
 * we have 2 trees
 * We can use any normal tree traversal that will evaluate the nodes of the tree in the same order
 * then, we can compare the two outputs. If they are identical, we return true, else false
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if(p === null && q === null) return true;
    if(p === null || q === null) return false

    const pOrder = inOrderTraverse(p);
    const qOrder = inOrderTraverse(q);

    if(pOrder.length !== qOrder.length) return false;

    for(let i = 0; i < pOrder.length; i++){
      if(pOrder[i] !== qOrder[i]) return false;
    }

    return true;
};

function inOrderTraverse(root, out = []){

  if(root.left !== null){
    out.push(true);
    inOrderTraverse(root.left, out);
  } 
  else{
    out.push(false);
  }
  out.push(root.val)
  if(root.right !== null){
    out.push(true);
    inOrderTraverse(root.right, out);
  } 
  else{
    out.push(false);
  }

  return out;
}