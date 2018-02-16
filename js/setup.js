'use strict';

(function () {
  var setupPlayerWrap = document.querySelector('.setup-player');
  var setupCoatEl = setupPlayerWrap.querySelector('.wizard-coat');
  var setupEyesEl = setupPlayerWrap.querySelector('.wizard-eyes');
  var setupFireballEl = setupPlayerWrap.querySelector('.setup-fireball-wrap');

  var setupCoatClickHandler = function () {
    var newCoatColor = window.util.randomizeColor(window.wizards.coat.colors);
    var coatColorInput = setupPlayerWrap.querySelector('input[name$="coat-color"]');

    setupCoatEl.style.fill = newCoatColor;
    coatColorInput.value = newCoatColor;
  };

  var setupEyesClickHandler = function () {
    var newEyesColor = window.util.randomizeColor(window.wizards.eyes.colors);
    var eyesColorInput = setupPlayerWrap.querySelector('input[name$="eyes-color"]');

    setupEyesEl.style.fill = newEyesColor;
    eyesColorInput.value = newEyesColor;
  };

  var setupFireballClickHandler = function () {
    var newFireballColor = window.util.randomizeColor(window.wizards.fireball.colors);
    var fireballColorInput = setupPlayerWrap.querySelector('input[name$="fireball-color"]');

    setupFireballEl.style.background = newFireballColor;
    fireballColorInput.value = newFireballColor;
  };

  window.setup = {
    coat: {
      addClickEventListener: function () {
        return setupCoatEl.addEventListener('click', setupCoatClickHandler);
      },
      removeClickEventListener: function () {
        return setupCoatEl.removeEventListener('click', setupCoatClickHandler);
      }
    },
    eyes: {
      addClickEventListener: function () {
        return setupEyesEl.addEventListener('click', setupEyesClickHandler)
      },
      removeClickEventListener: function () {
        return setupEyesEl.removeEventListener('click', setupEyesClickHandler);
      }
    },
    fireball: {
      addClickEventListener: function () {
        return setupFireballEl.addEventListener('click', setupFireballClickHandler)
      },
      removeClickEventListener: function () {
        return setupFireballEl.removeEventListener('click', setupFireballClickHandler);
      }
    }
  };
})();
