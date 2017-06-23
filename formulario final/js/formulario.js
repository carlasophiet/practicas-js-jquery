var formulario = document.getElementById('formulario');
var nombre = formulario.nombre;  //varAnterior.name que quiero dentro de esa var (sea form, div, etc)
var apellido =  formulario.apellido; 
var telefono = formulario.telefono;
var email = formulario.email;
var edad = formulario.edad;
var direccion= document.getElementById('direccion');
var calle= formulario.calle;
var numero= formulario.numero;
var ciudad= formulario.ciudad;
var cp= formulario.cp;
var error = document.getElementById('error');
var errores=[];
var limpiar= document.getElementById('clear'); 

	function soloLetras(x) { //Valido apellido y nombre con expresion regular//

expr = /^([a-zA-Z\s]{3,50})*$/ ; //expresion regular de intervalos de letras min 3 caracteres max 50//
	if(expr.test(x)) {//test > para matchear var y expresión regular. expresionregular.test(variable).
		return true;
	}
	return false;
	} //Fin soloLetras //
	

	function validarNombre(e){ //Funcion para validar el nombre//
		if(nombre.value == '' || nombre.value == null){
			console.log('nombre vacio');
			//error.style.display = 'block'; //.style > es para cambiar el css
			//error.innerHTML += '<li>Por favor completa el nombre</li>';
			errores.push("<li>Por favor completa tu nombre</li>");
			e.preventDefault();//frena acción por defecto del evento. 
		} 
		else {
			if (!soloLetras(nombre.value)) {
				console.log('Nombre invalido');
				//error.style.display = 'block';
				//error.innerHTML += '<li>Por favor ingresá un nombre valido</li>';//.innerHTML para poner algo dentro de html
				errores.push("<li>Por favor ingresa tu nombre valido</li>");
				e.preventDefault(); 
			} else {
			return true;
			console.log('nombre valido');
			}
		}return false;
	} //Fin validarNombre//

	function validarApellido(e){ //Funcion para validar apellido//
		if(apellido.value == '' || apellido.value == null){
			console.log('<apellido vacio');
			//error.style.display = 'block';
			//error.innerHTML += '<li>Por favor completa el apellido</li>';
			e.preventDefault();
			errores.push("<li>Por favor completa tu apellido</li>");
		} 
		else {
			if (!soloLetras(apellido.value)) {
				console.log('<Apellido invalido');
				//error.style.display = 'block';
				//error.innerHTML += '<li>Por favor ingresá un apellido valido</li>';
				errores.push("<li>Por favor ingresá tu apellido valido</li>");
				e.preventDefault();
			} else {
			return true;
			console.log('apellido valido');
			}
		}return false;
	} //Fin validarApellido//


	function validarTelefono(e) { //Funcion para validar el n° de telefono //

		if (telefono.value == '' || telefono.value == null) {
			console.log('telefono vacio');
			//error.style.display = 'block';
			//error.innerHTML += '<li>Por favor ingresá tu edad.</li>';
			errores.push("<li>Por favor completa tu telefono</li>");
			e.preventDefault();
		}else{
			if(isNaN(parseInt(telefono.value))) {
				console.log('telefono invalida');
				//error.style.display = 'block';
				//error.innerHTML += '<li>La edad debe ser un numero</li>';
				errores.push("<li>Por favor ingresa un telefono válido</li>");
				e.preventDefault();
			} else {
				if (telefono.length <8 || telefono.length > 12) {
					console.log('telefono invalida');
					//error.style.display = 'block';
					//error.innerHTML += '<li>Por favor ingresá una edad válida.</li>';
					errores.push("<li>Por favor ingresa un telefono valido</li>");
					e.preventDefault();
				}else{
					console.log('telefono valida');
					return true;
				}
			}return false;
		}//validar edad

	}	//Fin validarTelefono//


	function validarEmail(e) { //Funcion para validar formato de mail//
		var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //Expresion regular para chequear formato mail//
		if (email.value == '' || email.value == null) {
			console.log('<mail vacio');
			//error.style.display = 'block';
			//error.innerHTML += '<li>Por favor completá el e-mail.</li>';
			errores.push("<li>Por favor completa tu e-mail</li>");
			e.preventDefault();
		}else{
			if (!expr.test(email.value)) {
				console.log('<mail invalido');
				//error.style.display = 'block';
				//error.innerHTML += '<li>Por favor ingresá un e-mail válido.</li>';
				errores.push("<li>Por favor ingresá un email válido</li>");
				e.preventDefault();
			}else{
				return true;
				console.log('mail valido')
			}
		}return false;
	} //Fin validarEmail//

	function validarEdad(e) { //Funcion para validar edad//
		if (edad.value == '' || edad.value == null) {
			console.log('<Edad vacia');
			//error.style.display = 'block';
			//error.innerHTML += '<li>Por favor ingresá tu edad.</li>';
			errores.push("<li>Por favor completa tu edad</li>");
			e.preventDefault();
		}else{
			if(isNaN(parseInt(edad.value))) {
				console.log('<Edad invalida');
				//error.style.display = 'block';
				//error.innerHTML += '<li>La edad debe ser un numero</li>';
				errores.push("<li>Por favor ingresa una edad valida</li>");
				e.preventDefault();
			} else {
				if (parseInt(edad.value) > 120 || parseInt(edad.value) < 18) {
					console.log('<Edad invalida');
					//error.style.display = 'block';
					//error.innerHTML += '<li>Por favor ingresá una edad válida.</li>';
					errores.push("<li>Por favor ingresa una edad valida</li>");
					e.preventDefault();
				}else{
					console.log('Edad valida');
					return true;
				}
			}return false;
		}//validar edad
}

