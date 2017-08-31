Description: Expressing RDF triples written in turtle as graph primatives (nodes,edges) fed to d3 force directed graph. Descendant of [map](https://github.com/bshambaugh/map/) and [node-arc-p5](https://github.com/bshambaugh/node-arc-p5).

<!-- ![forceCollidefitnodelabels.png](/js/tests/forceCollidefitnodelabels.png) -->
<!-- ![gridwgraph.png](/js/tests/gridwgraph.png) -->

![gridwgraphandjqueryuibutton.png](js/tests/gridwgraphandjqueryuibutton.png)

# Installation:

Install this with git Clone node-arc-d3 to a web folder (/var/www.html or whatever your Apache web root is) with the node module dependencies by following the steps:

(1) cd /var/www/html

(2) git clone https://github.com/bshambaugh/node-arc-d3

(3) cd node-arc-d3

(4) npm init

(5) npm install --save d3 jquery jsonld lodash n3 requirejs urijs jquery-ui sigma

(6) In a web-browser serve from http://localhost/node-arc-d3/

<!--Replace the variable url with the path to your file in ![d3sketch.js](/js/d3sketch.js).

var url = 'http://localhost/node-arc-d3/data/test.nq'; -->

# Use: 

## How to load a file:
For local testing, find files in the [http://localhost/node-arc-d3/data](http://localhost/node-arc-d3/data) folder. Loading old-Food-Growing-Methods.ttl should work. Load this file by pasting http://localhost/node-arc-d3/data/old-Food-Growing-Methods.ttl in the text field to the left of the Load File / LDP Container button, then press the Load File / LDP Container button.

## How to load an LDP Container:

For local testing, begin by installing [Apache Marmotta](http://marmotta.apache.org/) or similar LDP Server. 
Select the desired LDP container URL.

Paste this URL in the text field to the left of the Load File / LDP Container button, then press the Load File / LDP Container button.

## How to perform a Sparql Query:

Be sure that a Sparql Endpoint such as [Apache Marmotta](http://marmotta.apache.org/) is Installed. Then press the SPARQL Endpoint button.
 
![gridwgraphandjqueryuidialog.png](js/tests/gridwgraphandjqueryuidialog.png)

Substitute a sparql query in the "Do your SPARQL Query here" text box, then press Execute.

Try this: [http://localhost:8080/marmotta/sparql/select?query=SELECT%20*%20WHERE%20%7B%3Fs%20%3Fp%20%3Fo%7D%20LIMIT%2010](http://localhost:8080/marmotta/sparql/select?query=SELECT%20*%20WHERE%20%7B%3Fs%20%3Fp%20%3Fo%7D%20LIMIT%2010)

Currently only this type of URL works. See Issue
[24](https://github.com/bshambaugh/node-arc-d3/issues/24).

# Support: 

Supports Turtle, TriG, N-Triples, N-Quads, and Notation3 (N3) from ![N3](https://github.com/RubenVerborgh/N3.js) .
Also supports JSON-LD from ![jsonld.js](https://github.com/digitalbazaar/jsonld.js) .

The Grid Layout Boxes (A, DA, DB, ..) are Supported by the Following Browsers: [http://gridbyexample.com/browsers/](http://gridbyexample.com/browsers/) .

# Program flowchart:

![d3-rdf-progam-flowpng-2](/js/tests/d3-rdf-progam-flowpng-2.png)

#Based off of [Force Directed Graph with D3.js](https://bl.ocks.org/mbostock/4062045).

# Goal:

Replace the D3 Visualization with a [Sigma.js](http://sigmajs.org/) Visualation.

Add Custom buttons in the left most column, and triples visualization on the right most column.

In the bit farther future with PowerAqua for Open QA using ![PowerAqua-decompiled](https://github.com/bshambaugh/PowerAqua-decompiled), [PowerAqua Backup Files](https://sourceforge.net/projects/poweraqua/files/), and local files stored at /var/lib/tomcat7/webapps/poweraqua . In focus: "Car Projects with Brent Shambaugh" text box, Query Button to the right, column on the far right, and graph in the center. Also the "Data Path or URI" text box, and Load Data Button (called the Load File / LDP Container button above). Ignore: Column on the left (not everything is implemented yet), Documents box (it is part of of M. Fernandez' Thesis), 
![EISPP_3_M_Fernandez_NLQ_2.png](/js/tests/goal/EISPP_3_M_Fernandez_NLQ_2.png)
