var arraySlider = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg'];
var imagen = $('#imagen');
var pos = $(imagen).attr('data-pos');

$(document).ready(function(){	
	setInterval (slide, 3000);
}); //documentReady

function slide(){
  $(imagen).fadeOut('slow', function(){

    $(this).attr('src', arraySlider[pos]);

    $(this).fadeIn('slow', function(){
       if (pos < arraySlider.length-1){
         pos ++;
        console.log(pos);
      }else{
       pos = 0;
        console.log(pos);
      } //else

    });//fadeIn

  });//fadeOut

} //slide