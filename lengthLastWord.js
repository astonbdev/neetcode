/**
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
**/

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(string){
  // const words = 
  //start by splitting the string on empty spaces " "
  //that will give some output that looks like: [fly, me, to, the moon, "", ""]
  //iterate backwards in the array, until we get a value with length > 0
  //return the length of the word at the corresponding idx

  const words = string.split(" ");
  let lastIdx = words.length - 1;

  for(let i = lastIdx; i > 0; i--){
    if(words[i].length > 0) return words[i].length;
  }

  return words[0].length;
}
