// JavaScript Document
$(document).ready(function() {
	var token;
    $('[data-toggle="tooltip"]').tooltip();
    if (!checkSession())
        window.location = "index.html";
    else {
        var userid;
        var newIds = new Array();
        var dailyPlan = {};
        var mealPattern = [{
            "name": "Early Morning",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }, {
            "name": "Breakfast",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }, {
            "name": "Pre Lunch",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }, {
            "name": "Lunch",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }, {
            "name": "Evening Snacks",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }, {
            "name": "Pre Dinner",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }, {
            "name": "Dinner",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }, {
            "name": "Post Dinner",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        },{
            "name": "Custom Meal 1",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        },{
            "name": "Custom Meal 2",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }];
	var currtab;
        var exercises = [{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                 "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                 "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                 "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },];
        var hydartionItems = [{

		"name":"--NA--",
		"required":0


			},{

		"name":"--NA--",
		"required":0


			},{

		"name":"--NA--",
		"required":0


			},{

		"name":"--NA--",
		"required":0


			},{

		"name":"--NA--",
		"required":0


			}];
        var allUsers = new Array();
        var chatIds = new Array();
        var current_cid;
        var current_count;
        var newresponse;
        var newdate;
	var cmsid;
        $.material.init();
        $(".select").dropdown({
            "optionClass": "withripple"
        });
        $().dropdown({
            autoinit: "select"
        });
        $(window).load(function() {


            getUnreadMsg();
            //alert(chatIds.length)
            //getFullChat(chatIds.length-1);
            //alert(chatIds);
        });

        $('#tab1').click(function() {

            getUnreadMsg();

        });
        $(document).on('click', '#contactus .discussion li', function() {
            //alert("asas");
            var cid = $(this).attr('id').substr(4, $(this).attr('id').length);

            if (current_cid != cid) {
                current_cid = cid;
                getFullChat(cid, current_count);
            }
        });


        function getUnreadMsg() {
            chatIds = [];
            //alert("dasda");	  
            $.ajax({

                type: 'GET',
                url: "http://52.4.33.129:9000/api/CMSgetUnreadMessage",
                dataType: "json",

                beforeSend: function() {
                    $("#contactus .allunreadmsg .allusers").html("<div class='se-pre-con'></div>");
                    //$(".se-pre-con").css({"display":"block"});
                },
                success: function(result) {

                    var result = $.parseJSON(JSON.stringify(result));
			//alert(JSON.stringify(result))
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
        <img src="'+result.data[count].userImageUrl+'" />\
      </div>\
      <div class="messages">\
        <p>' + getTruncatedMsg(result.data[count].msg) + '</p>\
	<span class="hidden">'+result.data[count].id+'</span>\
        <time datetime="2009-11-13T20:00">' +result.data[count].name+' @ ' + getdate(result.data[count].time) + '</time>\
      </div>\
    </li>' + node;
                        chatIds.push(result.data[count].chatId);
                        count++;


                    }

                    var displayusers = topbar + node + bottombar;
                    $(".se-pre-con").fadeOut("slow");
                    $("#contactus .allunreadmsg .allusers").html(displayusers);

                    //alert(chatIds.length);
                    current_cid = chatIds.length - 1;
                    current_count = 10;
                    getFullChat(chatIds.length - 1, 10);

                }


            });




        }

        function getdate(timestamp) {
            var d = new Date(timestamp * 1000);
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
            var dates = dd + '/' + mm + '/' + yy + '   ' + h + ':' + minute + ' ' + ampm;
            //alert(dates);
            return dates;
        }

        function getTruncatedMsg(message) {
            if (message.length > 15) {
                newmsg = message.substr(0, 15) + '...';

            } else {
                newmsg = message + '...';
            }
            return newmsg;
        }


        function getClass(usertype) {
            if (usertype == 'CC')
                return 'chatself';
            else
                return 'chatother';

        }

        function getFullChat(cid, nom) {



            //alert(cid);
            //alert(id);

            $.ajax({

                type: 'GET',
                url: "http://52.4.33.129:9000/api/getAllMessagesById",
                dataType: "json",

                data: 'chatId=' + chatIds[cid] + '&count=' + nom,
                beforeSend: function() {
		
                    $("#contactus .lastnmsg .lastnmsgbox").html("<div class='se-pre-con1'></div>");
                    //$(".se-pre-con1").css({"display":"block"});
                },
                success: function(chat) {

                    var chat = $.parseJSON(JSON.stringify(chat));
                    var v, node, count = 0;
                    var topbar = '<section class="chatmodule">\
 \
  <ol class="chatdiscussion">';

                    var bottombar = ' </ol>\
  \
</section>';
                    for (v in chat.data) {
                        //d= new Date(result.data[count].time *1000);
                        node = '<li class="' + getClass(chat.data[count].userType) + '">\
      <div class="chatavatar">\
      </div>\
      <div class="chatmessages">\
        <p>' + chat.data[count].msg + '</p>\
        <time datetime="2009-11-13T20:00">' + getdate(chat.data[count].time) + '</time>\
      </div>\
    </li>' + node;

                        count++;


                    }

                    var displaychat = topbar + node + bottombar;
                    $(".se-pre-con1").fadeOut("slow");
                    $("#contactus .lastnmsg .lastnmsgbox").html(displaychat);


                }

            });

        }

        $(".loadmsg").click(function() {

            var nomsg = $(".numrows").val();
            if (isNaN(nomsg)) {
                alert("" + nomsg + "is not a number! Defaulting to 10.");
                current_count = 10;
                $(".numrows").val("10");
            } else {
                current_count = nomsg;
                $(".numrows").val(current_count);
            }
            getFullChat(current_cid, current_count);

        });



        $(".sendarrow").click(function() {

            var reply = $(".replyinput").val();
            if (reply != '') {

                var data = {
                    senderId: cmsid,
                    chatId: chatIds[current_cid],
                    msg: reply
                };
                //alert(JSON.stringify(data));
                $.ajax({

                    type: 'POST',
                    dataType: 'json',
                    url: 'http://52.4.33.129:9000/api/CMSreplyMessage',
                    data: JSON.stringify(data),
                    contentType: 'application/json',
                    beforeSend: function() {



                    },
                    success: function() {
                        location.reload();


                    }


                });
            }




        });
        $('.discussion li').click(function() {
            //alert("asas");
            $(this).toggleClass('active');

        });

        $("#tab2").click(function() {
		currtab=$(this).find('a').attr('href');
            getAllUsers(currtab);
			


        });
        $("#tab3").click(function() {

currtab=$(this).find('a').attr('href');
            getAllUsers(currtab);			
			

        });
        $("#tab4").click(function() {

currtab=$(this).find('a').attr('href');
            getAllUsers(currtab);


        });

        $(document).on('click', '#getquote .discussion li', function() {
            //alert("asas");
            //var current_user = $(this).attr('id').substr(4, $(this).attr('id').length);
	var currid = $(this).find('span').text();
	dailyPlan.userId = currid;
           // dailyPlan.userId = allUsers[current_user].id;
            //alert(currid);
            selectedUserName = $(this).find('p').text();
            //alert(selectedUserName);
            //alert(dailyPlan.userId);
        });
        //===================================================================================mealpattern-==============================




        $("#mealpattern .addtojson").click(function() {

            for (var i = 0; i < 10; i++) {
                mealPattern[i].time = $("#time" + i).val();
                for (var j = 0; j < 5; j++) {
                    if ($("#itemname" + i + j).val() == '') {
                        mealPattern[i].items[j].itemName = "--NA--";
                    } else {
                        mealPattern[i].items[j].itemName = $("#itemname" + i + j).val();
                    }
                    if ($("#qty" + i + j).val() == '') {
                        mealPattern[i].items[j].qty = "--NA--";
                    } else {
                        mealPattern[i].items[j].qty = $("#qty" + i + j).val();
                    }
                    if ($("#calorie" + i + j).val() == '') {
                        mealPattern[i].items[j].cal = "--NA--";
                    } else {
                        mealPattern[i].items[j].cal = $("#calorie" + i + j).val();
                    }


                }

            }
			$('#insertalertbox .modal-body p').html("<font color='#00acc1'>Meal Pattern Added successfully!</font>");
			$('#insertalertbox').modal('show');
            //alert(JSON.stringify(mealPattern));
        });

        /*var mealPatternv={};
			mealPatternv.name=$("#mealname").val();
			mealPatternv.time=$("#time").val();
			$("#mealname option:selected").remove();
			mealPatternv.items=[];
			$('#mealpattern .input_fields_wrap').children('div').each(function () {

      		var itemv={};
				itemv.itemName=$(this).find('.item').val();
				itemv.qty=$(this).find('.qty').val();
				itemv.cal=$(this).find('.calorie').val();
				mealPatternv.items.push(itemv);
    });
			
mealPattern.push(mealPatternv);
				mp++;
				$('#mealpattern .reset').click();
				
				//$("#mealpattern .addtojson").attr("disabled","true");
													});
		
		
		$('#mealpattern .reset').click(function(){
				$('#mealpattern').find('input').each(function () {
								$(this).val("");					
								});
				$('#mealpattern').find('.remove_field').each(function () {
								$(this).click();					
								});			
												
												});
	*/
        //======================================================================================================

        $("#exercises .addtojson").click(function() {

		var errorFlag=0;
		for (var i = 0; i < 10; i++) {
		if($("#exercisename" + i).val()=='')
		$("#exercisename" + i).val("--NA--");
		if($("#calorieburn" + i).val()=='')
		$("#calorieburn" + i).val("--NA--");
                exercises[i].name = $("#exercisename" + i).val();
				
		
		exercises[i].calorieBurn = $("#calorieburn" + i).val();	
             for (var j = 0; j < 5; j++) {
		//alert($(".exitem" + i + j).val());
                    if ($(".exitem" + i + j).val() == '') {
                        exercises[i].exerciseSets[j] = "--NA--";
                    } else {
                        exercises[i].exerciseSets[j] = $(".exitem" + i + j).val();
                    }
		//alert(exercises[i].exerciseSets[j]);
                  	}

		}
		
		$('#insertalertbox .modal-body p').html("<font color='#00acc1'>Exercises Added successfully!</font>");
		$('#insertalertbox').modal('show');
		$('#exercises .reset').click();
		
		//alert(JSON.stringify(exercises));
           /* var exercisesv = {};
		if($("#exercisename").val()=='')
		{	
			$("#exercisename").val("--NA--");
			}
            exercisesv.name = $("#exercisename").val();
		if($("#calorieburn").val()=='')
		{	
			$("#calorieburn").val("--NA--");
			}
            exercisesv.calorieBurn = $("#calorieburn").val();
            exercisesv.exerciseSets = [];
		for(var x=0;x<5;x++)
		{
			if($('#exercises .input_fields_wrap .exitem'+x).val()=='')
				$('#exercises .input_fields_wrap .exitem'+x).val("--NA--");
			exercisesv.exerciseSets.push($('.exitem'+x).val());
			
		}
           

            exercises.push(exercisesv);

            $('#exercises .reset').click();
            alert(JSON.stringify(exercises));
            //$("#mealpattern .addtojson").attr("disabled","true");*/
		
		

        });


        $('#exercises .reset').click(function() {
            $('#exercises').find('input').each(function() {
                $(this).val("");
            });
            $('#exercises').find('.remove_field').each(function() {
                $(this).click();
            });

        });

        //=========================================================================================================	


        $("#hydration .addtojson").click(function() {


		for (var j = 0; j < 5; j++) {
                    if ($("#hydrationname" +j).val() == '') {
                        hydartionItems[j].name = "--NA--";
                    } else {
                        hydartionItems[j].name  = $("#hydrationname" +j).val();
                    }
		   if ($("#hydrationrequired" +j).val() == '') {
                        hydartionItems[j].required = parseInt(0);
                    } else {
                        hydartionItems[j].required  = parseInt($("#hydrationrequired" +j).val());
                    }
                  	}
            /*var hydrationv = {};
            hydrationv.name = $("#hydrationname").val();
            hydrationv.required = parseInt($("#hydrationrequired").val(), 10);
            hydartionItems.push(hydrationv);*/
			$('#insertalertbox .modal-body p').html("<font color='#00acc1'>Hydration Plan Added successfully!</font>");
			$('#insertalertbox').modal('show');
            $('#hydration .reset').click();
            //alert(JSON.stringify(hydartionItems));
            //$("#mealpattern .addtojson").attr("disabled","true");
        });


        $('#hydration .reset').click(function() {
            $('#hydration').find('input').each(function() {
                $(this).val("");
            });
            $('#hydration').find('.remove_field').each(function() {
                $(this).click();
            });

        });

        //=========================================================================================================	

        $(".submitplan").click(function() {

            //if(mealPattern.length==7 && exercises.length==7 && hydrationItems.length==7)
            //{

            //dailyPlan.userId=userid;
            var myDate = $(".date").val();
            dailyPlan.date = new Date(myDate).getTime() / 1000 + '';
	    //dailyPlan.id="0";
            //alert(new Date(myDate).getTime()/1000+'');
            dailyPlan.mealPattern = mealPattern;
            dailyPlan.exercises = exercises;
            dailyPlan.hydartionItems = hydartionItems;
            //}
            console.log(JSON.stringify(dailyPlan));
            $.ajax({
                type: 'POST',
                url: 'http://52.4.33.129:9000/api/insertDailyPlan',
                contentType: 'application/json',
                data: JSON.stringify(dailyPlan),
                dataType: 'json',
		beforeSend:function(request){

			request.setRequestHeader("token",token);
					},
                success: function(response) {
                    $("#insertalertbox .modal-dialog .modal-content .modal-body p").html("Daily Plan was successfully inserted for <font color='#00acc1'>" + selectedUserName + "</font> for the date <font color='#00acc1'>" + myDate + "</font>");
                    $("#insertalertbox").modal('show');
					clearMeal();
					clearExercise();
					clearHydration();
                },
                error: function(xhr, status, error) {

                    $("#insertalertbox .modal-dialog .modal-content .modal-body p").html("<font color='#eb4141'>" + xhr.responseText + "</font>");
                    $("#insertalertbox").modal('show');


                }



            });



        });


        function getAllUsers(currtab) {
            allUsers = [];
            //alert("dasda");	  
            $.ajax({

                type: 'GET',
                url: "http://52.4.33.129:9000/api/getAllUser",
                dataType: "json",
                data: 'userType=C',


                beforeSend: function() {
                    $(currtab + " .allunreadmsg .allusers").html("<div class='se-pre-con'></div>");
                    //$(".se-pre-con").css({"display":"block"});
                },
                success: function(result) {

                    var result = $.parseJSON(JSON.stringify(result));
                    var v, node, count = 0;
                    var topbar = '<section class="module"> \
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
					<time datetime="2009-11-13T20:00"></time>\
				  </div>\
				</li>' + node;
                        allUsers.push(result.data[count]);
                        count++;


                    }
			//alert(JSON.stringify(allUsers));
                    //alert(JSON.stringify(allUsers));
                    var displayusers = topbar + node + bottombar;
                    $(".se-pre-con").fadeOut("slow");
                    $(currtab + " .allunreadmsg .allusers").html(displayusers);
                    //alert(chatIds.length);
                    //current_cid = chatIds.length - 1;
                    //current_count = 10;
                    $('[data-toggle="tooltip"]').tooltip();
                    $.material.init();

                }


            });
        }


        //========================================================================================exercise==========
        /*var exmax_fields = 10;
        var exwrapper = $("#exercises .input_fields_wrap"); //Fields wrapper
        var exadd_button = $("#exercises .add_field_button"); //Add button ID

        var ex = 1; //initlal text box count
        $(exadd_button).click(function(e) { //on add input button click
            e.preventDefault();
            if (ex < exmax_fields) { //max input box allowed
                ex++; //text box increment
                $(exwrapper).append('<div><input type="text" name="mytext[]" class="item floating-label form-control" placeholder="item name.."><a href="#" class="remove_field mdi-content-clear" data-toggle="tooltip" data-placement="right" title="Remove this item"></a></div>'); //add input box
                $('[data-toggle="tooltip"]').tooltip();
            }
        });

        $(exwrapper).on("click", ".remove_field", function(e) { //user click on remove text
            e.preventDefault();
            $(this).parent('div').remove();
            ex--;
        })*/




        //=================================================================================hydration=======================
        $(document).on('click', '.discussion li', function() {


            $(".discussion li").removeClass('active');
            $(this).addClass('active');

        });


        $(document).on('click', '#editdailyplan .discussion li', function() {

            //var id = allUsers[$(this).attr('id').substr(4, $(this).attr('id').length)].id;
		var id=$(this).find('span').text();
            $("#editdailyplan .topbarpanel .datelistinfo").html("Editing Daily plan of <font color='#00acc1'>" + allUsers[$(this).attr('id').substr(4, $(this).attr('id').length)].name + "</font>");
            $.ajax({

                type: 'GET',
                url: 'http://52.4.33.129:9000/api/CMSgetUserDailyPlan',
                contentType: 'application/json',
                dataType: 'json',
                data: 'userId=' + id,
                beforeSend: function() {
                    $("#editdailyplan .lastnmsg .lastnmsgbox .jsontable").html("<div class='se-pre-con1'></div>");
                    //alert(id);

                },
                success: function(response) {
                    var response = JSON.parse(JSON.stringify(response));
                    newresponse = response;
                    //alert(JSON.stringify(response));
                    newdate = 0;
                    var ul = '<div class="dropdown datedropdown"><a href="#" data-target="#" class="dropdown-toggle" data-toggle="dropdown">Select Date <b \class="caret"></b></a>\
        <ul class="dropdown-menu">';


                    var ulclose = '</ul></div>';
                    for (var x = 0; x < response.data.length; x++) {
                        var li = '<li id="date' + x + '">\
										<a href="#">\
											' + getdate(response.data[x].date) + '\
										</a>\
									</li>' + li;

                    }

                    var list = ul + li + ulclose;
                    $("#editdailyplan .topbarpanel .datelist").html(list);
                    //$(".se-pre-con1").fadeOut("slow");
                    dptableMaker(newdate, response);
                    eptableMaker(newdate,response);
                    hptableMaker(newdate,response);
                    
                }



            });


        });

        function dptableMaker(c, dpres) {
           //alert(JSON.stringify(dpres));
            $('.dptable .table').find("tr:gt(3)").remove();
            $("#biid").html(dpres.data[c].id);
            $("#biuserid").html(dpres.data[c].userId);
            $("#dpissubmitted").html(dpres.data[c].dietPlan.isSubmited);
            $("#dpcalorieintake").html(dpres.data[c].dietPlan.calorieIntake);
            $("#dpselfevaluation").html(dpres.data[c].dietPlan.selfEvaluation);
            for (var row = 0; row <10; row++) {
                //alert(row);
                $('.dptable .table tr:last').after('<tr><th colspan="6">Meal Pattern ' + row + '</th>\
                                                </tr>\
                                                <tr>\
                                                	<td>Id</td>\
                                                    <td colspan="2" id="dpmp' + row + 'id">' + dpres.data[c].dietPlan.mealPattern[row].id + '</td>\
                                                    <td>Time</td>\
                                                    <td colspan="2" contenteditable="true" id="dpmp' + row + 'time">' + dpres.data[c].dietPlan.mealPattern[row].time + '</td>\
                                                 </tr>\
                                                 <tr>\
                                                    <td>Name</td>\
                                                    <td colspan="2" contenteditable="true" id="dpmp' + row + 'name">' + dpres.data[c].dietPlan.mealPattern[row].name + '</td>\
                                                    <td>Mark As Done</td>\
                                                    <td colspan="2" contenteditable="true" id="dpmp' + row + 'markAsDone">' + dpres.data[c].dietPlan.mealPattern[row].markAsDone + '</td>\
                                                </tr>\
                                                <tr>\
                                                	<th colspan="6">Items</th>\
                                                    \
                                                </tr>\
                                                <tr>\
                                                	<td>Item Name</td>\
                                                    <td contenteditable="true" id="dpmp' + row + 'item0itemName">' + dpres.data[c].dietPlan.mealPattern[row].items[0].itemName + '</td>\
                                                    <td>Qty</td>\
                                                    <td contenteditable="true" id="dpmp' + row + 'item0qty">' + dpres.data[c].dietPlan.mealPattern[row].items[0].qty + '</td>\
                                                    <td>Calorie</td>\
                                                    <td contenteditable="true" id="dpmp' + row + 'item0cal">' + dpres.data[c].dietPlan.mealPattern[row].items[0].cal + '</td>\
                                                    \
                                                </tr>\
                                                <tr>\
                                                	<td>Item Name</td>\
                                                    <td contenteditable="true" id="dpmp' + row + 'item1itemName">' + dpres.data[c].dietPlan.mealPattern[row].items[1].itemName + '</td>\
                                                    <td>Qty</td>\
                                                    <td contenteditable="true" id="dpmp' + row + 'item1qty">' + dpres.data[c].dietPlan.mealPattern[row].items[1].qty + '</td>\
                                                    <td>Calorie</td>\
                                                    <td contenteditable="true" id="dpmp' + row + 'item1cal">' + dpres.data[c].dietPlan.mealPattern[row].items[1].cal + '</td>\
                                                    \
                                                </tr>\
                                                <tr>\
                                                	<td>Item Name</td>\
                                                    <td contenteditable="true" id="dpmp' + row + 'item2itemName">' + dpres.data[c].dietPlan.mealPattern[row].items[2].itemName + '</td>\
                                                    <td>Qty</td>\
                                                    <td contenteditable="true" id="dpmp' + row + 'item2qty">' + dpres.data[c].dietPlan.mealPattern[row].items[2].qty + '</td>\
                                                    <td>Calorie</td>\
                                                    <td contenteditable="true" id="dpmp' + row + 'item2cal">' + dpres.data[c].dietPlan.mealPattern[row].items[2].cal + '</td>\
                                                    \
                                                </tr>\
                                                <tr>\
                                                	<td>Item Name</td>\
\
                                                    <td contenteditable="true" id="dpmp' + row + 'item3itemName">' + dpres.data[c].dietPlan.mealPattern[row].items[3].itemName + '</td>\
                                                    <td>Qty</td>\
                                                    <td contenteditable="true" id="dpmp' + row + 'item3qty">' + dpres.data[c].dietPlan.mealPattern[row].items[3].qty + '</td>\
                                                    <td>Calorie</td>\
                                                    <td contenteditable="true" id="dpmp' + row + 'item3cal">' + dpres.data[c].dietPlan.mealPattern[row].items[3].cal + '</td>\
                                                    \
                                                </tr>\
                                                <tr>\
                                                	<td>Item Name</td>\
                                                    <td contenteditable="true" id="dpmp' + row + 'item4itemName">' + dpres.data[c].dietPlan.mealPattern[row].items[4].itemName + '</td>\
                                                    <td>Qty</td>\
\
                                                    <td contenteditable="true" id="dpmp' + row + 'item4qty">' + dpres.data[c].dietPlan.mealPattern[row].items[4].qty + '</td>\
                                                    <td>Calorie</td>\
                                                    <td contenteditable="true" id="dpmp' + row + 'item4cal">' + dpres.data[c].dietPlan.mealPattern[row].items[4].cal + '</td>\
                                                    \
                                                </tr>');
            }

        }
		
		

        function eptableMaker(c,epres)
		{
			//alert("ep");
			$('.eptable .table').find("tr:gt(3)").remove();
			$("#epissubmitted").html(epres.data[c].exercisePlan.isSubmited);
			$("#epcalorieburn").html(epres.data[c].exercisePlan.calorieBurn);
			$("#epselfevaluation").html(epres.data[c].exercisePlan.selfEvaluation);
			for(var row=0;row<10;row++)
		{
		//alert(row);
		$('.eptable .table tr:last').after('<tr><th colspan="6">Exercises'+row+'</th>\
                                                </tr>\
                                                <tr>\
                                                	<td>Id</td>\
                                                    <td colspan="2" id="epex'+row+'id">'+epres.data[c].exercisePlan.exercises[row].id+'</td>\
                                                    <td>Calorie Burn</td>\
                                                    <td colspan="2" contenteditable="true" id="epex'+row+'calorieBurn">'+epres.data[c].exercisePlan.exercises[row].calorieBurn+'</td>\
                                                 </tr>\
                                                 <tr>\
                                                    <td>Name</td>\
                                                    <td colspan="2" contenteditable="true" id="epex'+row+'name">'+epres.data[c].exercisePlan.exercises[row].name+'</td>\
                                                    <td>Mark As Done</td>\
                                                    <td colspan="2" contenteditable="true" id="epex'+row+'markAsDone">'+epres.data[c].exercisePlan.exercises[row].markAsDone+'</td>\
                                                </tr>\
                                                <tr>\
                                                	<th colspan="6">Exercise Sets</th>\
                                                    \
                                                </tr>\
                                                <tr>\
                                                	<td colspan="3">Exercise Name</td>\
                                                    <td colspan="3" contenteditable="true" id="epex'+row+'exsets0exName">'+epres.data[c].exercisePlan.exercises[row].exerciseSets[0]+'</td></tr>\
												<tr>\
                                                	<td colspan="3">Exercise Name</td>\
                                                    <td colspan="3" contenteditable="true" id="epex'+row+'exsets1exName">'+epres.data[c].exercisePlan.exercises[row].exerciseSets[1]+'</td></tr>\
												<tr>\
                                                	<td colspan="3">Exercise Name</td>\
                                                    <td colspan="3" contenteditable="true" id="epex'+row+'exsets2exName">'+epres.data[c].exercisePlan.exercises[row].exerciseSets[2]+'</td></tr>\
													<tr>\
                                                	<td colspan="3">Exercise Name</td>\
                                                    <td colspan="3" contenteditable="true" id="epex'+row+'exsets3exName">'+epres.data[c].exercisePlan.exercises[row].exerciseSets[3]+'</td></tr>\
													<tr>\
                                                	<td colspan="3">Exercise Name</td>\
                                                    <td colspan="3" contenteditable="true" id="epex'+row+'exsets4exName">'+epres.data[c].exercisePlan.exercises[row].exerciseSets[4]+'</td></tr>');
		}
			
		}
		
		function hptableMaker(c,hpres)
		{
			//alert("hp");
			$('.hptable .table').find("tr:gt(1)").remove();
			$("#hpissubmitted").html(hpres.data[c].hydrationPlan.isSubmited);
			
			for(var row=0;row<hpres.data[c].hydrationPlan.hydartionItems.length;row++)
		{
		$('.hptable .table tr:last').after('<tr><th colspan="6">Hydration Items'+row+'</th>\
                                                </tr>\
                                                <tr>\
                                                	<td>Id</td>\
                                                    <td colspan="2" id="hphi'+row+'id">'+hpres.data[c].hydrationPlan.hydartionItems[row].id+'</td>\
                                                    <td>User Intake</td>\
                                                    <td colspan="2" contenteditable="true" id="hphi'+row+'userIntake">'+hpres.data[c].hydrationPlan.hydartionItems[row].userIntake+'</td>\
                                                 </tr>\
                                                 <tr>\
                                                    <td>Name</td>\
                                                    <td colspan="2" contenteditable="true" id="hphi'+row+'name">'+hpres.data[c].hydrationPlan.hydartionItems[row].name+'</td>\
                                                    <td>Required</td>\
                                                    <td colspan="2" contenteditable="true" id="hphi'+row+'required">'+hpres.data[c].hydrationPlan.hydartionItems[row].required+'</td>\
                                                </tr>');
		}
			
		}

        $(document).on('keyup', '.dptable .table td', function() {

            var obj_no = $(this).attr("id").charAt(4);
            var item_no = $(this).attr("id").charAt(9);
            if (isNaN(obj_no) && isNaN(item_no)) {
                var topids = $(this).attr("id").substr(2);
                if (topids == 'issubmitted')
                    newresponse.data[newdate].dietPlan.isSubmited = $(this).text();
                if (topids == 'calorieintake')
                    newresponse.data[newdate].dietPlan.calorieIntake = $(this).text();
                if (topids == 'selfevaluation')
                    newresponse.data[newdate].dietPlan.selfEvaluation = $(this).text();
            } else {

                if (item_no == '' || isNaN(item_no)) {
                    var property = $(this).attr("id").substr(5);
                    if (property == 'name')
                        newresponse.data[newdate].dietPlan.mealPattern[obj_no].name = $(this).text();
                    else if (property == 'time')
                        newresponse.data[newdate].dietPlan.mealPattern[obj_no].time = $(this).text();
                    else if (property == 'markAsDone')
                        newresponse.data[newdate].dietPlan.mealPattern[obj_no].markAsDone = $(this).text();
                } else {

                    var property = $(this).attr("id").substr(10);
                    if (property == 'itemName')
                        newresponse.data[newdate].dietPlan.mealPattern[obj_no].items[item_no].itemName = $(this).text();
                    else if (property == 'qty')
                        newresponse.data[newdate].dietPlan.mealPattern[obj_no].items[item_no].qty = $(this).text();
                    else if (property == 'cal')
                        newresponse.data[newdate].dietPlan.mealPattern[obj_no].items[item_no].cal = $(this).text();
                }
            }
			//alert(JSON.stringify(newresponse.data[newdate]));

        });




        $(document).on('keyup','.eptable .table td',function(){
								
			var obj_no=$(this).attr("id").charAt(4);
			var item_no=$(this).attr("id").charAt(11);
			//alert(obj_no+","+item_no);
			if(isNaN(obj_no) && isNaN(item_no))
			{
				var topids=$(this).attr("id").substr(2);
				if(topids=='issubmitted')
				newresponse.data[newdate].exercisePlan.isSubmited=$(this).text();
				if(topids=='calorieburn')
				newresponse.data[newdate].exercisePlan.calorieBurn=$(this).text();
				if(topids=='selfevaluation')
				newresponse.data[newdate].exercisePlan.selfEvaluation=$(this).text();
			}
			else
			{
			
				if(item_no=='' || isNaN(item_no))
				{
					var property=$(this).attr("id").substr(5);
					if(property=='name')
					newresponse.data[newdate].exercisePlan.exercises[obj_no].name=$(this).text();
					else if(property=='calorieBurn')
					newresponse.data[newdate].exercisePlan.exercises[obj_no].calorieBurn=$(this).text();
					else if(property=='markAsDone')
					newresponse.data[newdate].exercisePlan.exercises[obj_no].markAsDone=$(this).text();
				}
				else
				{
					
					var property=$(this).attr("id").substr(12);
					if(property=='exName')
					newresponse.data[newdate].exercisePlan.exercises[obj_no].exerciseSets[item_no]=$(this).text();
					
				}
			}
				//alert(JSON.stringify(newresponse.data[newdate]));				
								
								
								});
		
		$(document).on('keyup','.hptable .table td',function(){
								
			var obj_no=$(this).attr("id").charAt(4);
			var item_no=$(this).attr("id").charAt(11);
			//alert(obj_no+","+item_no);
			if(isNaN(obj_no) && isNaN(item_no))
			{
				var topids=$(this).attr("id").substr(2);
				if(topids=='issubmitted')
				newresponse.data[newdate].hydrationPlan.isSubmited=$(this).text();
				
			}
			else
			{
			
			
					var property=$(this).attr("id").substr(5);
					if(property=='name')
					newresponse.data[newdate].hydrationPlan.hydartionItems[obj_no].name=$(this).text();
					else if(property=='required')
					newresponse.data[newdate].hydrationPlan.hydartionItems[obj_no].required=$(this).text();
					else if(property=='userIntake')
					newresponse.data[newdate].hydrationPlan.hydartionItems[obj_no].userIntake=$(this).text();
				
			}
				//alert(JSON.stringify(newresponse.data[newdate]));				
								
								
								});
		
		$(document).on('click', '.dropdown-menu>li', function() {
                        //alert("dad");

                        newdate = $(this).attr('id').substr(4, $(this).attr('id').length);
                        //alert(curr_date);
                        
                        //alert(newdate);
                        dptableMaker(newdate, newresponse);
                        eptableMaker(newdate,newresponse);
                        hptableMaker(newdate,newresponse);




                    });

		$(".updateplan").click(function(){
			console.log(JSON.stringify(newresponse.data[newdate]));
			//alert(token);
			newresponse.data[newdate].date=newresponse.data[newdate].date+'';
			$.ajax({
                type: 'POST',
                url: 'http://52.4.33.129:9000/api/CMSUpdateUserDailyPlan',
                contentType: 'application/json',
                data: JSON.stringify(newresponse.data[newdate]),
                dataType: 'json',
		beforeSend:function(request){

			request.setRequestHeader("u_id",token);
					},
                success: function(response) {
                    $("#insertalertbox .modal-dialog .modal-content .modal-body p").html("Daily Plan was successfully updated");
                    $("#insertalertbox").modal('show');
					clearMeal();
					exercises=[];
					hydartionItems=[];
                },
                error: function(xhr, status, error) {

                    $("#insertalertbox .modal-dialog .modal-content .modal-body p").html("<font color='#eb4141'>" + xhr.responseText + "</font>");
                    $("#insertalertbox").modal('show');


                }



            });


						});


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
									<p>' + newIds[v].name.substr(0, newIds[v].from) + '<font color="#FED859"><strong>' + newIds[v].name.substr(newIds[v].from, newIds[v].to - newIds[v].from + 1) + '</strong></font>' + newIds[v].name.substr(newIds[v].to + 1, newIds[v].name.length) + '</p>\
<span class="hidden">'+newIds[v].id+'</span>\
								  </div>\
								</li>' + node;




            }

            var displayusers = topbar + node + bottombar;

            //$(".allunreadmsg .allusers").html(displayusers);
		$(currtab + " .allunreadmsg .allusers").html(displayusers);
		$.material.init();
            $('[data-toggle="tooltip"]').tooltip();

        }


        $(".searchinput1").keyup(function() {

            var patt = $(".searchinput1").val();
            var len = patt.length;
            search_name(allUsers, allUsers.length, patt, len);


        });
	$(".searchinput2").keyup(function() {

            var patt = $(".searchinput2").val();
            var len = patt.length;
            search_name(allUsers, allUsers.length, patt, len);


        });
	$(".searchinput3").keyup(function() {

            var patt = $(".searchinput3").val();
            var len = patt.length;
            search_name(allUsers, allUsers.length, patt, len);


        });

        function search_name(allUsers, n, str, len) {
            newIds = [];
            for (var i = 0; i < n; i++) {
                var startIndex = allUsers[i].name.indexOf(str);
                if (startIndex >= 0) {
                    var endIndex = parseInt(startIndex) + parseInt(len) - 1;
                    newIds.push(allUsers[i]);
                    newIds[newIds.length - 1].from = startIndex;
                    newIds[newIds.length - 1].to = endIndex;
                }
            }
            updateUserList();
        }

	function clearMeal(){

		mealPattern = [{
            "name": "Early Morning",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }, {
            "name": "Breakfast",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }, {
            "name": "Pre Lunch",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }, {
            "name": "Lunch",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }, {
            "name": "Evening Snacks",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }, {
            "name": "Pre Dinner",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }, {
            "name": "Dinner",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }, {
            "name": "Post Dinner",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        },{
            "name": "Custom Meal 1",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        },{
            "name": "Custom Meal 2",
            "time": "",
            "items": [{
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }, {
                "itemName": "",
                "qty": "",
                "cal": ""
            }]
        }];


				}

	function clearExercise()
	{	
		exercises = [{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                 "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                 "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },{
            "name": "",
            "calorieBurn": "",
            "exerciseSets": [
                 "--NA--","--NA--","--NA--","--NA--","--NA--"
                ]
        },];

	}

	function clearHydration()
	{
		hydartionItems = [{

		"name":"",
		"required":0


			},{

		"name":"",
		"required":0


			},{

		"name":"",
		"required":0


			},{

		"name":"",
		"required":0


			},{

		"name":"",
		"required":0


			}];
	}


    }

    function checkSession() {
        var storedData = sessionStorage.getItem("sessionKey");
        if (storedData) {
            sessionData = JSON.parse(storedData);
            if (sessionData[0] && sessionData[1] == 'CC')
		{
			var arr = JSON.parse( sessionStorage.getItem('sessionKey') )
			token=arr[0];
			cmsid=arr[2];
			//alert(JSON.stringify(arr));
                return true;
		}

        }
        return false;
    }




});
