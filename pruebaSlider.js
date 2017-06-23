var arraySlider = ["imgs/slider1.jpg", "imgs/slider2.jpg", "imgs/slider3.jpg" ];
var imagen = $('#imagen');
var pos = $(imagen).attr('data-pos');
var interval;

$(document).ready(function(){	
  //$(imagen).attr('src', arraySlider[pos]);
  console.log(arraySlider[pos]);  
  slider();

  $(imagen).on('mouseover',function(){
    console.log('estoy');
    $(imagen).stop();
  });//function mouseover*/
	
});//termina doc ready

function slider(){
  setInterval (cambiarImagen, 3000);
}

function cambiarImagen(){
  $(imagen).fadeOut('slow', function(){
  	console.log(pos);

    $(this).attr('src', arraySlider[pos]);
    $(this).fadeIn('slow', function(){
       if (pos < arraySlider.length-1){
         pos ++;
         console.log(pos);
      }else{
       pos = 0;
        console.log(pos);
      }//cierra else
    });//fade in
  });//fade out
}//slide

function sli(){
  interval
}
