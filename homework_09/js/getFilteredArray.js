predicateFunc = (elem) => {
    return elem > 3;
};

getFilteredArray = (array, callback) => {
    let result = [];
    forEach(array, el => {
       if(callback(el)) {
           result.push(el)
       }
    });
    return result;
};
