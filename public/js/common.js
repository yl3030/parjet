AOS.init({
    once:true,
});

$(".header_nav_first>.drop").click(function(){
    if($(window).width() < 992) {
        if($(this).hasClass("active")) {
            $(this).find(".header_nav_second").slideUp(300);
            $(this).removeClass("active");   
        }else {
            $(this).find(".header_nav_second").slideDown(300);
            $(this).addClass("active"); 
            $(this).siblings("li").find(".header_nav_second").slideUp(300);
            $(this).siblings("li").removeClass("active");   
        }
    }
})

$(".header_menu").click(function(){
    $(this).toggleClass("active");
    $(".header_nav").toggleClass("active");
})

$(".header_search").click(function(){
    if($(window).width() < 992) {
        $(".header_search_form").slideToggle(300);
    }
})
$(document).click(function (event) {
    var search = $(".header_search");
    if (!search.is(event.target) && search.has(event.target).length === 0) {
        if($(window).width() < 992) {
            $(".header_search_form").slideUp(300);
        }
    }
});