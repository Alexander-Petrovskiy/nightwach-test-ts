import EventEmitter from "events";

export class WeirdPause extends EventEmitter {
  command(ms: number, cb: object | null = null) {
    if (!ms || ms % 2 === 0) {
      throw Error("I am weird, I only accept odd number");
    }

    setTimeout(() => {
      this.emit("complete");
    }, ms);

    return this;
  }
}
