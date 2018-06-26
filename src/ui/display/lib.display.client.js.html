<script>
  /**
   * Helper function for updating the user-interface with a single display
   * or an array of displays.
   * 
   * This function is needed in google.script.run calls where the output
   * of a server call must be a DisplayObject that is passed into the
   * withSuccessHandler() method.
   *
   * Example: google.script.run.withSuccessHandler(updateDisplay).serverCall();
   *
   * @param {object|Array} displayObject A DisplayObject instance or an array of
   *    DisplayObject instances that defines the display parameters.
   */
  function updateDisplay(displayObject) {
    var display = new Display();
    
    if (Array.isArray(displayObject) === true) {
      displayObject.forEach(function(object) {
        display.updateDisplay(object);
      });
    } else {
      display.updateDisplay(displayObject);
    }
    
    // Hide the loading overlay in case it was displayed during a server call
    hideLoading();
  }


  /**
  * Helper function for displaying the loading message on the user-interface
  * display.
  * 
  * @param {string} message The message to display with the loader.
  *     Default is 'Loading...'.
  */
  function showLoading(message) {
    var display = new Display();
    display.showLoading(message);
  }


  /**
  * Helper function for hiding the loading message from the user-interface
  * display.
  */
  function hideLoading() {
    var display = new Display();
    display.hideLoading();
  }


  /**
  * Helper function for clearing the display of alerts and cards. Alerts
  * or cards can be cleared. By default, alerts and cards are cleared.
  *
  * @param {string} type The type of display to clear. Can be alerts,
  *    cards, or all. Default is all.
  */
  function clearDisplay(type) {
    var display = new Display();
    display.clearDisplay(type);
  }


  /**
  * Close the selected alert by removing it from the dom.
  *
  * @param {element} elem The clicked element.
  */
  function closeAlert(elem) {
    $(elem).parent().remove();
  }


  /**
   * Scroll the page to the given id.
   * 
   * @param {string} id The id of the element to scroll to.
   */
  function scrollTo(id){
    var element = $(id);
    $('html,body').animate({scrollTop: element.offset().top},'slow');
  }


  /**
   * Sleep the script for the given number of milliseconds.
   * 
   * @param {integer} time The time to sleep in milliseconds (ms).
   */
  function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }




  /**
  * Base class for controlling the user interface display on the sidebar or
  * dialogs.
  */
  var Display = function() {
    this.alert = $('#alert');
    this.content = $('#content');
    this.loading = $('#loading');
    this.loadingOverlay = $('#loading-overlay');
    this.loadingMessage = $('#loading-message');
  };


  /**
  * Update the display based on the parameters defined in the display object.
  * 
  * @param {DisplayObject} displayObject A DisplayObject instance containing
  *    the parameters that define the display.
  */
  Display.prototype.updateDisplay = function(displayObject) {
    // Clear the display if reset is True
    if (displayObject.reset === true) this.resetDisplay();
    
    // Close the display if close is True
    if (displayObject.close === true) google.script.host.close();

    // Update the display with the specified display type
    if (displayObject.type.startsWith('alert') === true) {
      var alert = this.getAlert(displayObject.type, displayObject.content);
      $(alert).hide().appendTo(this.alert).slideDown('slow');
    
    } else if (displayObject.type === 'card') {
      var card = this.getCard(displayObject.content, displayObject.id);
      if (displayObject.position === 'top') {
        $(card).hide().prependTo(this.content).slideDown('slow');
      } else if (displayObject.position === 'bottom') {
        $(card).hide().appendTo(this.content).slideDown('slow');
      }
    
    // Show an error if an incorrect display type was specified
    } else {
      var message = 'An incorrect display type was specified.';
      var error = getDisplayObject('alert-error', message);
      this.updateDisplay(error);
    }
  };


  /**
  * Clears the display of alerts and cards. Alerts or cards can be
  * cleared separately. By default, everything is cleared.
  *
  * @param {string} type The type of display to clear. Can be alerts,
  *    cards, or all. Default is all.
  */
  Display.prototype.clearDisplay = function(type='all') {
    if (type === 'all') {
      this.alert.html('');
      this.content.html('');
    } else if (type === 'alerts') {
      this.alert.html('');
    } else if (type === 'cards') {
      this.content.html('');
    }
  };


  /**
  * Shows the loading overlay on the display.
  * 
  * @param {string} message The message to display with the loader.
  *     Default is 'Loading...'.
  */
  Display.prototype.showLoading = function(message) {
    message = (typeof message === 'undefined' ? 'Loading...' : message);
    this.loadingMessage.html(message);
    this.loading.removeClass('hidden');
    this.loadingOverlay.removeClass('hidden');
  };


  /**
  * Hides the loading overlay on the display.
  */
  Display.prototype.hideLoading = function() {
    this.loading.addClass('hidden');
    this.loadingOverlay.addClass('hidden');
  };


  /**
  * Returns an alert element of the specified type containing the
  * given content as an HTML-formatted string.
  *
  * @param {string} type The alert type, which can be alert-success,
  *    alert-warning, alert-error, or alert-information.
  * @param {string} content The content displayed in the alert.
  * @returns {string} An HTML-formatted string containing the alert.
  */
  Display.prototype.getAlert = function(type, content) {
    var alert = '' +
        '<div class="alert ' + type + ' border-0">' +
          '<button type="button" class="close" aria-label="Close" ' +
              'onclick="closeAlert(this);">' +
            '&times;' +
          '</button>' +
          content +
        '</div>';
    return alert;
  };


  /**
  * Returns a card element containing the specified content as an
  * HTML-formatted string. An optional id for the card element can
  * be specified.
  *
  * @param {string} content The content displayed on the card.
  * @param {string=} id The id of the card element. Default is none.
  * @returns {string} An HTML-formatted string containing the card.
  */
  Display.prototype.getCard = function(content, id) {
    id = (id !== '' ? ' id="' + id + '"' : '');
    var card = '' +
        '<div class="card"' + id + '>' +
          content +
        '</div>';
    return card;
  };


  /**
   * Returns a DisplayObject instance to be used in the Display class.
   *
   * Two types of display types can be generated: an alert-{type} or a card,
   * where {type} can be success, warning, error, or information. The content
   * of the display can be an HTML-formatted string or just a plain string.
   * An optional id for a card can be specified. Cards can be added to the top
   * or bottom of other cards with the optional position argument. By default
   * cards are positioned at the top. An option reset flag is available to clear
   * the display of all alerts and cards before updating the display. A flag to
   * close the current display is also available.
   *
   * @param {string} type The display type, either alert-{type} or card,
   *    where {type} can be success, warning, error, or information.
   * @param {string} content The content to display.
   * @param {string=} id The id of the card. Default is none.
   * @param {string=} position The position of where the card will be added.
   *    Either top or bottom. Default is top.
   * @param {boolean=} reset Clear the display of all alerts and cards before
   *    updating. Default is false.
   * @param {boolean=} close Close the current display. Default is false.
   * @return {object} An instance of DisplayObject.
   */
  var getDisplayObject = function(type, content, id='', position='top',
      reset=false, close=false) {
    var displayObject = {
      type: type,
      content: content,
      id: id,
      position: position,
      reset: reset,
      close: close,
    };
    return displayObject;
  };
</script>