cypherPhrase = (obj, str) => {
    str = str.split('');
    return getTransformedArray(str, el => {
        Object.keys(obj).forEach(key => {
            if (el === key) {
                el = obj[el];
            }
        });
        return el;
    }).join('');
};

let charactersMap = {a: `o`, c: `d`, t: `g`}
cypherPhrase(charactersMap, `kitty cat`); // -> “kiggy dog”
