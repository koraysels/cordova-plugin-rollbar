/**
 * Rollbar.js
 *
 * Cordova Rollbar plugin for version >= 3.0.0
 *
 * Copyright(c) Resgrid 2015 (http://resgrid.com)
 */


var roll = {};

roll.init = function (successCallback, errorCallback) {
  return successCallback()
};

roll.simulateCrash = function (successCallback, errorCallback) {
  return successCallback()
};

module.exports = {
  roll: roll
};
require('cordova/exec/proxy').add('Rollbar', module.exports);
