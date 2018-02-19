'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var userDialogNameInput = userDialog.querySelector('.setup-user-name');

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    userDialog.removeAttribute('style');
    document.addEventListener('keydown', popupEscPressHandler);
    window.setup.initWizardSetupEventListeners();
  };

  var closePopup = function () {
    if (document.activeElement !== userDialogNameInput) {
      var dialogHandler = userDialog.querySelector('.upload');
      var artifactsElement = document.querySelector('.setup-artifacts');

      userDialog.classList.add('hidden');
      userDialog.removeAttribute('style');

      document.removeEventListener('keydown', popupEscPressHandler);
      window.setup.removeWizardSetupEventListeners();
      dialogHandler.removeEventListener('mousedown', window.dialogHandlers.dialogHandler.mouseDownDialogHandler);
      artifactsElement.removeEventListener('dragend', window.dialogHandlers.artifacts.dragEnterArtifactElementHandler);
      artifactsElement.removeEventListener('dragover', window.dialogHandlers.artifacts.dragOverArtifactElementHandler);
      artifactsElement.removeEventListener('dragleave', window.dialogHandlers.artifacts.dragLeaveArtifactElementHandler);
      artifactsElement.removeEventListener('drop', window.dialogHandlers.artifacts.dropArtifactElementHandler);
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

  window.userDialog = userDialog;
})();
