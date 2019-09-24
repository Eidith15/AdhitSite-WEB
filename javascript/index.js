var logo = $('#logo'),
	profile = $('.profile')
	gallery = $('.gallery')
	portofolio = $('.portofolio')
	contact = $('.contact')
	content = $('.content'),
	login1 = $('.loginadmin'),
	login2 = $('.login');

function show(){
	logo.mouseenter().css({opacity : '1'});
	logo.animate({left: '5%'},'slow');
	logo.animate({top: '2%'},'slow');
	content.delay(1100).animate({width : 'toggle'},'slow');
	profile.delay(1400).animate({width : 'toggle'},'slow');
	gallery.delay(1300).animate({width : 'toggle'},'slow');
	portofolio.delay(1200).animate({width : 'toggle'},'slow');
	contact.delay(1100).animate({width : 'toggle'},'slow');
	$('.bubble1').fadeIn(1200);
	$('.bubble2').fadeIn(1200);
	$('.bubble3').fadeIn(1200);
	$('.bubble4').fadeIn(1200);
	$('.inner1').hide();
	$('.inner2').hide();
	$('.inner3').hide();
	$('.inner4').hide();
	$('.wellcome').fadeIn();
	$('.big1').show('slow');
	$('.big2').hide('slow');
	$('.big3').hide('slow');
	$('.big4').hide('slow');
	$('.big5').hide('slow');
	$('.big6').hide('slow');
	$('.big7').hide('slow');
	$('.text1').show('slow');
	$('.text2').hide('slow');
	$('.text3').hide('slow');
	$('.text4').hide('slow');
	$('.text5').hide('slow');
	$('.text6').hide('slow');
	$('.text7').hide('slow');
	$('.bigpic1').show('slow');
	$('.bigpic2').hide('slow');
	$('.bigpic3').hide('slow');
	$('.bigpic4').hide('slow');
	$('.textpic1').show('slow');
	$('.textpic2').hide('slow');
	$('.textpic3').hide('slow');
	$('.textpic4').hide('slow');
}
function hide(){
	logo.mouseenter().css({opacity : '1'});
	logo.delay(1000).animate({left: '41%'},'slow');
	logo.animate({top: '18%'},'slow');
	profile.delay(0).animate({width : 'toggle'});
	gallery.delay(0).animate({width : 'toggle'});
	portofolio.delay(0).animate({width : 'toggle'});
	contact.delay(0).animate({width : 'toggle'});
	content.delay().animate({width : 'toggle'});
	$('.bubble1').fadeOut(1200);
	$('.bubble2').fadeOut(1200);
	$('.bubble3').fadeOut(1200);
	$('.bubble4').fadeOut(1200);
	$('.wellcome').fadeOut();
}

function fadeout(){
		login1.fadeOut(500);
		login2.fadeOut(500);
}

function fadein(){
		login1.fadeIn(5000);
		login2.fadeIn(5000);
}

var click = true;

logo.click(function(){
	if(click == true){
	show();
	fadeout();
	click = false
	}else if(click == false){
	hide();
	fadein();
	click = true;
	}
});

$('.bubble3').click(function(){
	$('.inner1').hide('slow');
	$('.inner2').hide('slow');
	$('.inner3').hide('slow');
	$('.inner4').hide('slow');
	$('.wellcome').fadeIn();
});

profile.click(function(){
	profile.animate({left :'16%'});
	gallery.animate({left :'14%'});
	portofolio.animate({left :'11%'});
	contact.animate({left :'9%'});


	$('.inner1').show('slow');
	$('.inner2').hide('slow');
	$('.inner3').hide('slow');
	$('.inner4').hide('slow');
	$('.wellcome').fadeOut();
	$('.foto').show('slow');
});
gallery.click(function(){
	profile.animate({left :'11%'});
	gallery.animate({left :'16%'});
	portofolio.animate({left :'14%'});
	contact.animate({left :'9%'});


	$('.inner1').hide('slow');
	$('.inner2').show('slow');
	$('.inner3').hide('slow');
	$('.inner4').hide('slow');
	$('.wellcome').fadeOut();
	$('.foto').hide('slow');
});
portofolio.click(function(){
	profile.animate({left :'9%'});
	gallery.animate({left :'11%'});
	portofolio.animate({left :'16%'});
	contact.animate({left :'14%'});


	$('.inner1').hide('slow');
	$('.inner2').hide('slow');
	$('.inner3').show('slow');
	$('.inner4').hide('slow');
	$('.wellcome').fadeOut();
	$('.foto').hide('slow');
});
contact.click(function(){
	profile.animate({left :'9%'});
	gallery.animate({left :'11%'});
	portofolio.animate({left :'14%'});
	contact.animate({left :'16%'});


	$('.inner1').hide('slow');
	$('.inner2').hide('slow');
	$('.inner3').hide('slow');
	$('.inner4').show('slow');
	$('.wellcome').fadeOut();
	$('.foto').hide('slow');
});

