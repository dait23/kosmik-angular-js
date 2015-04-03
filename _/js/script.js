///sidebaar
(function($) {
        $(document).ready(function() {
          $.slidebars();
        });
      }) (jQuery);
/**
     * Tabs.
     */
    $( ".tabs-links a" ).on( "click", function( e ) {
        e.preventDefault();

        // Get the target tab.
        var newTab = $( this ).attr( "class" );

        // Show the targeted tab content while hiding the rest.
        $( newTab ).show().siblings().hide();

        // Add the active class to the parent list item while removing it from the rest.
        $( this ).parent( "li" ).addClass( "active" ).siblings().removeClass( "active" );
    } );


  /**
     * Tabs.
     */
    $( ".tabs-creator a" ).on( "click", function( e ) {
        e.preventDefault();

        // Get the target tab.
        var newTab = $( this ).attr( "href" );

        // Show the targeted tab content while hiding the rest.
        $( newTab ).show().siblings().hide();

        // Add the active class to the parent list item while removing it from the rest.
        $( this ).parent( "li" ).addClass( "active" ).siblings().removeClass( "active" );
    } );


////////bxslider


$(document).ready(function()
      {
      $(".drop").click(function()
      {
      $("#notificationContainer").fadeToggle(300);
     // $(".bublex").fadeOut("slow");
      return false;
      });

      //Document Click
      $(document).click(function()
      {
      $("#notificationContainer").hide();
      });
      //Popup Click
      $("#notificationContainer").click(function()
      {
      return false
      });

      });



//////slick slider

 
