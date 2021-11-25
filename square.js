exports.area = function(width) { return width * width; };
exports.perimeter = function(width) { return 4 * width; };
const square = require('./square'); 
console.log('The area of a square with a width of 4 is ' + square.area(4));
setTimeout(function() {
    console.log('First');
    }, 3000);
 console.log('Second');

