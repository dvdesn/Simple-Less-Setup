$(function() {

    function myFunction() {
    	 console.log('this is my function');
    }

    $(window).load(function() {
    	myFunction(); 
    }); //load

    $(window).resize(function() {
    	myFunction();
    });//window resize

}); //on doc ready


