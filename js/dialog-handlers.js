'use strict';

(function () {
  // drag and drop userDialog
  var userDialog = document.querySelector('.setup');
  var dialogHandler = userDialog.querySelector('.upload');
  var userDialogForm = userDialog.querySelector('.setup-wizard-form');

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

  // drag and drop artifacts
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  var dragShopElementHandler = function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  };

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

    shopElement.removeEventListener('dragstart', dragStartShopElementHandler);
    shopElement.removeEventListener('drag', dragShopElementHandler);
    shopElement.removeEventListener('dragend', dragEndShopElementHandler);

    evt.preventDefault();
  };

  var dragEnterArtifactElementHandler = function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  };

  var dragLeaveArtifactElementHandler = function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  };

  var dragStartShopElementHandler = function () {
    artifactsElement.style.outline = '2px dashed red';
  };

  var dragEndShopElementHandler = function (evt) {
    artifactsElement.style.removeProperty('outline');
    evt.preventDefault();
  };

  // submit form
  var submitFormHandler = function (evt) {
    evt.preventDefault();

    var formData = new FormData(userDialogForm);
    window.backend.save(formData, window.util.successHandler, window.util.errorHandler);
  };

  // prepare handlers export
  var initDialogHandlers = function () {
    dialogHandler.addEventListener('mousedown', mouseDownDialogHandler);
    shopElement.addEventListener('drag', dragShopElementHandler);
    shopElement.addEventListener('dragstart', dragStartShopElementHandler);
    shopElement.addEventListener('dragend', dragEndShopElementHandler);
    artifactsElement.addEventListener('dragenter', dragEnterArtifactElementHandler);
    artifactsElement.addEventListener('dragover', dragOverArtifactElementHandler);
    artifactsElement.addEventListener('dragleave', dragLeaveArtifactElementHandler);
    artifactsElement.addEventListener('drop', dropArtifactElementHandler);
    userDialogForm.addEventListener('submit', submitFormHandler);
  };
  var removeDialogHandlers = function () {
    dialogHandler.removeEventListener('mousedown', mouseDownDialogHandler);
    shopElement.addEventListener('drag', dragShopElementHandler);
    shopElement.addEventListener('dragstart', dragStartShopElementHandler);
    shopElement.addEventListener('dragend', dragEndShopElementHandler);
    artifactsElement.removeEventListener('dragend', dragEnterArtifactElementHandler);
    artifactsElement.removeEventListener('dragover', dragOverArtifactElementHandler);
    artifactsElement.removeEventListener('dragleave', dragLeaveArtifactElementHandler);
    artifactsElement.removeEventListener('drop', dropArtifactElementHandler);
    userDialogForm.removeEventListener('submit', submitFormHandler);
  };

  window.dialogHandlers = {
    initDialogHandlers: initDialogHandlers,
    removeDialogHandlers: removeDialogHandlers
  };
})();
