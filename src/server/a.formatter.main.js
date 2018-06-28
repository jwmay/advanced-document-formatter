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
 * Returns an instance of Configuration with the dfault parameters that are
 * passed into the configuration factory constructor.
 * 
 * @returns {Configuration} An instance of the Configuration settings object.
 */
function getDefaultConfiguration_() {
  return {
    /**
     * Flag for determining the application type. Can be 'document' for a Google
     * Docs addon or 'spreadsheet' for a Google Sheets addon.
     */
    application: 'document',
  };
}