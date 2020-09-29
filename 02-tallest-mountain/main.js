/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/

// YOUR CODE HERE
let mountainheights = [200, 100, 300, 500, 150]
let tallestmountain = 0;
let index = 0;

while (index <mountainheights.length) {
   //console.log(mountainheights[index]);
   if(tallestmountain < mountainheights[index]) {
      tallestmountain = mountainheights[index]
   }
   index = index +1
}
console.log(tallestmountain);