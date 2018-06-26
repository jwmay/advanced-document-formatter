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
 * Returns an array of DisplayObject instances for creating the options dialog.
 * 
 * This is a helper function called from the client by google.script.run.
 * 
 * @returns {DisplayObjects[]} An array of DisplayObject instances.
 */
function getOptionsDisplay() {
  var optionsDisplay = new OptionsDisplay();
  return optionsDisplay.getOptionsDisplay();
}


/**
 * Stores all of the options provided in options parameter. Options must be
 * stored as key/value pairs in an object where the option name is the key.
 * 
 * This is a helper function called from the client by google.script.run.
 * 
 * @param {object} options An object of key/value pairs where the option name
 *    is the key.
 */
function saveMergeOptions(options) {
  var optionsDisplay = new OptionsDisplay();
  optionsDisplay.saveMergeOptions(options);
}



/**
 * Class for creating the options dialog display.
 */
var OptionsDisplay = function() {
  this.opts = new Options();
  this.options = this.opts.getOptions();
};


/**
 * Returns an array containing all of the DisplayObject instances for creating
 * the options dialog display.
 * 
 * @returns {DisplayObject[]} An array of DisplayObject instances.
 */
OptionsDisplay.prototype.getOptionsDisplay = function() {
  return [
    // place method calls here that generate the html display(s)
  ];
};


/**
 * Stores all of the options provided in options parameter. Options must be
 * stored as key/value pairs in an object where the option name is the key.
 * 
 * @param {object} options An object of key/value pairs where the option name
 *    is the key.
 */
OptionsDisplay.prototype.saveMergeOptions = function(options) {
  for (var option in options) {
    this.opts.setOption(option, options[option]);
  }
};