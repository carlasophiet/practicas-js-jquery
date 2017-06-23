var arraySlider=["imgs/slider1.jpg", "imgs/slider2.jpg", "imgs/slider3.jpg", "imgs/imagen1.jpg", "imgs/imagen2.jpg"];

$(document).ready(function(){ 
	var pos=$('.imagen').attr('data-pos');
	var imagen=$('.imagen');
	$(imagen).attr('src',arraySlider[pos]);

	$('#mover').on('click',function(){
		pos++;
		$(imagen).attr('src', arraySlider[pos]);
		console.log(pos);
		if(pos==arraySlider.length){
			pos = 0;
			console.log(pos);
		};

	});//function mover



});//TERMINA DOCUMENT READY

