'use strict';

(function () {
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var setupPlayerWrap = document.querySelector('.setup-player');
  var setupCoatEl = setupPlayerWrap.querySelector('.wizard-coat');
  var setupEyesEl = setupPlayerWrap.querySelector('.wizard-eyes');
  var setupFireballEl = setupPlayerWrap.querySelector('.setup-fireball-wrap');

  var setupCoatClickHandler = function () {
    var newCoatColor = getColor(COAT_COLORS);
    var coatColorInput = setupPlayerWrap.querySelector('input[name$="coat-color"]');

    setupCoatEl.style.fill = newCoatColor;
    coatColorInput.value = newCoatColor;
  };

  var setupEyesClickHandler = function () {
    var newEyesColor = getColor(EYES_COLORS);
    var eyesColorInput = setupPlayerWrap.querySelector('input[name$="eyes-color"]');

    setupEyesEl.style.fill = newEyesColor;
    eyesColorInput.value = newEyesColor;
  };

  var setupFireballClickHandler = function () {
    var newFireballColor = getColor(FIREBALL_COLORS);
    var fireballColorInput = setupPlayerWrap.querySelector('input[name$="fireball-color"]');

    setupFireballEl.style.background = newFireballColor;
    fireballColorInput.value = newFireballColor;
  };
})();
