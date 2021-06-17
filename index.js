'use strict';

var common = require('../../engine/postingOps').common;

exports.engineVersion = '2.6';

var detectedFunction = function(match) {

  return '<span class="detected">' + match + '</span>';

};

exports.init = function() {
  var originalProcessLine = common.processLine;

  common.processLine = function(split, replaceCode) {

    split = split.replace(/\(\(\(.+?\)\)\)/g, detectedFunction);
    split = originalProcessLine(split, replaceCode);

    return split;

  };

};
