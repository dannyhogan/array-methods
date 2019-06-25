const { map, filter } = require('./index');

describe('map array function', () => {
  // Test for map function.
  it('squares array using map function', () => {
    const numsArray = [2, 4, 6];
    const squared = map(numsArray, num => num * num);
    expect(squared).toEqual([4, 16, 36]);
  });
});

describe('filter array function', () => {
  it('returns an array', () => {
    const numbers = [1, 2, 3];
    const filtered = filter(numbers, num => {num * 2})
    expect(filtered).toEqual(expect.any(Array));
  });

  
});