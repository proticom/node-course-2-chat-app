var moment = require('moment');

// Jan 1st 1970 00:00:00 am

// var date = moment();
// date.add(1, 'year');
// console.log(date.format('MMM Do, YYYY'));


// 6:35 am
var someTimestamp = moment().valueOf();
console.log(someTimestamp);


var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'))
