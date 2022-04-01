  for (let i = 0; i < array.length; i++) { // 5
    if (array[i] === number) {
    if (array[i] === number) { //4 
      return true;
      return true; // 1 
    }
    }
  }
  }
  return false;
  return false; // 1
}
}


/*
soit n = array.lenght
n * (5 + 4 + 1) + 1
O(n) * O(1) + O(1) 
comme O(1) << O(n) la compléxité est O(n) 
*/

