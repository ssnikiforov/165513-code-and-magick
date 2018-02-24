'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var userDialogForm = userDialog.querySelector('.setup-wizard-form');
  var userDialogNameInput = userDialogForm.querySelector('.setup-user-name');

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    userDialog.removeAttribute('style');
    document.addEventListener('keydown', popupEscPressHandler);
    window.setup.initWizardSetupEventListeners();
    window.dialogHandlers.initDialogHandlers();
  };

  var closePopup = function () {
    if (document.activeElement !== userDialogNameInput) {

      userDialog.classList.add('hidden');
      userDialog.removeAttribute('style');

      document.removeEventListener('keydown', popupEscPressHandler);
      window.setup.removeWizardSetupEventListeners();
      window.dialogHandlers.removeDialogHandlers();
    }
  };

  var popupEscPressHandler = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });
})();
