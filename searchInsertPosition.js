/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  //start by identifying the center idx of our nums

  //determine if the value at the idx, is the target.
    //if it is, return the idx
    //otherwise 2 options
    //the target is greater, and we switch the currIdx to be the center of the RIGHT
    //side of the currIDx
    //the target is lesser, and we switch the currIdx, to be the center of the LEFT

    let currIdx = 0;
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
      //with how this is written, this returns the idx of the SUB ARRAY
      //NOT THE IDX OF THE *ACTUAL* array
      currIdx = Math.floor((right - left) / 2);
      if(nums[currIdx] === target) return currIdx;

      if(target < nums[currIdx]){
        right = currIdx - 1;
      }
      else{
        left = currIdx + 1;
      }
    }

    return left;
};