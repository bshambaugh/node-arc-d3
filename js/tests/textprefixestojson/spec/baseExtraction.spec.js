var baseExtraction = require('../src/baseExtraction.js');

describe('add prefixes : ', function () {

  it('this should return a prefix for a uri with # fragment', function () {
    expect(baseExtraction.findPrefix('http://localhost/something#foo')).toEqual('http://localhost/something#');
  });
 
  it('this should return a prefix for a uri with no # fragment but everything before and including the last /', function () {
    expect(baseExtraction.findPrefix('http://localhost/something/foo')).toEqual('http://localhost/something/');
  });

  it('this should return a prefix for a uri with no # fragment and no last /', function () {
     expect(baseExtraction.findPrefix('http://something-foo')).toEqual('http://something-foo');
  });

    it('this should return null if it is not in the form of a URI', function () {
     expect(baseExtraction.findPrefix('foo')).toEqual(null);
  });

});

describe('extract bases : ', function() {

    it('this should add a base when there is no base', function() {
       expect(baseExtraction.addBases('http://localhost', []).baseURIs).toEqual([{ prefix: 'base1', uri: 'http://localhost'}]);
    });

    it('this should add a base to a base', function() {
      expect(baseExtraction.addBases('http://localhost', [{prefix: 'base1' , uri: 'http://dogbone.org'},
                {prefix: 'base3' , uri: 'http://giraffe.org'},
                {prefix: 'base2' , uri: 'http://penguin.org'}]).baseURIs).toEqual([{prefix: 'base1' , uri: 'http://dogbone.org'},
                {prefix: 'base3' , uri: 'http://giraffe.org'},
                {prefix: 'base2' , uri: 'http://penguin.org'},{ prefix: 'base4', uri: 'http://localhost'}]);
    });

    it('this should add to a base with a prexisting uri', function() {
       expect(baseExtraction.addBases('http://dogbone.org', [{prefix: 'base1' , uri: 'http://dogbone.org'},
                {prefix: 'base3' , uri: 'http://giraffe.org'}]).baseURIs).toEqual([{prefix: 'base1' , uri: 'http://dogbone.org'},
                {prefix: 'base3' , uri: 'http://giraffe.org'}]);

    });

    it('this should extract the prefix and uri or a prexisting baseURI', function() {
       expect(baseExtraction.addBases('http://dogbone.org', [{prefix: 'base1' , uri: 'http://dogbone.org'},
                {prefix: 'base3' , uri: 'http://giraffe.org'}]).currentbase).toEqual({prefix: 'base1' , uri: 'http://dogbone.org'});

    });


});

describe('extract URI from baseURI object', function() {

   it('this should extract a URI from the baseURI object', function() {
       expect(baseExtraction.extracturi({prefix: 'base1' , uri: 'http://dogbone.org'})).toEqual('http://dogbone.org');
   });
});

describe('Create namespaces for other URIs', function() {
  
   it('this should return one namespaces when fed them', function() {
       expect(baseExtraction.extractNamespace([['http://elephant.org','hody','giraffe']],[]).nsURIs).toEqual([{ prefix: 'ns1', uri: 'http://elephant.org' }]);
   });

      it('this should return one namespaces when fed them', function() {
       expect(baseExtraction.extractNamespace([['http://elephant.org','hody','giraffe'],['http://monkey.org','hody','giraffe']],[]).nsURIs).toEqual([{ prefix: 'ns1', uri: 'http://elephant.org' },{ prefix: 'ns2', uri: 'http://monkey.org' }]);
   });

});
