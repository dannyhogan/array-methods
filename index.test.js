const { map } = require('./index');

describe('test array method functions', () => {

  // Test for map function.
  it('squares array using map function', () => {
    const numsArray = [2, 4, 6];
    const squared = map(numsArray, num => num * num);
    expect(squared).toEqual([4, 16, 36]);
  });

  // Test for 


});