function isPalindrome(word){
  const chars = word.split("");
  console.log(chars);
  const revChars = chars.reverse();
  console.log(revChars);
  return word === revChars.join("");
}