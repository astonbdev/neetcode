// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.

//requirements return boolean, where bool is true if the input number is happy
// and false if the input number is NOT happy

//19
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1
//return true

//2
// 2^2 = 4
// 4^2 = 16
// 1^2 + 6^2 = 37
// 3^2 + 7^2 = 58
// 5^2 + 8^2 = 89
// 64 + 81 = 145
// 1 + 16 + 25 = 42
// 16 + 4 = 20
// return false


//to solve this, we need to identify the following:
// are we in a loop?
// or 
// have we reached the target happy number?

//this means we need to remember the numbers/digits that we have seen previously
//always a good idea to use sets in this case.

//initialize an empty set
//initialize currNum to the input
//add the original input to that set
//start a loop, with an exit condition of current num === 1
//for each iteration of our loop:
// start by breaking apart the currNumber into its digits
// can use toString for this.
// convert each digit into its number counterpart
//square them all and add
// check if set has our number, if it does, immediately return false
// add the seen number to our set
//
// after breaking loop, currnumber is equal to 1 and thus a happy number, return true


//19
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1
//return true

//2
// 2^2 = 4
// 4^2 = 16
// 1^2 + 6^2 = 37
// 3^2 + 7^2 = 58
// 5^2 + 8^2 = 89
// 64 + 81 = 145
// 1 + 16 + 25 = 42
// 16 + 4 = 20
// return false

function happyNumber(num){
  const seen = new Set();
  let currNum = num;
  seen.add(currNum);

  while(currNum !== 1){
    const digits = getDigits(currNum);

    let sum = 0;

    for(let num of digits){
      sum += num * num;
    }

    if(seen.has(sum)) return false;

    seen.add(sum);
    currNum = sum;
  }

  return true;
}

function getDigits(num){
  const chars = num.toString().split("");

  const digits = chars.map((c) => Number(c));
  
  return digits;
}