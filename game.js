//=========================== jquery initialization function=================================================
$(function () {

    init(12);

});

//===========================end of jquery initialization function=================================================
//=========================== grid initialization function=========================================================
/*
initializes score=0  , moves=0 , shows loding spinner and hides grid

calls game loading function after 3 seconds
*/
var upperBound = 4096;
var power = 12;

function init(u) {

    upperBound = 1;
    if ($("#pow").val()) {
        if ($("#pow").val() <= 2) {
            window.alert("Enter n greater than 2");
            return false;
        } else {
            u = $("#pow").val();
            power = u;
        }
        $("#pow").blur();
    } 
    else if(isNaN($("#pow").val()))
		{
			window.alert("This is not a Number");
            return false;
		}
    else {
        power = u;
    }

    for (var b = u; b >= 1; b--) {
        upperBound = upperBound * 2;
    }


    //window.alert(upperBound);
    //window.alert(power);
    changeGame();
    //$("#load").show();
    $("#title").text(upperBound);
    $("#myTable").hide();
    $("#score").val(score);
    $("#moves").val(moves);
    setTimeout("gameloading()", 100);
}

//===========================end of grid initialization function=================================================
//=========================== restart function=================================================
/*
invoked if player hits restart button
resets moves, score , each grid cell to blank and calls init() function again
*/

function restart() {
    moves = 0;
    score = 0;

    for (var m = 0; m <= 3; m++) {
        for (var n = 0; n <= 3; n++) {
            $("#" + m + "" + n).val("");
        }
    }
    init(power);
}

function changeGame() {
    score = 0;
    moves = 0;
    for (var m = 0; m <= 3; m++) {
        for (var n = 0; n <= 3; n++) {
            $("#" + m + "" + n).val("");
        }
    }
}



//===========================end of restart function=================================================
//=========================== gameloading function=================================================
/*
hides loading spinner and displays grid with 2 generated on randomly chosen grid cells
also calls changeColor function that gives appropriate background and foreground colors to each cell

*/

function gameloading() {

    //$("#load").hide();
    $("#myTable").show();

    changeColor();
    var r1 = Math.floor((Math.random() * 3) + 1);
    var r2 = Math.floor((Math.random() * 3) + 1);
    for (var i = 0; i < r1; i++) {
        for (var j = 0; j < r2; j++) {


            var k = Math.floor((Math.random() * 2) + 0);
            if (k == 1) $("#" + i + "" + j).val("2");

        }
    }
    changeColor();
}

//=========================== end of gameloading function=================================================   
var count;
var moves = 0; // moves variable initialized to zero
var score = 0; // score variable initialized to zero
var randomElement = 0;
document.onkeydown = checkKey; // invokes checkKey function as soon as player presses any key
//=========================== checkKey function=================================================
/*
check wether only any one of the 4 arrow keys is pressed, if any other key is pressed this function does not responds
*/

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') { //keycode if 37 it is left arrow
        left(); // so call left() function
        moves++; //this is also a move so move++
    } else if (e.keyCode == '38') { //keycode if 38 it is left arrow
        up(); // so call up() function
        moves++; //this is also a move so move++
    } else if (e.keyCode == '39') { //keycode if 39 it is left arrow
        right(); // so call right() function
        moves++; //this is also a move so move++
    } else if (e.keyCode == '40') { //keycode if 40 it is left arrow
        down(); // so call down() function
        moves++; //this is also a move so move++
    }

    gameOver(); //after reaching here with appropriate move done check if next move can be done or not so call gameover() function
    $("#score").val(score); //if here means game is not over so update score value to the score botton
    $("#moves").val(moves); //also update moves button value
}

//=========================== left function=================================================
/*
this is invoked if left arrow key is pressed
we have to move every cell to the left so for every row it calls its 2 utility functions
subleft ---> that shifts all cells to the left
addLeftMove ---> that adds a random generated number (only 2 or 4) in any of the blank valued cells (randomly chosen)

other than this it also calls change color function to make changes in the color of cell appropriatly as the cells are shifted
and the new numbers are generated.
*/

