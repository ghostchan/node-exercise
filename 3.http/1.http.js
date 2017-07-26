var http = require('http')
function serve(request,response) {
    console.log(request.method);
    console.log(request.url);//请求里的URL地址
    console.log(request.headers);//获取请求头

    response.statusCode = 404;//设置状态码
    //设置响应的类型，编码为utf-8
    response.setHeader('Content-Type','text/html;charset=utf-8')
    response.setHeader('name','test');//设置响应头
    response.write(new Date().toString());
    response.end();
}
var server = http.createServer(serve);
server.listen(8080,'localhost');