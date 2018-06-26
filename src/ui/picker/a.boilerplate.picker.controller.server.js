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
 * Processes the selected file from the Google Picker API. Performs mime-type
 * validation and stores the id of the selected file. If an invalid mime-type
 * is selected, a DisplayObject instance containing the error message is
 * returned.
 * 
 * @param {array} files An array of JSON objects returned by Google Picker
 *    representing the selected file.
 * @returns {DisplayObject} An instance of DisplayObject with a success message,
 *    or an error message if the incorrect mime-type was selected.
 */
function loadSpreadsheetFile(files) {
  // Clear all stored document properties before loading the new file
  var storage = new PropertyStore();
  storage.clean();

  var file = files[0];
  if (file.mimeType === MimeType.GOOGLE_SHEETS) {
    var dataSpreadsheet = new DataSpreadsheet();
    dataSpreadsheet.setId(file.id);
    
    // Refresh the sidebar to display the newly-selected file
    onShowSidebar();
    var success = getDisplayObject('alert-success',
        'Spreadsheet file successfully updated.', '', 'top', false, true);
    return success;
  } else {
    var message = 'An invalid file type was given. ' +
        'Only Google Sheets are allowed. Close this window and click `Select ' +
        'file` to try again.';
    var error = getDisplayObject('alert-error', message);
    return error;
  }
}