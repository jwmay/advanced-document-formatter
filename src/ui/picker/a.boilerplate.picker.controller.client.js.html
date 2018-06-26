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


var PICKER_DIMENSIONS = {width: 900, height: 550};
var pickerApiLoaded = false;


/**
 * Loads the selected Google Picker API as determined by the data-picker
 * attribute of the <script> element.
 */
function onPickerApiLoad() {
  var picker = $('script[src*=onPickerApiLoad]').attr('data-picker');
  gapi.load('picker', {
    'callback': function() {
      pickerApiLoaded = true;
    }
  });
  getPickerOAuthToken(window[picker]);
}


/**
 * Gets the user's OAuth 2.0 access token from the server-side script so that
 * it can be passed to Picker. This technique keeps Picker from needing to
 * show its own authorization dialog, but is only possible if the OAuth scope
 * that Picker needs is available in Apps Script. Otherwise, your Picker code
 * will need to declare its own OAuth scopes.
 *
 * @param {function} picker The function to run to create the file picker.
 */
function getPickerOAuthToken(picker) {
  google.script.run
      .withSuccessHandler(picker)
      .getOAuthToken();
}


/**
 * Creates a Picker that can access the user's spreadsheets and Drive folders.
 *
 * @param {string} token An OAuth 2.0 access token that lets Picker access
 *    the file type specified in the addView call.
 */
function createSpreadsheetPicker(token) {
  if (pickerApiLoaded && token) {
    var picker = new google.picker.PickerBuilder()
        
        // Instruct Picker to display Spreadsheets only
        .addView(new google.picker.View(google.picker.ViewId.SPREADSHEETS))

        // Allow user to select files from their Drive folders
        .addView(new google.picker.DocsView()
            .setIncludeFolders(true)
            .setOwnedByMe(true))

        // Allow user to select files from their Team Drives
        .enableFeature(google.picker.Feature.SUPPORT_TEAM_DRIVES)
        .addView(new google.picker.DocsView()
            .setEnableTeamDrives(true)
            .setIncludeFolders(true))
        
        // Hide title bar since an Apps Script dialog already has a title
        .hideTitleBar()
        
        .setOAuthToken(token)
        .setCallback(spreadsheetPickerCallback)
        .setOrigin(google.script.host.origin)
        
        // Instruct Picker to fill the dialog, minus 2px for the border
        .setSize(PICKER_DIMENSIONS.width - 2,
            PICKER_DIMENSIONS.height - 2)
        .build();

    picker.setVisible(true);
  } else {
    var error = getDisplayObject('alert-error',
        'Unable to load the file picker. Please try again.');
    updateDisplay(error);
  }
}


/**
 * A callback function that extracts the chosen spreadsheet file's metadata
 * from the response object. If the user selects 'cancel', the file picker
 * modal is closed.
 * 
 * For details on the response object, see
 * https://developers.google.com/picker/docs/results.
 *
 * @param {object} data The Picker JSON-response object.
 */
function spreadsheetPickerCallback(data) {
  if (data.action == google.picker.Action.PICKED) {
    google.script.run
        .withSuccessHandler(updateDisplay)
        .loadSpreadsheetFile(data.docs);
  } else if (data.action == google.picker.Action.CANCEL) {
    google.script.host.close();
  }
}