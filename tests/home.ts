// import { NightwatchAPI } from "nightwatch"

module.exports = {
    after: async (browser) => {
        console.log('I am done.')
    },

    'Demo test': async (browser) => {
        await browser
            .url('https://nightwatch-demo.netlify.com/')
            .waitForElementVisible('[data-nw=name-input]')
            .setValue('[data-nw=name-input]', 'Pierre')
            .pause(1000)
            .assert.containsText('[data-nw=welcome-message]', 'Welcome Pierre !')
            .end()
    }
}