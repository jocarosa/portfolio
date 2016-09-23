$( function() {
    // run the currently selected effect
    function hideALL() {
   
     
        $("#effect").hide();
        $("#gitHubDiv").hide();
        $("#divResume").hide();
      
    }
    
    
    $( ".toggler" ).show('slide');
    $("#gitHubDiv").hide();
    $("#divResume").hide();
    
    
    
    
    $( "#linkPorfolio" ).on( "click", function() {
         hideALL();
        $( "#effect" ).show('slide',{}, 500);
      
    });
 
    $("#linkGithub").on('click',function(){
        hideALL();
        $("#gitHubDiv").show('slide',{}, 500);
        
    });
    $("#linkResume").on('click',function(){
         hideALL();
        $("#divResume").show('slide',{}, 500);
       
    });
    
    
  } );