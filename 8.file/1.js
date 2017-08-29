var fs = require('fs');

//同步读取
var data = fs.readFil
eSync("index.txt","utf-8");
console.log(data);

//异步读取
fs.readFile("index.txt","utf-8",function (err,data) {
    console.log(data);
});