'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var isEscEvent = function (evt, action) {
    if (evt.keyCode === ESC_KEYCODE) {
      action();
    }
  };

  var isEnterEvent = function (evt, action) {
    if (evt.keyCode === ENTER_KEYCODE) {
      action();
    }
  };

  var getRandomizedValue = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getRandomizedColor = function (colors) {
    return getRandomizedValue(colors);
  };

  window.util = {
    isEscEvent: isEscEvent,
    isEnterEvent: isEnterEvent,
    getRandomizedValue: getRandomizedValue,
    getRandomizedColor: getRandomizedColor
  };
})();
