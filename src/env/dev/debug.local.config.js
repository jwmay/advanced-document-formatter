// Copyright 2018 Joseph W. May All Rights Reserved.
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


// **
// Include this file in the development version of the project.
// **


/**
 * Returns an instance of Configuration with any development environment
 * specific options added.
 * 
 * @param {Configuration} configuration The current configuration settings.
 * @returns {Configuration} The current configuration settings, updated with
 *    environment-specific settings.
 */
function provideEnvironmentConfiguration_(configuration) {
  /**
   * Flag for controlling display of log information.
   */
  configuration.debug = true;
  return configuration;
}