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
 * Helper function for returning an object containing the values of all options.
 * 
 * @returns {object} The names and values of all options.
 */
function getOptions() {
  var opts = new Options();
  return opts.getOptions();
}


/**
 * Class for handling and storing user-defined script options.
 */
var Options = function() {
  this.storage = new PropertyStore();
  this.defaultOptions = {
    // place default options here
  };
};


/**
 * Returns an object containing the values for the default options.
 * 
 * @returns {object} The default options.
 */
Options.prototype.getDefaultOptions = function() {
  return this.defaultOptions;
};


/**
 * Returns the value of the given option.
 * 
 * @returns {string} The option value.
 */
Options.prototype.getOption = function(option) {
  return this.storage.getProperty(option);
};


/**
 * Returns an object containing the values of all options.
 * 
 * @returns {object} The names and values of all options.
 */
Options.prototype.getOptions = function() {
  var options = {};
  for (var option in this.defaultOptions) {
    options[option] = this.getOption(option);
  }
  return options;
};


/**
 * Checks if an option is saved and sets a default option if there is no
 * saved value.
 */
Options.prototype.setDefaultOptions = function() {
  for (var option in this.defaultOptions) {
    var stored = this.getOption(option);
    if (stored === null) stored = this.defaultOptions[option];
    this.setOption(option, stored);
  }
};


/**
 * Sets the given option to the given value.
 * 
 * @param {string} option The name of the option.
 * @param {string} value The value of the option.
 */
Options.prototype.setOption = function(option, value) {
  this.storage.setProperty(option, value);
};