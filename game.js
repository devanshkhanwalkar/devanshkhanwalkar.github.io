function init()
{
	
		
	setTimeout("gameloading()",3000);

	
	
	
}
function gameloading()
{
	
	document.getElementById("load").style.display="none";
	document.getElementById("myTable").style.display="block";
	changeColor();
	var r1=Math.floor((Math.random()*3)+1);
	var r2=Math.floor((Math.random()*3)+1);
	for(var i=0;i< r1;i++)
	{
		for(var j=0;j< r2;j++)
	{
	  	
	 
	  var k=Math.floor((Math.random()*2)+0);
	  if(k==1)
	  document.getElementById(i+""+j).value=2;
	  
	}
	}
}

     
	 
	
	var count;
var moves=0;
var score=0;
var randomElement = 0;
	
	document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
		
		left();
		gameOver();
moves++;
document.getElementById("score").value=score;
document.getElementById("moves").value=moves;
        // left arrow
    }
	if (e.keyCode == '38') {
		
		up();
		gameOver();
moves++;
document.getElementById("score").value=score;
document.getElementById("moves").value=moves;
        // up arrow
    }
    if (e.keyCode == '39') {
		
		right();
		gameOver();
moves++;
document.getElementById("score").value=score;
document.getElementById("moves").value=moves;
        // right arrow
    }
	if (e.keyCode == '40') {
		
		down();
		gameOver();
moves++;
document.getElementById("score").value=score;
document.getElementById("moves").value=moves;
        // down arrow
    }
	
}
function left()
{
	
	for(var i=0;i<=3;i++)
		{
			
			changeColor();
			subleft(i);
			changeColor();
			addLeftMove(i);
			changeColor();
			//alert(i);
			
		}
		
}

function subleft(i)
{
	
				//alert("in");
				//alert(i);
			var A=new Array();
			
			var track=i;
			count=1;
			var f=0;
			
			for(var j=0;j<4;j++)
			{
				
				if((document.getElementById(i+""+j).value)!="")
				{
					A[count]=document.getElementById(i+""+j).value-0;
					
					count++;
				}
			}
			
			j=0;
			count--;
		
			
			
			for(var k=1;k<=count;k++)
			{
				
				document.getElementById(i+""+j).value=A[k];
			
				j++;
			}
			for(var h=j;h<4;h++)
			{
				document.getElementById(i+""+h).value="";
				j++;
			}
			j=0;
			if(document.getElementById(i+""+j).value==document.getElementById(i+""+(j+1)).value)
			{
			 document.getElementById(i+""+j).value=(document.getElementById(i+""+j).value-0)+(document.getElementById(i+""+(j+1)).value-0);
			 document.getElementById(i+""+(j+1)).value="";
				score=(score-0)+((document.getElementById(i+""+j).value)-0);
				var flag=1;
			}
			j=1;
			if(document.getElementById(i+""+j).value==document.getElementById(i+""+(j+1)).value)
			{
			 document.getElementById(i+""+j).value=(document.getElementById(i+""+j).value-0)+(document.getElementById(i+""+(j+1)).value-0);
			 document.getElementById(i+""+(j+1)).value="";
				score=(score-0)+((document.getElementById(i+""+j).value)-0);
				
			 flag++;
			}
			j=2;
			if(document.getElementById(i+""+j).value==document.getElementById(i+""+(j+1)).value)
			{
			 document.getElementById(i+""+j).value=(document.getElementById(i+""+j).value-0)+(document.getElementById(i+""+(j+1)).value-0);
			 document.getElementById(i+""+(j+1)).value="";
				score=(score-0)+((document.getElementById(i+""+j).value)-0);
			 flag++;
			}
			/*if(flag==1||flag==2)
			{
				document.getElementById(i+""+(j-1)).value=document.getElementById(i+""+j).value;
				document.getElementById(i+""+j).value="";
			}*/
			for(var i=0;i<4;i++)
		    {
		
			for(var j=0;j<4;j++)
			{
				if(document.getElementById(i+""+j).value==0)
				document.getElementById(i+""+j).value="";
			}
		    }
			
			i=track;
			j=0;
			
}

