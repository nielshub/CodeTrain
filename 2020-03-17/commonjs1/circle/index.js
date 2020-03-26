
console.log("Loading circle package directory");

function circumference(r) {
    return 2 * Math.PI * r;
}

exports.area = require('./area');
exports.circumference = circumference;
