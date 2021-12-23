// Library

// Array callbacks
function byMatchingProp(property) {
  return function matchingPredicate(target) {
    return function predicateFunc(fn) {
      return function applyPredicate(item) {
        return fn(item[property], target[property]);
      };
    };
  };
}

function isEqual(a, b) {
  return a == b;
}

function isGreater(a, b) {
  return a > b;
}

function isLess(a, b) {
  return a < b;
}

function isGreaterOrEqual(a, b) {
  return a >= b;
}

function isLessOrEqual(a, b) {
  return a <= b;
}

module.exports = {
  byMatchingProp,
  isEqual,
  isGreater,
  isLess,
  isGreaterOrEqual,
  isLessOrEqual,
};
