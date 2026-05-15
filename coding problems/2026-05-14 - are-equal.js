/* 
Create the areEqual function that will return true if the two supplied arguments hold exactly the same values and the same number of values 
(not necessarily in the same order) and false if they do not.

The supplied arguments will be objects, arrays and strings.

Examples:

{laura:4, adam:3} & {laura:4, adam:3} => true 
{adam:3, laura:4, maisie:2} & {laura:4, adam:3} => false
[{a:4},{b:3}] & [{b:3},{a:4}]) => true
{a:['5','6','7'], b:['4','5','6']} & {a:[5,6,7], b:[4,5,6]} => false
'Hello' & 'Hello' => true

*/

// INPUTS: 2 arrays, 2 objects, or 2 strings
// OUTPUT: true or false

// coding steps:
// first check to make sure that both val1 and val2 are the same type, if they aren't then return false
// if they are the same type, then check to see what type they are

//if string: just compare val1 === val2
//if object: create array of the keys (keys1 and keys2) in val1/val2 (object.keys()). If lengths of arrays are different return false.
//if they are the same length then loop through the keys array (key of keys), compare that val1[key] === val2[key], if these are different then you know they aren't the same.

// if array:

function areEqual(val1, val2) {
  if (typeof val1 !== typeof val2) return false;
  if (val1 === null || val2 === null) return val1 === val2;
  if (typeof val1 !== 'object') return val1 === val2;

  if (Array.isArray(val1) && Array.isArray(val2))
    return arraysEqual(val1, val2);
  if (Array.isArray(val1) || Array.isArray(val2)) return false;

  return objectsEqual(val1, val2);
}

function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const matched = new Array(arr2.length).fill(false);

  for (const item1 of arr1) {
    let foundMatch = false;

    for (let i = 0; i < arr2.length; i++) {
      if (!matched[i] && areEqual(item1, arr2[i])) {
        matched[i] = true;
        foundMatch = true;
        break;
      }
    }

    if (!foundMatch) {
      return false;
    }
  }

  return true;
}

function objectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!Object.prototype.hasOwnProperty.call(obj2, key)) {
      return false;
    }

    let x = obj1[key];
    let y = obj2[key];

    if (!areEqual(x, y)) {
      return false;
    }
  }
  return true;
}
