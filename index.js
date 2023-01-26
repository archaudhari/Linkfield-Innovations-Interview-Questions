////Interview Questions ask during an interview

//1.Sort array of objects.
// You can use the `sort` method on the array in JS to sort its elements. By default, it sorts the elements alphabetically for stings and numerically for numbers.
// let numbers = [4, 2, 5, 1, 3];
// numbers.sort();
// console.log(numbers); // [1, 2, 3, 4, 5]

//You can also provide a compare function to customize the sorting behavior.
// let fruits = ['apple', 'banana', 'cherry'];
// fruits.sort(function(a, b){
//   let x= a.toLowerCase();
//   let y= b.toLowerCase();
//   if (x < y) {return -1;}
//   if (x > y) {return 1;}
//   return 0;
// });
// console.log(fruits); // ['apple', 'banana', 'cherry']

// You can also use arrow function with sort method
// let fruits = ['apple', 'banana', 'cherry'];
// fruits.sort((a, b) => a.localeCompare(b));
// console.log(fruits); //['apple', 'banana', 'cherry']

// You can also use Array.prototype.sort with a compare function
// let fruits = ['apple', 'banana', 'cherry'];
// fruits.sort(Array.prototype.sort.compare = function(a, b){
//   if (a > b) { return 1;}
//   if (a < b) { return -1;}
//   return 0;
// });
// console.log(fruits); //['apple', 'banana', 'cherry']

//2.Create new array of objects after performing arithmetic on a given array of Objects
let numbers = [3, 25, 100];
let doubles = numbers.map(function (num) {
  return num * 2;
});
