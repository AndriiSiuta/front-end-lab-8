function getMin () {
    let min = 0;
    for(let i = 0, len = arguments.length; i < len; i++) {
        if(arguments[i] < min) min = arguments[i];
    }
    return min;
}
