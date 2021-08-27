// const EventEmitter = require('events')
import EventEmitter from 'events';

class WeirdPause extends EventEmitter {
    command(ms: number, cb: any) {
        if (!ms || ms % 2 === 0) {
            throw Error('I am weird, I only accept odd number')
        }

        setTimeout(() => {
            this.emit('complete')
        }, ms)

        return this
    }
}

module.exports = WeirdPause