$('.gambar1').click(function(){
	$('.big1').show('slow');
	$('.big2').hide('slow');
	$('.big3').hide('slow');
	$('.big4').hide('slow');
	$('.big5').hide('slow');
	$('.big6').hide('slow');
	$('.big7').hide('slow');
	$('.text1').show('slow');
	$('.text2').hide('slow');
	$('.text3').hide('slow');
	$('.text4').hide('slow');
	$('.text5').hide('slow');
	$('.text6').hide('slow');
	$('.text7').hide('slow');
});
$('.gambar2').click(function(){
	$('.big1').hide('slow');
	$('.big2').show('slow');
	$('.big3').hide('slow');
	$('.big4').hide('slow');
	$('.big5').hide('slow');
	$('.big6').hide('slow');
	$('.big7').hide('slow');
	$('.text1').hide('slow');
	$('.text2').show('slow');
	$('.text3').hide('slow');
	$('.text4').hide('slow');
	$('.text5').hide('slow');
	$('.text6').hide('slow');
	$('.text7').hide('slow');
});
$('.gambar3').click(function(){
	$('.big1').hide('slow');
	$('.big2').hide('slow');
	$('.big3').show('slow');
	$('.big4').hide('slow');
	$('.big5').hide('slow');
	$('.big6').hide('slow');
	$('.big7').hide('slow');
	$('.text1').hide('slow');
	$('.text2').hide('slow');
	$('.text3').show('slow');
	$('.text4').hide('slow');
	$('.text5').hide('slow');
	$('.text6').hide('slow');
	$('.text7').hide('slow');
});
$('.gambar4').click(function(){
	$('.big1').hide('slow');
	$('.big2').hide('slow');
	$('.big3').hide('slow');
	$('.big4').show('slow');
	$('.big5').hide('slow');
	$('.big6').hide('slow');
	$('.big7').hide('slow');
	$('.text1').hide('slow');
	$('.text2').hide('slow');
	$('.text3').hide('slow');
	$('.text4').show('slow');
	$('.text5').hide('slow');
	$('.text6').hide('slow');
	$('.text7').hide('slow');
});
$('.gambar5').click(function(){
	$('.big1').hide('slow');
	$('.big2').hide('slow');
	$('.big3').hide('slow');
	$('.big4').hide('slow');
	$('.big5').show('slow');
	$('.big6').hide('slow');
	$('.big7').hide('slow');
	$('.text1').hide('slow');
	$('.text2').hide('slow');
	$('.text3').hide('slow');
	$('.text4').hide('slow');
	$('.text5').show('slow');
	$('.text6').hide('slow');
	$('.text7').hide('slow');
});
$('.gambar6').click(function(){
	$('.big1').hide('slow');
	$('.big2').hide('slow');
	$('.big3').hide('slow');
	$('.big4').hide('slow');
	$('.big5').hide('slow');
	$('.big6').show('slow');
	$('.big7').hide('slow');
	$('.text1').hide('slow');
	$('.text2').hide('slow');
	$('.text3').hide('slow');
	$('.text4').hide('slow');
	$('.text5').hide('slow');
	$('.text6').show('slow');
	$('.text7').hide('slow');
});
$('.gambar7').click(function(){
	$('.big1').hide('slow');
	$('.big2').hide('slow');
	$('.big3').hide('slow');
	$('.big4').hide('slow');
	$('.big5').hide('slow');
	$('.big6').hide('slow');
	$('.big7').show('slow');
	$('.text1').hide('slow');
	$('.text2').hide('slow');
	$('.text3').hide('slow');
	$('.text4').hide('slow');
	$('.text5').hide('slow');
	$('.text6').hide('slow');
	$('.text7').show('slow');
});

$('.pic1').click(function(){
	$('.bigpic1').show('slow');
	$('.bigpic2').hide('slow');
	$('.bigpic3').hide('slow');
	$('.bigpic4').hide('slow');
	$('.textpic1').show('slow');
	$('.textpic2').hide('slow');
	$('.textpic3').hide('slow');
	$('.textpic4').hide('slow');
});
$('.pic2').click(function(){
	$('.bigpic1').hide('slow');
	$('.bigpic2').show('slow');
	$('.bigpic3').hide('slow');
	$('.bigpic4').hide('slow');
	$('.textpic1').hide('slow');
	$('.textpic2').show('slow');
	$('.textpic3').hide('slow');
	$('.textpic4').hide('slow');
});
$('.pic3').click(function(){
	$('.bigpic1').hide('slow');
	$('.bigpic2').hide('slow');
	$('.bigpic3').show('slow');
	$('.bigpic4').hide('slow');
	$('.textpic1').hide('slow');
	$('.textpic2').hide('slow');
	$('.textpic3').show('slow');
	$('.textpic4').hide('slow');
});
$('.pic4').click(function(){
	$('.bigpic1').hide('slow');
	$('.bigpic2').hide('slow');
	$('.bigpic3').hide('slow');
	$('.bigpic4').show('slow');
	$('.textpic1').hide('slow');
	$('.textpic2').hide('slow');
	$('.textpic3').hide('slow');
	$('.textpic4').show('slow');
});
$('.kirim').click(function(){
	alert('Terkirim~')
});


