var _ = require('lodash');
var fs = require('fs');
var url = '/namespaces.txt';
// shuffle
// isValidMove
// validMoves
//

module.exports = {

/*    loadData:  function(url,fn) {
     // var data = 'this is a string';
      //  var url = '/namespaces.txt';
      fs.readFile( __dirname + url, function (err, data) {
           if (err) {
           throw err;
         }
       fn(data.toString());
     //  console.log(data.toString());
      //  fn('hello');
    });
  }, */

   parseLine: function(string) {
       var re = /@prefix.*./ig;
       var matches_array = string.match(re);
       return matches_array;   
   },

   parsePrefix: function(string) {
       var re = /@prefix [A-Za-z0-9-]*:/ig;
       var matches_array = string.match(re);
       var re2 = /[A-Za-z0-9-]*:/i;
       var matches_array2 = matches_array[0].match(re2);
       var re3 = /[A-Za-z0-9-]*/i;
       var matches_array3 = matches_array2[0].match(re3);
       return matches_array3[0];
   },

   parseURI: function(string) {
      var re = /<.*>/ig;
      var matches_array = string.match(re);
      var re2 = /((?!(<|>)).)*/ig;
      var matches_array2 = matches_array[0].match(re2);
      return matches_array2[1];
    },

    namespace: function(string) {
       var links = [];
     //  var prefix = 'foaf';
       var prefix = this.parsePrefix(string);
       var URI = this.parseURI(string);
     //   var URI = 'http://xmlns.com/foaf/0.1/'; 
//       links.push(new this.namespaceConstruct(prefix,URI));
//       return links;
      //   return new this.namespaceConstruct(prefix,URI);
         return {prefix: prefix, uri: URI};
    },

    namespaceConstruct: function(prefix, URI) {
       this.prefix = prefix;
       this.URI = URI;
    },

/*   loadData: function(url,fn) {
        return {

         var file = fs.readFile( __dirname + url, function (err, data) {
           if (err) {
             throw err;
           }
             fn(data.toString());
           });


        };
    }
*/

loadData: function(url,fn) { 
           fs.readFile( __dirname + url, function (err, data) {
             if (err) {
               throw err;
             }
            fn(data.toString());
           // console.log(data.toString());
           });
          
        }

/*   loadData: function(url) {  

    return ( function(url,fn) { 
           fs.readFile( __dirname + url, function (err, data) {
           if (err) {
             throw err;
           }
             fn(data.toString());
           });

        })(url,function());

   } */
/*
  loadData: function() {
     var data = 'this is a string';
     return data;
  } */
};

