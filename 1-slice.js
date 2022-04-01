function slice(array, start, end) {
  let slicedArray = []; // 1
  for (let i = start; i < end; i++) { // 1 + 1 + 1 + 1 + 1 + 1 = 6 
    slicedArray.push(array[i]);// 1 + 1 + 1 + 1 = 4 
  }
  return slicedArray; // 1
}

module.exports = { slice };


/*

la boucle tourne end - start fois, soit n = end - start
on an => n * (6+4) + 1 
      => n * (10) + 1
      => O(n) * (O(1) + (O(1))
      comme O(1) << O(n), la compléxité de cette algorithme et O(n)

*/
