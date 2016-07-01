module.exports = function timeIt(times, name, func) {
    var timingArr = [];
    while(times-- > 0) {
        var start = process.hrtime();
        var res = func();
        var elapsed = process.hrtime(start)[1] / 1000000;
        timingArr.push(parseFloat(elapsed.toFixed(3)));
    }
    
    var max = Math.max.apply(null, timingArr);
    var min = Math.min.apply(null, timingArr);
    var avg = timingArr.reduce((prev, curr) => prev+curr, 0) / timingArr.length;
    
    console.log(`${name}: max=${max}ms, min=${min}ms, avg=${avg}ms`);
}