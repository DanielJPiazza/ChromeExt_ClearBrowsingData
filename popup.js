let confirm = document.getElementById('confirm');
let data = document.getElementById('data');
let prompt = document.getElementById('prompt');

confirm.onclick = function() {  
    var callback = function() {
        data.style.color = "green";
        data.innerHTML = "CLEARED";
    };

    data.style.color = "black";
    data.innerHTML = "WORKING...";
    
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
}
