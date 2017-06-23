$(document).ready(function(){ 
	//VERSION OPTIMA DE DANI
	$('img').bind('mouseenter mouseleave',function(){
				$(this).attr({
					src: $(this).attr('data-imagen'),
					'data-imagen':$(this).attr('src')
							});	//cierra this*/
				
	});




	//VERSIÓN CON CLICK
	/*$('$imagenes').on('click',function(){
		$ ('$imagen').fadeOut("slow",function(){
			url=$(this).data('imagen');
			url_actual=$('#imagen'),attr('src');
			console.log(url);
			$('#imagen').attr('src',url);
			$('#imagen').fadeIn("slow",function(){
				$('#imagen').data('img',url_actual);
			});//fadeIn
		});//fadeOut

	});//click function*/
		 	 

});//doc ready