
$(document).ready(function(){$(".card .front > button").click(function() {
    flip();
});});

function flip(){
$('.card').toggleClass('flipped');
}
$(document).ready(function(){$(".card .back > button").click(function() {
    flip();
});});

$(document).ready(function(){
    $(".front .textfield #textcolor").focus(function(){
        $(".front .textfield a").css({"border-bottom": "2px solid #6699ff"});
    });
});

$(document).ready(function(){
    $(".back .textfield #textcolor").focus(function(){
        $(".back .textfield a").css({"border-bottom": "2px solid #ff6600"});
    });
});