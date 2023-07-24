/**
 * Check if a number is odd or even.
 * The `num` param is a number. Can be a float or int.
 * The function returns a boolean: True if the number is even, false otherwise.
 */
const isEven = (num) => {
  const even = num % 2 == 0 ? true : false;
  return even;
};

/**
 * Attempt to cast a string type number to a number type, otherwise return 0.
 * The `input` param is a string - String to cast to number.
 * The function returns a converted number or 0.
 */
const parseOrZero = (input) => {
  if (!input || isNaN(parseInt(input))) {
    return 0;
  }
  return parseInt(input);
};

/**
 * Sum all the numbers in an array.
 * The param `nums` is an array - Array of numbers to sum.
 * The function returns a number - Sum of all numbers from the array.
 */
const sumArray = (nums) => {
  return nums.reduce((x, y) => x + y);
};

/**
 * Get all the property names from an object.
 *The param `obj` is an object - Object to parse.
 * THe function returns an array of strings - Array containing object property names.
 */
const keys = (obj) => {
  const properties = [];

  for (let key in obj) {
    properties.push(key);
  }

  return properties;
};

/**
 * Format a greeting with a persons name.
 * The `nameObj` param is an object - A person name object.
 * {
 *  firstName: 'Persons first name',
 *  lastName: 'Persons last name'
 * }
 */
const greetName = (nameObj) => {
  const { firstName, lastName } = nameObj;
  return `Hello ${firstName} ${lastName}`;
};

module.exports = {
  isEven,
  parseOrZero,
  sumArray,
  keys,
  greetName,
};