function addLeftMove(i)
{
	
	var empty=new Array();
	var q=1;
	for(var x=0;x<=3;x++)
	{
		for(var y=0;y<=3;y++)
		{
			if(document.getElementById(x+""+y).value=="")
			{
			empty[q]=x+""+y;
			q++;
			}
		}
	}
	
	
	var randomIndex = Math.floor(Math.random() * empty.length); 



//alert("randomElement="+randomElement);
if(i==3)
{
	//alert("randomIndex="+randomIndex);
	//alert(randomElement);
	if(randomElement == 0)
	{
document.getElementById(empty[randomIndex]).value=2;
randomElement++;
}
else
{
document.getElementById(empty[randomIndex]).value=4;
randomElement =0;
}
}

}

function up()
{
	for(var i=0;i<=3;i++)
		{ 
		changeColor();
		 subup(i);   
		 changeColor();
			addUpMove(i);
		 changeColor();
		}
		
}


function subup(i)
{
	var A=new Array();
		    var track=i;
			count=1;
			//====================================================
			for(var j=0;j<4;j++)
			{
				
				if((document.getElementById(j+""+i).value)!="")
				{
					A[count]=document.getElementById(j+""+i).value;
					count++;
				}
			}
			j=0;
			count--;
			
			
			for(var k=1;k<=count;k++)
			{
				
				var test=document.getElementById(j+""+i).value=A[k];
				
				j++;
			}
			for(var h=j;h<4;h++)
			{
				document.getElementById(h+""+i).value="";
				j++;
			}
			
			
			
			j=0;
			if(document.getElementById(j+""+i).value==document.getElementById((j+1)+""+i).value)
			{
			 document.getElementById(j+""+i).value=(document.getElementById(j+""+i).value-0)+(document.getElementById((j+1)+""+i).value-0);
			 document.getElementById((j+1)+""+i).value="";
				score=(score-0)+((document.getElementById(j+""+i).value)-0);
			 var flag=1;
			}
			j=1;
			if(document.getElementById(j+""+i).value==document.getElementById((j+1)+""+i).value)
			{
			 document.getElementById(j+""+i).value=(document.getElementById(j+""+i).value-0)+(document.getElementById((j+1)+""+i).value-0);
			 document.getElementById((j+1)+""+i).value="";
				score=(score-0)+((document.getElementById(j+""+i).value)-0);
			 flag++;
			}
			j=2;
			if(document.getElementById(j+""+i).value==document.getElementById((j+1)+""+i).value)
			{
			 document.getElementById(j+""+i).value=(document.getElementById(j+""+i).value-0)+(document.getElementById((j+1)+""+i).value-0);
			 document.getElementById((j+1)+""+i).value="";
				score=(score-0)+((document.getElementById(j+""+i).value)-0);
			 flag++;
			}
			/*if(flag==1||flag==2)
			{
				document.getElementById((j-1)+""+i).value=document.getElementById(j+""+i).value;
				document.getElementById(j+""+i).value="";
			}*/
			for(var i=0;i<4;i++)
		    {
		
			for(var j=0;j<4;j++)
			{
				if(document.getElementById(j+""+i).value==0)
				document.getElementById(j+""+i).value="";
			}
		    }
			
			i=track;
			j=0;
			
			//======================================================
		
}

function addUpMove(i)
{
	
	var empty=new Array();
	var q=1;
	for(var x=0;x<4;x++)
	{
		for(var y=0;y<4;y++)
		{
			if(document.getElementById(x+""+y).value=="")
			{
			empty[q]=x+""+y;
			q++;
			}
		}
	}
	
	
	var randomIndex = Math.floor(Math.random() * empty.length); 
var randomElement = empty[randomIndex];
if(i==3)
{
if(randomElement == 0)
	{
document.getElementById(empty[randomIndex]).value=2;
randomElement++;
}
else
{
document.getElementById(empty[randomIndex]).value=4;
randomElement =0;
}

}
}


function right()
{
	for(var i=0;i<=3;i++)
		{
			changeColor();
			subright(i);
			changeColor();
			addRightMove(i);
			changeColor();//======================================================
		}
}


