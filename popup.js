const status = document.getElementById('status');
const toggle = document.getElementById('toggle');

chrome.storage.local.get(['enabled'], (result) => {
  const isEnabled = result.enabled ?? true;
  updateUI(isEnabled);
});

toggle.addEventListener('click', () => {
  chrome.storage.local.get(['enabled'], (result) => {
    const isEnabled = !(result.enabled ?? true);
    chrome.storage.local.set({ enabled: isEnabled }, () => {
      updateUI(isEnabled);
    });
  });
});

function updateUI(enabled) {
  status.textContent = enabled ? 'Extension activée ✅' : 'Extension désactivée ⛔';
  toggle.textContent = enabled ? 'Désactiver' : 'Activer';
}
