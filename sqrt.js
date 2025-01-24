function sqrt(val){
  if(val === 0) return 0;
  //start by finding the closest integer that when multiplied by itself is 
  //LESS than the value, but not over it

  let squareNum = 0;

  for(let i = 1; i*i <= val;  i++){
    squareNum = i;
  }

  return squareNum;

}