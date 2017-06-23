
$(document).ready(function(){
	$('#msj').hide(); //oculto div

	$('#ingresar').on('click', function(){

		user = $('#usuario').val(); //pongo en var auxiliar para ser prolija
		pass = $('#password').val(); //devuelve string

		if(user == 'pepe' && pass == '123456'){
			$('#msj').show();  //método de jquery para mostrar
			$('#msj').append('<p>Bienvenido Pepe</p>'); //método similar a innerHTML que pone cosas adentro del hmtl. AGREGO HIJOS.
		}else{
			$('#msj').append('<p>NO NO NO NO NO NO NO</p>');
		}

	   });

}); 
//lo mismo que document.getElementById(ingresar) >> ON es un HANGER es lo mismo que eventListener, después va la función callback.*/