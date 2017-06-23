var img;
var id;
$(document).ready(function(){ 

	$('.chiquita').on('click', function(){
		
		id = $(this).data('id');
		img ='imgs/slider'+ id +'.jpg';
		console.log('estoy');
		$('#imagenGrande').attr('src', img);
		
	});
});