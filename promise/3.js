var Promise = require('bluebird');

var testP = Promise.promisifyAll(require('./testFn.js'));
console.log(testP);

testP.aAsync()
    .then(function(asuccess){
        console.log('a success:', asuccess);
        return testP.bAsync();
    })
    .then(function(bsuccess){
        console.log('b success:', bsuccess);
    })
    .catch(function(error){
        console.log('error:', error);
    });