/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  //start by converting the binary string to int
  //add
  //convert int to binary number
};

function binaryToInt(binaryStr) {
  //iterate over string starting from the end
  //keep a count of the current exponent.
  //keep a count of the current value
  //as we iterate, add to our tracked value, the value of the
  //current exponent count by 2 if the value is 1
  //if the value is 0, skip

  let exponent = 0;
  let sum = 0

  for(let i = binaryStr.length - 1; i >= 0; i-- ){
      if(binaryStr[i] === "1") sum += 2**exponent;
      exponent += 1;
  }

  return sum;
}

function intToBinary(value) {
  const isOdd = value % 2 ? true : false;
  const workingValue = isOdd ? value - 1 : value;

}