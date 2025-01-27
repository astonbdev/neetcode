/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
*/

/**
 * this question might be asking if we were to order these trees, would they be palindromic?
 * in the case of a tree like the example:
 * 
 *              1
 *            /  \
 *           2    2
 *         /  \  /  \
 *        3   4 4    3
 * 
 * an in order traversal would yield:
 * 
 * 3 2 4 for the left subtree of the root
 * 4 2 3 for the right subtree of the root
 * 
 * which is indeed the reverse of the previous
 * 
 * so we want to test that the left tree is the same order of the other tree reversed.
 */

var isSymmetric = function(root) {
  //if root is null, true since a 0 depth tree is symmetrical
  // if root has no left or no right sub tree, then its immediately false

  if(root === null) return true;
  if(!root.left || !root.right) return false;

  const left = inOrderTraverse(root.left);
  const right = inOrderTraverse(root.right);

  if(left.length !== right.length) return false;

  const leftValues = left.filter((e) => typeof e !== "boolean");
  const rightValues = right.filter((e) => typeof e !== "boolean");

  const leftStructures = left.filter((e) => typeof e === "boolean");
  const rightStructures = right.filter((e) => typeof e === "boolean");
  rightStructures.map((e)=>!e);


  const symStructure = testStructure(leftStructures, rightStructures);
  const symValues = testValues(leftValues, rightValues);

  if(symStructure && symValues) return true;
  return false;
};

function testValues(left, right){
  right = right.reverse();

  for(let i = 0; i < left.length; i++){
    if(left[i] !== right[i]) return false;
  }

  return true;
}

function testStructure(left, right){
  right = right.map((e)=>!e);

  for(let i = 0; i < left.length; i++){
    if(left[i] !== right[i]) return false;
  }

  return true;
}

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

true, false, false, false
false, true, false, false