function subright(i)
{
	var A=new Array();
			var track=i;
			count=1;
			//====================================================
			for(var j=0;j<4;j++)
			{
				
				if((document.getElementById(i+""+j).value)!="")
				{
					A[count]=document.getElementById(i+""+j).value;
					count++;
				}
			}
			j--;
			count--;
			
			
			for(var k=count;k>0;k--)
			{
				
				var test=document.getElementById(i+""+j).value=A[k];
				
				j--;
			}
			for(var h=j;h>=0;h--)
			{
				document.getElementById(i+""+h).value="";
				j--;
			}
			
			
			
			j=3;
			if(document.getElementById(i+""+j).value==document.getElementById(i+""+(j-1)).value)
			{
			 document.getElementById(i+""+j).value=(document.getElementById(i+""+j).value-0)+(document.getElementById(i+""+(j-1)).value-0);
			 document.getElementById(i+""+(j-1)).value="";
				score=(score-0)+((document.getElementById(i+""+j).value)-0);
			 var flag=1;
			}
			j=2;
			if(document.getElementById(i+""+j).value==document.getElementById(i+""+(j-1)).value)
			{
			 document.getElementById(i+""+j).value=(document.getElementById(i+""+j).value-0)+(document.getElementById(i+""+(j-1)).value-0);
			 document.getElementById(i+""+(j-1)).value="";
				score=(score-0)+((document.getElementById(i+""+j).value)-0);
			 flag++;
			}
			j=1;
			if(document.getElementById(i+""+j).value==document.getElementById(i+""+(j-1)).value)
			{
			 document.getElementById(i+""+j).value=(document.getElementById(i+""+j).value-0)+(document.getElementById(i+""+(j-1)).value-0);
			 document.getElementById(i+""+(j-1)).value="";
				score=(score-0)+((document.getElementById(i+""+j).value)-0);
			 flag++;
			}
			/*if(flag==1||flag==2)
			{
				document.getElementById(i+""+(j+1)).value=document.getElementById(i+""+j).value;
				document.getElementById(i+""+j).value="";
			}*/
			for(var i=0;i<4;i++)
		    {
		
			for(var j=0;j<4;j++)
			{
				if(document.getElementById(i+""+j).value==0)
				document.getElementById(i+""+j).value="";
			}
		    }
			
			i=track;
			j=0;
						

}

function addRightMove(i)
{
	
	var empty=new Array();
	var q=1;
	for(var x=0;x<4;x++)
	{
		for(var y=0;y<4;y++)
		{
			if(document.getElementById(x+""+y).value=="")
			{
			empty[q]=x+""+y;
			q++;
			}
		}
	}
	
	
	var randomIndex = Math.floor(Math.random() * empty.length); 
//var randomElement = empty[randomIndex];

if(i==3)
{
if(randomElement == 0)
	{
document.getElementById(empty[randomIndex]).value=2;
randomElement++;
}
else
{
document.getElementById(empty[randomIndex]).value=4;
randomElement =0;
}

}
}


function down()
{
	for(var i=0;i<=3;i++)
		{
			changeColor();
			subdown(i);
			changeColor();
			addDownMove(i);
			changeColor();
			//======================================================
		}
}

