process.on('uncaughtException',function(e){
    console.log('uncaughtException',e.message);
});

process.stdout.write('hello');
console.log(process.pid);
process.stdin.on('data',function(data){
    console.log(data.toString());
});

process.on('exit',function(){
    console.log('退出前执行');
});

try{
    console.log(a);
}catch(e){
    console.log(e.message);
}

console.log(b);
