var expect = require('expect');

var {generateMessage} = require('./message');

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
