
//点击显示示例
function help(a){
	var help=document.getElementById(a);

	var helpfont=help.getElementsByTagName("font")[0];

	var helpspan=help.getElementsByTagName("span")[0];

	if(helpspan.style.display=="inline-block"){
		helpspan.style.display="none";
		helpfont.innerHTML="示例";
	}else if(helpspan.style.display=="none"){
		helpspan.style.display="inline-block";
		helpfont.innerHTML="收起";
		
	}
}


	//字数统计
	//gmember

	function textlen(){
		var gmember=document.getElementById("gmember").value;
		var gmembernumber=document.getElementById("gmembernumber");
		var gmembernumber2=document.getElementById("gmembernumber2");
		console.log(gmembernumber);
		var len;

		if(gmember.length>=90){
			gmember=gmember.substr(0,90);
			len=90;
		}else{
			len=gmember.length;
		}
		gmembernumber.innerHTML=len;
		gmembernumber2.innerHTML=90-len;

	}

