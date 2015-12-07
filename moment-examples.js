var moment = require('moment');
var now = moment();

console.log(now.format());

//now.subtract(1, 'y')
console.log(now.format('X'));
console.log(now.valueOf());

var timestamp = now.valueOf();
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.format());

console.log(now.local().format('H:mm:ssa '));
//console.log(now.format('MMM Do YYYY, h:mm:ss.SSa ')); //Oct 5th 2015, 6:45 pm

//var now2 = moment();
//console.log(now.format('X'));
//console.log(now.format('x'));
//now2.add(1, 'y')
//console.log(now2.format('MMM Do YYYY, h:mm:ss.SSa ')); //Oct 5th 2015, 6:45 pm


