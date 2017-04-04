define(['jquery','n3lib','lodash','jsonld'], function($,N3,_,jsonld) {

//"use strict";

return {
   parsesparql : function (url, fn) {
     let triples = [];
     // document.write(url);
     $.ajax({
        dataType: 'json',
        url: url,
        success: function(data) {
        //      alert('success: ' + data.results.bindings.length + ' results');
                  //            console.log(data.results.bindings.length);
                       for(var k = 0; k < data.results.bindings.length; k++) {
                           let subject = data.results.bindings[k].s.value;
                          //  let subject = JSON.stringify(data.results.bindings[k].s.value);
                         //   let predicate = JSON.stringify(data.results.bindings[k].p.value);
                            let predicate = data.results.bindings[k].p.value;
                            let object = data.results.bindings[k].o.value;
                          //  let object = JSON.stringify(data.results.bindings[k].o.value);
                            triples.push([subject,predicate,object]);
                         }
                //   document.write(triples);
                   fn(triples);
                }
     });

  },
   parseldp : function (url, fn) {
  //function jqueryldphttp(url) {
  let triples = [];
  let parsedata = this.parsedata;
  $.ajax({
      dataType: 'text',
      url: url,
      success: function(data) {
            parsedata(data, function(duck) {
                //   document.write(duck);
                //   document.write('howdy');
                   for(var k = 0; k < duck.length; k++) {
                  //   document.write('subject: ' + duck[k][0] + ', predicate: ' + duck[k][1] + 'object: ' + duck[k][2]);
                     triples.push([duck[k][0],duck[k][1],duck[k][2]]);
                   }
                   //   document.write(triples);
                    fn(triples);
            })
      }
 });
 },

parsefile : function(url, fn) { 
 let gettriples = this.gettriples; 
 let parsedata = this.parsedata;
 let joke = this.joke;
// document.write(gettriples);
 $.get(url, function(data) {
     let dummy = [];
     dummy.push(data);
     dummy.push(url);
     fn(dummy);

     joke('string');

 /*
    gettriples(dummy, function (duck) {
  //   gettriples(dummy, function(duck) {
    //   fn(duck);
     //   document.write(Object.getOwnPropertyNames(this));
     //  document.write(this);
    });
 */
     
 });

},

joke : function(string) {
 document.write(this);
 document.write(string);
// document.write(parsedata);
},

/*
gettriples : function(string,fn) {
   let parsedata = this.parsedata;
   fn(parsedata);
},
*/
/*
gettriples : function(string,fn) {
let parsedata = this.parsedata;
let validateobject = this.validateobject;

if(validateobject(string[0]) === null) {
 //  console.log('this is an awesome null');

  jsonld.toRDF(string[0], {format: 'application/nquads'}, function(err, nquads) {
    //    document.write(nquads); 
    //  console.log(nquads);
     // nquads is a string of nquads
     //});

 //    var string = nquads;


     parsedata(nquads, function(duck) {
     //    document.write(N3);
     //    console.log(N3);
     //    console.log(Object.getOwnPropertyNames(N3));
    //  console.log(duck);
           fn(duck);
     });

   });

} else {

  /// This code only works for turtle files...
  //   var string_1 = JSON.stringify(string);
     var string_1 = string[0].toString();
     var string_2 = string_1.replace(/'/ig,'\\\'');
     var string_3 = string_2.replace(/<>/ig,'<'+string[1]+'>');

  parsedata(string_3, function(duck) {
   return fn(duck);
  });

}

},
*/
/* 
 validateobject : function(body) {
  let parsedata = this.parsedata;
  try {

    parsedata(body, function(data) {
    //  console.log(data);
    });

    // if came to here, then valid
    return true;
  } catch(e) {
    // failed to parse
    return null;
  }
 },
*/

 parsedata : function(string, fn) {
  let parser = N3.Parser();
  let triples = [];
  parser.parse(string,

           function (error, triple, prefixes) {
                if (triple) {
                   let subject = triple.subject;
                   let predicate = triple.predicate;
                   let object = triple.object;
                  triples.push([subject, predicate, object]);
               } else {
                   fn(triples);
               }
           });
 }

}

});
