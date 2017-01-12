function PopIt() {
  var popover = document.getElementById('popover');

    popover.style.display = 'block';

    return "Are you sure you want to leave?";
  }
 function UnPopIt()  {}

 $(document).ready(function() {
  window.onbeforeunload = PopIt;
  $("a").click(function(){ window.onbeforeunload = UnPopIt; });
});
 $.exitpop({
    predict_amt: 0.02,
    fps: 1000,
    popCount: 1,
    tolerance: {x: 10, y: 10},
    cta: "form",
    callback: function() {
        $('#popover').fadeIn();
        $('#pop-box').css({
          'top' : 0,
          'opacity'  : 1
        })
    }
});
	
$(function(){
    //Click back to top
	$('#index-body .cta a, #index-body .wrapper .bottom a').on('click', function(){
		$('html, body').animate({
			scrollTop: 0
		});
	});
	
    //Reminder Pop up
    $('#index-body .top .reminder .reminder-inner').delay(3000).animate({
        'top' : '0px',
        'opacity' : 1
    }); 
	
	// Landing Page Counter
	// var counter = 599;
    var one        = 0;
    var ten        = 0;
    var hundered   = 6;
    var intervalId = setInterval(function(){
                        time();
                      }, .7);
	function time(){
	    one--;

	    if(one == -1){
	      	ten = ten - 1;
	      	one = 0 + 9;
	    }
	    if(ten == -1 ){
	      	hundered = hundered - 1;
	      	ten = 0 + 9;
	    }
	    var wholeNum = hundered+''+ten+''+one;
		if(wholeNum == 250){
	  		clearInterval(intervalId);
		}
		//Set class/id to have countdown
	    $('.timer').html('<span>'+hundered+'</span><span>'+ten+'</span><span>'+one+'</span>');

    }
    // Checkout Counter
  	var min    = 0;
  	var second = 00;
  	var zeroPlaceholder = 0;
  	var counterId = setInterval(function(){
 			           	countUp();
                  	}, 1000);

    function countUp () {
        second++;
        if(second == 59){
            second = 00;
            min = min + 1;
        }
        if(second == 10){
            zeroPlaceholder = '';
        }else if(second == 00){
            zeroPlaceholder = 0;
        }
        //Set class/id to have countup
        $('.count-up').html(min+':'+zeroPlaceholder+second);
    }

    //Hidden form and Downsell functions
    $('form .form-container .billing-info input[type="checkbox"]').on('click', function(){
    	$('form .hidden-fields').stop().slideToggle();
    });
    if($('#checkout-body').hasClass('downsell')){
    	$('form .hidden-fields').css('display' , 'block')
    }

    // Form Validation  Styles
    $('.active').val();
    $('.active').focus();

    $(':input[type="text"], select').on('focus', function(){
        $(this).addClass('active');
    }).on('blur', function(){
        $(this).removeClass('active');
    });
    
    //Steps Animation
    if($('body').attr('id') == 'checkout-body' || $('body').attr('id') == 'upsell-body'){
        $('.step2').addClass('current');
    }
	
    if($('body').attr('id') == 'thankyou-body'){
         $('.step3').addClass('current');
    }

    //Downsell close
    $('.popover .popover-graphics img.close').on('click', function(){
        $('.popover').css({
            'visibility' : 'hidden'
        })
    });


    $('#index-body .product-holder .fact-holder .close').on('click', function(){
        $('.fact').removeClass('active');
    });

    // FACTS HOVER
    var factActivate = $('.fact-holder');
    var fact = $('.fact');
    var hover = true;

    for(var i = 0; i < factActivate.length; i++){
        factActivate[i].onmouseover = (function(i){
            return function(){
                $('.fact-'+i).addClass('active')
            }
        })(i);

        factActivate[i].onmouseout = (function(i){
            return function(){
                $('.fact-'+i).delay(750).removeClass("active");
            }
        })(i);
    }

})