/**
  Write a function that takes a number returns its squre root, roundet to the nearest integer.

 * @param {number} n
 * @return {boolean}
*/

function sqrt(n) {
  let sqrtT = Math.trunc(Math.sqrt(n));
  return sqrtT;
}

sqrt(17)

module.exports = sqrt;
