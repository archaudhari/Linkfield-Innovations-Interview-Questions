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

//You can use the map() method to create a new array of objects, where each object is created by performing arithmetic on the corresponding object in the original array.

// let originalArray = [
//   { x: 2, y: 3 },
//   { x: 4, y: 5 },
//   { x: 6, y: 7 },
// ];
// let newArray = originalArray.map(function (obj) {
//   return { x: obj.x * 2, y: obj.y + 1 };
// });
// console.log(newArray); // [{x: 4, y: 4}, {x: 8, y: 6}, {x: 12, y: 8}]

// You can use arrow function with map method

// let originalArray = [{x: 2, y: 3}, {x: 4, y: 5}, {x: 6, y: 7}];
// let newArray = originalArray.map(obj =>({x: obj.x * 2, y: obj.y + 1}));
// console.log(newArray); // [{x: 4, y: 4}, {x: 8, y: 6}, {x: 12, y: 8}]

// You can also use forEach to iterate over the array and create new array of objects

// let originalArray = [
//   { x: 2, y: 3 },
//   { x: 4, y: 5 },
//   { x: 6, y: 7 },
// ];
// let newArray = [];
// originalArray.forEach((obj) => newArray.push({ x: obj.x * 2, y: obj.y + 1 }));
// console.log(newArray); // [{x: 4, y: 4}, {x: 8, y: 6}, {x: 12, y: 8}]

// Remove Duplicates from an array without using set in JS

// In JavaScript, one way to remove duplicates from an array without using a set is to use the filter() method along with the indexOf() method. The filter() method creates a new array with all elements that pass the test implemented by the provided function. The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. By using these methods together, you can filter out duplicates from the original array.

// Here is an example implementation in JavaScript:

// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }

// To remove duplicates from an array without using the filter function, you can use a combination of a for loop and an object to keep track of unique values. Here is an example in JavaScript:

function removeDuplicates(arr) {
  var unique = {};
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!unique[arr[i]]) {
      newArr.push(arr[i]);
      unique[arr[i]] = true;
    }
  }
  return newArr;
}

// Remove duplicates from an array without using filter

function removeDuplicates(arr) {
  var unique = {};
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (!unique[arr[i]]) {
      newArr.push(arr[i]);
      unique[arr[i]] = true;
    }
  }
  return newArr;
}
