var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import sleep from "../src/helpers/sleep_code";
const demoTest = (browser) => __awaiter(void 0, void 0, void 0, function* () {
    sleep(2);
    yield browser
        .url("https://nightwatch-demo.netlify.com/")
        .waitForElementVisible("[data-nw=name-input]")
        .setValue("[data-nw=name-input]", "Pierre")
        .weirdPause(1001) // try putting 1000 and see how the error is trigger
        .assert.containsText("[data-nw=welcome-message]", "Welcome Pierre !")
        .end();
});
module.exports = { demoTest };
