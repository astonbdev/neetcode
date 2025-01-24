/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const intA = binaryToInt(a);
  const intB = binaryToInt(b);

  const sum = intA + intB;

  return intToBinary(sum);
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
  //start with a sum equal to value
  //create an exponent variable
  //this will keep track of the highest value we need to care about in our str
  //once we know this, we can iterate over a working value, subtracting the exponent from
  //our input value. if the current exponent value is *less* than the working value, subtract it.
  //otherwise, decrease the exponent value and then check again.
  //if it can be subtracted, then we append to a string the value "1". if we can't "0"

  //this gets us the maximum exponent we would need to achieve the input value
  //we can then derive the value of our binary string starting with this exponent
  let exponent = Math.floor(Math.log2(value));
  let binaryStr = "";
  let workingValue = value;

  for(let i = exponent; i >= 0; i--){
    if(2**i < value){
      binaryStr += "1";
      workingValue -= 2**i;
    } 
    else{
      binaryStr += "0";
    }
  }

  return binaryStr;
}

intToBinary(63);