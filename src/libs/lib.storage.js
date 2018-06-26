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
 * An object for assisting with the storage of strings and arrays in the 
 * document properties of a Google Apps Script.
 * 
 * @constructor
 */
var PropertyStore = function() {
  this.store = PropertiesService.getDocumentProperties();
};


/**
 * Sets a property with the given key and value.
 * 
 * An optional flag for storing an array is available, which converts the array
 * into a JSON string.
 * 
 * @param {string} key The key that labels the stored data.
 * @param {string|array} value The value to be stored.
 * @param {boolean=} isArray Set to true if storing an array.
 */
PropertyStore.prototype.setProperty = function(key, value, isArray) {
  value = (isArray === true ? JSON.stringify(value) : value);
  this.store.setProperty(key, value);
};


/**
 * Gets a property with the given key.
 * 
 * An optional flag for retrieving an array is available, which converts the
 * JSON string into an array object.
 * 
 * @param {string} key The key that labels the stored data.
 * @param {boolean=} isArray Set to true if retrieving a stored array.
 * @return {string|array} A string if isArray set to false, otherwise, an array
 *    object.
 */
PropertyStore.prototype.getProperty = function(key, isArray) {
  var property = this.store.getProperty(key);
  property = (isArray === true ? JSON.parse(property) : property);
  return property;
};


/**
 * Deletes all properties in the current properties store.
 */
PropertyStore.prototype.clean = function() {
  this.store.deleteAllProperties();
};