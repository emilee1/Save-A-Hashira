$(".start-Uzui").click(function() {
    $(".first-Uzui").show();
    $(".start").hide();
});

$(".uzui-img").hover(function() {
    $(".gyutaro").show();
    $(".first-Uzui").hide();
});

$(".second-gyu").click(function() {
    $(".third-Uzui").show();
    $(".gyutaro").hide();
});

$(".uzui-three").hover(function() {
    $(".final-Uzui").show();
    $(".third-Uzui").hide();
    $(".reset-button").show();
});

$(".reset-button").click(function(){
   $(".start").show(); 
    $(".final-Uzui").hide();
    $(".reset-button").hide();
    $(".final-rengoku").hide();
});
$(".start-Rengoku").click(function() {
    $(".first-rengoku").show();
    $(".start").hide();
});

$(".first-rengoku").hover(function() {
    $(".second-rengoku").show();
    $(".first-rengoku").hide();
});

$(".fight").dblclick(function() {
    $(".final-rengoku").show();
    $(".second-rengoku").hide();
    $(".reset-button").show();

});