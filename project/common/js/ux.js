
$(function(){

		$('.mMenu').on('click', function(){	
		  var target = $('.gnbMenu');
			if(target.is(':hidden')){
				target.show();
				target.find('ul').animate({left:0}, 300, function(){
					target.find('.close').fadeIn();
				});
				target.find('.mask').fadeIn();

			}else{
				target.find('ul').animate({left:-200}, 300, function(){
					target.hide();
				});
				target.find('.mask').fadeOut();
				target.find('.close').fadeOut();
			}
	  });
		$('.gnbMenu .close').on('click', function(){
		  var target = $('.gnbMenu');
				target.find('ul').animate({left:-200}, 300, function(){
					target.hide();
				});
				target.find('.mask').fadeOut();
				target.find('.close').fadeOut();
	  });

	  //slide
	  if($('.mainPrduct').size()>0){
		  var slier = $('.mainPrduct ul').slick({
				dots: true,
				infinite: true,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				autoplay: true,
				autoplaySpeed: 3000
		   });

			$('.slideMenu').prepend($('.mainPrduct .slick-dots'));
	  }

	$('.mainPrduct .playMenu .stop').click(function(){
		slier.slick('slickPause');
		$('.mainPrduct .playMenu .stop').hide();
		$('.mainPrduct .playMenu .play').css('display', 'inline-block');
	 });

	$('.mainPrduct .playMenu .play').click(function(){
		 slier.slick('slickPlay');
		$('.mainPrduct .playMenu .play').hide();
		$('.mainPrduct .playMenu .stop').css('display', 'inline-block');
	 });

});


