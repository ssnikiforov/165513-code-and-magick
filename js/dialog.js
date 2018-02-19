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

  var dialogHandler = userDialog.querySelector('.upload');

  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.userDialog = userDialog;
})();
