/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//list 1, 2, 2, 4
var deleteDuplicates = function(head) {
  if(head === null) return head;
  let currNode = head;

  while(currNode.next !== null){
    if(currNode.val === currNode.next.val){
      currNode.next = currNode.next.next;
    }
    else{
      currNode = currNode.next;
    }
  }

  return head
};

//The hard part about this problem is just dealing with the functions to alter our list
//Plan is to define those functions first, and then just use a simpler algo
//to get to where we want to be


//REMOVING AN ELEMENT FROM THE LIST
//This function will take a value to remove
//it will be the value indicated as an idx in input
//in order to get there, it will be necessary to have a traversal method, and since
//we will probably need this a lot, let's write that too

function removeElement(idx, listHead){
  const prevNode = traverse(idx - 1, listHead);

  //this solves the case of what happens if we are in the middle
  //normally, in a whole class, we'd have a lot to update, like tails and heads
  //but in this problem, we just have a node chain
  prevNode.next = prevNode.next.next;
}
//to actually remove ele, we will need to traverse to the penultimate node, the one before we want
//to remove



//TRAVERSING
//traverses to the indicated idx in the list (0 indexed)
// returns the corresponding node object

function traverse(idx, listHead){
  if(idx === 0) return listHead;

  let currNode = listHead;

  for(let i = 0; i < idx; i++){
    currNode = currNode.next;
    if(currNode === undefined) throw new Error("idx is out of bounds of length of list");
  }

  return currNode;
}