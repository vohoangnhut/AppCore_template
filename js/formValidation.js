
$('#btnA').click(function() {
	const msgValidationContent = 'passowrd field is required'

	if(msgValidationContent)
	{
		//Set content for alert 
		$('#msgContent').html(`<strong>Warning ! </strong> ${msgValidationContent}`)
		toggleAlert();
	}

});

$('#btnB').click(function() {

	swal({
		  title: 'Error!',
		  text: 'Do you want to continue',
		  type: 'error',
		  confirmButtonText: 'Cool'
		})
});

const toggleAlert = () => {
	//alert msg content : <strong>Warning!</strong> Bla Bla
	if ( $( ".alert-validation" ).is( ":hidden" ) ) {
	    $( ".alert-validation" ).slideDown(400, ()=>{setTimeout( ()=>{$( ".alert-validation" ).slideUp(400)} , 5000)})
	} 
	// else {
	//     $( ".alert-validation" ).slideUp(400)
	// }
}


$('#btnCloseAlert').click(function(e) {
	  $(this).parent().slideUp(300);
})