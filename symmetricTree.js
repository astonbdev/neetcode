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