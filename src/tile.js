
class Tile {
    constructor(type, subType, isShow) {
        this.type = type;
        this.subType = subType;
        this.isShow = isShow;
    }
    isSame(tiles){
        return tiles.every( title => (tile.type == this.type && tile.subType == this.subType)
            || (env && env.isSame(this, tile)));
    }
    isSameType(tiles, env) {
        return tiles.every( tile => tile.type == this.type);
    }
}


function genTile() {

}
class Table {
}
