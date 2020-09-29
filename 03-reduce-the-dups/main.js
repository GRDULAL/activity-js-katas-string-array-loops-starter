/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/

// YOUR CODE HERE
const redundantarray = [1, 1, 2, 3, 3, 4, 2, 1, ]
let newarray = [];
let index = 0;

while (index < redundantarray.length) {
  //console.log(redundantarray[index]);
  let currentnumber = redundantarray[index]
  if (newarray.includes(currentnumber) === false) {
    newarray.push(currentnumber)
  }
  index = index + 1;

}
console.log(redundantarray);
console.log(newarray);
//[1,2,3,4]