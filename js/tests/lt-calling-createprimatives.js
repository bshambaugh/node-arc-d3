define(['createprimitives'], function(createprimitives) {
var url = 'http://localhost/node-arc-d3/data/itsjustsomegirl.ttl';
createprimitives(url, function(duckei) {
//console.log(duckei);
var dope = duckei;
console.log(dope);
//document.write(dope);
document.write(JSON.stringify(dope));
});

});
