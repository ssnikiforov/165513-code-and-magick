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
    if (evt.keyCode === window.util.keyCode.enter) {
      formButtonSetSubmitType();
    }
  };

  window.dialogForm = {
    formButtonClickHandler: formButtonClickHandler,
    formButtonPressHandler: formButtonPressHandler
  };
})();
