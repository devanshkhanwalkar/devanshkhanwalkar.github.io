// JavaScript Document
$(document).ready(function() {
		var token;
		var u_id;
		var img_url;
		var name;
		var curr_user;
		var curr_url;
    $('[data-toggle="tooltip"]').tooltip();
    if (!checkSession())
        window.location = "index.html";
    else {

        var chatIds = new Array();
        var newIds = new Array();
        var current_cid;
        var current_count;
        $.material.init();
		
        $(window).load(function() {


            getAllUsers();
            //alert(chatIds.length)
            //getFullChat(chatIds.length-1);
            //alert(chatIds);
        });




        function getAllUsers() {
            chatIds = [];
            //alert("dasda");	  
            $.ajax({

                type: 'GET',
                url: "http://52.4.33.129:9000/api/getAllUser",
                dataType: "json",
		data:'userType=CC,A',

                beforeSend: function() {
                    $(".allunreadmsg .allusers").html("<div class='se-pre-con'></div>");
                    //$(".se-pre-con").css({"display":"block"});
                },
                success: function(result) {

                    var result =JSON.parse(JSON.stringify(result));
					alert(JSON.stringify(result));
                    var v, node, count = 0;
                    var topbar = '<section class="module">\
			 \
			  <ol class="discussion">';

                    var bottombar = ' </ol>\
			  \
			</section>';
                    for (v in result.data) {
                        //d= new Date(result.data[count].time *1000);
                        node = '<li class="other" id="user' + count + '">\
				  <div class="avatar">\
					<img src="'+result.data[count].imageUrl+'" />\
				  </div>\
				  <div class="messages">\
					<p>' + result.data[count].name + '</p>\
					<span class="hidden">'+result.data[count].id+'</span>\
					<time datetime="2009-11-13T20:00"><span class="mdi-content-create edituser" data-toggle="tooltip" data-placement="left" title="Edit user"></span><span data-toggle="modal" data-target="#alertbox"><a class="mdi-content-remove-circle deleteuser" data-toggle="tooltip" data-placement="left" title="Delete user"></a></span></time>\
				  </div>\
				</li>' + node;
                        chatIds.push(result.data[count]);
                        count++;


                    }
                    //sort_names(chatIds, chatIds.length);
                    //newIds = JSON.parse(JSON.stringify(chatIds));
                    var displayusers = topbar + node + bottombar;
                    $(".se-pre-con").fadeOut("slow");
                    $(".allunreadmsg .allusers").html(displayusers);
                    //alert(chatIds.length);
                    current_cid = chatIds.length - 1;
                    current_count = 10;
                    $('[data-toggle="tooltip"]').tooltip();

                }


            });
        }

        function updateUserList() {
            var node;

            var topbar = '<section class="module">\
							 \
							  <ol class="discussion">';

            var bottombar = ' </ol>\
							  \
							</section>';
            for (var v = 0; v < newIds.length; v++) {
                //d= new Date(result.data[count].time *1000);
                node = '<li class="other" id="user' + v + '">\
								  <div class="avatar">\
									<img src="'+newIds[v].imageUrl+'" />\
								  </div>\
								  <div class="messages">\
									<p>' + newIds[v].name.substr(0,newIds[v].from) + '<font color="#FED859"><strong>'+ newIds[v].name.substr(newIds[v].from,newIds[v].to-newIds[v].from+1) +'</strong></font>'+ newIds[v].name.substr(newIds[v].to+1,newIds[v].name.length) +'</p>\
<span class="hidden">'+newIds[v].id+'</span>\
									<time datetime="2009-11-13T20:00"><span class="mdi-content-create edituser" data-toggle="tooltip" data-placement="left" title="Edit user"></span><span data-toggle="modal" data-target="#alertbox"><a class="mdi-content-remove-circle deleteuser" data-toggle="tooltip" data-placement="left" title="Delete user"></a></span></time>\
								  </div>\
								</li>' + node;




            }

            var displayusers = topbar + node + bottombar;

            $(".allunreadmsg .allusers").html(displayusers);
			$('[data-toggle="tooltip"]').tooltip();

        }

        $(document).on('click', '.discussion li .deleteuser', function() {
	var name = $(this).parents('time').siblings('p').text();
            var username = $(this).parents('time').siblings('span').text();
            $("#alertbox .modal-body p").html("Sure you want to delete user -> <font color='#eb4141'>" +name+ "</font>");
			var data={"userId":username};
			
			
			$(document).on('click','#alertbox .modal-dialog .modal-footer .deleteok	',function(){
																					
																					
				$.ajax({
					   
					  url:'http://52.4.33.129:9000/api/CMSdeleteUser',
					  type:'POST',
					  data:JSON.stringify(data),
					  contentType:'application/json',
					  success:function(response){
						  
						  var response=JSON.parse(JSON.stringify(response));
						  $("#deletemsg .modal-dialog .modal-body").html("<font color='#00acc1'>"+response.message+"</font>")
						getAllUsers();
						  
						  }
					   
					   
					   
					   });
																					
																					
																					});

        });
        $(document).on('click', '.discussion li .edituser', function() {

            var userid = $(this).parents('time').siblings('span').text();
		alert(userid);
            //$(".topbarpanel .rightpanel").html("Editing user <font color='#4caf50'>" + username + "</font>");
            $(".replybar").html('<a href="javascript:void(0)" class="btn-sm btn-success updateuserbutton">Update User</a>');
			getuser(userid);
			

        });
        $(document).on('click', '.createuser', function() {


            //$(".topbarpanel .rightpanel").html("Creating user...");
            $(".replybar").html('');
			$('#tab a[href="#createuser"]').tab('show');

        });


        $(".searchinput").keyup(function() {

            var patt = $(".searchinput").val();
            var len = patt.length;
            search_name(chatIds,chatIds.length, patt, len);


        });




       /* function sort_names(chatIds, n) {
            var i, pivot, maxpos = 0;
            var temp;
            for (pivot = n - 1; pivot > 0; pivot--, maxpos = 0) {
                for (i = 0; i <= pivot; i++) {
                    if ((chatIds[i].id).localeCompare(chatIds[maxpos].id) > 0)
                        maxpos = i;
                }
                temp = chatIds[maxpos];
                chatIds[maxpos] = chatIds[pivot];
                chatIds[pivot] = temp;
            }
        }*/

        /*function search_name(chatIds,n, str, len) {
            newIds = [];
            var i, j, k, l,pivot;
            for (i = 0; i < n; i++) {
                for (j = 0, k = 0; chatIds[i].id[j]; j++) {
					l=j;
					k=0;
                    while (k < len && chatIds[i].id[j] == str[k])
					{
                        k++;l++;
					}
                    if (k == len) {
                        newIds.push(chatIds[i]);
						newIds[newIds.length-1].from=l-k;
						newIds[newIds.length-1].to=l-1;
						//alert(newIds[newIds.length-1].from);
						//alert(l-1);
						//l-k,l-1
                        break;
                    }
                }


            }
            updateUserList();
        }*/

		function search_name(chatIds,n, str, len) {
            newIds = [];
           	for(var i=0;i<n;i++)
		   	{
			  var startIndex=chatIds[i].name.indexOf(str);
			  if(startIndex>=0)
			  {
				  var endIndex=parseInt(startIndex)+parseInt(len)-1;
				  newIds.push(chatIds[i]);
				  newIds[newIds.length-1].from=startIndex;
				  newIds[newIds.length-1].to=endIndex;
			  }
		   	}
            updateUserList();
        }
		
		$(".next1").click(function (){
			
				var email=$("#email").val();
				var pass=$("#password").val();
				var type=$("input[name=type]:checked").val();
				alert(type);
				//var type=$("#type").val();
				if(email!='' && pass!='' && type!='')
				{
					
					var data = {
						"email": $("#email").val(),
						"password": $("#password").val(),
						"deviceType": 1,
						"deviceToken": "adadfa",
						"userType": type
					};
					$.ajax({
						type: 'POST',
						url: "http://52.4.33.129:9000/api/register",
						data: JSON.stringify(data),
						dataType: 'json',
						contentType: 'application/json',
						beforeSend:function() {
							$(".errors").html("Please Wait..");
					
							
							},
							success: function(userdata){
							 var userdata = JSON.parse(JSON.stringify(userdata));
							 alert(JSON.stringify(userdata));
							 //token=userdata.data.token;
							u_id=userdata.data.userId;
							 $(".errors").html("");
							 $(".signupstep1").addClass("hidden");
							 $(".signupstep2").removeClass("hidden");
							}
								   
								   
								   });
							
				}
				else
				{
					$(".errors").html("<font color='#eb4141'>cannot register! Please fill all details and/or user type can only be 'CC' or 'A'</font>");
				}
			});
				
				
				$(document).on('submit','form#data',function(event){
 						alert('Fired!');
					  //disable the default form submission
					  event.preventDefault();
					 
					  //grab all form data  
					  var formData = new FormData($(this)[0]);
					 
					  $.ajax({
						url: 'http://52.4.33.129:9000/api/updateProfilePic?type=profile',
						type: 'POST',
						data: formData,
						async: false,
						cache: false,
						contentType: false,
						processData: false,
						beforeSend: function(request){
							$(".errors").html("uploading image please wait..");
							request.setRequestHeader("u_id",u_id);
					
					
					},
						success: function (returndata) {
							$(".errors").html("");
							//var returndata=JSON.parse(returndata);
						  alert(JSON.stringify(returndata));
						image_url=returndata.data.uploaded_image_url;
						alert(image_url);
						  $(".signupstep2").addClass("hidden");
							 $(".signupstep3").removeClass("hidden");
						}
					  });
					 
					  return false;
					});

		$(document).on('click','.next3',function(){


				 name=$("#name").val();
				var phone=$("#phone").val();
				if(name!=''&&phone!='')
				{
					var data={"userId":u_id,"name":name,"imageUrl":image_url,"phoneNumber":phone};
					$.ajax({

						type:'POST',
						dataType:'json',
						url:'http://52.4.33.129:9000/api/CMSupdateUserProfile',
						data:JSON.stringify(data),
						contentType:'application/json',
						beforeSend:function(){
							console.log(JSON.stringify(data));
									},
						success:function(returndata){
							$(".errors").html("");
							$(".signupstep3").addClass("hidden");
							 $(".signupstep4").removeClass("hidden");
							$("#nameagain").val(name);
							$("#nameagain").attr("disabled","disabled");
									}


						});
				}
				else
				{
					$(".errors").html("<font color='#eb4141'>Please fill all details</font>");
				}


							});
			

		$(document).on('click','.next4',function(){


				var age=$("#updateage").val();
				var sex=$("input[name=gender]:checked").val();
				var height=$("#updateheight").val();
				var weight=$("#updateweight").val();
				var bg=$("#updatebg").val();
				var date=$("#updatedob").val();
				var dob=new Date(date).getTime()/1000 +'';
				var address=$("#updateaddress").val();
				
				if(age!=''&&sex!=''&&height!=''&&weight!=''&&bg!=''&&dob!=''&&address!='')
				{
					var data={"userId":u_id,"name":name,"age":age,"sex":sex,"height":height,"weight":weight,"bloodGroup":bg,"dob":dob,"address":address};
					$.ajax({

						type:'POST',
						dataType:'json',
						url:'http://52.4.33.129:9000/api/CMSupdatePersonalDetail',
						data:JSON.stringify(data),
						contentType:'application/json',
						beforeSend:function(){
							console.log(JSON.stringify(data));
									},
						success:function(returndata){
							$(".errors").html("");
						$(".signupstep4").addClass("hidden");
						$("#deletemsg .modal-body p").html("<font color='#00acc1'>User created successfully</font>");
						getAllUsers();
									}


						});
				}
				else
				{
					$(".errors").html("<font color='#eb4141'>Please fill all details</font>");
				}


							});
			
		
		function getuser(userid)
		{
			$('#tab a[href="#edituser"]').tab('show');
			var data={"userId":userid};
			$.ajax({
				   
				   type:'POST',
				   dataType:'json',
				   url:'http://52.4.33.129:9000/api/CMSgetProfile',
				   data:JSON.stringify(data),
				contentType:'application/json',
				  /* beforeSend:function(req){
					   req.setRequestHeader("u_id",userid);
					   
					   },*/
				   success:function(r)
				   {
					$("#editemail").val(r.data.email);
					$("#editusertype").val(r.data.userType);
					$("#editname").val(r.data.name);
					$("#editphone").val(r.data.phoneNumber);
					$("#editaddress").val(r.data.address);
					$("#editage").val(r.data.age);
					if(r.data.sex=='male')
					$("#m").attr('checked','checked');
					else if(r.data.sex=='female')
					$("#f").attr('checked','checked');
					//$("#editsex").val(r.data.sex);
					var d=new Date(r.data.dob*1000);
					if((parseInt(d.getMonth())+1)<10)
					{
						var month='0'+(parseInt(d.getMonth())+1);
					}
					else
					{
						var month=''+(parseInt(d.getMonth())+1);
					}
					
					if(parseInt(d.getDate())<10)
					{
						var date='0'+d.getDate();
					}
					else
					{
						var date=''+d.getDate();
					}
					var nd=d.getFullYear()+'-'+month+'-'+date;
					$("#editdob").val(nd);
					$("#editheight").val(r.data.height);
					$("#editweight").val(r.data.weight);
					$("#editbg").val(r.data.bloodGroup);
					curr_user=r.data.id;
					curr_url=r.data.imageUrl;
					   alert(JSON.stringify(r));
				   }
				   
				   
				   
				   });
		}
		
		
		$(document).on('click','.updateuserbutton',function(){

				var newemail=$("#editemail").val();
				var newusertype=$("#editusertype").val();
				var newname=$("#editname").val();
				var newphone=$("#editphone").val();
				var newaddress=$("#editaddress").val();
				var newage=$("#editage").val();
				var newsex=$("input[name=editsex]:checked").val();
				//var newsex=$("#editsex").val();
				var d=$("#editdob").val();
				var newdob=new Date(d).getTime()/1000 +'';
				var newheight=$("#editheight").val();
				var newweight=$("#editweight").val();
				var newbg=$("#editbg").val();
				var profile={"userId":curr_user,"email":newemail,"userType":newusertype,"name":newname,"phoneNumber":newphone,"address":newaddress,"age":newage,"sex":newsex,"dob":newdob,"height":newheight,"weight":newweight,"bloodGroup":newbg};
				alert(JSON.stringify(profile));
				$.ajax({
					type:'POST',
				   dataType:'json',
				   url:'http://52.4.33.129:9000/api/CMSupdateFullProfile',
				   data:JSON.stringify(profile),
				contentType:'application/json',
				success:function(response){
					alert(JSON.stringify(response));
					

						}

					});
									});
		

    }

    function checkSession() {
        var storedData = sessionStorage.getItem("sessionKey");
        if (storedData) {
            sessionData = JSON.parse(storedData);
			
			//alert(token);
            if (sessionData[0] && sessionData[1] == 'A')
			{
				token=sessionData[0];
				alert(token);
                return true;
			}
        }
        return false;
    }




});
