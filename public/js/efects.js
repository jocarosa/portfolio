$( function() {
    // run the currently selected effect
    function hideALL() {
    
     
      $("#effect").hide();
      $("#gitHubDiv").hide();
      
      
    };
    $( ".toggler" ).show('slide');
    // Set effect from select menu value
    $("#gitHubDiv").hide();
    
    
    $( "#linkPorfolio" ).on( "click", function() {
      hideALL();
       $( "#effect" ).show('slide',{}, 500);
    });
 
    $("#linkGithub").on('click',function(){
      hideALL();
      $("#gitHubDiv").show('slide',{}, 500);
    });
    
  } );