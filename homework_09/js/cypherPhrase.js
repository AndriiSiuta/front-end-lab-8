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
