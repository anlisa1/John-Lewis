$(".about-pg").hide();
$(".positions-pg").hide();
$(".awards-pg").hide();
$(".history-pg").hide();


$(".about").click(function(){
	$(".about-pg").show();	
	$(".positions-pg").hide();
    $(".w").hide();
    $(".awards-pg").hide();
    $(".history-pg").hide();
});

$(".positions").click(function(){
	$(".positions-pg").show();	
    $(".about-pg").hide();
    $(".w").hide();
    $(".awards-pg").hide();
    $(".history-pg").hide();
});

$(".awards").click(function(){
	$(".awards-pg").show();	
    $(".about-pg").hide();
    $(".w").hide();
    $(".positions-pg").hide();
    $(".history-pg").hide();
});
$(".history").click(function(){
	$(".history-pg").show();	
    $(".about-pg").hide();
    $(".w").hide();
    $(".positions-pg").hide();
    $(".awards-pg").hide();
});
