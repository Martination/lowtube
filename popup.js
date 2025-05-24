document.addEventListener('DOMContentLoaded', function() {
  const minViewsInput = document.getElementById('minViews');
  const saveButton = document.getElementById('saveButton');
  const status = document.getElementById('status');

  // Load saved settings
  browser.storage.sync.get(['minViews']).then(function(result) {
    if (result.minViews) {
      minViewsInput.value = result.minViews;
    }
  });

  // Save settings
  saveButton.addEventListener('click', function() {
    const minViews = parseInt(minViewsInput.value) || 0;
    
    browser.storage.sync.set({ minViews: minViews }).then(function() {
      status.style.display = 'block';
      setTimeout(() => {
        status.style.display = 'none';
      }, 2000);

      // Notify content script about the change
      browser.tabs.query({active: true, currentWindow: true}).then(function(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
          action: 'updateSettings',
          minViews: minViews
        });
      });
    });
  });
});