function chequearDireccion(e){
	if (direccion.checked==true){
			divDireccion.style.display= 'block';
			return true;
		}else{
			divDireccion.style.display= 'none';	
			return false;
		}
	
}

function validarNumero(e){
	if (numero.value == '' || numero.value == null) {
			console.log('<Numero vacia');
			//error.style.display = 'block';
			//error.innerHTML += '<li>Por favor ingresá tu edad.</li>';
			errores.push("<li>Por favor completa el numero de dirección</li>");
			e.preventDefault();
		}else{
			if(isNaN(parseInt(numero.value))) {
				console.log('numero invalida');
				//error.style.display = 'block';
				//error.innerHTML += '<li>La edad debe ser un numero</li>';
				errores.push("<li>Por favor ingresa un numero de dirección válido</li>");
				e.preventDefault();
			} else {
				if (numero.length > 4 ) {
					console.log('numero de calle invalido');
					//error.style.display = 'block';
					//error.innerHTML += '<li>Por favor ingresá una edad válida.</li>';
					errores.push("<li>Por favor ingresa un número de dirección válida</li>");
					e.preventDefault();
				}else{
					console.log('numero de direccion valida');
					return true;
				}
			}return false;
		}//validar edad
}
function validarCP(e){
	if (cp.value == '' || cp.value == null) {
			console.log('codigopostal vacia');
			//error.style.display = 'block';
			//error.innerHTML += '<li>Por favor ingresá tu edad.</li>';
			errores.push("<li>Por favor completa el código postal</li>");
			e.preventDefault();
		}else{
			if(isNaN(parseInt(cp.value))) {
				console.log('Código postal invalido');
				//error.style.display = 'block';
				//error.innerHTML += '<li>La edad debe ser un numero</li>';
				errores.push("<li>Por favor ingresa un código postal válido</li>");
				e.preventDefault();
			} else {
				if (cp.length > 4 ) {
					console.log('cp de calle invalido');
					//error.style.display = 'block';
					//error.innerHTML += '<li>Por favor ingresá una edad válida.</li>';
					errores.push("<li>Por favor ingresa un código postal válido</li>");
					e.preventDefault();
				}else{
					console.log('cp valida');
					return true;
				}
			}return false;
		}//validar edad
}
function validarCiudad(e){
	if(ciudad.value == '' || ciudad.value == null){
			console.log('ciudad vacio');
			//error.style.display = 'block'; //.style > es para cambiar el css
			//error.innerHTML += '<li>Por favor completa el nombre</li>';
			errores.push("<li>Por favor completa la ciudad</li>");
			e.preventDefault();//frena acción por defecto del evento. 
		} 
		else {
			if (!soloLetras(ciudad.value)) {
				console.log('Ciudad invalida');
				//error.style.display = 'block';
				//error.innerHTML += '<li>Por favor ingresá un nombre valido</li>';//.innerHTML para poner algo dentro de html
				errores.push("<li>Por favor ingresa una ciudad valida</li>");
				e.preventDefault(); 
			} else {
			console.log('ciudad valida')
			return true; //sino hay errores que NO PASE NADA
			}
		}return false;

}

function validarCalle(e){
	var expr = /^([a-zA-Z0-9\s])/; //vamo a ver si es esto
		if (calle.value == '' || calle.value == null) {
			console.log('calle vacio');
			//error.style.display = 'block';
			//error.innerHTML += '<li>Por favor completá el e-mail.</li>';
			errores.push("<li>Por favor completa la calle</li>");
			e.preventDefault();
		}else{
			if (!expr.test(calle.value)) {
				console.log('calle invalido');
				//error.style.display = 'block';
				//error.innerHTML += '<li>Por favor ingresá un e-mail válido.</li>';
				errores.push("<li>Por favor ingresá una calle válida</li>");
				e.preventDefault();
			}else{
				console.log('calle valida');
				return true;
			}
		}return false;
}


function validarFormulario(e){
		error.innerHTML = ''; //se limpia de los errores antes de que vuelvas a poner algo 
		errores=[];
		validarNombre(e);
		validarApellido(e);
		validarTelefono(e);
		validarEmail(e);
		validarEdad(e);
	if (chequearDireccion()){
		validarNumero(e);
		validarCP(e);
		validarCiudad(e);
		validarCalle(e);}

		/*if (validarNombre(e)&&validarApellido(e)&&validarTelefono(e)&&validarEmail(e)&&validarEdad(e)){
			formulario.submit();
		}//una forma> si pongo return true en todas las demás funciones.
		/*if(error==0){
			formulario.submit(); // otra forma, si voy contando errores. 
		}*/	
	if (errores.length == 0){ //si el array de los errores es igual a cero, SUBMIT
		formulario.submit();
	}else{
		error.style.display= 'block'; //sino, recorrer array: en el div con ID error pusheo los errores nombrados en las funciones
		for (i=0;i<errores.length;i++){ 
			error.innerHTML+=errores[i];
	   }
	}
}	
function limpiarFormulario(e){
	formulario.reset();
	console.log('cleaning');
}

formulario.addEventListener('submit', validarFormulario);//variableQueTieneMetodo.addEventListener('elMétodo',funciónQueTieneQueHacer);
//addEventListener está atento a qué sucede para primero pasar por función. 2do parametro> FUNCION DE CALLBACK!!
//1-evento que tiene que escuchar 2- funcion de callback (a donde redirigo)*/
limpiar.addEventListener('click',limpiarFormulario); //pusimos en el BOTON CON ID CLEAR QUE LO CAMBIAMOS CON VARIABLE QUE SE LLAMA LIMPIAR!!
direccion.addEventListener('change', chequearDireccion); //acá sería CHANGE-- funciona igual que con CLICK