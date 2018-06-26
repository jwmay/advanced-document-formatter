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


var ApplicationHanlder = {
  /**
   * Generic handler for creating instances of the Google Ui object for Google
   * Docs and Google Sheets add-ons.
   * 
   * @returns {Ui} The Ui object instance for Google Docs or Sheets.
   */
  getUi: function() {
    var config = Configuration.getCurrent();
    var application = config.application;
    if (this.application === 'document') {
      return DocumentApp.getUi();
    } else if (this.application === 'spreadsheet') {
      return SpreadsheetApp.getUi();
    } else {
      throw 'Only documents and spreadsheets are supported';
    }
  }
};


/**
 * Logs a message in the Google Apps Script developer console log.
 * 
 * @param {string} message The message to log.
 */
function log(message) {
  var config = Configuration.getCurrent();
  if (config.debug === true) {
    Logger.log(message);
  }
}


/**
 * Displays an alert with a single OK button.
 * 
 * @param {string} title The title of the alert.
 * @param {string} message The message to display.
 */
function showAlert(title, message) {
  var ui = ApplicationHanlder.getUi();
  ui.alert(title, message, ui.ButtonSet.OK);
}


/**
 * Displays an alert with 'Yes' and 'No' buttons. Returns the user selection as
 * a true or false boolean.
 * 
 * @param {string} title The title of the alert.
 * @param {string} message The message to display.
 * @returns {boolean} The response as true (yes) or false (no) boolean.
 */
function showConfirmation(title, message) {
  var ui = ApplicationHanlder.getUi();
  var result = ui.alert(title, message, ui.ButtonSet.YES_NO);
  if (result === ui.Button.YES) return true;
  return false;
}


/**
 * Opens a dialog window using an HTML template with the given dimensions
 * and title.
 * 
 * @param {string} source The name of the HTML template file.
 * @param {integer} width The width of dialog window.
 * @param {integer} height The height of dialog window.
 * @param {string} title The title to display on dialog window.
 */
function showDialog(source, width, height, title) {
  var ui = HtmlService.createTemplateFromFile(source)
      .evaluate()
      .setWidth(width)
      .setHeight(height);
  ApplicationHanlder.getUi().showModalDialog(ui, title);
}


/**
 * Displays a prompt and return the user's response.
 * 
 * @param {string} message The message to display.
 * @returns {string|null} A string representing the user's response, or null if
 *    no response is given.
 */
function showPrompt(message) {
  var ui = ApplicationHanlder.getUi();
  var response = ui.prompt(message);
  if (response.getSelectedButton() === ui.Button.OK) {
    return response.getResponseText();
  } else {
    return null;
  }
}


/**
 * Opens a sidebar using an HTML template.
 * 
 * @param {string} source The name of the HTML template file.
 * @param {string} title The title to display on the sidebar.
 */
function showSidebar(source, title) {
  var html = HtmlService.createTemplateFromFile(source)
      .evaluate()
      .setTitle(title);
  ApplicationHanlder.getUi().showSidebar(html);
}