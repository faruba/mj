
class Room {
    constructor(code){
        this.players = [];
        this.owner = null;
        this.code = code
    }
    join(player, code) {
        if(code !== this.code){
            return false;
        }
        if(this.isHave(player.uid)) {
            return false;
        }
        this.players.push(player);
        if(this.players.length == 1) {
            this._setOwner(this.players[0].uid);
        }
        return true;
    }

    isHave(uid) {
        return this.players.findIndex(p => p.uid === uid) !== -1;
    }

    changeOwner(uid) {
        if(!this.isHave(uid)) {
            return false;
        }
        this._setOwner(uid);
        return true;
    }

    leave(uid) {
        const ori = this.memberCount();
        this.players = this.players.filter(p => p.uid !== uid);
        if(ori === this.memberCount()){
            return false;
        }
        if(uid == this.owner) {
            const newOwner = this.players.length == 0 ? null : this.players[0].uid;
            this._setOwner(newOwner);
        }
        return true;
    }

    memberCount(){
        return this.players.length;
    }

    dispatch(target, cmd, args) {
        return this[target][cmd].apply(null, args);
    }
    _setOwner(uid){
        this.owner = uid;
    }

}

module.exports = {
    createRoom(code){
        return new Room(code);
    }
}