function left() {

    for (var i = 0; i <= 3; i++) {

        changeColor();
        subleft(i);
        changeColor();

        //changeColor();
    }
    addLeftMove();
    changeColor();
}

//=========================== end of left function=================================================
//=========================== subLeft function=================================================
/*
primary work is to shift all cells to the left of grid if possible
i.e. if already on the left then ignore
*/

function subleft(i) {


    var A = new Array(); // array A that stores all the non empty values present in the ith row
    var track = i; //value of i is changed many time so before going store its value
    count = 1; //just to increase index of array
    var f = 0;

    for (var j = 0; j < 4; j++) {

        if (($("#" + i + "" + j).val()) != "") //if value of cell isnt blank
        {
            A[count] = $("#" + i + "" + j).val() - 0; //put it in A
            count++;
        }
    }

    j = 0; //reset j to 0
    count--; //as count in the last iteration goes to one more we make it one less
    for (var k = 1; k <= count; k++) // now we have all non blank numbers of the row
    {
        //this loop simply puts those value one by one starting from 1st column
        $("#" + i + "" + j).val(A[k]); //uptill count becoz we only have "count" no of non blank values
        j++;
    }

    for (var h = j; h < 4; h++) // and after that just put blank till the last!
    {
        $("#" + i + "" + h).val(""); // this makes all non blank values come to left and after that blank
        j++;
    }

    for (j = 0; j <= 2; j++) //now we check for each cell in current row if its left cell value is equal to it coz we have to add them up!
    {
        if ($("#" + i + "" + j).val() == $("#" + i + "" + (j + 1)).val() && $("#" + i + "" + j).val() != "" && $("#" + i + "" + (j + 1)).val() != "") //check here for that
        {
            $("#" + i + "" + j).val(($("#" + i + "" + j).val() - 0) + ($("#" + i + "" + (j + 1)).val() - 0)); //and add them and put them in the left cell
            $("#" + i + "" + j).animate({
                width: "110px",
                height: "110"
            }, 100); //just to animate pop up effect when adding
            $("#" + i + "" + j).animate({
                width: "100px",
                height: "100"
            }, 100);


            $("#" + i + "" + (j + 1)).val(""); //also put blank on right cell
            score = (score - 0) + (($("#" + i + "" + j).val()) - 0); //and update score
        }
    }

    for (var i = 0; i < 4; i++) {

        for (var j = 0; j < 4; j++) {
            if ($("#" + i + "" + j).val() == 0) //this creates 0 on blank cells so make it blank again
            $("#" + i + "" + j).val("");
        }
    }

    i = track; //value of i is changed many time so before going to next iteration to left function give back i its value
    j = 0; //j has to restart every time so give it zero and go to left() for next ith row
}
//=========================== end of subLeft function=================================================
//=========================== addLeftMove function=================================================
/*
this function creates 2 or 4 on randomly chosen cells that are already blank
*/

function addLeftMove() {

    var empty = new Array(); // Array empty that store position of grid cells that are empty
    var q = 1; //for increasing index of array
    for (var x = 0; x <= 3; x++) {
        for (var y = 0; y <= 3; y++) {
            if ($("#" + x + "" + y).val() == "") //if cell value is blank
            {
                empty[q] = x + "" + y; //store its position
                q++;
            }
        }
    }


    var randomIndex = Math.floor(Math.random() * empty.length); //generates random index under range of empty array length


    if (randomElement == 0) //this is to generate 2 1st time and 4 2nd time and so on one by one
    {
        $("#" + empty[randomIndex]).val("2");
        randomElement++;
    } else {
        $("#" + empty[randomIndex]).val("4");
        randomElement = 0;
    }
}


//=========================== end of addLeftMove function=================================================
//=========================== up function=================================================

