const skipButtonsSelectors = [
    '[aria-label="Passer l\'introduction"]',
    '[aria-label="Passer le récapitulatif"]',
    '[aria-label="Prochain épisode"]',
    '.skip-credits'
  ];
  
  function clickSkipButtons() {
    chrome.storage.local.get(['enabled'], (result) => {
      if (result.enabled ?? true) {
        skipButtonsSelectors.forEach(selector => {
          const button = document.querySelector(selector);
          if (button) {
            button.click();
          }
        });
      }
    });
  }
  
  const observer = new MutationObserver(() => {
    clickSkipButtons();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
  
  clickSkipButtons();
  