define(['libraries/fn_triplemodifications'],function(tmfn) {

return function (triples, replacements, nsURIs, baseURIs, url) {
//var url = 'http://localhost/node-arc-d3/data/Food-Growing-Methods.ttl';

// create an array with strings shortened (substitution list one)
var shortenstrings = tmfn.replacelongstrings(triples);

// create an array with the prefixes replaced (substitution list two)
var replaceprefix = tmfn.replacewithcuries(shortenstrings.triples,replacements);

var bases = tmfn.addBases(url,baseURIs);

// create an array with the bases replaced (substitution list three)
var basesreplaced = tmfn.replacewithcuries(replaceprefix.triples,bases.baseURIs);

var nams = tmfn.addns(tmfn.extractNamespace(basesreplaced.triples),nsURIs);

var namsreplaced = tmfn.replacewithcuries(basesreplaced.triples,nams.nsURIs);

// Add the replacements from replacebases
Array.prototype.push.apply(namsreplaced.replacements,basesreplaced.replacements);
// Add replacements from replaceprefixes
Array.prototype.push.apply(namsreplaced.replacements,replaceprefix.replacements);
// Add long strings 
namsreplaced.longstrings = shortenstrings.longstrings;
return namsreplaced;
  
}

});
//exports.tripleModifications = tripleModifications;
