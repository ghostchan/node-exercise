var http = require('http');
var fs = require('fs');
var mime = require('mime');
var url = require('url');
function serve(request,response) {
    var urlObj = url.parse(request.url,true);
    var pathname = urlObj.pathname;
    console.log(pathname);
    if(pathname == '/'){
        //设置响应的类型，编码为utf-8
        response.setHeader('Content-Type','text/html;charset=utf-8')
        //读取文件的内容并写入响应体
        fs.readFile('index.html',function(err,data){
            response.write(data);
            response.end();
        });
    }else if(pathname == '/clock'){
        var count = 0;
        var int = setInterval(function () {
            response.write(new Date().toString());
            count ++;
            if(count == 5){
                clearInterval(int);
                response.end();
            }
        },1000);

    }else{
        static(pathname,response);
    }

    function static(pathname,response) {
        //设置响应的类型，编码为utf-8
        response.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8')
        //读取文件的内容并写入响应体
        fs.readFile(pathname.slice(1),function(err,data){
            response.write(data);
            response.end();
        });
    }


}
var server = http.createServer(serve);
server.listen(8081,'localhost');