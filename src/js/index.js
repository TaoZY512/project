require('Router');
require('Swiper');
import '../less/normalized.less';
import '../less/common.less';
import '../less/swiper.min.less';
import '../less/index.less';
import Tool from "../js/tools";
(function(){
    var tool = new Tool();
    tool.state($('.right-one'));
    var trList=['leftUp','moveRight','moveDown','centerBig','rightDownBig'];
    var swiper = new Swiper('.swiper-container',{
        speed:500,
        autoplay:4400,
        autoplayDisableOnInteraction:false,
        effect:'fade',
        pagination : '.swiper-pagination',
        paginationClickable :true,
        onSlideChangeStart: function(swiper){
            var nextSlide = swiper.slides.eq(swiper.activeIndex);
            nextSlide.addClass(trList[Math.floor(Math.random()*5)]);
        },
        onSlideChangeEnd: function(swiper){
            var prevSlide = swiper.slides[swiper.previousIndex];
            prevSlide.className = "swiper-slide";
        },
    });	
    $(".header-child").on("click", () =>{
			$(".shrink")[0].style.display = "block";
        });
        $(".header-section-bottom").on("mouseleave", () =>{
			$(".shrink")[0].style.display = "none";
        });
})();



