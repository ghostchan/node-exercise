var http = require('http');
var fs = require('fs');
function serve(request,response) {
    console.log(request.method,request.url);
    // console.log(request.url);//请求里的URL地址
    // console.log(request.headers);//获取请求头

    // response.statusCode = 404;//设置状态码
    //设置响应的类型，编码为utf-8
    response.setHeader('Content-Type','text/html;charset=utf-8')
    response.setHeader('name','test');//设置响应头
    //读取文件的内容并写入响应体
    fs.readFile('index.html',function(err,data){
        response.write(data);
        response.end();
    });

}
var server = http.createServer(serve);
server.listen(8080,'localhost');