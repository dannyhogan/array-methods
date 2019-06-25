const { map, filter } = require('./index');

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