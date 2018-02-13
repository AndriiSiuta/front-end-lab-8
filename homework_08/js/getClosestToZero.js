function getClosestToZero () {
  let resultNumber = Math.abs(arguments[0] - 0);
  for(let i = 0, len = arguments.length; i < len; i++) {
    if(Math.abs(arguments[i] - 0) < resultNumber) resultNumber = arguments[i];
  }
  return resultNumber;
}
