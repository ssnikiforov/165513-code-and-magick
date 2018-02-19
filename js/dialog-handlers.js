'use strict';

(function () {

  // drag and drop userDialog
  var userDialog = window.userDialog;
  var dialogHandler = userDialog.querySelector('.upload');

  var mouseDownDialogHandler = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var dialogMouseMoveHandler = function (moveEvt) {
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

    var dialogMouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', dialogMouseMoveHandler);
      document.removeEventListener('mouseup', dialogMouseUpHandler);

      if (dragged) {
        var clickPreventDefaultHandler = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', clickPreventDefaultHandler);
        };
        dialogHandler.addEventListener('click', clickPreventDefaultHandler);
      }
    };

    document.addEventListener('mousemove', dialogMouseMoveHandler);
    document.addEventListener('mouseup', dialogMouseUpHandler);
  };
  dialogHandler.addEventListener('mousedown', mouseDownDialogHandler);

  // drag and drop artifacts
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  var dragShopElementHandler = function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  };
  shopElement.addEventListener('dragstart', dragShopElementHandler);

  var artifactsElement = document.querySelector('.setup-artifacts');

  var dragOverArtifactElementHandler = function (evt) {
    evt.preventDefault();
    return false;
  };
  artifactsElement.addEventListener('dragover', dragOverArtifactElementHandler);

  var dropArtifactElementHandler = function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
    artifactsElement.style.removeProperty('outline');

    shopElement.removeEventListener('dragstart', window.dialogHandlers.shopElement.dragStartShopElementHandler);
    shopElement.removeEventListener('drag', window.dialogHandlers.shopElement.dragShopElementHandler);
    shopElement.removeEventListener('dragend', window.dialogHandlers.shopElement.dragEndShopElementHandler);

    evt.preventDefault();
  };
  artifactsElement.addEventListener('drop', dropArtifactElementHandler);

  var dragEnterArtifactElementHandler = function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  };
  artifactsElement.addEventListener('dragenter', dragEnterArtifactElementHandler);

  var dragLeaveArtifactElementHandler = function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  };
  artifactsElement.addEventListener('dragleave', dragLeaveArtifactElementHandler);

  var dragStartShopElementHandler = function () {
    artifactsElement.style.outline = '2px dashed red';
  };
  shopElement.addEventListener('dragstart', dragStartShopElementHandler);

  var dragEndShopElementHandler = function (evt) {
    artifactsElement.style.removeProperty('outline');
    evt.preventDefault();
  };
  shopElement.addEventListener('dragend', dragEndShopElementHandler);

  window.dialogHandlers = {
    dialogHandler: {
      mouseDownDialogHandler: mouseDownDialogHandler,
    },
    shopElement: {
      dragStartShopElementHandler: dragStartShopElementHandler,
      dragShopElementHandler: dragShopElementHandler,
      dragEndShopElementHandler: dragEndShopElementHandler
    },
    artifacts: {
      dragEnterArtifactElementHandler: dragEnterArtifactElementHandler,
      dragOverArtifactElementHandler: dragOverArtifactElementHandler,
      dragLeaveArtifactElementHandler: dragLeaveArtifactElementHandler,
      dropArtifactElementHandler: dropArtifactElementHandler
    }
  };
})();
