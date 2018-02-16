decypherPhrase = (obj, str) => {
    const newObj = {};
    Object.keys(obj).forEach(key => {
       newObj[obj[key]] = key;
    });
    return cypherPhrase(newObj, str);
};
