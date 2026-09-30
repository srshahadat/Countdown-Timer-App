function startTimer(btn){
	var count=document.getElementById("count").value;
	
	if(count==0){
		alert("Please enter a valid number!");
	}else{
		document.getElementById("count").value=""
		btn.setAttribute('disabled', 'disabled');
		var counter = setInterval(function(){
		
			count = count - 1;
			if (count == -1) {
				clearInterval(counter);
				btn.removeAttribute("disabled");
				return;
			}
		
			var seconds = count % 60;
			var minutes = Math.floor(count / 60);
			var hours = Math.floor(minutes / 60);
			minutes %= 60;
			hours %= 60;
		
			document.getElementById("result").innerHTML = "<span class='text-primary'>"+hours+"</span>" + "H " + "<span class='text-primary'>"+minutes+"</span>" + "min  " + "<span class='text-primary'>"+seconds+"</span>" + "sec";

		}, 1000);
	}
}