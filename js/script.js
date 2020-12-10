$(document).ready(function(){
	$(".burger").click(function(event){
			$(".burger,.header__list").toggleClass("active");
			$("body").toggleClass("lock");

	});
	$(".video__btn img").click(function(event){
		$(".video__row,.vidos").toggleClass("activi");
	});
	
	$(".portfolio__viewmore").click(function(event){
		$(".portfolio__viewmore,.portfolio__columns3").toggleClass("active");
	});



	$(".team__body-columns").click(function(event){
		$(".team__body-columns,.team__body-descr").addClass("active");
		$(".team__body-descr2,.team__body-descr3,.team__body-descr4").removeClass("active");
	});
	$(".team__body-columns2").click(function(event){
		$(".team__body-columns2,.team__body-descr2").addClass("active");
		$(".team__body-descr,.team__body-descr3,.team__body-descr4").removeClass("active");
		
		
	});
	$(".team__body-columns3").click(function(event){
		$(".team__body-columns3,.team__body-descr3").addClass("active");
		$(".team__body-descr4,.team__body-descr2,.team__body-descr").removeClass("active");
	});
	$(".team__body-columns4").click(function(event){
		$(".team__body-columns4,.team__body-descr4").addClass("active");
		$(".team__body-descr,.team__body-descr2,.team__body-descr3").removeClass("active");
	});

	$(".price__row-cols-btn a").hover(function(event){
		$(".price__row-cols-btn a").toggleClass(".bfr");
	});

	//Подключаем Слайдер SLICK //
	$(".slider").slick({
		dots:true,
		arrows:false,
		autoplay:true,
		autoplaySpeed:4000,
		draggable:false,
		cssEase:"cubic-bezier(.42, 0, .58, 1)"
	});
});