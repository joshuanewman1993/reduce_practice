//Use reduce to create a function that takes an array of numbers
//or number-like-strings and returns their sum.

function sum(nums) {
//let sum=0
// for (let i=0; i < nums.length; i++)
// sum+= nums[i]
// return sum
//}

 let sum = (nums).reduce((acc, val) => {
  return acc + parseInt(val); /*parseInt turns a string to a nummber*/
 }, 0);
 return sum
}


//How would we solve the problem of having an array of users and creating
//an array of usernames of people who have logged in recently?  How can
//we use reduce to do this ?

function checkLoggedInRecently(users) {
//let loggedInArray = []
// for (let i=0; i < users.length; i++) {
//    if (users[i].loggedInRecently === true) {
//       loggedInArray.push(users[i].username)
//    }
//}
//return loggedInArray
//}

let checkLoggedInArray = (users).reduce((acc, val) => {
if (val.loggedInRecently === true) {
acc.push(val.username) 
}
return acc
}, []);
return checkLoggedInArray;
}


//How can we use reduce to return a flattened array from an input of
//nested arrays ?

 function flattenArray(data) {
//let flattened = [].concat.apply([], data);
//    return flattened
//}

let flattenedArray = (data).reduce((acc, val) => {
return acc.concat(val)
}, []);
return flattenedArray
}


//Write a reduce that produces a tally-object with a count of each item
//in the array;

function tallyObject(desserts) {
//let dessertsTally = {};
//for (let i=0; i < desserts.length; i++){
//  let dessert = desserts[i]
//  if (!dessertsTally[dessert]) dessertsTally[dessert] = 1; /*same as normal if statement but w/o return { }*/
//   else dessertsTally[dessert]++;
//  }
//  return dessertsTally;
//}

const dessertTally = desserts.reduce((acc, val) => {
  if (!acc[val]) acc[val] = 1;
  else acc[val]++;
  return acc;
},{});
return dessertTally
}


module.exports = { sum,
checkLoggedInRecently,
flattenArray,
tallyObject
 };
