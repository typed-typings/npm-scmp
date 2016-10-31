/// <reference path="bundle.d.ts" />

import scmp = require('scmp');
import assert = require('assert');

assert.equal(scmp('123', '123'), true);
assert.equal(scmp('123', 'abc'), false);
