$(function(){
    const slide = $('.slider').bxSlider({
        auto : true,
        autoHover : true,
        pause : 2000
    });
    $("#slideStart").on("click",()=>{
        slide.startAuto();
    })//시작 버튼 
    $("#slideStop").on("click",()=>{
        slide.stopAuto();
    })//멈춤 버튼

    $(".bx-next").on("mouseout",function(){
        slide.startAuto();
    })//시작 버튼 
    $(".bx-prev, .bx-next").on("mouseover",function(){
        slide.stopAuto();
    })//멈춤 버튼
})