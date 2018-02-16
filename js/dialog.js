'use strict';

(function () {

  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var userDialogNameInput = userDialog.querySelector('.setup-user-name');

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
    /** move outside */
    document.addEventListener('click', formButtonClickHandler);
    document.addEventListener('keydown', formButtonPressHandler);
    /** move outside */
    // setupCoatEl.addEventListener('click', setupCoatClickHandler);
    // setupEyesEl.addEventListener('click', setupEyesClickHandler);
    // setupFireballEl.addEventListener('click', setupFireballClickHandler);
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.keyCode.enter) {
      openPopup();
    }
  });

  var closePopup = function () {
    if (document.activeElement !== userDialogNameInput) {
      userDialog.classList.add('hidden');
      document.removeEventListener('keydown', popupEscPressHandler);
      /** move outside */
      document.removeEventListener('click', formButtonClickHandler);
      document.removeEventListener('keydown', formButtonPressHandler);
      /** move outside */
      // setupCoatEl.removeEventListener('click', setupCoatClickHandler);
      // setupEyesEl.removeEventListener('click', setupEyesClickHandler);
      // setupFireballEl.removeEventListener('click', setupFireballClickHandler);
    }
  };

  var popupEscPressHandler = function (evt) {
    if (evt.keyCode === window.util.keyCode.esc) {
      closePopup();
    }
  };

  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.keyCode.enter) {
      closePopup();
    }
  });

  window.userDialog = userDialog;
})();
