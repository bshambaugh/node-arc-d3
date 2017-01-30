// config.js

requirejs.config({
    baseUrl : 'js',
    paths : {
       lodash : 'libraries/lodash.min',
       p5: 'libraries/p5',
       p5dom: 'libraries/p5.dom',
       rdflib: 'libraries/rdflib.min', 
       N3:     'libraries/n3-browser'
    }
});
