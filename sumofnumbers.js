
const testNums = [1, 2, 3, 4];

function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNums));

function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(testNums));

function sumRecursion(nums) {
  return (nums.length === 0) ? 0 : nums[0] + sumRecursion(nums.slice(1));
}

console.log(sumRecursion(testNums));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (x, y) { return x + y; }, 0);
}

console.log(sumTheSimpleWay(testNums));
