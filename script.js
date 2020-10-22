$(".top-left").click(function(){
   $(".clickBox").text("Thank you for clicking on me!");
   $(".top-left").css("background-color", "green");
});
$(".top-right").dblclick(function(){
   $(".dblClickBox").text("Thank you for double-clicking on me!");
   $(".top-right").css("background-color", "blue");
});
$(".bottom-left").hover(function(){
   $(".hoverBox").text("Thank you for hovering on me!");
   $(".bottom-left").css("background-color", "yellow");
});
$(".bottom-right").mouseenter(function(){
   $(".mouseOnBox").text("Thank you for visiting!");
   $(".bottom-right").css("background-color", "white");
});