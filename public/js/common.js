AOS.init({
    once:true,
});

$(".header_nav_first>.drop").click(function(){
    if($(window).width() < 992) {
        if($(this).hasClass("expand")) {
            $(this).find(".header_nav_second").slideUp(300);
            $(this).removeClass("expand");   
        }else {
            $(this).find(".header_nav_second").slideDown(300);
            $(this).addClass("expand"); 
            $(this).siblings("li").find(".header_nav_second").slideUp(300);
            $(this).siblings("li").removeClass("expand");   
        }
    }
})

function headerNavProduct(){
    if($(window).width() < 992) {
        $(".header_nav_product").attr("href","javascript:void(0)");
    }else {
        $(".header_nav_product").attr("href","./product_class.html");
    }
}
headerNavProduct();


$(window).on("resize scroll",function(){
    headerNavProduct();
})

// function navDrop() {
//     $(".header_nav_first>li").each(function(){
//         if($(window).width() < 992) {
//             if($(this).hasClass("active")) {
//                 $(this).find(".header_nav_second").slideDown(300);
//                 $(this).siblings("li").find(".header_nav_second").slideUp(300);
//                 $(this).siblings("li").removeClass("active");      
//             }
//         }
//     })
// }
// navDrop();

// $(window).on("resize scroll",function(){
//     navDrop()
// })

$(".header_menu").click(function(){
    $(this).toggleClass("active");
    $(".header_nav").toggleClass("active");
})

$(".header_search").click(function(){
    if($(window).width() < 992) {
        $(".header_search_form").slideToggle(300);
    }
})

$(".tab-m_active").click(function(){
    $(this).parents(".tab-m").find("ul").slideToggle(300);
})

$(document).click(function (event) {
    var search = $(".header_search");
    if (!search.is(event.target) && search.has(event.target).length === 0) {
        if($(window).width() < 992) {
            $(".header_search_form").slideUp(300);
        }
    }

    var tab = $(".tab-m");
    if (!tab.is(event.target) && tab.has(event.target).length === 0) {
        tab.find("ul").slideUp(300);
    }
});

$(".btn-top").click(function(){
    $("html, body").animate({scrollTop: 0}, 300);
})

$(".privacy_btn").click(function(){
    $(this).parents(".privacy").fadeOut(300);
})

var swiperProductList = new Swiper(".product_list_swiper", {
    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 500,
    loop: true,
})

let productNum = $(".product_list_pic").length;
for(let i=1; i<=productNum; i++) {
    let ProductPic = document.getElementById("ProductListPic-" + i);
    let ProductVideo = document.getElementById("ProductListVideo-" + i);
    ProductPic.addEventListener("mouseover", (event) => {
        ProductVideo.play();
        ProductVideo.currentTime = 0;
    })
    ProductPic.addEventListener("mouseleave", (event) => {
        ProductVideo.pause();
    })  
}

var $grid = $(".catalogue_list").masonry({
    itemSelector:'.catalogue_list_item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
})
$grid.imagesLoaded().progress(
    function(){
    $grid.masonry();
    }
)

