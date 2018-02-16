'use strict';

(function () {
  var NUMBER_OF_WIZARDS = 4;

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
