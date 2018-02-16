'use strict';

(function () {
  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var NUMBER_OF_WIZARDS = 4;



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
