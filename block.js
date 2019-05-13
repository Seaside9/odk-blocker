chrome.webRequest.onBeforeRequest.addListener(
  () => ({cancel: true}),
  {urls:
    ["*://*.doubleclick.net/*",
    "*://*.doubleclick.com/*",
    "*://*.sizmek.com/*",
    "*://*.googleadservices.com/*",
    "*://*.googlesyndication.com/*",
    "*://*.moat.com/*"]
  },
  ["blocking"]
);
