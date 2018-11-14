//Use reduce to create a function that takes an array of numbers
//or number-like-strings and returns their sum.

function sum(nums) {
  if (nums.length === 0) return 0;
  const total = nums.reduce((total, amount) => total + amount);
  return total;
}

function checkLoggedInRecently(users) {
  if (users.length === 0) {
    return [];
  }
  let haveLoggedIn = users.reduce(function(acc, obj) {
    acc[obj.loggedInRecently] === true;
    {
      acc.push(obj.username);
    }
    return acc;
  }, {});
  return haveLoggedIn;
}

function flattenArray(arr) {
  if (arr.length === 0) {
    return [];
  }
  let flattened = arr.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  return flattened;
}

function tallyObject(desserts) {
  if (desserts.length === 0) {
    return {};
  }
  let total = desserts.reduce(function(acc, val) {
    if (!acc[val]) acc[val] = 1;
    else acc[val]++;
    return acc;
  }, {});
  return total;
}

module.exports = { sum, checkLoggedInRecently, flattenArray, tallyObject };
