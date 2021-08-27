var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    "Demo test": (browser) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("================");
        console.log(browser.launch_url);
        console.log(browser.globals);
        console.log(browser.globals.timeToWait);
        console.log("================");
        yield browser
            .url(browser.launch_url)
            .waitForElementVisible("[data-nw=name-input]")
            .setValue("[data-nw=name-input]", "Pierre")
            .weirdPause(browser.globals.timeToWait)
            .assert.containsText("[data-nw=welcome-message]", "Welcome Pierre !")
            .end();
    }),
};
export {};
