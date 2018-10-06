// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function() {
    var callback = function() {
        alert("All browsing data has been deleted.");
    };

    chrome.browsingData.remove({
        // '0' removes all browsing data.
        "since": 0
    }, {
        "appcache": true,
        "cache": true,
        "cookies": true,
        "downloads": true,
        "fileSystems": true,
        "formData": true,
        "history": true,
        "indexedDB": true,
        "localStorage": true,
        "pluginData": true,
        "passwords": true,
        "webSQL": true
    }, callback);
  });
