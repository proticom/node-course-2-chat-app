var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    // store res in variable
    var from = 'Edward';
    var text = 'This is my text';
    var message = generateMessage(from, text);

    // // assert from match
    // expect(message.from).toEqual(from);
    //
    // // assert text match
    // expect(message.text).toEqual(text);
    //
    // OR
    expect(message).toInclude({from, text});

    // assert createdAt is number .toBeA
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Edward';
    var latitude = 1;
    var longitude = 2;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var message = generateLocationMessage(from, latitude, longitude);
    expect(message).toInclude({from, url})
    expect(message.createdAt).toBeA('number');
  });
});
