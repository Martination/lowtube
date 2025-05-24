let minViews = 0;

browser.storage.sync.get(['minViews']).then(function(result) {
  if (result.minViews) {
    minViews = result.minViews;
    filterVideos();
  }
});

browser.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'updateSettings') {
    minViews = request.minViews;
    filterVideos();
  }
});

function parseViewCount(viewCountText) {
  if (!viewCountText) return 0;
  
  viewCountText = viewCountText.replace(/,/g, '').toLowerCase();
  
  if (viewCountText.includes('m')) {
    return parseFloat(viewCountText) * 1000000;
  } else if (viewCountText.includes('k')) {
    return parseFloat(viewCountText) * 1000;
  } else {
    return parseInt(viewCountText) || 0;
  }
}

function filterVideos() {
  const videoItems = document.querySelectorAll('ytd-video-renderer, ytd-rich-item-renderer');
  
  videoItems.forEach(item => {
    const viewCountElement = item.querySelector('#metadata-line span:first-of-type');
    if (viewCountElement) {
      const viewCount = parseViewCount(viewCountElement.textContent);
      
      if (viewCount < minViews) {
        item.style.display = 'none';
      }
    }
  });
}

const observer = new MutationObserver(function(mutations) {
  filterVideos();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

filterVideos();
