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

  var getName = function (names, surnames) {
    var randomName = window.util.randomizeValue(names);
    var randomSurname = window.util.randomizeValue(surnames);

    return Math.round(Math.random()) ? randomName + ' ' + randomSurname : randomSurname + ' ' + randomName;
  };

  var getWizards = function (numberOfWizards) {
    var wizards = [];

    for (var i = 0; i < numberOfWizards; i++) {
      var wizard = {
        name: getName(NAMES, SURNAMES),
        coatColor: window.util.randomizeColor(COAT_COLORS),
        eyesColor: window.util.randomizeColor(EYES_COLORS)
      };
      wizards.push(wizard);
    }

    return wizards;
  };

  var renderWizard = function (wizard, template) {
    var wizardElement = template.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  window.wizards = {
    names: NAMES,
    surnames: SURNAMES,
    coat: {
      colors: COAT_COLORS
    },
    eyes: {
      colors: EYES_COLORS
    },
    fireball: {
      colors: FIREBALL_COLORS
    },
    getWizards: getWizards,
    renderWizard: renderWizard
  }
})();
