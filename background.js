chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({
        tabs: []
    }, function () {
        console.log('Tabs initialized');
    });
});

chrome.browserAction.onClicked.addListener(function () {
    chrome.storage.sync.get(['tabs'], function (result) {
        console.log('Value currently is ', result.tabs);
        result.tabs.forEach(function (tab) {
            chrome.tabs.query({
                url: tab + "/*",
                pinned: true
            }, function (collection) {
                if (collection.length === 0) {
                    chrome.tabs.create({
                        url: tab,
                        pinned: true
                    })
                }
            });
        });
    });
});