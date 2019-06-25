function map(array, cb) {
    let newArray = [];
    for (let i=0; i < array.length; i++) {
      newArray[i] = cb(array[i]);
    }
    return newArray;
}

//Define new filtered array and return it
//Iterate over arr, set filted equal to it
//Add conditional for callback

function filter(array, cb) {
  let filtered = [];
  for(let i = 0; i < array.length; i++) {
    if(cb(array[i])) {
      filtered[i] = array[i];
    }
  }
  return filtered;
}

module.exports = { map, filter }


