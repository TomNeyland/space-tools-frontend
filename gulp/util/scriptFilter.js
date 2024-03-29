/**
 * Created by skessler on 7/21/15.
 */

'use strict';

var path = require('path');

// Filters out non .js files. Prevents
// accidental inclusion of possible hidden files
module.exports = function (name) {

    return /(\.(js)$)/i.test(path.extname(name));

};