module.exports = {
    'Demo test': function (browser) {
        browser
            .url('https://nightwatch-demo.netlify.com/')
            .waitForElementVisible('[data-nw=name-input]')
            .setValue('[data-nw=name-input]', 'Pierre')
            .weirdPause(1001) // try putting 1000 and see how the error is trigger
            .assert.containsText('[data-nw=welcome-message]', 'Welcome Pierre !')
            .end()
    }
}
