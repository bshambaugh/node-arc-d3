var parseNameSpaces = require('../src/parseNamespaces.js');
//var url = '../src/namespaces.txt';
var url = '/namespaces.txt';
describe('parse Namespaces : ', function () {

  var data = '';

  beforeEach(function(done) {
      parseNameSpaces.loadData(url, function(duck) { 
      data = duck;
      done();
    })    
  });


  it('this should be a string', function (done) {
    done();
    expect(data).toEqual(jasmine.any(String));
  });

/*
  it('this should be a string', function (url, fn) {
    expect(fn(duck)).toEqual(jasmine.any(String));
    fn(duck);
  });
*/
  // parse into an array, broken by eol in javascript

   it('this should extract each line of prefixes from data', function(done) {
    done();
    expect(parseNameSpaces.parseLine(data)).toEqual(jasmine.any(Array));
  });

  it('this should extract each line of prefixes', function() {
    expect(parseNameSpaces.parseLine('@prefix foaf:   <http://xmlns.com/foaf/0.1/> .\r\n @prefix owl: <http://www.w3.org/2002/07/owl#> .')).toEqual(['@prefix foaf:   <http://xmlns.com/foaf/0.1/> .','@prefix owl: <http://www.w3.org/2002/07/owl#> .']);
  });


  it('this should give a prefix', function() {
    expect(parseNameSpaces.parsePrefix('@prefix foaf:   <http://xmlns.com/foaf/0.1/> .')).toEqual('foaf');
  });


  it('this should give the namespace', function() {
    expect(parseNameSpaces.parseURI('@prefix foaf:   <http://xmlns.com/foaf/0.1/> .')).toEqual('http://xmlns.com/foaf/0.1/');
  });


    // return a prefix, 
  it('this should give an object', function() {
    expect(parseNameSpaces.namespace('@prefix foaf:   <http://xmlns.com/foaf/0.1/> .')).toEqual(jasmine.any(Object));
  });

   it('this should extract each line of prefixes from data', function(done) {
    done();
    expect(parseNameSpaces.namespaces(parseNameSpaces.parseLine(data))).toEqual(jasmine.any(Object));
  });

// The following two tests will always fail, because I do not know how to test properly
    it('this should give an object with the following key/value pairs', function() {
    expect(parseNameSpaces.namespace('@prefix foaf:   <http://xmlns.com/foaf/0.1/> .')).toEqual(jasmine.objectContaining({
      prefix: "foaf"
    }));
  });

    // return a prefix, 
  it('this should give an object', function() {
    expect(parseNameSpaces.namespace('@prefix foaf:   <http://xmlns.com/foaf/0.1/> .')).toEqual({"prefix":"foaf", "uri":"http://xmlns.com/foaf/0.1/"});
  });

/*
  // return a prefix, 
  it('this should give an object', function() {
    expect(parseNameSpaces.namespace('foaf','http://xmlns.com/foaf/0.1/')).toEqual([{"prefix":"foaf", "uri":"http://xmlns.com/foaf/0.1"}]);
  });
*/

});

