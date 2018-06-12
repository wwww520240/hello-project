exports.a = function(cb) {
    cb(null, 'fn a ok');
}

exports.b = function(cb) {
    cb('error', null);
}

function c(cb) {
    cb(null, 'ok');
}