// config.js

requirejs.config({
    paths: {
        lodash: '../node_modules/lodash/lodash',
        n3: './bun2-exportN3',
        jquery: '../node_modules/jquery/dist/jquery',
        d3: '../node_modules/d3/build/d3',
        urijs: '../node_modules/urijs/src',
        jsonld: '../node_modules/jsonld/js/jsonld',

        fn_ldpsparql: './fn_ldpsparql',
        fn_triplemodifications: './fn_triplemodifications',
        fn_parsefile: './fn_parsefile',
        parsetriples: './parsetriples',
        'call-d3sketch': './call-d3sketch',
        'd3sketch': './d3sketch',
        triplemodifications: "./triplemodifications",
        createprimitives: "./createprimitives"
    }

});
