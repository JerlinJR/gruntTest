/*CSS test banner on Sun Sep 18 2022 16:28:01 GMT+0000 (Coordinated Universal Time)*/
$('p').html("This is Modified by Js");
console.log("HelloWorld");
$(document).ready(function(){
    $(window).bind('scroll', function() {
    var navHeight = $( window ).height() - 70;
          if ($(window).scrollTop() > navHeight) {
              $('nav').addClass('fixed');
          }
          else {
              $('nav').removeClass('fixed');
          }
     });
 });


//# sourceMappingURL=app.js.map