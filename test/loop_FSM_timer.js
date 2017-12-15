
const should = require('should');
const LoopFSMTimer = require('../src/loop_FSM_timer');

const cfg = [
    { name: 'pick', duration: 2, allow:['pick']},
    { name: 'drop', duration: 5, allow:['drop']},
    { name: 'gang', duration: 3, allow:['gang', 'peng']},
    { name: 'eat',  duration: 3, allow:['eat']},
];

var check;
describe("LoopFSMTimer",() => {
    var lft;
    before(() => {
        lft = new LoopFSMTimer(cfg, 3, 1)
        lft.on('leave',function(from, to){
            check = { from, to };
        });
    });
    it("init", () => {
        lft.current.should.eql(1);
        lft.curState().should.eql(cfg[1]);
    });
    it("tick", () => {
        lft.tick(3);
        check.should.eql({from: cfg[1], to:cfg[2]});
        lft.ticks.should.eql(1);
    });
    it("reset", () => {
        lft.reset();
        lft.current.should.eql(1);
        lft.curState().should.eql(cfg[1]);
    });
});
