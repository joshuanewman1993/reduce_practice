const { expect } = require("chai");
const {
  sum,
  checkLoggedInRecently,
  flattenArray,
  tallyObject
} = require("../index.js");

describe("sum", () => {
  it("returns 0 when input is an empty array", () => {
    expect(sum([])).to.equal(0);
  });
  it("returns 1 when input is [1]", () => {
    expect(sum([1])).to.equal(1);
  });
  it("returns 3 when input is [1,2]", () => {
    expect(sum([1, 2])).to.equal(3);
  });
  it("returns 6 when input is [1,2,3]", () => {
    expect(sum([1, 2, 3])).to.equal(6);
  });
  it('returns 6 when input is an array of string-like-numbers ["1","2","3"]', () => {
    expect(sum(["1", "2", "3"])).to.equal(6);
  });
});

describe("checkLoggedInRecently", () => {
  it("returns an empty array when there are no users", () => {
    expect(checkLoggedInRecently([])).to.eql([]);
  });
  it("returns a single username of a person who has logged in recently", () => {
    expect(
      checkLoggedInRecently([
        {
          username: "Paul",
          loggedInRecently: true
        }
      ])
    ).to.eql(["Paul"]);
  });
  it("returns an array of usernames of more than one person who has logged in recently", () => {
    expect(
      checkLoggedInRecently([
        {
          username: "Paul",
          loggedInRecently: true
        },
        {
          username: "Ant",
          loggedInRecently: true
        },
        {
          username: "Liz",
          loggedInRecently: false
        }
      ])
    ).to.eql(["Paul", "Ant"]);
  });
});

describe("flattenArray", () => {
  it("returns an empty array when given an empty array", () => {
    expect(flattenArray([])).to.eql([]);
  });
  it("returns a single array if given a single array", () => {
    expect(flattenArray([1, 2, 3])).to.eql([1, 2, 3]);
  });
  it("returns a flattened array if given a two arrays", () => {
    expect(flattenArray([[1, 2, 3], [4, 5, 6]])).to.eql([1, 2, 3, 4, 5, 6]);
  });
  it("returns a flattened array if given three or more arrays", () => {
    expect(flattenArray([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).to.eql([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]);
  });
});

describe("tallyObject", () => {
  it("returns an empty object when there are no desserts in the array", () => {
    expect(tallyObject([])).to.eql({});
  });
  it("returns a tally of a single item when every item in the array is the same", () => {
    expect(tallyObject(["cake", "cake", "cake"])).to.eql({ cake: 3 });
  });
  it("returns a tally of a multiple items when the items in the array are mixed", () => {
    expect(
      tallyObject(["cake", "icecream", "cookies", "cake", "icecream", "cake"])
    ).to.eql({ cake: 3, icecream: 2, cookies: 1 });
  });
});
