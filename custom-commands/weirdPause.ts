// import EventEmitter from "events";

// import EventEmitter from "events";

// import EventEmitter from "stream";
// import Events from "events";

export default class WeirdPause {// extends EventEmitter{
  async command(ms: number) {
    if (!ms || ms % 2 === 0) {
      throw Error("I am weird, I only accept odd number");
    }

    // setTimeout(() => {
    //   this.emit("complete");
    // }, ms);

    // return this;

    return new Promise(
      (resolve: (value: unknown) => void, reject: (reason?: any) => void) => {
        setTimeout(() => {
          // if we have a callback, call it right before the complete event
          // if (cb) {
          //   cb.call(this.api);
          // }

          resolve(null);
        }, ms);
      }
    );
  }
}
// module.exports = { WeirdPause };
