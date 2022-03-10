function returnsThree() {
  // Your code here
  return 3
}

function reciprocal(n) {
  // Your code here
  if (n <= 0 || typeof n !== 'number' || n > 1000000) {
    throw new TypeError();
  }
  return 1/n
}

module.exports = {
  returnsThree,
  reciprocal
};
