document.addEventListener("DOMContentLoaded", function() {

parallaxBackground($(".box-paralax"), 8);

function parallaxBackground(el, speed){
	parallax();
	
	$(window).scroll(function(){
		parallax();
	});
	
	function parallax(){
		requestAnimationFrame(function(){	
			var pos = $(window).scrollTop() / speed;
				
			el.css("background-position", "50% " + -pos + "px");
		});

	}
}

});
