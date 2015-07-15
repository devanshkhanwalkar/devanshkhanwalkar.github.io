// JavaScript Document
$(document).ready(function() {


    //$.material.init();
    $(document).keypress(function(event) {

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            $('.login').click();
        }

    });



    /*$(".login").click(function(){
					var email=	$("#email").val();
					var pass= $("#password").val();
					if(email=='cmsuser' && pass=='cmsuser')
					{
						var session=[email,pass];
						sessionStorage.setItem("sessionKey",  JSON.stringify(session));
						//alert(sessionStorage.getItem("sessionKey"));
						window.location="dashboard.html";
					}
					else if(email=='admin' && pass=='admin')
					{
						var session=[email,pass];
						sessionStorage.setItem("sessionKey",  JSON.stringify(session));
						//alert(sessionStorage.getItem("sessionKey"));
						window.location="admin.html";
					}
					else
					{
						$("#response").html("<font color='#eb4141'>wrong email/password !..</font>");
					}
						
					});*/

    $(".login").click(function() {
        var email = $("#email").val();
        var pass = $("#password").val();

        if (email != '' && pass != '') {

            var data = {
                "email": email,
                "password": pass,
                "deviceType": 1,
                "deviceToken": "adadfa"
            };
            $.ajax({
                type: 'POST',
                url: "http://52.4.33.129:9000/api/signin",
                data: JSON.stringify(data),
                dataType: 'json',
                contentType: 'application/json',
                success: function(response) {
                    var response = $.parseJSON(JSON.stringify(response));
			//alert(JSON.stringify(response));
                    var session = [response.data.token, response.data.userType,response.data.userId];
                    sessionStorage.setItem("sessionKey", JSON.stringify(session));

                    if (response.data.userType == 'CC')
                        window.location = "dashboard.html";
                    else if (response.data.userType == 'A')
                        window.location = "admin.html";


                },
                error: function() {

                    $("#response").html("<font color='#eb4141'>wrong email/password !..</font>");

                }



            });
        } else {
            $("#response").html("<font color='#eb4141'>email/password required!..</font>");
        }

    });




});
