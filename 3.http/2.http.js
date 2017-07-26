var http = require('http');
var fs = require('fs');
var mime = require('mime');
function serve(request,response) {
    var url = request.url;
    console.log(url);
    if(url == '/'){
        //设置响应的类型，编码为utf-8
        response.setHeader('Content-Type','text/html;charset=utf-8')
        //读取文件的内容并写入响应体
        fs.readFile('index.html',function(err,data){
            response.write(data);
            response.end();
        });
    }else{
        static(url,response);
    }

    function static(url,response) {
        //设置响应的类型，编码为utf-8
        response.setHeader('Content-Type',mime.lookup(url)+';charset=utf-8')
        //读取文件的内容并写入响应体
        fs.readFile(url.slice(1),function(err,data){
            response.write(data);
            response.end();
        });
    }


}
var server = http.createServer(serve);
server.listen(8081,'localhost');