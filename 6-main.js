const { slice } = require('./1-slice');
const { merge }= require('./2-merge');
const { generateUnorderedArray } = require('./4-generate-unordered-array');

function sort(array) {
  if (array.length <= 1) { //3
    return array; // 1 
  }
  const middle = Math.floor(array.length / 2); //3
  const left = slice(array, 0, middle); // O(n) + 2 
  const right = slice(array, middle, array.length); // O(n) + 3        
  return merge(sort(left), sort(right)); // O(n) * array.length
}

const array = generateUnorderedArray(10); // O(n^2) + 1
console.log(array); // 1
console.log(sort(array)); // 1 + O(n^2)


/*


sort() sans le return = 3 + 1 + 3 +O(n) + 3 = O(n) 
sort() avec return O(n) * array.length = O(n^2)

O(n^2) + O(n^2) + 1 + 1 + O(n^2) 
O(n^2) + O(n^2) + O(1) + O(n^2) 

complexité = O(n^2)


*/
