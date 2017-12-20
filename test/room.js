const should = require('should');
const { createRoom } = require('../src/room');

function createPlayer(uid) {
    return { uid };
}
describe("Room", () => {
    var room ;
    before(() => {
        room = createRoom('code');
    });
    describe("join", () => {
        var p1 = createPlayer('u1');
        it('with wrong code', () => {
            room.join(p1, 'o').should.false();
            room.memberCount().should.eql(0);
        });
        it("join success and should be owner", () => {
            room.join(p1, 'code').should.true();
            room.memberCount().should.eql(1);
            room.owner.should.eql('u1');
        });
        it("should not join again",() => {
            room.join(p1, 'code').should.false();
        });
        it("join success and should not be owner", () => {
            var p2 = createPlayer('u2');
            room.join(p2, 'code').should.true();
            room.memberCount().should.eql(2);
            room.owner.should.eql('u1');
        });
    });
    describe("changeOwner", () => {
        it("not exist", () => {
            room.changeOwner('u3').should.false();
        });
        it("change to u2", () => {
            room.changeOwner('u2').should.true();
            room.owner.should.eql('u2');
        });
        it("change to u1", () => {
            room.changeOwner('u1').should.true();
            room.owner.should.eql('u1');
        });

    });
    describe("leave", () => {
        it("player is not exist", () => {
            room.leave('u3').should.false();
        });
        it("owner leave should change owner", () => {
            room.leave('u1').should.true();
            room.memberCount().should.eql(1);
            room.owner.should.eql('u2');
        });
        it("all leave", () => {
            room.leave('u2').should.true();
            room.memberCount().should.eql(0);
            should(room.owner).null();
         });
    });

    describe("dispatchCmd", () => {
    });
});
