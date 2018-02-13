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

  var NUMBER_OF_WIZARDS = 4;

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var getRandomizedValue = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getName = function (names, surnames) {
    var randomName = getRandomizedValue(names);
    var randomSurname = getRandomizedValue(surnames);

    return Math.round(Math.random()) ? randomName + ' ' + randomSurname : randomSurname + ' ' + randomName;
  };

  var getColor = function (colors) {
    return getRandomizedValue(colors);
  };

  var getWizards = function (numberOfWizards) {
    var wizards = [];

    for (var i = 0; i < numberOfWizards; i++) {
      var wizard = {
        name: getName(NAMES, SURNAMES),
        coatColor: getColor(COAT_COLORS),
        eyesColor: getColor(EYES_COLORS)
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

  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogIcon = userDialogOpen.querySelector('.setup-open-icon');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var formButton = userDialog.querySelector('.setup-submit');

  userDialogIcon.tabIndex = 0;
  userDialogClose.tabIndex = 0;

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
    document.addEventListener('click', formButtonSubmitHandler);
  };

  var closePopup = function () {
    if (!document.activeElement.classList.contains('setup-user-name')) {
      userDialog.classList.add('hidden');
      document.removeEventListener('keydown', popupEscPressHandler);
    }
  };

  var popupEscPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  var formButtonSubmitHandler = function () {

  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });


  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var fragment = document.createDocumentFragment();

  var wizards = getWizards(NUMBER_OF_WIZARDS);

  for (var i = 0, n = wizards.length; i < n; i++) {
    var wizardTemplate = similarWizardTemplate.cloneNode(true);

    fragment.appendChild(renderWizard(wizards[i], wizardTemplate));
  }

  similarListElement.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
