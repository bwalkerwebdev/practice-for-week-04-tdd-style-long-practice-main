function myMap(inputArray, callback) {
  let newArr = [];
  for (let i = 0; i < inputArray.length; i++) {
    newArr.push(callback(inputArray[i]));
  }
  return newArr;
}

// console.log(myMap([1,2,3], function(ele) {
//   return ele + 1;
// }))

module.exports = myMap;