function subdown(i)
{
	var A=new Array();
			var track=i;
			count=1;
			//====================================================
			for(var j=0;j<4;j++)
			{
				
				if((document.getElementById(j+""+i).value)!="")
				{
					A[count]=document.getElementById(j+""+i).value;
					count++;
				}
			}
			j--;
			count--;
			
			
			for(var k=count;k>0;k--)
			{
				
				var test=document.getElementById(j+""+i).value=A[k];
				
				j--;
			}
			for(var h=j;h>=0;h--)
			{
				document.getElementById(h+""+i).value="";
				j--;
			}
			
			
			
			j=3;
			if(document.getElementById(j+""+i).value==document.getElementById((j-1)+""+i).value)
			{
			 document.getElementById(j+""+i).value=(document.getElementById(j+""+i).value-0)+(document.getElementById((j-1)+""+i).value-0);
			 document.getElementById((j-1)+""+i).value="";
				score=(score-0)+((document.getElementById(j+""+i).value)-0);
			 var flag=1;
			}
			//=======================================================================================================================================
			j=2;
			if(document.getElementById(j+""+i).value==document.getElementById((j-1)+""+i).value)
			{
			 document.getElementById(j+""+i).value=(document.getElementById(j+""+i).value-0)+(document.getElementById((j-1)+""+i).value-0);
			 document.getElementById((j-1)+""+i).value="";
				score=(score-0)+((document.getElementById(j+""+i).value)-0);
			 flag++;
			}
			//========================================================================================================================================
			j=1;
			if(document.getElementById(j+""+i).value==document.getElementById((j-1)+""+i).value)
			{
			 document.getElementById(j+""+i).value=(document.getElementById(j+""+i).value-0)+(document.getElementById((j-1)+""+i).value-0);
			 document.getElementById((j-1)+""+i).value="";
				score=(score-0)+((document.getElementById(j+""+i).value)-0);
			 flag++;
			}
			/*if(flag==1||flag==2)
			{
				document.getElementById((j+1)+""+i).value=document.getElementById(j+""+i).value;
				document.getElementById(j+""+i).value="";
			}*/
			for(var i=0;i<4;i++)
		    {
		
			for(var j=0;j<4;j++)
			{
				if(document.getElementById(j+""+i).value==0)
				document.getElementById(j+""+i).value="";
			}
		    }
			
			i=track;
			j=0;
			
			
}

function addDownMove(i)
{
	
	var empty=new Array();
	var q=1;
	for(var x=0;x<4;x++)
	{
		for(var y=0;y<4;y++)
		{
			if(document.getElementById(x+""+y).value=="")
			{
			empty[q]=x+""+y;
			q++;
			}
		}
	}
	
	
	var randomIndex = Math.floor(Math.random() * empty.length); 

if(i==3)
{
if(randomElement == 0)
	{
document.getElementById(empty[randomIndex]).value=2;
randomElement++;
}
else
{
document.getElementById(empty[randomIndex]).value=4;
randomElement =0;
}

}
}


function changeColor()
{
	for(var m=0;m<=3;m++)
	{
	for(var n=0;n<=3;n++)
	  {
		  if(document.getElementById(m+""+n).value=="")
		  {
		   document.getElementById(m+""+n).style.background="#CCC0B3";
		   //document.getElementById(m+""+n).style.color ="";
		  }
		  if(document.getElementById(m+""+n).value==2)
		  {
		    document.getElementById(m+""+n).style.backgroundColor ="#EEE4DA";
			document.getElementById(m+""+n).style.color ="#776E65";
		  }
			if(document.getElementById(m+""+n).value==4)
			{
		    document.getElementById(m+""+n).style.backgroundColor ="#EDE0C8";
			document.getElementById(m+""+n).style.color ="#776E65";
			}
			if(document.getElementById(m+""+n).value==8)
			{
		    document.getElementById(m+""+n).style.backgroundColor ="#F2B179";
			document.getElementById(m+""+n).style.color ="#F9F6F2";
			}
			if(document.getElementById(m+""+n).value==16)
			{
		    document.getElementById(m+""+n).style.backgroundColor ="#F59563";
			document.getElementById(m+""+n).style.color ="#F9F6F2";
			}
			if(document.getElementById(m+""+n).value==32)
			{
		    document.getElementById(m+""+n).style.backgroundColor ="#F67C5F";
			document.getElementById(m+""+n).style.color ="#F9F6F2";
			}
			if(document.getElementById(m+""+n).value==64)
			{
			document.getElementById(m+""+n).style.backgroundColor ="#F65E3B";
			document.getElementById(m+""+n).style.color ="#F9F6F2";
			}
			if(document.getElementById(m+""+n).value==128)
			{
		    document.getElementById(m+""+n).style.backgroundColor ="#EDCF72";
			document.getElementById(m+""+n).style.color ="#F9F6F2";
			}
			if(document.getElementById(m+""+n).value==256)
			{
		    document.getElementById(m+""+n).style.backgroundColor ="#EDCC61";
			document.getElementById(m+""+n).style.color ="#F9F6F2";
			}
			if(document.getElementById(m+""+n).value==512)
			{
			document.getElementById(m+""+n).style.backgroundColor ="#EDC850";
			document.getElementById(m+""+n).style.color ="#F9F6F2";
			}
			if(document.getElementById(m+""+n).value==1024)
			{
		    document.getElementById(m+""+n).style.backgroundColor ="#eb4141";
			document.getElementById(m+""+n).style.color ="#fff";
			}
			if(document.getElementById(m+""+n).value==2048)
			{
			document.getElementById(m+""+n).style.backgroundColor ="#68b12f";
			document.getElementById(m+""+n).style.color ="#fff";
			}
			if(document.getElementById(m+""+n).value==4096)
			{
		    document.getElementById(m+""+n).style.backgroundColor ="#000";
			document.getElementById(m+""+n).style.color ="#fff";
			}
	  }
	}


}

