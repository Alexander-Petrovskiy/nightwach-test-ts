module.exports = {
    'Demo test': function (browser) {
        console.log(browser.globals.timeToWait);
        browser
            .url(browser.launch_url)
            .waitForElementVisible('[data-nw=name-input]')
            .setValue('[data-nw=name-input]', 'Pierre')
            .weirdPause(browser.globals.timeToWait)
            .assert.containsText('[data-nw=welcome-message]', 'Welcome Pierre !')
            .end()
    }
}