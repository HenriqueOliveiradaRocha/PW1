window.onscroll = function() {scrollfunction()};
		function scrollfunction(){
			if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
					document.getElementById("menulateral").style.display = "block";
			}else{
				document.getElementById("menulateral").style.display = "none";
			}
		}

function onGoogle(){
	window.open("https://www.google.com/", "MyPage", "width=800, height=400");
}