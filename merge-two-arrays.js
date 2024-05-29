console.log("hello leetcode");

// Q1
// Merge Sorted Array in non-decreasing order
// https://leetcode.com/problems/merge-sorted-array/description/

function merge(num1, m, num2, n) {
  if (num1.length < m + n) return;
  if (num2.length < n) return;
  if (m + n < 1 || m + n > 200) return;

  const temp = num1
    .splice(0, m) // only first m values
    .concat(num2) // merging both arrays
    .sort(function (a, b) {
      // sorting in non decreasing order
      return a - b;
    });
  temp.forEach((value, index) => {
    // pusing value in num1 of temp array,
    num1[index] = value;
  });
}

// test cases
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1], 1, [], 0);
merge([0], 0, [1], 1);
