$(document).ready(function() {
   $('form').on('submit'), function(event) {
   
       $.ajax({
	       data : {
		     name :  $('#nameInput').val(),
			 email : $('#emailInput').val()
		   },
		   type : 'POST',
		   url : '/process'
	   })
	   
	   .done(function(data)) {
	       if (data.error) {		       
			   $('#myerror').text(data.error).show();
			   $('#mysucess').hide();
			   
		   } else {
		       $('#mysucess').text(data.name).show();
			   $('#myerror').hide();
		   }
	   
	   });
       event.preventDefault();
   });
 
});
