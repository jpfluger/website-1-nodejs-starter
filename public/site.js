$( document ).ready(function() {

  $( "#button1" ).click(function(ev) {
    ev.preventDefault();
    console.log('clickme')
    alert( "Handler for .click() called." );
  });

});
