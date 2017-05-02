#Expressing RDF triples written in turtle as graph primatives (nodes,edges) fed to d3 force directed graph. Descendant of [map](https://github.com/bshambaugh/map/) and [node-arc-p5](https://github.com/bshambaugh/node-arc-p5).

<!-- ![forceCollidefitnodelabels.png](/js/tests/forceCollidefitnodelabels.png) -->
![gridwgraph.png](/js/tests/gridwgraph.png)


Run this by dropping in /var/www/html or whatever your Apache web root is

Git Clone node-arc-d3 to a web folder (/var/www.html or whatever your Apache web root is). Replace the variable url with the
path to your file in ![d3sketch.js](/js/d3sketch.js).

var url = 'http://localhost/node-arc-d3/data/test.nq';

Supports Turtle, TriG, N-Triples, N-Quads, and Notation3 (N3) from ![N3](https://github.com/RubenVerborgh/N3.js) .
Also supports JSON-LD from ![jsonld.js](https://github.com/digitalbazaar/jsonld.js) .


# Program flowchart:

![d3-rdf-progam-flowpng-2](/js/tests/d3-rdf-progam-flowpng-2.png)

#Based off of [Force Directed Graph with D3.js](https://bl.ocks.org/mbostock/4062045).
