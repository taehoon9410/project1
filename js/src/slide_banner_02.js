// slide_banner_02.js


(function ($) {
  console.log('!!!!!');
 // jquery 이용하여 슬라이드 광고배너만들기
// 기본선택자 변수로 설정
var viewOuter = $('.view_banner_outer');
viewOuter.animate({marginLeft:-100+ '%'});

var viewIndi = $('.view_indicator').find('li');

// =====================

// viewIndi.children('a').on('focus',function(event) {
//   event.preventDefault();
//   var _thisP = $(this).parent(); //index 해당 순서위치를 파악하는 기능
//   var _thisI = _thisP.index();
//   var _index = _thisI * 100;
//   viewIndi.removeClass('action');
//   viewIndi.eq(_thisI).addClass('action');

//   console.log(_thisI); 
//    viewOuter.animate({marginLeft:-_index + '%'});

});
// step2 왼쪽 슬라이드
// var next = $('.next_btn');
// var slideI = 0;
// var next = $('.next_btn');
//  next.on('click',function(e) {
//  e.preventDefault();
//  slideI += 1;
//  var _index = slideI * 100;
//  viewOuter.animate({marginLeft:-_index + '%'});
//  });
// step3 오른쪽 슬라이드
 // var prev = $('.prev_btn')
 // var prev = $('.prev_btn')
 // prev.on('click',function(e) {
 // slideI -=1;
 // var _index = slideI *100; 
 // viewOuter.animate({marginLeft:-_index + '%'}) 

 // });

// step4

viewIndi.children('a').on('focus',function(event) {
  event.preventDefault();
  var _thisP = $(this).parent(); //index 해당 순서위치를 파악하는 기능
  var _thisI = _thisP.index();
  var _index = _thisI * 100;
  viewIndi.removeClass('action');
  viewIndi.eq(_thisI).addClass('action');

  console.log(_thisI); 
   viewOuter.animate({marginLeft:-_index + '%'});

var next = $('.next_btn');
var prev = $('.prev_btn')
var slideI = 0;
var liLeng = viewIndi.length-1; /*length는 갯수를 파악하는것 0이면 없다는의미*/

next.on('click',function(e) {
e.preventDefault();
slideI += 1;
if(slideI > liLeng){ slideI = liLeng }

var _index = slideI * 100;
viewOuter.animate({marginLeft:-_index + '%'});
viewIndi.removeClass('action');
viewIndi.eq(slideI).addClass('action');
});


prev.on('click',function(e) {
slideI -=1;
if(slideI < 0 ){ slideI = 0; }
var _index = slideI *100;
viewOuter.animate({marginLeft:-_index + '%'});
viewIndi.removeClass('action');
viewIndi.eq(slideI).addClass('action');
});


viewIndi.children('a').on('focus',function(event) {
  event.preventDefault();

  var _thisP = $(this).parent();
  // var _thisI = _thisP.index();
  // var _index = _thisI * 100;
  
  viewOuter.animate({marginLeft:-_index + '%'});
  viewIndi.removeClass('action');
  viewIndi.eq(slideI).addClass('action'); });





// step5

 


})(jQuery);