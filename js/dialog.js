'use strict';

(function () {

  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var userDialogNameInput = userDialog.querySelector('.setup-user-name');

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
    window.dialogForm.button.addClickEventListener();
    window.dialogForm.button.addPressEventListener();
    window.setup.coat.addClickEventListener();
    window.setup.eyes.addClickEventListener();
    window.setup.fireball.addClickEventListener();
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
      window.dialogForm.button.removeClickEventListener();
      window.dialogForm.button.removePressEventListener();
      window.setup.coat.removeClickEventListener();
      window.setup.eyes.addClickEventListener();
      window.setup.fireball.addClickEventListener();
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
