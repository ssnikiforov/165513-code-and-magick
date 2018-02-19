'use strict';

(function () {
  var formButtonSetSubmitType = function () {
    var formButton = window.userDialog.querySelector('.setup-submit');
    formButton.type = 'submit';
  };

  var formButtonClickHandler = function () {
    formButtonSetSubmitType();
  };

  var formButtonPressHandler = function (evt) {
    window.util.isEnterEvent(evt, formButtonSetSubmitType);
  };

  window.dialogForm = {
    button: {
      addClickEventListener: function () {
        return document.addEventListener('click', formButtonClickHandler);
      },
      removeClickEventListener: function () {
        return document.removeEventListener('click', formButtonClickHandler);
      },
      addPressEventListener: function () {
        return document.addEventListener('click', formButtonPressHandler);
      },
      removePressEventListener: function () {
        return document.removeEventListener('click', formButtonPressHandler);
      }
    }
  };
})();
