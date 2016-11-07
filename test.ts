/// <reference path="bundle.d.ts" />

import scmp = require('scmp');
import assert = require('assert');

assert.equal(scmp(Buffer.from('123'), Buffer.from('123')), true);
assert.equal(scmp(Buffer.from('123'), Buffer.from('abc')), false);
