chrome.webRequest.onBeforeRequest.addListener(
  (details) => ({cancel: true}),
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
