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
 * @returns {DisplayObjects[]} An array of DisplayObject instances that make up
 *    the sidebar user interface.
 */
function getSidebarDisplay() {
  var display = new SidebarDisplay();
  return display.getDisplays();
}


/**
 * Contains methods for creating the sidebar user-interface.
 */
var SidebarDisplay = function() {
  this.options = getOptions();
};


/**
 * Returns an array of DisplayObjects containing the user-interface to display
 * on the sidebar.
 * 
 * @returns {DisplayObjects[]} An array of DisplayObject instances that make up
 *    the sidebar user interface.
 */
SidebarDisplay.prototype.getDisplays = function() {
  return [
    this.getMinimizeSpaceController(),
    this.getTablePaddingController(),
  ];
};


/**
 * Returns a DisplayObject instance containing the minimize space controller.
 * 
 * @returns {DisplayObject} A DisplayObject instance for the minimize space
 *    controller.
 */
SidebarDisplay.prototype.getMinimizeSpaceController = function() {
  var fontSize = parseInt(this.options.minimizeSpaceFontSize);
  var content = '' +
      '<h3 class="form-header">Minimize Space</h3>' +
      '<span class="help-text">' +
          'Set font sizes smaller than 6 to decrease white space within ' +
          'a document.' +
      '</span>' +
      '<form class="materialize">' +
        '<div class="form-group">' +
          '<label for="minimizeSpaceFontSize">Font size</label>' +
          '<input id="minimizeSpaceFontSize" type="number" class="form-control" ' +
              'min="1" value="' + fontSize + '">' +
        '</div>' +
        '<div class="btn-bar">' +
          '<input type="button" class="btn action" value="Minimize" ' +
              'id="applyMinimizeSpace">' +
        '</div>' +
      '</form>';
  return getDisplayObject('card', content, 'minimizeSpaceController');
};


/**
 * Returns a DisplayObject instance containing the table padding controller.
 * 
 * @returns {DisplayObject} A DisplayObject instance for the table padding
 *    controller.
 */
SidebarDisplay.prototype.getTablePaddingController = function() {
  var padding = {
    top: parseFloat(this.options.tablePaddingTop),
    bottom: parseFloat(this.options.tablePaddingBottom),
    left: parseFloat(this.options.tablePaddingLeft),
    right: parseFloat(this.options.tablePaddingRight),
  };
  var content = '' +
    '<h3 class="form-header">Table Padding</h3>' +
    '<span class="help-text">' +
      'Set padding for each side of a table cell in inches.' +
    '</span>' +
    '<form class="materialize">' +
      '<div class="form-row">' +
        '<div class="form-group">' +
          '<label for="tablePaddingTop">Top padding</label>' +
          '<input id="tablePaddingTop" type="number" class="form-control" ' +
              'min="0" step="0.01" value="' + padding.top + '">' +
          '<span class="input-unit">in</span>' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="tablePaddingBottom">Bottom padding</label>' +
          '<input id="tablePaddingBottom" type="number" class="form-control" ' +
              'min="0" step="0.01" value="' + padding.bottom + '">' +
          '<span class="input-unit">in</span>' +
        '</div>' +
      '</div>' +
      '<div class="form-row">' +
        '<div class="form-group">' +
          '<label for="tablePaddingLeft">Left padding</label>' +
          '<input id="tablePaddingLeft" type="number" class="form-control" ' +
              'min="0" step="0.01" value="' + padding.left + '">' +
          '<span class="input-unit">in</span>' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="tablePaddingRight">Right padding</label>' +
          '<input id="tablePaddingRight" type="number" class="form-control" ' +
              'min="0" step="0.01" value="' + padding.right + '">' +
          '<span class="input-unit">in</span>' +
        '</div>' +
        '</div>' +
        '<div class="btn-bar">' +
          '<input type="button" class="btn action" value="Apply padding" ' +
              'id="applyTablePadding">' +
        '</div>' +
      '</form>';
  return getDisplayObject('card', content, 'tablePaddingController');
};