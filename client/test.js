var Pomelo = require('./pomelo');

var pomelo = Pomelo();

pomelo.init({ host: '127.0.0.1', port: 3020}, function (err) {
    pomelo.request('game.handler.login', 'test', (er, data) => {
        console.log(er, data);
    });
});
pomelo.on('onAdd', (data) => {
  console.log("===onA", data);
});


