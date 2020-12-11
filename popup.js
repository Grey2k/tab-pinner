let changeColor = document.getElementById('changeColor');

changeColor.onclick = function (element) {
    const tabs = [
        {
            url: "https://music.yandex.ru/home", pinned: true
        },
        {
            url: "https://gitlab.alycedev.com", pinned: true
        },
        {
            url: "https://alycecom.atlassian.net/wiki", pinned: true
        },
        {
            url: "https://alycecom.atlassian.net/jira", pinned: true
        },
        {
            url: "https://mail.google.com/mail", pinned: true
        },
        {
            url: "https://calendar.google.com/calendar/u/0/r/week", pinned: true
        },
        {
            url: "https://mailtrap.io", pinned: true
        },
        {
            url: "https://trello.com/b/F18WIV6r/todo-lists", pinned: true
        }
    ]

    tabs.forEach(function (tab) {
        chrome.tabs.query({
            url: tab.url + "/*",
            pinned: tab.pinned
        }, function (collection) {
            if (collection.length === 0) {
                chrome.tabs.create(tab)
            }
        });
    });
};