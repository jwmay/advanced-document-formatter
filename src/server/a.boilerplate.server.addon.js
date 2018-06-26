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
 * Called when an add-on is installed.
 * 
 * @param {object} e Apps Script onInstall event object.
 */
function onInstall(e) {
  onOpen(e);
}


/**
 * Called when a document that is associated with this add-on is opened.
 * Constructs the plugin menu that is displayed in the 'Add-ons' dropdown
 * availabe in Google Docs.
 * 
 * @param {object} e Apps Script onInstall event object.
 */
function onOpen(e) {
  var config = Configuration.getCurrent();

  // Add the plugin add-on menu to the user interface with additional menues
  // available only in debug mode.
  var ui = DocumentApp.getUi()
      .createMenu('Simply Mail Merge')
      .addItem('Start', 'onShowSidebar');
  
  // If debug, display menu options for testing and to clear the
  // property storage.
  if (config.debug) {
    ui.addSeparator()
        .addItem('Clear document properties', 'onClearDocumentProperties')
        .addItem('Feature test', 'onFeatureTest');
  }
  
  ui.addToUi();
}


/**
 * Displays an HTML Service sidebar in Google Docs containing the plugin's 
 * primary user interface.
 */
function onShowSidebar() {
  // Set default options (only performs this if there are no options set);
  // cannot perform in onOpen due to Google's restriction to property store
  var options = new Options();
  options.setDefaultOptions();
  showSidebar('a.boilerplate.sidebar.view', 'Google Apps Script Boilerplate');
}


/**
 * Clears the document properties storage and refreshes the sidebar. This
 * function is only available in debug mode.
 */
function onClearDocumentProperties() {
  var storage = new PropertyStore();
  storage.clean();
  onShowSidebar();
}


/**
 * This function is used to call any assigned function from the user-interface
 * for testing purposes. This function is only available in debug mode.
 */
function onFeatureTest() {
  // insert code to run here
}