// palindrome number->number is same when read forward and backwords
function palindromeNumber(x) {
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
}
//121=>["1","2","1"]=>["1","2","1"]=>121(string)=>121
const isPalindrome = palindromeNumber(121);
console.log(isPalindrome); // true

// fibounachi number-> next number is some of previous 2 numbers
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

//fib(3-1)+fib(3-2)=>fib(2)+fib(1)=>fib(2-1)+fib(1)=>fib(1)+fib(1)=>1+1=>2
console.log(fib(3)); //2

// anagram word->create different word with same letters
function isNnagram(s, t) {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
    return true;
  }
}

console.log(isNnagram("anagram", "nagaram")); //true

// two-some->returns two indices whose value adds up to the target
function twoSome(nums, target) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
}

console.log(twoSome([3, 2, 5, 4], 9)); //[2,3]

// Best time to buy and sell stocks
function maxProfit(prices) {
  let globalProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];
      if (currentProfit > globalProfit) globalProfit = currentProfit;
    }
  }
  return globalProfit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 9])); //8
// solve with greedy algorithm
function maxProfit1(prices) {
  let minStockPrice = prices[0] | 0;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minStockPrice) {
      minStockPrice = prices[i];
    }
    profit = Math.max(profit, prices[i] - minStockPrice);
  }
  return profit;
}
console.log(maxProfit1([7, 1, 5, 3, 6, 9])); //8
