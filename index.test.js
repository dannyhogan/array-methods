const { map, filter, findIndex, reduce } = require('./index');

describe('map array function', () => {
  // Test for map function.
  it('returns an array', () => {
    const numbers = [1, 2, 3];
    const mapped = map(numbers, num => num * 2)
    expect(mapped).toEqual(expect.any(Array));
  });

  it('mapped array equals arr', () => {
    const numbers = [1, 2, 3];
    const mapped = map(numbers, num => num * 2);
    expect(mapped).toHaveLength(numbers.length);
  });

  it('squares array using map function', () => {
    const numsArray = [2, 4, 6];
    const squared = map(numsArray, num => num * num);
    expect(squared).toEqual([4, 16, 36]);
  });
});

describe('filter array function', () => {
  it('returns an array', () => {
    const numbers = [1, 2, 3];
    const filtered = filter(numbers, num => num * 2)
    expect(filtered).toEqual(expect.any(Array));
  });

  it('filtered array equals arr', () => {
    const numbers = [1, 2, 3];
    const filtered = filter(numbers, num => num * 2);
    expect(filtered).toHaveLength(numbers.length);
  });

  it('returns filtered array from callback if truthy', () => {
    const nums = [1, 3, 4, 5, 6];
    const filtered = filter(nums, num => num > 3);
    expect(filtered).toEqual([4, 5, 6]);
  })

  it('returns filtered array', () => {
    const words = ['hello', 'the', 'giraffe'];
    const filtered = filter(words, word => word.length > 3);
    expect(filtered).toEqual(['hello', 'giraffe']);
  })
});

describe('indexOf array function' , () => {
  it('return a number', () => {
    const nums = [1, 2, 3];
    const index = findIndex(nums, num => num > 2)
    expect(index).toEqual(expect.any(Number));
  });

  it('returns index of first met condition in array', () => {
    const nums = [1, 2, 3];
    const index = findIndex(nums, num => num > 2)
    expect(index).toEqual(2);
  });

  it('returns -1 if no condition met in array', () => {
    const nums = [1, 2, 3];
    const index = findIndex(nums, num => num > 3)
    expect(index).toEqual(-1);
  });
});

describe('reduce array function', () => {
  it('iterates through array and invokes callback', () => {
    const numbers = [1, 2, 3]
    const callback = jest.fn();
    reduce(numbers, callback);

    expect(callback).toHaveBeenCalledTimes(numbers.length);
  });

  it('iterates through array and updates accumulator with result of callback', () => {
    const numbers = [1, 2, 3];
    const sum = reduce(numbers, (acc, item) => acc + item, 0)
    expect(sum).toEqual(6);
  });

  
});