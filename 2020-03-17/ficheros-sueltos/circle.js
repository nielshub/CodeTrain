
console.log("Loading circle.js");

function area(r) {
    return Math.PI * r * r;
}
function circumference(r) {
    return 2 * Math.PI * r;
}

exports.area = area;
exports.circumference = circumference;
