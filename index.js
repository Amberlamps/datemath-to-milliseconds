/**
 * Convert date math string to milliseconds.
 */


'use strict';

var lookUp = {
  s: 1000
};
lookUp.m = lookUp.s * 60;
lookUp.h = lookUp.m * 60;
lookUp.d = lookUp.h * 24;
lookUp.w = lookUp.d * 7;
lookUp.M = lookUp.d * 30;
lookUp.y = lookUp.d * 365;

var regexString = '(\\+|\\-)(\\d+)(' + Object.keys(lookUp).join('|') + ')';
var regexGlobal = new RegExp(regexString, 'g');
var regexLocal = new RegExp(regexString);

function convert(dms) {
  if (typeof dms !== 'string' || !dms.match(/^now/i)) {
    return false;
  }
  var items = dms.match(regexGlobal);
  if (!items || items.length === 0) {
    return false;
  }
  return items.reduce(check, 0);
}

function check(count, item) {
  var values = item.match(regexLocal);
  if (!values || values.length === 0) {
    return count;
  }
  return count + (values[1] === '+' ? 1 : -1) * +values[2] * lookUp[values[3]];
}

module.exports = convert;