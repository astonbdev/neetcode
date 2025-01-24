/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  //digits represents nums in a large integer
  //goal is to increase this number by one
  //so [1,2,3] + 1 should return [1,2,4]
  //[1,2,9] should return [1,3,0]

  //[9,9] should return [1,0,0]

  //so, we need to add the value and then test if there is any carry over
  //we take the carry over and then add it to the previous digit, checking
  //again for carry over
  //iterate until we have done this for all existing digits.
  //if we still have carry over, we then add one to the start of the array
  
    
};