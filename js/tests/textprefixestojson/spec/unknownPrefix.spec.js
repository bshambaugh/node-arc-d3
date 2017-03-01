var unknownPrefix = require('../src/unknownPrefix.js');

describe('add unknown prefix : ', function () {

  it('abbreviate the unabbreviated URI as ns1, ns2, etc', function () {
    expect(unknownPrefix.findPrefix('http://localhost/something#foo')).toEqual('http://localhost/something#');
  });


});
