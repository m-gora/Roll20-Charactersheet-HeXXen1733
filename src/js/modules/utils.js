'use strict';

var sumArgs = (...args) => {
  return args.reduce((a, b) => {
      let aInt = parseInt(a) || 0;
      let bInt = parseInt(b) || 0;
      return aInt + bInt;
  });
};

export { sumArgs }
