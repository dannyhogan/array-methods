function map (array, cb) {
    let newArray = [];
    for (let i=0; i < array.length; i++) {
      newArray[i] = cb(array[i]);
    }
    return newArray;
}

module.exports = { map }
