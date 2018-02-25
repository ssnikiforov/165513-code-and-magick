'use strict';

(function () {
  var NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var getName = function () {
    var randomName = window.util.getRandomizedValue(NAMES);
    var randomSurname = window.util.getRandomizedValue(SURNAMES);

    return Math.round(Math.random()) ? randomName + ' ' + randomSurname : randomSurname + ' ' + randomName;
  };

  var getCoatColor = function () {
    return window.util.getRandomizedColor(COAT_COLORS);
  };

  var getEyesColor = function () {
    return window.util.getRandomizedColor(EYES_COLORS);
  };

  var getFireballColor = function () {
    return window.util.getRandomizedColor(FIREBALL_COLORS);
  };

  window.wizards = {
    name: getName,
    coatColor: getCoatColor,
    eyesColor: getEyesColor,
    fireballColor: getFireballColor
  };
})();
