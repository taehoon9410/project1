// make_jquery.js

(function($) {
  // body...
$('body').prepend('<div id="wrap"></div>');
 var wrap = $('#wrap');
 wrap.css({margin:'auto',width:'85.375rem',height:'auto',backgroundColor:'#ccc',margin:'auto'});


$('#wrap').append('<header id="headBox"></header>');
 var headBox = $('#headBox');
 headBox.css({margin:'auto',
              width:'100%',height:'12.5rem',backgroundColor:'#8af'});

 $('#headBox').prepend('<h1><a href="#">index page 이동</a></h1>');
  var h1 = $('h1')
  h1.css({width:'20%',height:'3.75rem',backgroundColor:'#fff',
         textAlign:'center',lineHeight:'3.75rem' ,fondWeight:'bold'});
 
 $('#headBox').append('<nav id="gnb"></nav>');
   var gnb = $('gnb')
   gnb.css({float:'right',width:'62.5rem',height:'3.75rem', backgroundColor:'#fff'});
 $('#gnb').prepend('<h2 class="hidden"><span>global navigation</span></h2>');
   var hidden = $('.hidden');
   hidden.css({display:'block',width:'0',height:'0',overflow:'hidden' 
                         ,position:'relative',zIndex: '-100'});
  
  $('#gnb').append('<ul class="gnbUl"></ul>');
  var gnbUl = $('.gnbUl');
  gnbUl.append('<li><a href="#">link_name_01</a></li>');
  gnbUl.append('<li><a href="#">link_name_02</a></li>');
  gnbUl.append('<li><a href="#">link_name_03</a></li>');
  gnbUl.append('<li><a href="#">link_name_04</a></li>');
  gnbUl.append('<li><a href="#">link_name_05</a></li>');
 

$('#wrap').append('<section id="viewBox"></section>');
 var viewBox = $('#viewBox');
 viewBox.css({width:'100%', height:'31.25rem',backgroundColor:'#aaa'}); 

$('#wrap').append('<article id="newsBox"><article>')
 var newsBox = $('#newsBox');
 newsBox.css({width:'100%',height:'31.25rem',backgroundColor:'#999'});

$('#wrap').append('<article id="newsBox"><article>')
 var newsBox = $('#newsBox');
 newsBox.css({width:'100%',height:'31.25rem',backgroundColor:'#ccc'});


$('#wrap').append('<article id="conBox"></article>');
  var conBox = $('#conBox');
  conBox.css({width:'100%',height:'31.25rem',backgroundColor:'#aaa' });
 
$('#wrap').append('<footer id="footBox"></footer>');
  var footBox = $('#footBox');
  footBox.css({width:'100%', height:'12.5rem',backgroundColor:'#8af'});

})(jQuery);