(function($){
   var indi = $('.indicator li>a');
   var banner = $('.product>ul');
   indi.parent('li').eq(0).addClass('action');

   indi.on('click',function(e){
    e.preventDefault();
    var i = $(this).parent('li').index();
    var per = -i * 100;
    banner.css({marginLeft: per + '%'});
    
    indi.parent('li').removeClass('action');
    indi.eq( i ).addClass('action');

  });
})(jQuery);