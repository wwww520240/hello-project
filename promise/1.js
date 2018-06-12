var Promise = require('bluebird');

var testP = Promise.promisifyAll(require('./testFn.js'));
console.log(testP);

testP.aAsync()
    .then(function(success){
        console.log('a success:', success);
    }).catch(function(error){
        console.log('a error:', error);
    });
testP.bAsync()
    .then(function(success){
        console.log('b success:', success);
    }).catch(function(error){
    console.log('b error:', error);
});