'use strict';

(function () {
  var NUMBER_OF_WIZARDS = 4;

  var getWizards = function (numberOfWizards) {
    var wizards = [];

    for (var i = 0; i < numberOfWizards; i++) {
      var wizard = {
        name: window.wizards.name(),
        coatColor: window.wizards.coatColor(),
        eyesColor: window.wizards.eyesColor()
      };
      wizards.push(wizard);
    }

    return wizards;
  };

  var wizards = getWizards(NUMBER_OF_WIZARDS);

  var renderWizard = function (wizard, template) {
    var wizardElement = template.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  for (var i = 0, n = wizards.length; i < n; i++) {
    var wizardTemplate = similarWizardTemplate.cloneNode(true);

    fragment.appendChild(renderWizard(wizards[i], wizardTemplate));
  }

  var userDialog = window.userDialog;
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  similarListElement.appendChild(fragment);
  userDialog.querySelector('.setup-similar').classList.remove('hidden');
})();
