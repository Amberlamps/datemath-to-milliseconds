/**
 * Test application.
 */


'use strict';


var convert = require('../');
var assert = require('assert');

describe('datemath-to-milliseconds', function() {
  describe('#convert()', function() {
    it('should convert seconds to milliseconds', function() {
      var dateTime = Date.now();
      var milliseconds = convert('now-15s');
      assert.equal(dateTime + milliseconds, dateTime - 15 * 1000);
    });
    it('should convert minutes to milliseconds', function() {
      var dateTime = Date.now();
      var milliseconds = convert('now-5m');
      assert.equal(dateTime + milliseconds, dateTime - 5 * 60 * 1000);
    });
    it('should convert hours to milliseconds', function() {
      var dateTime = Date.now();
      var milliseconds = convert('now-7h');
      assert.equal(dateTime + milliseconds, dateTime - 7 * 60 * 60 * 1000);
    });
    it('should convert days to milliseconds', function() {
      var dateTime = Date.now();
      var milliseconds = convert('now-4d');
      assert.equal(dateTime + milliseconds, dateTime - 4 * 24 * 60 * 60 * 1000);
    });
    it('should convert weeks to milliseconds', function() {
      var dateTime = Date.now();
      var milliseconds = convert('now-3w');
      assert.equal(dateTime + milliseconds, dateTime - 21 * 24 * 60 * 60 * 1000);
    });
    it('should convert months to milliseconds', function() {
      var dateTime = Date.now();
      var milliseconds = convert('now-2M');
      assert.equal(dateTime + milliseconds, dateTime - 60 * 24 * 60 * 60 * 1000);
    });
    it('should convert years to milliseconds', function() {
      var dateTime = Date.now();
      var milliseconds = convert('now-1y');
      assert.equal(dateTime + milliseconds, dateTime - 365 * 24 * 60 * 60 * 1000);
    });
    it('should convert every combination to milliseconds', function() {
      var dateTime = Date.now();
      var milliseconds = convert('now-15s+5m-7h+4d-3w+2M-1y');
      assert.equal(dateTime + milliseconds, dateTime - 15 * 1000 + 5 * 60 * 1000 - 7 * 60 * 60 * 1000 + 4 * 24 * 60 * 60 * 1000 - 21 * 24 * 60 * 60 * 1000 + 60 * 24 * 60 * 60 * 1000 - 365 * 24 * 60 * 60 * 1000);
    });
  });
});