function up() {
    for (var i = 0; i <= 3; i++) {
        changeColor();
        subup(i);
        changeColor();

    }
    addUpMove();
    changeColor();
}
//=========================== end of up function=================================================
//=========================== subup function=================================================

function subup(i) {
    var A = new Array();
    var track = i;
    count = 1;

    for (var j = 0; j < 4; j++) {

        if (($("#" + j + "" + i).val()) != "") {
            A[count] = $("#" + j + "" + i).val();
            count++;
        }
    }
    j = 0;
    count--;


    for (var k = 1; k <= count; k++) {

        var test = $("#" + j + "" + i).val(A[k]);

        j++;
    }
    for (var h = j; h < 4; h++) {
        $("#" + h + "" + i).val("");
        j++;
    }



    j = 0;
    if ($("#" + j + "" + i).val() == $("#" + (j + 1) + "" + i).val() && $("#" + j + "" + i).val() != "" && $("#" + (j + 1) + "" + i).val() != "") {
        $("#" + j + "" + i).val(($("#" + j + "" + i).val() - 0) + ($("#" + (j + 1) + "" + i).val() - 0));
        $("#" + j + "" + i).animate({
            width: "110px",
            height: "110"
        }, 100);
        $("#" + j + "" + i).animate({
            width: "100px",
            height: "100"
        }, 100);

        $("#" + (j + 1) + "" + i).val("");

        score = (score - 0) + (($("#" + j + "" + i).val()) - 0);
        var flag = 1;
    }

    for (var i = 0; i < 4; i++) {

        for (var j = 0; j < 4; j++) {
            if ($("#" + j + "" + i).val() == 0) $("#" + j + "" + i).val("");
        }
    }

    i = track;
    j = 0;



}
//=========================== end of subUp function=================================================
//=========================== addUpMove function=================================================

function addUpMove() {

    var empty = new Array();
    var q = 1;
    for (var x = 0; x < 4; x++) {
        for (var y = 0; y < 4; y++) {
            if ($("#" + x + "" + y).val() == "") {
                empty[q] = x + "" + y;
                q++;
            }
        }
    }


    var randomIndex = Math.floor(Math.random() * empty.length);
    var randomElement = empty[randomIndex];


    if (randomElement == 0) {
        $("#" + empty[randomIndex]).val("2");
        randomElement++;
    } else {
        $("#" + empty[randomIndex]).val("4");
        randomElement = 0;
    }


}
//=========================== end of addUpMove function=================================================
//=========================== right function=================================================

function right() {
    for (var i = 0; i <= 3; i++) {
        changeColor();
        subright(i);
        changeColor();

    }
    addRightMove();
    changeColor();
}
//=========================== end of right function=================================================
//=========================== subRight function=================================================

function subright(i) {
    var A = new Array();
    var track = i;
    count = 1;

    for (var j = 0; j < 4; j++) {

        if (($("#" + i + "" + j).val()) != "") {
            A[count] = $("#" + i + "" + j).val();
            count++;
        }
    }
    j--;
    count--;


    for (var k = count; k > 0; k--) {

        var test = $("#" + i + "" + j).val(A[k]);

        j--;
    }
    for (var h = j; h >= 0; h--) {
        $("#" + i + "" + h).val("");
        j--;
    }




    for (j = 3; j >= 1; j--) {
        if ($("#" + i + "" + j).val() == $("#" + i + "" + (j - 1)).val() && $("#" + i + "" + j).val() != "" && $("#" + i + "" + (j - 1)).val() != "") {
            $("#" + i + "" + j).val(($("#" + i + "" + j).val() - 0) + ($("#" + i + "" + (j - 1)).val() - 0));
            $("#" + i + "" + j).animate({
                width: "110px",
                height: "110"
            }, 100);
            $("#" + i + "" + j).animate({
                width: "100px",
                height: "100"
            }, 100);
            $("#" + i + "" + (j - 1)).val("");
            score = (score - 0) + (($("#" + i + "" + j).val()) - 0);
            var flag = 1;
        }
    }

    for (var i = 0; i < 4; i++) {

        for (var j = 0; j < 4; j++) {
            if ($("#" + i + "" + j).val() == 0) $("#" + i + "" + j).val("");
        }
    }

    i = track;
    j = 0;


}
//=========================== end of subRight function=================================================
//=========================== addRightMove function=================================================

