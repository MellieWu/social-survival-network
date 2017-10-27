$(document).ready(function() {
   	$( "#groupcategory" ).submit(function( event ) {
    	var status   = document.getElementById("status").value;
        var level    = document.getElementById("level").value;
        var username = document.getElementById("username").value; 
        var password = document.getElementById("password").value;       
        $.post( "/adminuser", { status: status,
                                level: level,
                                username:username,
                                password:password });
    });
});