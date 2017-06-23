$(document).ready(function(){ 
	console.log('estoy');

	$('.img_peque').on('click', function(){
			imagen= $(this).data('image');
			alt= $(this).data('titulo'); 
			console.log(imagen);
			console.log(alt);
			$('#img_grande').attr('src', imagen);
			$('#titulo-modal').append(alt);
			$('.contenedores').css('opacity',0.3);
			$('#grande').css('display','block');
			


	});

});