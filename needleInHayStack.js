// given two input strings, needle and haystack, 
// return the first occurence of the needle input in the haystack input
// if there is no occurence, return -1

//iterate over the haystack string using a pointer
//as we move our pointer, check that the value is equivalent to the first character of
//our needle string
//if it is equivalent, increment a count variable, and then move the pointer up one
//check the next pointer character against the new character indicated by counter

//if ever the two characters are not equal, reset the counter, and increase the pointer.

//if pointer ever becomes more than the length of haystack - length of needle,
//the string does not exist and so we return -1.

//if ever our count equals the length of the needle string, return starting index
//keep track of the index we are starting our search, and return that.


//one, xxonexx

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//"mississippi"
//"issip"
var strStr = function(haystack, needle) {
  let startIdx = 0;
  let pointer = 0;

  while(pointer < haystack.length){
    let count = 0;
    
    for(const char of needle){
      if(char === haystack[pointer+count]){
        count++;
        if(count === needle.length) return startIdx
      }
      else{
        break;
      }
    }

    pointer++;
    startIdx = pointer;
  }

  return -1;
};