function addRightMove() {

    var empty = new Array();
    var q = 1;
    for (var x = 0; x < 4; x++) {
        for (var y = 0; y < 4; y++) {
            if ($("#" + x + "" + y).val() == "") {
                empty[q] = x + "" + y;
                q++;
            }
        }
    }


    var randomIndex = Math.floor(Math.random() * empty.length);


    if (randomElement == 0) {
        $("#" + empty[randomIndex]).val("2");
        randomElement++;
    } else {
        $("#" + empty[randomIndex]).val("4");
        randomElement = 0;
    }


}
//=========================== end of addRightMove function=================================================
//=========================== down function=================================================

function down() {
    for (var i = 0; i <= 3; i++) {
        changeColor();
        subdown(i);
        changeColor();

    }
    addDownMove();
    changeColor();

}
//=========================== end of down function=================================================
//=========================== subdown function=================================================

function subdown(i) {
    var A = new Array();
    var track = i;
    count = 1;

    for (var j = 0; j < 4; j++) {

        if (($("#" + j + "" + i).val()) != "") {
            A[count] = $("#" + j + "" + i).val();
            count++;
        }
    }
    j--;
    count--;


    for (var k = count; k > 0; k--) {

        var test = $("#" + j + "" + i).val(A[k]);

        j--;
    }
    for (var h = j; h >= 0; h--) {
        $("#" + h + "" + i).val("");
        j--;
    }



    for (j = 3; j >= 1; j--) {
        if ($("#" + j + "" + i).val() == $("#" + (j - 1) + "" + i).val() && $("#" + j + "" + i).val() != "" && $("#" + (j - 1) + "" + i).val() != "") {
            $("#" + j + "" + i).val(($("#" + j + "" + i).val() - 0) + ($("#" + (j - 1) + "" + i).val() - 0));
            $("#" + j + "" + i).animate({
                width: "110px",
                height: "110"
            }, 100);
            $("#" + j + "" + i).animate({
                width: "100px",
                height: "100"
            }, 100);
            $("#" + (j - 1) + "" + i).val("");
            score = (score - 0) + (($("#" + j + "" + i).val()) - 0);
            var flag = 1;
        }
    }

    for (var i = 0; i < 4; i++) {

        for (var j = 0; j < 4; j++) {
            if ($("#" + j + "" + i).val() == 0) $("#" + j + "" + i).val("");
        }
    }

    i = track;
    j = 0;


}
//=========================== end of subdown function=================================================
//=========================== addDownMove function=================================================

function addDownMove() {

    var empty = new Array();
    var q = 1;
    for (var x = 0; x < 4; x++) {
        for (var y = 0; y < 4; y++) {
            if ($("#" + x + "" + y).val() == "") {
                empty[q] = x + "" + y;
                q++;
            }
        }
    }


    var randomIndex = Math.floor(Math.random() * empty.length);


    if (randomElement == 0) {
        $("#" + empty[randomIndex]).val("2");
        randomElement++;
    } else {
        $("#" + empty[randomIndex]).val("4");
        randomElement = 0;
    }


}
//=========================== end of addDownMove function=================================================
//=========================== changeColor function=================================================
/*
this function changes color of grid cell according to the value contained in it
*/

