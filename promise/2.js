var Promise = require('bluebird');

function c(cb) {
    cb(null, 'ok');
}

var cp = Promise.promisify(c);
console.log(cp);

cp().then(function(success){
    console.log('success:', success);
}).catch(function(error){
    console.log('error:', error);
});