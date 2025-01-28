//Write a function given nums, it is non empty and only contains integers
//every element of nums appears twice, except for one, find it

//requirements: linear runtime and constant memory

// [1,2,1]
// [1,1,2]

// [3,3,4,5,6,4,5]

//some simple possible solutions that *don't* meet our requirements
// 1. sort the array in ascending order, iterate, and find when the current idx or pointer
// does not repeat . Not linear runtime, but is constnat memory

// 2. frequency counter
// we can't have maps or sets

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let uniqueNum = 0;

    for(let num of nums){
      uniqueNum ^= num;
    }

    return num;
};