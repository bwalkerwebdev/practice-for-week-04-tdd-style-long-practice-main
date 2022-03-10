const chai = require("chai");
const expect = chai.expect;
const myMap = require("../problems/my-map");
const spies = require("chai-spies");
chai.use(spies);

describe('myMap works as intended', function() {
  let testArr;
  let cb;
  beforeEach(function() {
    testArr = [1,2,3];
    cb = (element) => element + 1;
  })
  it('should return new array with the callback called on each element', function () {
    expect(myMap(testArr, cb)).to.eql([2, 3, 4]);
  })
  it('should not mutate the passed in array argument', function() {
    myMap(testArr, cb);
    expect(testArr).to.eql([1,2,3]);
  })
  it('should not call the built-in array.map', function() {
    myMap(testArr, cb);
    // expect(testArr.map).to.not.exist;
    const spy = chai.spy.on(testArr, 'map');
    expect(spy).to.not.have.been.called();
  })
  it('should invoke the passed-in callback once for each element in the passed in array argument', function() {
    const func = () => 1;
    const spy = chai.spy(func);
    myMap(testArr, spy);
    expect(spy).to.have.been.called.exactly(testArr.length);
  })
})
