const test = require('node:test');
const assert = require('node:assert');
const errorHandler = require('../helpers/errorHandler');

test('errorHandler middleware tests', async (t) => {
  await t.test('should return 500 and default message for standard Error', async () => {
    const err = new Error('Generic failure');
    const req = {};
    let responseStatus, responseJson;
    const res = {
      status: function(code) {
        responseStatus = code;
        return this;
      },
      json: function(data) {
        responseJson = data;
        return this;
      }
    };

    errorHandler(err, req, res, () => {});

    assert.strictEqual(responseStatus, 500);
    assert.strictEqual(responseJson.error.code, 500);
    assert.strictEqual(responseJson.error.message, 'Generic failure');
  });

  await t.test('should return 400 for TypeError', async () => {
    const err = new TypeError('Some type mismatch');
    err.type = 'TypeError';
    err.value = 'invalidValue';
    
    const req = {};
    let responseStatus, responseJson;
    const res = {
      status: function(code) {
        responseStatus = code;
        return this;
      },
      json: function(data) {
        responseJson = data;
        return this;
      }
    };

    errorHandler(err, req, res, () => {});

    assert.strictEqual(responseStatus, 400);
    assert.strictEqual(responseJson.error.code, 400);
    assert.strictEqual(responseJson.error.message, 'TypeError invalidValue');
  });
});
