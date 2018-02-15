callback = (el) => {
  return el;
};

forEach = (array, callback) => {
  for(let i = 0, len = array.length; i < len; i++) {
      array[i] = callback(array[i]);
  }
};
