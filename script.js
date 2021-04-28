'use strict';

const HEROES_LIST = [ 
  { name: 'Wolverine', family: 'Marvel', isEvil: false }, 
  { name: 'Deadpool', family: 'Marvel', isEvil: false },
  { name: 'Magneto', family: 'Marvel', isEvil: true }, 
  { name: 'Charles Xavier', family: 'Marvel', isEvil: false }, 
  { name: 'Batman', family: 'DC Comics', isEvil: false }, 
  { name: 'Harley Quinn', family: 'DC Comics', isEvil: true }, 
  { name: 'Legolas', family: 'Tolkien', isEvil: false }, 
  { name: 'Gandalf', family: 'Tolkien', isEvil: false }, 
  { name: 'Saruman', family: 'Tolkien', isEvil: true } 
];

// 1) Array with a list of names of heroes;

function getNames(arr) {
 return arr.map(elem => elem.name);
}

console.log(getNames(HEROES_LIST));

// 2) Reverse array of names of heroes;

function getReverseNames(arr) {
  return arr.map(elem => elem.name).reverse();
 }

 console.log(getReverseNames(HEROES_LIST));

// 3) Get the last hero from the list;

 function getLastHero(arr) {
   return arr[arr.length - 1].name;
 }

 console.log(getLastHero(HEROES_LIST));

// 4) Receive an array with a list of names of only evil heroes;

 function getEvilHeroesNames(arr) {
  const evilHeroes = [];
  arr.forEach( elem => {
    if (elem.isEvil === true) {
      evilHeroes.push(elem.name);
    }
  })
  return evilHeroes;
 }

 console.log(getEvilHeroesNames(HEROES_LIST));

//  5) Receive an array with a list of all family names present in the array (no repeat);

function getFamilies(arr) {
  const families = new Set();
  arr.forEach( elem => families.add(elem.family));
  return Array.from(families);
}

console.log(getFamilies(HEROES_LIST));

//6)  Receive a object whose key is a name and a value is family;

function getNamesAndFamilies(arr) {
  const obj = {};
  arr.forEach( elem => obj[elem.name] = elem.family);
  return obj;
}

console.log(getNamesAndFamilies(HEROES_LIST));
 
// 7) Receive a list of all values present in the objects of heroes array;

function getAllValues(arr) {
  const getAllValues = [];
  arr.forEach( hero => {
    for (let value of Object.values(hero)) {
      getAllValues.push(value);
    }
    });
    return getAllValues;
  }

  console.log(getAllValues(HEROES_LIST));