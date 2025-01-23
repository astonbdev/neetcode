/**
 * @param {number[]} nums
 * @return {number}
 */

//   1
//[0,1,1,2,2,3,3,4,_,_]
var removeDuplicates = function (nums) {
  if(nums.length == 1) return 1;

  let pointer = 0;
  let k = 0;

  while (pointer < nums.length - 1) {
    if(nums[pointer] === "_"){
      pointer++;
      continue;
    }
    if(nums[pointer] === nums[pointer+1]){
      nums.splice(pointer+1, 1);
      nums.push("_");
    }
    else{
      pointer++;
      k++;
    }
  }

  return k;
};