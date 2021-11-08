const ARRRweb3 = require('./arrrweb3');
const Utils = require('./utils');

// dont override global variable
if (typeof window !== 'undefined' && typeof window.ARRRweb3 === 'undefined') {
  window.ARRRweb3 = ARRRweb3;
}

module.exports = {
  ARRRweb3,
  Utils,
};
