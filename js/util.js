'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var getRandomizedValue = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getRandomizedColor = function (colors) {
    return getRandomizedValue(colors);
  };

  window.util = {
    keyCode: {
      enter: ENTER_KEYCODE,
      esc: ESC_KEYCODE
    },
    randomizeValue: getRandomizedValue,
    randomizeColor: getRandomizedColor
  };
})();
