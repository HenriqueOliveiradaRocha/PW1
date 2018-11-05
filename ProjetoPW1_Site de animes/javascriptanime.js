window.onscroll = function() {scrollfunction()};
		function scrollfunction(){
			if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
					document.getElementById("menulateral").style.display = "block";
			}else{
				document.getElementById("menulateral").style.display = "none";
			}
		}