/// Copyright 2018 Joseph W. May. All Rights Reserved.
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
 * Asserts that two values are equal. Throws an error if they are not.
 * 
 * @private
 * @param {*} expected The expected value.
 * @param {*} actual The actual value.
 * @param {string=} opt_message The message to include in the error.
 */
function assertEquals_(expected, actual, opt_message) {
  if (expected != actual) {
    var message = opt_message || 'The values are not equal.';
    message += ' (Expected: "' + expected + '", Actual: "' + actual + '")';
    throw new Error(message);
  }
}


/**
 * Asserts that two arrays are equal. Throws an error if they are not.
 * 
 * @private
 * @param {array} expected The expected array.
 * @param {array} actual The actual array.
 * @param {boolean=} sort True if the arrays should be sorted.
 * @param {string=} opt_message The message to include in the error.
 */
function assertEqualsArray_(expected, actual, sort, opt_message) {
  if (!arraysEqual(expected, actual, sort)) {
    var message = opt_message || 'The arrays are not equal.';
    throw new Error(message);
  }
}


/**
 * Asserts that the condition is true. Throws an error if it is not.
 * 
 * @private
 * @param {boolean} condition The condition.
 * @param {string=} opt_message The message to include in the error.
 */
function assertTrue_(condition, opt_message) {
  if (!condition) {
    var message = opt_message || 'The condition is not true.';
    throw new Error(message);
  }
}


/**
 * Asserts that the value isn't null. Throws an error if it is.
 * 
 * @private
 * @param {*} value The value to test.
 * @param {string=} opt_message The message to include in the error.
 */
function assertNotNull_(value, opt_message) {
  if (value === null) {
    var message = opt_message || 'The value is null.';
    throw new Error(message);
  }
}


/**
 * Asserts that the value isn't null or the empty string.
 * Throws an error if it is.
 * 
 * @private
 * @param {*} value The value to test.
 * @param {string=} opt_message The message to include in the error.
 */
function assertNotNullOrEmpty_(value, opt_message) {
  assertNotNull(value, opt_message);
  if (value === '') {
    var message = opt_message || 'The value is empty.';
    throw new Error(message);
  }
}


/**
 * Asserts that the value is of a certain type. Throws an error if it is not.
 * 
 * @private
 * @param {*} value The value to test.
 * @param {string} type The expected type.
 * @param {string=} opt_message The message to include in the error.
 */
function assertTypeOf_(value, type, opt_message) {
  if (typeof value != type) {
    var message = opt_message || 'The type does not match.';
    message += ' (Expected: "' + type + '", Actual: "' + typeof value + '")';
    throw new Error(message);
  }
}