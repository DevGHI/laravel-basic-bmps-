// nav header
let screenHeight = $(document).height();
$(document).scroll(function(e){
   let scrollTop = $(this).scrollTop();
   if(scrollTop > screenHeight/4){
    // $('.nav-header-search').removeClass('searchbox-hide');
    $('.nav-header').removeClass('nav-header-absolute');
    $('.nav-header').addClass('nav-header-fixed');
   }else{
    // $('.nav-header-search').addClass('searchbox-hide');
    $('.nav-header').removeClass('nav-header-fixed');
    $('.nav-header').addClass('nav-header-absolute');
   }
})


// show cart right side
$(".cart-side-show").on("click",function(){
  $(".cart-side").animate({
    marginRight: "0"
  });
});

$(".cart-history-close").on("click",function(){
  $(".cart-side").animate({
      marginRight: "-100%"
  });
});



// product detail swiper
let swiper = new Swiper(".product-images-slide", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  let swiper2 = new Swiper(".preview-image-swiper", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


// Product add to Cart JS
$('.single-product-addtocart').on('click', function () {
  let cart = $('.cart-show-btn-icon');
  let imgtodrag = $(this).closest('.card').find("img").eq(0);
    if (imgtodrag) {
        let imgclone = imgtodrag.clone()
            .offset({
            top: imgtodrag.offset().top,
            left: imgtodrag.offset().left
        })
            .css({
            'opacity': '0.7',
            'position': 'absolute',
            'height': '130px',
            'width': '130px',
            'z-index': '100',
            'border-radius': '50%',
        })
            .appendTo($('body'))
            .animate({
            'top': cart.offset().top + 10,
            'left': cart.offset().left + 10,
            'width': 50,
            'height': 50
        }, 2000, 'easeInOutExpo');;
        imgclone.animate({
            'width': 0,
            'height': 0
        }, function () {
            $(this).detach()
        });
    }
});