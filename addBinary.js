/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if(a === "0" && b === "0") return "0";
  
  const intA = binaryToInt(a);
  const intB = binaryToInt(b);

  const sum = intA + intB;

  return intToBinary(sum);
};

function addBinaryDumb (a,b){
  const long = a.length >= b.length ? a : b;
  const short = a.length < b.length ? a : b;

  let out = long;

  //start by iterating over out shorter string from the end
  for(let i = short.length - 1; i >= 0; i--){
    //using the value of the current iteration character, iterate over the longer string
    //we will flip 1 to 0 or 0 to 1 based on the results of what is happening
    let carry = short[i] === "1" ? true : false;

    for(let j = ((long.length - 1) - i); j >= 0; j--){
      if(carry){
        if(long[j] === "1"){
          out[j] = "0";
        }
        else{
          carry = false
          out[j] = "1"
          break;
        }
      }
    }

    out = long;
    if(carry) out = "1" + out;
  }

  return out;
}

addBinaryDumb("1", "10");

function binaryToInt(binaryStr) {
  //iterate over string starting from the end
  //keep a count of the current exponent.
  //keep a count of the current value
  //as we iterate, add to our tracked value, the value of the
  //current exponent count by 2 if the value is 1
  //if the value is 0, skip

  let exponent = 0;
  let sum = BigInt(0);

  for(let i = binaryStr.length - 1; i >= 0; i-- ){
      if(binaryStr[i] === "1") sum += BigInt(2**exponent);
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
  let exponent = Math.floor(Math.log2(value.toString()));
  let binaryStr = "";
  let workingValue = value;

  for(let i = exponent; i >= 0; i--){
    if(2**i <= workingValue){
      binaryStr += "1";
      workingValue -= BigInt(2**i);
    } 
    else{
      binaryStr += "0";
    }
  }

  return binaryStr;
}


var addBinary = function(a, b) {
  let carry = 0;
  let res = '';
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry) {
      let sum = carry;
      if (i >= 0) sum += parseInt(a[i]);
      if (j >= 0) sum += parseInt(b[j]);

      res = (sum % 2) + res;
      carry = Math.floor(sum / 2);

      i--;
      j--;
  }

  return res;   
};