function gameOver()
{
	var game=0;
	var not=0
	
	for(var m=0;m<=3;m++)
	for(var n=0;n<=3;n++)
	{
		if(m==0&&n==0)
		{
			if((document.getElementById("01").value!=document.getElementById("00").value)&&(document.getElementById("10").value!=document.getElementById("00").value))
			game++;
			
		}
		if((m==0&&n==1)||(m==0&&n==2))
		{
			if((document.getElementById(m+""+(n-1)).value!=document.getElementById(m+""+n).value)&&(document.getElementById(m+""+(n+1)).value!=document.getElementById(m+""+n).value)&&(document.getElementById((m+1)+""+n).value!=document.getElementById(m+""+n).value))
		    game++;
		}
		
		if(m==0&&n==3)
		{
			if((document.getElementById("02").value!=document.getElementById("03").value)&&(document.getElementById("13").value!=document.getElementById("03").value))
			game++;
			
		}
		
		if((m==1&&n==0)||(m==2&&n==0))
		{
			if((document.getElementById(m+""+(n+1)).value!=document.getElementById(m+""+n).value)&&(document.getElementById((m+1)+""+n).value!=document.getElementById(m+""+n).value)&&(document.getElementById((m-1)+""+n).value!=document.getElementById(m+""+n).value))
			game++;
		}
		if(m==3&&n==0)
		{
			if((document.getElementById("20").value!=document.getElementById("30").value)&&(document.getElementById("31").value!=document.getElementById("30").value))
			game++;
		}
		
		if((m==3&&n==1)||(m==3&&n==2))
		{
			if((document.getElementById(m+""+(n-1)).value!=document.getElementById(m+""+n).value)&&(document.getElementById((m-1)+""+n).value!=document.getElementById(m+""+n).value)&&(document.getElementById((m-1)+""+n).value!=document.getElementById(m+""+n).value))
			game++;
		}
		
		if(m==3&&n==3)
		{
			if((document.getElementById("32").value!=document.getElementById("33").value)&&(document.getElementById("23").value!=document.getElementById("33").value))
			game++;
		}
		
		if((m==1&&n==3)||(m==2&&n==3))
		{
			if((document.getElementById((m-1)+""+n).value!=document.getElementById(m+""+n).value)&&(document.getElementById(m+""+(n-1)).value!=document.getElementById(m+""+n).value)&&(document.getElementById((m+1)+""+n).value!=document.getElementById(m+""+n).value))
			game++;
		}
	}
	
	for(var m=1;m<=2;m++)
	for(var n=1;n<=2;n++)
	{
		if((document.getElementById((m-1)+""+n).value!=document.getElementById(m+""+n).value)&&(document.getElementById(m+""+(n-1)).value!=document.getElementById(m+""+n).value)&&(document.getElementById((m+1)+""+n).value!=document.getElementById(m+""+n).value)&&(document.getElementById(m+""+(n+1)).value!=document.getElementById(m+""+n).value))
			game++;
		
	}
		for(var m=0;m<=3;m++)
	for(var n=0;n<=3;n++)
	{
		if(document.getElementById(m+""+n).value!="")
		not++;
	}
	if(game==16&&not==16)
	alert("GAME OVER :-( Refresh the window to Restart..");
	
	for(var m=0;m<=3;m++)
	for(var n=0;n<=3;n++)
	{
		if(document.getElementById(m+""+n).value==4096)
		{
			alert("you win!! Refresh the window to Restart");
		}
	}
	
}
