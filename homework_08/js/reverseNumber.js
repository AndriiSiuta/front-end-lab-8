function reverseNumber () {
    let result = [];
    do {
        result.push(arguments[0] % 10);
        arguments[0] = parseInt(arguments[0] / 10);
    } while (arguments[0] > 0);
    console.log(result)
    //toDo
    for(let i = 0, len = result.length; i < len ;i++) {
        console.log(result[i], result[i+1])
        if(result[i] == 0 && result[i+1] === 0) {
            result.shift(result[i]);
        }
    }
    console.log(result);
    return result;
}

reverseNumber(1000)
//10010 -> 01001
//1000 -> 1 0001
