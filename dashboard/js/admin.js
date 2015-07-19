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
		var articleIds = new Array();
		var newArticleIds = new Array();
		var questionIds=new Array();
		var newquestionIds=new Array();
        var newIds = new Array();
        var current_cid;
        var current_count;
		var current_aid;
        var current_acount;
		var current_qid;
        var current_qcount;
        $.material.init();
		
        $(window).load(function() {


            getAllUsers();
            //alert(chatIds.length)
            //getFullChat(chatIds.length-1);
            //alert(chatIds);
        });

		$("#admintab1").click(function(){
									   
				getAllUsers();		   
									   
									   
									   
						});
		
		$("#admintab2").click(function(){
									   
				getAllArticles();		   
									   
									   
									   
						});
		$("#admintab3").click(function(){
									   
				getAllQuestions();		   
									   
									   
									   
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
					//alert(JSON.stringify(result));
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
		
		function getAllArticles() {
            articleIds = [];
            //alert("dasda");	  
            $.ajax({

                type: 'GET',
                url: "http://52.4.33.129:9000/api/getArticle?category=Health",
                dataType: "json",
				
                beforeSend: function(request) {
                    $(".allunreadmsg .allusers").html("<div class='se-pre-con'></div>");
					request.setRequestHeader("token",token);
                    //$(".se-pre-con").css({"display":"block"});
                },
                success: function(result) {

                    var result =JSON.parse(JSON.stringify(result));
					//alert(JSON.stringify(result));
                    var v, node, count = 0;
                    var topbar = '<section class="module">\
			 \
			  <ol class="discussion">';

                    var bottombar = ' </ol>\
			  \
			</section>';
                    for (v in result.data) {
                        //d= new Date(result.data[count].time *1000);
                        node = '<li class="other" id="article' + count + '">\
				  <div class="avatar">\
					<img src="'+result.data[count].imageUrl+'" />\
				  </div>\
				  <div class="messages">\
					<p>' + getTruncatedTitle(result.data[count].title) + '</p>\
					<span class="hidden">'+result.data[count].id+'</span>\
					<time datetime="2009-11-13T20:00"><!--<span class="mdi-content-create editarticle" data-toggle="tooltip" data-placement="left" title="Edit article"></span>--><span data-toggle="modal" data-target="#alertbox"><a class="mdi-content-remove-circle deletearticle" data-toggle="tooltip" data-placement="left" title="Delete article"></a></span>\
					<div>Created on '+ getdate(result.data[count].createdTime)+ '</div>\
					</time>\
				  </div>\
				</li>' + node;
                        articleIds.push(result.data[count]);
                        count++;


                    }
					//alert(JSON.stringify(articleIds));
                    //sort_names(chatIds, chatIds.length);
                    //newIds = JSON.parse(JSON.stringify(chatIds));
                    var displayusers = topbar + node + bottombar;
                    $(".se-pre-con").fadeOut("slow");
                    $(".allunreadmsg .allusers").html(displayusers);
					$(".replybar").html('');
                    //alert(chatIds.length);
                    current_aid = articleIds.length - 1;
                    current_acount = 10;
                    $('[data-toggle="tooltip"]').tooltip();

                }


            });
        }
		
		function getAllQuestions() {
            questionIds = [];
            //alert("dasda");	  
            $.ajax({

                type: 'GET',
                url: "http://52.4.33.129:9000/api/getquestion",
                dataType: "json",
				
                beforeSend: function(request) {
                    $(".allunreadmsg .allusers").html("<div class='se-pre-con'></div>");
					request.setRequestHeader("token",token);
                    //$(".se-pre-con").css({"display":"block"});
                },
                success: function(result) {

                    var result =JSON.parse(JSON.stringify(result));
					//alert(JSON.stringify(result));
                    var v, node, count = 0;
                    var topbar = '<section class="module">\
			 \
			  <ol class="discussion">';

                    var bottombar = ' </ol>\
			  \
			</section>';
					var z=0;
                    for (v in result.data) {
						var q=0;
						for(w in result.data[count].questions)
						{
							//alert(v);
                        //d= new Date(result.data[count].time *1000);
                        node = '<li class="other" id="question' + z + '">\
				  <div class="messages">\
					<p>' + getTruncatedQuestion(result.data[count].questions[q].description) + '</p>\
					<span class="hidden">'+result.data[count].questions[q].id+'</span>\
					<time datetime="2009-11-13T20:00"><span data-toggle="modal" data-target="#alertbox"><a class="mdi-content-remove-circle deletequestion" data-toggle="tooltip" data-placement="left" title="Delete Question"></a></span>\
					<div>'+result.data[count].categoryName+ '</div>\
					</time>\
				  </div>\
				</li>' + node;
                        questionIds.push(result.data[count].questions[q]);
						q++;
						z++;
						}
                        count++;
                    }
                    //sort_names(chatIds, chatIds.length);
                    //newIds = JSON.parse(JSON.stringify(chatIds));
                    var displayusers = topbar + node + bottombar;
                    $(".se-pre-con").fadeOut("slow");
                    $(".allunreadmsg .allusers").html(displayusers);
					$(".replybar").html('');
                    //alert(JSON.stringify(questionIds));
                    current_qid = articleIds.length - 1;
                    current_qcount = 10;
                    $('[data-toggle="tooltip"]').tooltip();

                }


            });
        }
		
		function getTruncatedTitle(message) {
            if (message.length > 10) {
                newmsg = message.substr(0, 10) + '...';

            } else {
                newmsg = message + '...';
            }
            return newmsg;
        }
		function getTruncatedQuestion(message) {
            if (message.length > 25) {
                newmsg = message.substr(0, 25) + '...';

            } else {
                newmsg = message + '...';
            }
            return newmsg;
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
						  $('#deletemsg').modal('show');
						getAllUsers();
						  
						  },
					error: function(xhr, status, error) {

                    $("#deletemsg .modal-dialog .modal-content .modal-body").html("<font color='#eb4141'>" + xhr.responseText + "</font>");
                    $("#deletemsg").modal('show');


                }
					   
					   
					   
					   });
																					
																					
																					});

        });
		
		$(document).on('click', '.discussion li .deletearticle', function() {
	var name = $(this).parents('time').siblings('p').text();
            var username = $(this).parents('time').siblings('span').text();
            $("#alertbox .modal-body p").html("Sure you want to delete article -> <font color='#eb4141'>" +name+ "</font>");
			var data={"articleId":username};
			
			
			$(document).on('click','#alertbox .modal-dialog .modal-footer .deleteok	',function(){
																					
																					
				$.ajax({
					   
					  url:'http://52.4.33.129:9000/api/deleteArticle',
					  type:'POST',
					  data:JSON.stringify(data),
					  contentType:'application/json',
					  success:function(response){
						  
						  var response=JSON.parse(JSON.stringify(response));
						  $("#deletemsg .modal-body p").html("<font color='#00acc1'>"+response.message+"</font>")
						  $('#deletemsg').modal('show');
						getAllArticles();
						  
						  },
					error: function(xhr, status, error) {

                    $("#deletemsg .modal-dialog .modal-content .modal-body").html("<font color='#eb4141'>" + xhr.responseText + "</font>");
                    $("#deletemsg").modal('show');


                }
					   
					   
					   
					   });
																					
																					
																					});

        });
		
		$(document).on('click', '.discussion li .deletequestion', function() {
	var name = $(this).parents('time').siblings('p').text();
            var username = $(this).parents('time').siblings('span').text();
            $("#alertbox .modal-body p").html("Sure you want to delete user -> <font color='#eb4141'>" +name+ "</font>");
			//alert(username);
			
			
			$(document).on('click','#alertbox .modal-dialog .modal-footer .deleteok	',function(){
																					
																					
				$.ajax({
					   
					  url:'http://52.4.33.129:9000/api/CMSdeleteQuestion?questionId='+username,
					  type:'POST',
					  data:JSON.stringify(data),
					  contentType:'application/json',
					  success:function(response){
						  
						  var response=JSON.parse(JSON.stringify(response));
						  $("#deletemsg .modal-dialog .modal-body").html("<font color='#00acc1'>"+response.message+"</font>")
						  $('#deletemsg').modal('show');
						getAllQuestions();
						  
						  },
					error: function(xhr, status, error) {

                    $("#deletemsg .modal-dialog .modal-content .modal-body").html("<font color='#eb4141'>" + xhr.responseText + "</font>");
                    $("#deletemsg").modal('show');


                }
					   
					   
					   
					   });
																					
																					
																					});

        });
		
        $(document).on('click', '.discussion li .edituser', function() {

            var userid = $(this).parents('time').siblings('span').text();
		//alert(userid);
            //$(".topbarpanel .rightpanel").html("Editing user <font color='#4caf50'>" + username + "</font>");
			
            $(".replybar").html('<a href="javascript:void(0)" class="btn-sm btn-success updateuserbutton">Update User</a>');
			getuser(userid);
			

        });
		
		$(document).on('click', '#articletasks .discussion li', function() {

            var userid = $(this).attr('id').substr(7, $(this).attr('id').length);
		//alert(userid);
            //$(".topbarpanel .rightpanel").html("Editing user <font color='#4caf50'>" + username + "</font>");
			
            //$(".replybar").html('<a href="javascript:void(0)" class="btn-sm btn-success updateuserbutton">Update User</a>');
			getarticle(userid);
			

        });
		function getarticle(userid)
		{
			var info=JSON.stringify(articleIds[userid]);
			$("#articletasks .lastnmsg .lastnmsgbox").html(info);
		}
		
		$(document).on('click', '#questiontasks .discussion li', function() {

            var userid =$(this).attr('id').substr(8, $(this).attr('id').length);
		//alert(userid);
            //$(".topbarpanel .rightpanel").html("Editing user <font color='#4caf50'>" + username + "</font>");
			
            //$(".replybar").html('<a href="javascript:void(0)" class="btn-sm btn-success updateuserbutton">Update User</a>');
			getquestion(userid);
			

        });
		function getquestion(userid)
		{
			var info=JSON.stringify(questionIds[userid]);
			$("#questiontasks .lastnmsg .lastnmsgbox").html(info);
		}
		
		
        $(document).on('click', '.createuser', function() {


            //$(".topbarpanel .rightpanel").html("Creating user...");
            
			$('#tab a[href="#createuser"]').tab('show');

        });
		
		$(document).on('click', '.createarticle', function() {


            //$(".topbarpanel .rightpanel").html("Creating user...");
			
            $(".replybar").html('<a href="javascript:void(0)" class="btn-sm btn-success createarticlebutton">Create Article</a>');
			$('#articletab a[href="#postarticle"]').tab('show');

        });
		$(document).on('click', '.createquestion', function() {


            //$(".topbarpanel .rightpanel").html("Creating user...");
			
            $(".replybar").html('<a href="javascript:void(0)" class="btn-sm btn-success createquestionbutton">Create Question</a>');
			$('#articletab a[href="#createquestion"]').tab('show');

        });

        $(".searchinput").keyup(function() {

            var patt = $(".searchinput").val();
            var len = patt.length;
            search_name(chatIds,chatIds.length, patt, len);


        });
		
		
		var max_fields = 10;
        var wrapper = $("#createquestion .input_fields_wrap"); //Fields wrapper
        var add_button = $("#createquestion .add_field_button"); //Add button ID

        var x = 1; //initlal text box count
        $(add_button).click(function(e) { //on add input button click
            e.preventDefault();
            if (x < max_fields) { //max input box allowed
               x++; //text box increment
                $(wrapper).append('<div class="option"><input type="text" name="optionname" class="oname form-control" placeholder="option name.." id="optionname0" style="float:left;width:30%;margin-left:20px;"><textarea name="optiondesc" style="width:30%;margin-left:20px;float:left;" class="odesc form-control" placeholder="Description.." id="optiondesc0" rows="3"></textarea><a href="#" class="remove_field mdi-content-clear" data-toggle="tooltip" data-placement="right" title="Remove this option"></a></div><div class="clearfix"></div>'); //add input box
                $('[data-toggle="tooltip"]').tooltip();
            }
        });

        $(wrapper).on("click", ".remove_field", function(e) { //user click on remove text
            e.preventDefault();
            $(this).parent('div').remove();
            x--;
        })
		
		var categoryid='';
		$(document).on('blur','#categoryid',function(){
				
			categoryid=$("#categoryid option:selected").val();
				if(categoryid=='1')
			{
				$("#categoryname").val("Lifestyle");
			}
			else if(categoryid=='2')
			{
				$("#categoryname").val("Current Status");
			}
			else if(categoryid=='3')
			{
				$("#categoryname").val("Routine");
			}
			else if(categoryid=='4')
			{
				$("#categoryname").val("Habits");
			}
			else if(categoryid=='5')
			{
				$("#categoryname").val("Medical Status");
			}						
																
																
																
																})
		
		$(document).on('click','.createquestionbutton',function(){
												 
			
			var sequenceid=$("#sequenceid").val();
			
			var categoryname=$("#categoryname").val();
			var qdesc=$("#qdescription").val();
			var qtype=$("#qtype").val();
			var singlechoice=$("input[name=issinglechoice]:checked").val();
			var multiplechoice=$("input[name=ismultiplechoice]:checked").val();
			var fixedformat=$("input[name=fixedformat]:checked").val();
			var customanswer=$("input[name=iscustomanswer]:checked").val();	
			//alert(customanswer);
			var option=new Array();
			$(".option-div .input_fields_wrap div.option").each(function(){
					//alert($(".option-div .input_fields_wrap div.option input").val());
					//alert($(".option-div .input_fields_wrap div.option textarea").val());
						var obj={"option":$(this).children('input').val(),"optionDescription":$(this).children('textarea').val()};
						option.push(obj);
																  });								 
												 
			//alert(JSON.stringify(option));
			
			if(categoryid!=''&&sequenceid!=''&&categoryname!=''&&qdesc!=''&&qtype!=''&&singlechoice!=''&&multiplechoice!=''&&fixedformat!=''&&customanswer!='')
			{
	var question={"categoryId":categoryid,"sequenceId":sequenceid,"categoryName":categoryname,"description":qdesc,"isMultipleChoice":multiplechoice,"isCustomAnswer":customanswer,"fixedFormat":fixedformat,"type":qtype,"options":option,"isSingleChoice":singlechoice};
	
				$.ajax({
					   url:"http://52.4.33.129:9000/api/CMSinsertQuestion",
					   type:"POST",
					   data:JSON.stringify(question),
					   contentType:'application/json',
					   success:function(response){
						   $("#deletemsg .modal-body p").html("<font color='#00acc1'>Question inserted successfully!</font>");
						   $("#deletemsg").modal('show');
						   getAllQuestions();
						   categoryid='';
						   
						   },
						error: function(xhr, status, error) {

                    $("#deletemsg .modal-body p").html("<font color='#eb4141'>" + xhr.responseText + "</font>");
                    $("#deletemsg").modal('show');


                }
					});
				//alert(JSON.stringify(question));
				
			}
			else
			{
				$("#deletemsg .modal-body p").html("<font color='#eb4141'>Please enter all fields!</font>");
				$("#deletemsg").modal("show");
			}
												 
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
				//alert(type);
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
							 //alert(JSON.stringify(userdata));
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
 						//alert('Fired!');
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
						  //alert(JSON.stringify(returndata));
						image_url=returndata.data.uploaded_image_url;
						//alert(image_url);
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
						$('#deletemsg').modal('show');
						getAllUsers();
									},
					error: function(xhr, status, error) {

                    $("#deletemsg .modal-body p").html("<font color='#eb4141'>" + xhr.responseText + "</font>");
                    $("#deletemsg").modal('show');


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
					   //alert(JSON.stringify(r));
				   }
				   
				   
				   
				   });
		}
		
		function getdate(timestamp) {
            var d = new Date(timestamp);
            var mm = d.getMonth()+1;
            var dd = d.getDate();
            var yy = d.getFullYear();
            var h = d.getHours();
            var minute = d.getMinutes();
            var ampm;
            if (h > 12) {
                h = h - 12;
                ampm = 'PM';
            } else {
                ampm = 'AM';
            }
            var dates = dd + '/' + mm + '/' + yy;
            //alert(dates);
            return dates;
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
				//alert(JSON.stringify(profile));
				$.ajax({
					type:'POST',
				   dataType:'json',
				   url:'http://52.4.33.129:9000/api/CMSupdateFullProfile',
				   data:JSON.stringify(profile),
				contentType:'application/json',
				success:function(response){
					$("#deletemsg .modal-body p").html("<font color='#00acc1'>User Updated successfully</font>");
					$('#deletemsg').modal('show');
					//alert(JSON.stringify(response));
					getAllUsers();
					

						},
					error: function(xhr, status, error) {

                    $("#deletemsg .modal-body p").html("<font color='#eb4141'>" + xhr.responseText + "</font>");
                    $("#deletemsg").modal('show');


                }

					});
									});
		
		$(document).on('click','.createarticlebutton',function(){

				var title=$("#title").val();
				var description=$("#description").val();
				var imageurl=$("#imageurl").val();
				var category=$("#category").val();
				
				var article={"title":title,"description":description,"imageUrl":imageurl,"category":category};
				//alert(JSON.stringify(article));
				$.ajax({
					type:'POST',
				   dataType:'json',
				   url:'http://52.4.33.129:9000/api/CMSpostArticle',
				   data:JSON.stringify(article),
				contentType:'application/json',
				success:function(response){
					//alert(JSON.stringify(response));
					$("#deletemsg .modal-body p").html("<font color='#00acc1'>Article created successfully</font>");
					
					$('#deletemsg').modal('show');
					getAllArticles();

						},
					error: function(xhr, status, error) {

                    $("#deletemsg .modal-body p").html("<font color='#eb4141'>" + xhr.responseText + "</font>");
                    $("#deletemsg").modal('show');


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
				//alert(token);
                return true;
			}
        }
        return false;
    }




});
