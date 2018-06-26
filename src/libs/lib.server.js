// Copyright 2018 Joseph W. May. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * Gets the user's OAuth 2.0 access token so that it can be passed to Picker.
 * This technique keeps Picker from needing to show its own authorization
 * dialog, but is only possible if the OAuth scope that Picker needs is
 * available in Apps Script. In this case, the function includes an unused call
 * to a DriveApp method to ensure that Apps Script requests access to all files
 * in the user's Drive.
 * 
 * @return {string} The user's OAuth 2.0 access token.
 */
function getOAuthToken() {
  DriveApp.getRootFolder();
  return ScriptApp.getOAuthToken();
}


/**
 * Configures a child class to inherit from a parent class.
 * 
 * @private
 * @param {function} childClass The child class.
 * @param {function} parentClass The parent class.
 */
function inherit_(childClass, parentClass) {
  /**
   * Empty wrapper class.
   * @constructor
   */
  var TempClass = function() {};
  TempClass.prototype = parentClass.prototype;
  childClass.prototype = new TempClass();
  childClass.prototype.super_ = parentClass.prototype;
  childClass.prototype.constructor = childClass;
}