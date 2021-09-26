/* 
1. map( )
2. filter( )
3. sort( )
4. forEach( )
5. concat( )
6. every( )
7. some( )
8. includes( )
9. join( )
10. reduce( )
11. find( )
12. findIndex( )
13. indexOf( )
14. fill( )
15. slice( )
16. reverse( )
17. push( )
18. pop( )
19. shift( )
20. unshift( )
21. splice( )
*/

// Array Patterns & algorithum
// -2 pointers
// -sliding window
// -backtracking

const array = Array(5)
  .fill(0)
  .map((_, i) => i);
const tempArray = Array(3)
  .fill(0)
  .map((_, i) => i);
tempArray.sort((a, b) => b - a); //modifies the array
console.log("sorted temp array", tempArray);
console.log("array.concat(arrayTemp) :>> ", tempArray.concat(array, tempArray)); //returns the new array
console.log(
  "array.every((ele) => ele % 2 === 0) :>> ",
  array.every((ele) => ele % 2 === 0)
);
console.log(
  "array.some((ele) => ele % 2 === 0) :>> ",
  array.some((ele) => ele % 2 === 0)
);
console.log("array.includes(3) :>> ", array.includes(3));
console.log("array.includes(3,4) :>> ", array.includes(3, 4));
console.log("array.indexOf(2) :>> ", array.indexOf(2)); // for primitive types, expects a value as first parameter.
console.log(
  "array.findIndex((ele) => ele === 2) :>> ",
  array.findIndex((ele) => ele === 2)
); // for non primitive types, expects a callback as first parameter
console.log("Array(5).fill(0) :>> ", Array(5).fill(0)); //returns the modified array
console.log("array.shift() :>> ", array.shift()); // shifts the postion aka pointer
console.log("array.unshift(6, 7) :>> ", array.unshift(6, 7)); // unshifts the postion aka pointer
console.log("array :>> ", array);
array.splice(2, 0, 0); // inserts '0' in 2nd index without removing any elements and return [] as no elements were removed
console.log("array :>> ", array);
array.splice(2, 2, 8); // inserts '8' in 2nd index with removing two elements and return [removed elements] as 2 elements were removed
console.log("array :>> ", array);
array.splice(3, 1); // [6,7,8,3,4]
console.log("array :>> ", array);
array.reverse(); // modifies the array
console.log("array :>> ", array);
console.log(
  "array.slice(2, array.length + 1) :>> ",
  array.slice(2, array.length + 1)
);

// 2 pointers
/**
 * Find two numbers that add up target.
 * @param {number[]} arr - The array of integers
 * @param {number}target - The target
 * @returns {number[]} - array with the values that add up to target.
 */
function twoSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum > target) {
      right--;
    } else left++;
  }
}
console.log(
  "twoSum([1, 2, 3, 4, 5, 6], 7) :>> ",
  twoSum([1, 2, 3, 4, 5, 6], 7)
);

function maxSum(arr, k) {
  let left = k - 1;
  let right = arr.length - 1;
  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  let max = sum;

  for (let i = 0; i < k; i++) {
    sum += arr[right--] - arr[left--];
    max = Math.max(max, sum);
  }

  return max;
}
console.log(
  "maxSum([3, 10, 12, 4, 7, 2, 100, 1], 3) :>> ",
  maxSum([1, 200, 1], 1)
);

/**
 * Find two numbers that add up target.
 * @param {number[]} arr - The array of integers
 * @returns {number} - max of consecutive subarray
 */
function maxSubArray(arr) {
  let max = -Infinity;
  let local = 0;

  arr.forEach((n) => {
    local = Math.max(n, local + n);
    max = Math.max(max, local);
  });

  return max;
}
maxSubArray([-2, 1, -3, 4, -1, 3, 1]);

/**
 * Find two numbers that add up target.
 * @param {number[]} arr - The array of integers
 * @returns {number} - max of consecutive subarray
 */
function maxProfit(arr) {
  let profit = 0;
  let buy = Infinity;
  for (let index = 0; index < arr.length; index++) {
    buy = Math.min(buy, arr[index]);
    profit = Math.max(profit, arr[index] - buy);
  }
  return profit;
}

function maxProfit(prices) {
    // end::description[]
    // tag::solution[]
      let max = 0;
      let buy = Infinity;
      for (let i = 0; i < prices.length; i++) {
        buy = Math.min(buy, prices[i]);
        max = Math.max(max, prices[i] - buy);
      }
      return max;
    }

console.log("maxProfit([5, 10, 5, 10]) :>> ", maxProfit([1, 2, 3]));
