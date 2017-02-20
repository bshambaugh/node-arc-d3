var sample_triples = require('../src/sample-triples.js');

describe('parse Triples : ', function () {
 
 // var an_array = [];

   beforeEach(function() {
       
  });
  


  it('this should be a string', function () {
    expect(sample_triples.show()).toEqual(jasmine.any(Array));
  });

/*
  it('this should be an array replacement', function () {
expect(sample_triples.replace(['http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl',
,'http://purl.org/dc/terms/title','"Food Growing Methods"'])).toEqual(['http://localhost/node-arc-p5/data/Food-Growing-Methods.ttl',
,'dct:title','"Food Growing Methods"']);  
  });
*/

  it('this should be an object replacement', function() {
      expect(sample_triples.replace({"links":[{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"\"Food Growing Methods\"","value":1,"label":"http://purl.org/dc/terms/title"}],"nodes":[
{"id":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","group":1}]})).toEqual({"links":[{"source":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","target":"\"Food Growing Methods\"","value":1,"label":"dcterms:title"}],"nodes":[
{"id":"http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl","group":1}]
,"replacements":[{ prefix: 'dcterms', uri: 'http://purl.org/dc/terms/' }]});
  });
   
});


