// selector_01.js
(function($) {
  // console.log('jquery')
var wrap= $('#wrap');
    wrap.css({width: 60 +'rem',
                  height:'auto',
                  minHeight: 30 + 'rem',
                  backgroundColor:'#ccc',
                  margin:'auto'});
  
  $('#headBox').css({margin:'auto',
                     width:80 + '%',
                     height:'auto',
                     textAlign:'center',
                     backgroundColor:'#059',
                     color:'#fff',
                     paddingBottom:'1rem',
                     borderBottom:0.2 + 'rem solid #fff'
                     })

var listBox = $('#list');
var listOuter = listBox.children('ul');
var listLi = listOuter.children('li');
// var listLi2 = listBox.find('li');
var full = 100 + '%';

listBox.css({margin:'auto', 
             width:full, 
             height:'auto', 
             backgroundColor:'#acf'}); 

listOuter.css({width: full, 
               height:'auto', 
               padding:5+ 'rem',
               boxSizing:'border-Box',
               backgroundColor:'#fa0'});

listLi.css({width: full,
            height:2.5 + 'rem',
            textAlign:'center',
            paddingTop:1 + 'rem',
            borderBottom:'0.2rem solid #333'});

// listOuter.children('li:nth-child(1)').css({backgroundColor:'#aca'});
// listOuter.children('li:nth-child(2n)').css({backgroundColor:'#fca'});
// listOuter.children('li:nth-child(3)').css({backgroundColor:'#acf'});

// listOuter.children('li:nth(1)').css({backgroundColor:'#aca'});
// listOuter.children('li').eq(-2).css({backgroundColor:'#fca'});
// listOuter.children('li:eq(2)').css({backgroundColor:'#acf'});

// js에서 순서는 0부터 시작함
// ex) 0 --> 첫번째
//     1 --> 두번째
//     -1 --> 끝에서 첫번째
//     -2 --> 끝에서 두번째

var color1 = ['#fff', '#ccc', '#acf' , '#f06' , '#47a' ];
var colorLen = color1,length;
var listLilen = listLi,length;
console.log(listLi);

var i=0;
for(; i<=4; i+=1 ){
    listLi.eq(i).css({backgroundColor:color1[i]});  
}
// {}객체
// []배열
/*jquery선택자
*직접 선택하는 방법, id,class $()
   - $('div'), $('#box'), $('.box'), $('div>ul a')
*메소드를 활용하는 방법, children, find
  -$('div>ul a')일경우
   $('div').children('ul');
   $('div').find('a');

*순서를 선택하는 방법, eq
   -$('li').eq(1) // 순서는 처음이 0(css선택에서는 1부터)

*부모를 선택하는 방법 , parent, parentUntill(부모~부모까지) 
$('#wrap').parent() 

*형제를 선택하는 방법, siblings, next , prev,nextAll,prevAll
*/




})(jQuery);