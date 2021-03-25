// Utility functions go here

// sum up every parameter
var sumArgs = (...args) => {
  return args.reduce((a, b) => {
      let aInt = parseInt(a) || 0;
      let bInt = parseInt(b) || 0;
      return aInt + bInt;
  });
};
