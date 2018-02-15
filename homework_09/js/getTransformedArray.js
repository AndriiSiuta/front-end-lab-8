decrement = (el) => {
    return el - 1;
};

getTransformedArray = (array, callback) => {
    let result = [];
    forEach(array, (el) => {
        result.push(callback(el))
    });
    return result;
};

//getTransformedArray([1,2,3], decrement)
