'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var SETUP_FORM_ACTION_PATH = 'https://js.dump.academy/code-and-magick';

  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var userDialogForm = userDialog.querySelector('.setup-wizard-form');
  var userDialogIcon = userDialogOpen.querySelector('.setup-open-icon');
  var userDialogNameInput = userDialog.querySelector('.setup-user-name');

  userDialogIcon.tabIndex = 0;
  userDialogClose.tabIndex = 0;
  userDialogNameInput.minLength = 2;
  userDialogForm.action = SETUP_FORM_ACTION_PATH;

  var setupPlayerWrap = document.querySelector('.setup-player');
  var setupCoatEl = setupPlayerWrap.querySelector('.wizard-coat');
  var setupEyesEl = setupPlayerWrap.querySelector('.wizard-eyes');
  var setupFireballEl = setupPlayerWrap.querySelector('.setup-fireball-wrap');

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
    document.addEventListener('click', formButtonClickHandler);
    document.addEventListener('keydown', formButtonPressHandler);
    setupCoatEl.addEventListener('click', setupCoatClickHandler);
    setupEyesEl.addEventListener('click', setupEyesClickHandler);
    setupFireballEl.addEventListener('click', setupFireballClickHandler);
  };

  var closePopup = function () {
    if (document.activeElement !== userDialogNameInput) {
      userDialog.classList.add('hidden');
      document.removeEventListener('keydown', popupEscPressHandler);
      document.removeEventListener('click', formButtonClickHandler);
      document.removeEventListener('keydown', formButtonPressHandler);
      setupCoatEl.removeEventListener('click', setupCoatClickHandler);
      setupEyesEl.removeEventListener('click', setupEyesClickHandler);
      setupFireballEl.removeEventListener('click', setupFireballClickHandler);
    }
  };

  var popupEscPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  var formButtonSetSubmitType = function () {
    var formButton = userDialog.querySelector('.setup-submit');
    formButton.type = 'submit';
  };

  var formButtonClickHandler = function () {
    formButtonSetSubmitType();
  };

  var formButtonPressHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      formButtonSetSubmitType();
    }
  };
})();
