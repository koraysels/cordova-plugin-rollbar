/**
 * Rollbar.js
 *
 * Cordova Rollbar plugin for version >= 3.0.0
 *
 * Copyright(c) Resgrid 2015 (http://resgrid.com)
 */
var browser = require('cordova/platform');


var roll = {};

roll.init = function (successCallback, errorCallback) {
  return successCallback()
};

roll.simulateCrash = function (successCallback, errorCallback) {
  return successCallback()
};

module.exports = {
  init: roll.init,
  simulateCrash: roll.simulateCrash
};
require('cordova/exec/proxy').add('Rollbar', module.exports);
