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
 * Reduces space by making the font size of the selected
 * text element 1pt.
 */
function minimizeSpace(fontSize) {
  if (fontSize > 0) {
    // Save the font size value from the sidebar
    var options = new Options();
    options.setOption('minimizeSpaceFontSize', fontSize);

    // Change the font size to minimize space
    var formatter = new Formatter();
    return formatter.minimizeSpace();
  } else {
    return getError('Font size must be larger than 0');
  }
}


/**
 * Changes the padding of each individual side of all selected table cells.
 * 
 * @param {object} padding An object containing the padding value for each side
 *    of a table cell.
 * @returns {DisplayObject} A DisplayObject instance with the results.
 */
function setTablePadding(padding) {
  // Save the padding values from the sidebar
  var options = new Options();
  for (var side in padding) {
    var value = padding[side];
    if (value >= 0) {
      options.setOption(side, value);
    } else {
      return getError('Padding cannot be smaller than 0');
    }
  }

  // Change the padding of the table cell(s)
  var formatter = new Formatter();
  return formatter.setTablePadding();
}


/**
 * Returns the padding for the selected table cell or the first table cell in
 * a selection of table cells.
 * 
 * @returns {Object|DisplayObject} An object containing the padding values or
 *    a DisplayObject instance with an error message.
 */
function getTablePadding() {
  var formatter = new Formatter();
  return formatter.getTablePadding();
}




/**
 * Base class for storing the formatting methods.
 */
var Formatter = function() {
  this.options = getOptions();
  this.document = DocumentApp.getActiveDocument();
  this.cursor = this.document.getCursor();
  this.selection = this.document.getSelection();
};


/**
 * Returns an array of TableCell objects based on the user's selection.
 * 
 * @returns {TableCell[]} An array of selected table cells.
 */
Formatter.prototype.getTableCells = function() {
  var tableCells = [];
  if (this.cursor) {
    var element = this.cursor.getElement().getParent();
    if (element.getType() === DocumentApp.ElementType.TABLE_CELL) {
      tableCells.push(element);
      return tableCells;
    } else {
      return null;
    }
  } else if (this.selection) {
    var elements = this.selection.getRangeElements();
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      if (element.getElement().getType() === DocumentApp.ElementType.TABLE_CELL) {
        tableCells.push(element.getElement());
      }
    }
    return tableCells;
  } else {
    return null;
  }
}


/**
 * Returns an object of table cell padding values for the first selected cell
 * or a DisplayObject instance if there was an error.
 * 
 * The padding values have the following keys for the sides of the table cell:
 * top, bottom, left, and right.
 * 
 * @returns {Object|DisplayObject} An object containing the padding values or
 *    a DisplayObject instance with an error message.
 */
Formatter.prototype.getTablePadding = function() {
  var tableCells = this.getTableCells();
  if (tableCells !== null) {
    var tableCell = tableCells[0];
    var padding = {
      top: this.pointsToInches(tableCell.getPaddingTop()).toFixed(3),
      bottom: this.pointsToInches(tableCell.getPaddingBottom()).toFixed(3),
      left: this.pointsToInches(tableCell.getPaddingLeft()).toFixed(3),
      right: this.pointsToInches(tableCell.getPaddingRight()).toFixed(3)
    }
    return padding;
  } else {
    return getError('Select a table cell to get padding');
  }
}


/**
 * Reduces space by changing the font size of the selected text element.
 * 
 * @returns {DisplayObject} A DisplayObject instance with the results.
 */
Formatter.prototype.minimizeSpace = function() {
  var text = {};
  
  if (this.cursor) {
    text = this.cursor.getElement().asText();
  } else if (this.selection) {
    text = this.selection.getRangeElements()[0].getElement();
  } else {
    return getError('Cannot reduce space here');
  }
  
  if (text.editAsText) {
    var fontSize = parseInt(this.options.minimizeSpaceFontSize);
    log('fontSize: ' + fontSize);
    text.setFontSize(fontSize);
    return getSuccess('Minimization complete');
  } else {
    return getError('Cannot reduce space here');
  }
}


/**
 * Sets the padding for each individual side of a table cell.
 * 
 * @param {TableCell} tableCell The table cell element to set padding.
 */
Formatter.prototype.setTableCellPadding = function(tableCell) {
  var padding = {
    top: this.inchesToPoints(this.options.tablePaddingTop),
    bottom: this.inchesToPoints(this.options.tablePaddingBottom),
    left: this.inchesToPoints(this.options.tablePaddingLeft),
    right: this.inchesToPoints(this.options.tablePaddingRight),
  };
  tableCell.setPaddingBottom(padding.bottom)
      .setPaddingLeft(padding.left)
      .setPaddingRight(padding.right)
      .setPaddingTop(padding.top);
  return tableCell;
}


/**
 * Changes the individual side padding of a table cell or a selection of table
 * cells.
 * 
 * @returns {DisplayObject} A DisplayObject instance with the results.
 */
Formatter.prototype.setTablePadding = function() {
  var tableCells = this.getTableCells();
  if (tableCells !== null) {
    for (var i = 0; i < tableCells.length; i++) {
      var tableCell = tableCells[i];
      this.setTableCellPadding(tableCell);
    }
    return getSuccess('Table padding applied');
  } else {
    return getError('Select a table cell to format');
  }
}


/**
 * Converts inches to points and returns the converted value.
 * 
 * @param {number} inches The value in inches to convert.
 */
Formatter.prototype.inchesToPoints = function(inches) {
  return (inches * 72);
}


/**
 * Converts points to inches and returns the converted value.
 * 
 * @param {number} points The value in points to convert.
 */
Formatter.prototype.pointsToInches = function(points) {
  return (points / 72);
}