const EventEmitter = require('events');

function keepRange([from, to], value) {
    if(value < from ) {
        return from;
    }
    if( value >= to) {
        return value % (to - from) ;
    }
    return value;
}
class LoopFSMTimer extends EventEmitter {
    constructor(rule, tick = 0, state = 0) {
        super();
        if(rule.length == 0) {
            throw "rule is empty";
        }
        this.initial = {tick, state};
        this.rule = rule;
        this.keepRange = keepRange.bind(null, [0, this.rule.length]);
        this.reset();
    }
    get current() {
        return this.state;
    }
    tick(times) {
        for(var i = 0; i < times; i++) {
            const { duration } = this.curState();
            this.ticks += 1;
            this.emit('tick', this);
            if(this.ticks > duration) {
                this.next();
            }
        }
    }
    reset(){
        this.state = this.keepRange(this.initial.state);
        this.ticks = this.initial.tick;
    }
    next(){
        var state = this.keepRange(this.state + 1);
        const from = this.curState();
        const to = this.rule[state];
        this.emit('leave', from, to);
        this.ticks = 1;
        this.state = state;
        this.emit('enter', from, to);
    }
    curState() {
        return this.rule[this.current];
    }
}

module.exports = LoopFSMTimer;