function changeColor() {
    for (var m = 0; m <= 3; m++) {
        for (var n = 0; n <= 3; n++) {
            if ($("#" + m + "" + n).val() == "") {
                $("#" + m + "" + n).css("background-color", "#DDD");

            }
            if ($("#" + m + "" + n).val() == 2) {
                $("#" + m + "" + n).css("background-color", "#96C5D3");
                $("#" + m + "" + n).css("color", "#EEE");
            }
            if ($("#" + m + "" + n).val() == 4) {
                $("#" + m + "" + n).css("background-color", "#71B0C4");
                $("#" + m + "" + n).css("color", "#EEE");
            }
            if ($("#" + m + "" + n).val() == 8) {
                $("#" + m + "" + n).css("background-color", "#4691A6");
                $("#" + m + "" + n).css("color", "#EEE");
            }
            if ($("#" + m + "" + n).val() == 16) {
                $("#" + m + "" + n).css("background-color", "#346A7A");
                $("#" + m + "" + n).css("color", "#EEE");
            }
            if ($("#" + m + "" + n).val() == 32) {
                $("#" + m + "" + n).css("background-color", "#044C65");
                $("#" + m + "" + n).css("color", "#EEE");
            }
            if ($("#" + m + "" + n).val() == 64) {
                $("#" + m + "" + n).css("background-color", "#4FCFEC");
                $("#" + m + "" + n).css("color", "#EEE");
            }
            if ($("#" + m + "" + n).val() == 128) {
                $("#" + m + "" + n).css("background-color", "#DDD");
                $("#" + m + "" + n).css("color", "#71B0C4");
            }
            if ($("#" + m + "" + n).val() == 256) {
                $("#" + m + "" + n).css("background-color", "#DDD");
                $("#" + m + "" + n).css("color", "#4691A6");
            }
            if ($("#" + m + "" + n).val() == 512) {
                $("#" + m + "" + n).css("background-color", "DDD");
                $("#" + m + "" + n).css("color", "#346A7A");
            }
            if ($("#" + m + "" + n).val() == 1024) {
                $("#" + m + "" + n).css("background-color", "DDD");
                $("#" + m + "" + n).css("color", "#044C65");
            }
            if ($("#" + m + "" + n).val() == 2048) {
                $("#" + m + "" + n).css("background-color", "#68b12f");
                $("#" + m + "" + n).css("color", "#EEE");
            }
            if ($("#" + m + "" + n).val() == 4096) {
                $("#" + m + "" + n).css("background-color", "#eb4141");
                $("#" + m + "" + n).css("color", "#EEE");
            }
            if ($("#" + m + "" + n).val() > 4096) {
                $("#" + m + "" + n).css("background-color", "green");
                $("#" + m + "" + n).css("color", "#EEE");
            }
        }
    }


}
//=========================== end of changeColor function=================================================
//=========================== gameOver function=================================================
/*
this function checks if game is over or player has won
*/

function gameOver() {
    var game = 0;
    var not = 0;
    var full = 0;



    for (var m = 0; m <= 3; m++) {
        for (var n = 0; n <= 3; n++) {

            if (m - 1 >= 0) {
                if ($("#" + (m - 1) + n + "").val() != $("#" + m + n + "").val()) game++;

            }

            if (n - 1 >= 0) {
                if ($("#" + m + (n - 1) + "").val() != $("#" + m + n + "").val()) game++
            }

            if (m + 1 <= 3) {
                if ($("#" + (m + 1) + n + "").val() != $("#" + m + n + "").val()) game++;
            }
            if (n + 1 <= 3) {
                if ($("#" + m + (n + 1) + "").val() != $("#" + m + n + "").val()) game++;
            }
        }
    }


    for (var m = 0; m <= 3; m++)
    for (var n = 0; n <= 3; n++) {
        if ($("#" + m + "" + n).val() != "") not++;
        if ($("#" + m + "" + n).val() == upperBound) {
            full = 1;
            break;
        }


    }



    if (full == 1) {
        window.alert("YOU WIN !");
    } else if (game == 48 && not == 16) {
        window.alert("GAME OVER :-( Hit Restart to try again..");
    }




}
//=========================== end of gameOver function=================================================
