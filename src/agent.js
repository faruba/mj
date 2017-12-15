const { cloneDeep } = require('lodash');
const { cmp } = require('./utils');

class Stack {
    constructor(init = []) {
        this.tiles = cloneDeep(init);
    }
    sort() {
        this.tiles.sort(cmp);
    }
    add(tile) {
        this.tiles.push(tile);
        this.sort();
    }
    remove(idx) {
        this.tiles.slice(idx, 1);
    }

}
class PlayerAgent {
    constructor() {
    }

    action() {
    }

}
