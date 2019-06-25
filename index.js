function map(array, cb) {
    let newArray = [];
    for (let i=0; i < array.length; i++) {
      newArray[i] = cb(array[i]);
    }
    return newArray;
}

function filter(array, cb) {
  let filtered = [];
  for(let i = 0; i < array.length; i++) {
    if(cb(array[i])) {
      filtered[filtered.length] = array[i];
    }
  }
  return filtered;
}

function findIndex(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      return i;
    }
  }
  return -1;
}

module.exports = { map, filter, findIndex }


