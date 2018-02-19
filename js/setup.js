'use strict';

(function () {
  var setupPlayerWrap = document.querySelector('.setup-player');
  var setupCoatEl = setupPlayerWrap.querySelector('.wizard-coat');
  var setupEyesEl = setupPlayerWrap.querySelector('.wizard-eyes');
  var setupFireballEl = setupPlayerWrap.querySelector('.setup-fireball-wrap');

  var setupCoatClickHandler = function () {
    var newCoatColor = window.wizards.coatColor();
    var coatColorInput = setupPlayerWrap.querySelector('input[name$="coat-color"]');

    setupCoatEl.style.fill = newCoatColor;
    coatColorInput.value = newCoatColor;
  };

  var setupEyesClickHandler = function () {
    var newEyesColor = window.wizards.eyesColor();
    var eyesColorInput = setupPlayerWrap.querySelector('input[name$="eyes-color"]');

    setupEyesEl.style.fill = newEyesColor;
    eyesColorInput.value = newEyesColor;
  };

  var setupFireballClickHandler = function () {
    var newFireballColor = window.wizards.fireballColor();
    var fireballColorInput = setupPlayerWrap.querySelector('input[name$="fireball-color"]');

    setupFireballEl.style.background = newFireballColor;
    fireballColorInput.value = newFireballColor;
  };

  var initWizardSetupEventListeners = function () {
    setupCoatEl.addEventListener('click', setupCoatClickHandler);
    setupEyesEl.addEventListener('click', setupEyesClickHandler);
    setupFireballEl.addEventListener('click', setupFireballClickHandler);
  };

  var removeWizardSetupEventListeners = function () {
    setupCoatEl.removeEventListener('click', setupCoatClickHandler);
    setupEyesEl.removeEventListener('click', setupEyesClickHandler);
    setupFireballEl.removeEventListener('click', setupFireballClickHandler);
  };
  window.setup = {
    initWizardSetupEventListeners: initWizardSetupEventListeners,
    removeWizardSetupEventListeners: removeWizardSetupEventListeners
  };
})();
