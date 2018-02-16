'use strict';

(function () {
  /***** -------------------- WIZARDS -------------------- *****/
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

  var NUMBER_OF_WIZARDS = 4;

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var SETUP_FORM_ACTION_PATH = 'https://js.dump.academy/code-and-magick';

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

  /***** -------------------- DIALOG -------------------- *****/
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');
  var userDialogForm = userDialog.querySelector('.setup-wizard-form');
  var userDialogIcon = userDialogOpen.querySelector('.setup-open-icon');
  var userDialogNameInput = userDialog.querySelector('.setup-user-name');

  userDialogIcon.tabIndex = 0;
  userDialogClose.tabIndex = 0;
  userDialogNameInput.minLength = 2;
  userDialogForm.action = SETUP_FORM_ACTION_PATH;

  var setupPlayerWrap = document.querySelector('.setup-player');
  var setupCoatEl = setupPlayerWrap.querySelector('.wizard-coat');
  var setupEyesEl = setupPlayerWrap.querySelector('.wizard-eyes');
  var setupFireballEl = setupPlayerWrap.querySelector('.setup-fireball-wrap');

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHandler);
    document.addEventListener('click', formButtonClickHandler);
    document.addEventListener('keydown', formButtonPressHandler);
    setupCoatEl.addEventListener('click', setupCoatClickHandler);
    setupEyesEl.addEventListener('click', setupEyesClickHandler);
    setupFireballEl.addEventListener('click', setupFireballClickHandler);
  };

  var closePopup = function () {
    if (document.activeElement !== userDialogNameInput) {
      userDialog.classList.add('hidden');
      document.removeEventListener('keydown', popupEscPressHandler);
      document.removeEventListener('click', formButtonClickHandler);
      document.removeEventListener('keydown', formButtonPressHandler);
      setupCoatEl.removeEventListener('click', setupCoatClickHandler);
      setupEyesEl.removeEventListener('click', setupEyesClickHandler);
      setupFireballEl.removeEventListener('click', setupFireballClickHandler);
    }
  };

  var popupEscPressHandler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
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

  var formButtonSetSubmitType = function () {
    var formButton = userDialog.querySelector('.setup-submit');
    formButton.type = 'submit';
  };

  var formButtonClickHandler = function () {
    formButtonSetSubmitType();
  };

  var formButtonPressHandler = function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      formButtonSetSubmitType();
    }
  };

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
