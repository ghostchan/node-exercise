console.log('a');
setTimeout(function () {
    console.log('bset');
},0)
process.nextTick(function () {
    console.log('bnext1');
    process.nextTick(function () {
        console.log('bnext2');
        process.nextTick(function () {
            console.log('bnext3');
        });
    });
});

console.log('c');
console.log('d');