// import EventEmitter from "events";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import EventEmitter from "events";
// import EventEmitter from "events";
// import EventEmitter from "stream";
// import Events from "events";
// export default 
class WeirdPause extends EventEmitter {
    command(ms) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!ms || ms % 2 === 0) {
                throw Error("I am weird, I only accept odd number");
            }
            // setTimeout(() => {
            //   this.emit("complete");
            // }, ms);
            // return this;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // if we have a callback, call it right before the complete event
                    // if (cb) {
                    //   cb.call(this.api);
                    // }
                    resolve(null);
                }, ms);
            });
        });
    }
}
module.exports = { WeirdPause };
