$(document).ready(function() {

	// FADE 
	$("#sembunyif").click(function(){
		$(".f1").fadeOut();
		$(".f2").fadeOut("slow");
		$(".f3").fadeOut("fast");
		$(".f4").fadeOut(5000);
	});

	$("#tampilf").click(function(){
		$(".f1").fadeIn();
		$(".f2").fadeIn("slow");
		$(".f3").fadeIn("fast");
		$(".f4").fadeIn(5000);
	});

	$("#togglef").click(function(){
		$(".f1").fadeToggle();
		$(".f2").fadeToggle("slow");
		$(".f3").fadeToggle("fast");
		$(".f4").fadeToggle(5000);
	});


	//SLIDE

	$("#sembunyis").click(function(){
		$(".s1").slideUp();
		$(".s2").slideUp("slow");
		$(".s3").slideUp("fast");
		$(".s4").slideUp(5000);
	});

	$("#tampils").click(function(){
		$(".s1").slideDown();
		$(".s2").slideDown("slow");
		$(".s3").slideDown("fast");
		$(".s4").slideDown(5000);
	});

	$("#toggles").click(function(){
		$(".s1").slideToggle();
		$(".s2").slideToggle("slow");
		$(".s3").slideToggle("fast");
		$(".s4").slideToggle(5000);
	});


	//HIDE
	$("#sembunyih").click(function(){
		$(".h1").hide();
		$(".h2").hide("slow");
		$(".h3").hide("fast");
		$(".h4").hide(5000);
	});

	$("#tampilh").click(function(){
		$(".h1").show();
		$(".h2").show("slow");
		$(".h3").show("fast");
		$(".h4").show(5000);
	});

	$("#toggleh").click(function(){
		$(".h1").toggle();
		$(".h2").toggle("slow");
		$(".h3").toggle("fast");
		$(".h4").toggle(5000);
	});

});