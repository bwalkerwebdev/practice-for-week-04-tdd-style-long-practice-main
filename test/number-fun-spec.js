// Your code here
const { expect } = require('chai');
const { returnsThree, reciprocal} = require('../problems/number-fun')

describe("returns 3", function () {
  it('should return 3', function () {
    expect(returnsThree()).to.equal(3);
  });
});

describe("reciprocal with proper inputs", function () {
  it('should return the reciprocal of the number', function () {
    expect(reciprocal(10)).to.equal(1 / 10);
  })
})

describe("reciprocal errors", function () {
  it('should throw an error if invalid input is given', function () {
    expect(() => { reciprocal(0) }).to.throw(TypeError);
    expect(() => { reciprocal(-1) }).to.throw(TypeError);
    expect(() => { reciprocal(1000001) }).to.throw(TypeError);
    expect(() => { reciprocal("string") }).to.throw(TypeError);
  })
})
