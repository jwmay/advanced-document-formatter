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
 * Returns an array of DisplayObjects containing the user-interface to display
 * on the sidebar.
 * 
 * The interface display will depend on which options have been selected and
 * saved. The interface loads in a 'bottom-up' approach: the spreasheet selector
 * will be displayed first and a stack will generate with each new selection.
 * Once a spreadsheet has been selected, the sheet selector will display. Once a
 * sheet has been selected, the insert merge field and merge control buttons
 * will be displayed.
 * 
 * @returns {DisplayObjects[]} An array of DisplayObject instances that make up
 *    the sidebar user interface.
 */
function getSidebarDisplay() {
  // Construct the individual DisplayObjects for each component
  // of the sidebar display and store them in an array
  var displayObjects = [
    // place DisplayObject instances here
  ];
  return displayObjects;
}