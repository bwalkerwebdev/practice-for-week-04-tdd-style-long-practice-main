// Your code here

const { expect } = require("chai")
const reverseString = require("../problems/reverse-string")

it('should reverse a string', function() {
  expect(reverseString('fun')).to.equal('nuf');
})