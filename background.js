browser.runtime.onInstalled.addListener(function() {
  browser.storage.sync.get(['minViews']).then(function(result) {
    if (!result.minViews) {
      browser.storage.sync.set({ minViews: 1000 });
    }
  });
});
