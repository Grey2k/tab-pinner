// tabs = [
//     'https://music.yandex.ru/home',
//     'https://gitlab.alycedev.com',
//     'https://alycecom.atlassian.net/wiki',
//     'https://alycecom.atlassian.net/jira',
//     'https://mail.google.com/mail',
//     'https://calendar.google.com/calendar/u/0/r/week',
//     'https://mailtrap.io',
// ]

window.onload = function () {
    const textarea = document.getElementById('pinnedTabs')

    chrome.storage.sync.get(['tabs'], function (result) {
        console.log('options loaded', result);

        if (result.tabs.length > 0) {
            textarea.value = result.tabs.join("\n")
        }
    })
}

const save = document.getElementById('saveSettings')

save.addEventListener('click', function () {
    let text = document.getElementById('pinnedTabs').value;

    let tabs = []
    if (text.length > 0) {
        tabs = text.split('\n')
    }

    chrome.storage.sync.set({tabs: tabs}, function () {
        console.log('tabs saved', tabs);
    })
});