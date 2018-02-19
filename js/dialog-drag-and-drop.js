'use strict';

(function () {

  // drag and drop userDialog
  var userDialog = window.userDialog;
  var dialogHandler = userDialog.querySelector('.upload');

  var dialogMouseDownHandler = function () {

  };
  dialogHandler.addEventListener('mousedown', function (evt) {
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
        var clickPreventDefaultHandler = function (evt) {
          evt.preventDefault();
          dialogHandler.removeEventListener('click', clickPreventDefaultHandler);
        };
        dialogHandler.addEventListener('click', clickPreventDefaultHandler);
      }
    };

    document.addEventListener('mousemove', dialogMouseMoveHandler);
    document.addEventListener('mouseup', dialogMouseUpHandler);
  });

  // drag and drop artifacts
  var shopElement = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
    }
  });

  var artifactsElement = document.querySelector('.setup-artifacts');

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.target.appendChild(draggedItem);
    artifactsElement.style.removeProperty('outline');
    evt.preventDefault();
  });


  artifactsElement.addEventListener('dragenter', function (evt) {
    evt.target.style.backgroundColor = 'yellow';
    evt.preventDefault();
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    evt.target.style.backgroundColor = '';
    evt.preventDefault();
  });

  shopElement.addEventListener('dragstart', function () {
    artifactsElement.style.outline = '2px dashed red';
  });
  shopElement.addEventListener('dragend', function (evt) {
    artifactsElement.style.removeProperty('outline');
    evt.preventDefault();
  });

  window.dialogDragAndDrop = {
    shopElement: shopElement,
    mouseDownShopElementHandler: mouseMoveShopElementHandler
  };
})();
