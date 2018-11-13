//Use reduce to create a function that takes an array of numbers
//or number-like-strings and returns their sum.

function sum(nums) {
  if (nums.length === 0) return 0;
  const total = nums.reduce((total, amount) => total + amount);
  return total;
}

//How would we solve the problem of having an array of users and creating
//an array of usernames of people who have logged in recently?  How can
//we use reduce to do this ?

function checkLoggedInRecently(users) {
  if (users.length === 0) {
    return [];
  }
  const haveLoggedIn = users.reduce((acc, obj) => {
    acc[obj.loggedInRecently] = true;
    return acc;
  }, {});
  https://medium.com/front-end-hacking/stop-array-foreach-and-start-using-filter-map-some-reduce-functions-298b4dabfa09
}

//How can we use reduce to return a flattened array from an input of
//nested arrays ?

function flattenArray(data) {}

//Write a reduce that produces a tally-object with a count of each item
//in the array;

function tallyObject(desserts) {}

module.exports = { sum, checkLoggedInRecently, flattenArray, tallyObject };
