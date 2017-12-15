
const defaultValue = {
    score:0,
}
class Player{
    constructor(data) {
        this.initDefault(data);
    }
    initDefault(data){
        this.data = cloneDeep(data);
        for(var k in defaultValue) {
            if(data[k] == null) {
                data[k] = defaultValue[k];
            }
        }
    }

}


class GameBoard{
    constructor(players, tilePool) {
        this.players = players;
        this.tilePool = tilePool;
        this.timerCache = {};
        this.timer = new timer();
        this.currentPlayerIdx = 0;
        this.initGame();
        
    }
    initGame(){
        this.timer.reset();
        tilePool.reset();
        this.updateFirstPlayer();
    }
    updateFirstPlayer{
        const num = this.players.length;
        this.currentPlayerIdx = Math.floor(Math.random() * num) % num; 
    }
    tick(t){
        this.timer.tick(t);
    }
    
}

class TilePool {
}
