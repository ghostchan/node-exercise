var EventEmitter = require('events');

var util = require('util');
function Bell(name) {
    this.name = name;
}
util.inherits(Bell, EventEmitter);
var jingleBell = new Bell('jingle');
jingleBell.on('ring', function () {
    console.log('收到礼物1');
});
jingleBell.addListener('ring', function () {
    console.log('收到礼物2');
});
var drop = function (who) {
    console.log(who, '铃铛丢了');
}
jingleBell.once('drop', drop);
// jingleBell.removeAllListeners('ring');

jingleBell.emit('ring');
// jingleBell.removeListener('drop',drop);
jingleBell.emit('drop', '老人');
jingleBell.emit('drop', '鹿');

console.log(jingleBell.listeners('ring'));