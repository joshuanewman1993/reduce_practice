
## Reduce

Reduce is perhaps the most powerful and versatile array method.  It is used when we need to iterate over an array and build up another collection or variable (called the accumulator).

* Use reduce to create a function that takes an array of numbers or number-like-strings and returns their sum.

```js

const nums = [1, 2, 3]

// nums.reduce... => 6

const stringNums = ['1', '2', '3']

// stringNums.reduce... => 6

```


* How would we solve the problem of having an array of users and creating an array of usernames of people who have logged in recently?  How can we use reduce to do this ?

```js
const users = [
    {
      username: 'Paul',
      loggedInRecently: true
    }, 
    {
      username: 'Ant',
      loggedInRecently: true
    },
    {
      username: 'Liz',
      loggedInRecently: false
    }
  ]

// users.reduce... ['Paul', 'Ant']
```
* How can we use reduce to return a flattened array from an input of nested arrays ?

```js 

const data = [[1,2,3], [4,5,6], [7,8,9]];

// data.reduce... => [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

* Write a reduce that produces a tally-object with a count of each item in the array;

```js 

const desserts = ['cake', 'ice cream', 'cookies', 'cake', 'ice cream', 'cake'];

/* desserts.reduce... => {
  cake : 3,
  ice cream: 2,
  cookies : 1
} */
```

* Write a reduce that goes through an array of batman films and returns a new array of unique villains (an array without repetitions)

```js

const batmanFilms = [
  {
    title: 'Batman',
    year: 1989,
    batman: 'Michael Keaton',
    villains: ['The Joker'],
    director: 'Tim Burton',
    robin: false
  },
  {
    title: 'Batman Returns',
    year: 1992,
    batman: 'Michael Keaton',
    villains: ['The Penguin'],
    director: 'Tim Burton',
    robin: false
  },
  {
    title: 'Batman Forever',
    year: 1995,
    batman: 'Val Kilmer',
    villains: ['Two-Face', 'The Riddler'],
    director: 'Joel Schumacher',
    robin: true
  },
  {
    title: 'Batman & Robin',
    year: 1997,
    batman: 'George Clooney',
    villains: ['Mr Freeze', 'Poison Ivy', 'Bane'],
    director: 'Joel Schumacher',
    robin: true
  },
  {
    title: 'Batman Begins',
    year: 2005,
    batman: 'Christian Bale',
    villains: ['Ra\'s al Ghul', 'Scarecrow'],
    director: 'Christopher Nolan',
    robin: false
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    batman: 'Christian Bale',
    villains: ['The Joker', 'Two-Face'],
    director: 'Christopher Nolan',
    robin: false
  },
  {
    title: 'The Dark Knight Rises',
    year: 2012,
    batman: 'Christian Bale',
    villains: ['Bane', 'Talia al Ghul'],
    director: 'Christopher Nolan',
    robin: true
  }   
];

// batmanFilms.reduce... => ['The Joker', 'The Penguin', 'Two-Face', 'The Riddler', 'Mr Freeze', 'Poison Ivy', 'Bane', 'Ra\'s al Ghul', 'Scarecrow', 'Talia al Ghul']
```

* You are given a thesaurus object that contains certain words. Write a reduce that returns an array of words joined into a string. Any words that are in the thesaurus should be replaced with their respective thesaurus values.

```js 

const thesaurus = {
  hi: 'Salutations',
  guys: 'fantastical people of manchester',
  get: 'commence',
  started: 'with our proceedings'
}

const simpleSentance = ['hi', 'guys', 'Lets', 'get', 'started', '...']

// simpleSentance.reduce... => 'Salutations fantastical people of manchester Lets commence with our proceedings ...'

```