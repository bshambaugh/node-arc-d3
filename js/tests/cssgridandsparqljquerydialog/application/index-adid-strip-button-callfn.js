$( function() {
    var dialog, form,
      name = $( "#name" );

    function addUser() {

   //   var siteDomain = "http://localhost:8080/marmotta/sparql?query=";
      
//    $( "#users" ).append( name.val() );  
// I only want to append if name.val() ) resolves... (so I need to do an xmlhttp request...)
    $("#duck").append( d3sketch(name.val()) );

   //   $( "#users" ).append( siteDomain + encodeURIComponent(name.val()) );
        dialog.dialog( "close" );
    }
 
    dialog = $( "#dialog-form" ).dialog({
      autoOpen: false,
      height: 220,
      width: 285,
      modal: true,
      buttons: {
        "Execute": addUser,
        Cancel: function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
      }
    });
 
    form = dialog.find( "form" ).on( "submit", function( event ) {
      event.preventDefault();
      addUser();
    });
 
    $( "#create-user" ).button().on( "click", function() {
      dialog.dialog( "open" );
    });
 

     $( "#loadfileldpbutton" ).button().on( "click", function() {
         alert("I loaded a file"); 
    });


  } );

