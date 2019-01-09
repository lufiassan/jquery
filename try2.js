$(document).ready(function() {
	$("#semua").click(function(){
		$("*").hide();
	});
	$("#ini").click(function(){
		$("this").hide();
	});
	$("button.penting").click(function(){
		$("p.penting").hide();
	});
	$("button#pertama").click(function(){
		$("p:first").hide();
	});
	$("button.baris1").click(function(){
		$("tr:first").hide();
	});
	$("button#kolom1semua").click(function(){
		$("td:first-child").hide();
	});
	$("strong").click(function(){
		$("tr:even").css("background-color","red");
		$("tr:odd").css("background-color","aqua");
	});
	$("[alt='link1']").click(function(){
		$("[href]").css("color","red");
	});
	$("[alt='link2']").click(function(){
		$("a[target='_blank']").css("color","yellow");
	});
	$("[alt='auto']").click(function(){
		$("a[target='_blank']").css("border","3px solid #000");
	});
	$("[alt='sem_tombol']").click(function(){
		$("button").slideUp("5000");
	});

});