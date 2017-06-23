/*function saludar(){
	var elemento = document.getElementById("nombre");
	alert("hola, "+ elemento.value);
	
}*/
function enviar(){
	var campos = ["nombre","email","password"];
	function isLetter(str){ //funcion sacada de google para que sea solo de 'a' a 'z'. modular
		return str.length === 1 && str.match(/[a-z]/i);
		}//termina function isLetter
	for (i=0; i<campos.length;i++){ //for para ver si usuario ingreso todos los datos
		var valorCampo = document.getElementById(campos[i]).value;

		if (valorCampo == null || valorCampo.length== 0){ 
		alert("tenes que ingresar un " + campos[i]);
		}//termina if
	}//termina for

	var nombre = document.getElementById("nombre").value;	
	var valido = true;
	for(i=0; i < nombre.length; i++){ //verifica que cada char de nombre sea letra
		//se podría usar el código ASCII para ver de qué caracter a qué caracter responde al alfabeto
		if(!isLetter(nombre[i])){
			console.log('qué carajos');
			valido=false;
			}	//termina if
		}//termina for
			
	if(valido==false){	//si valido == false	
	   alert("tu nombre solo puede estar compuesto por letras");}
}	   
	/*var nombre = document.getElementById("nombre").value
	var email = document.getElementById("email").value;
	var passwords = document.getElementById("password").value;

	if (nombre ==null || nombre.length == 0  || NaN(nombre)){ 
		alert("tener que ingresar un nombre");
	}

	if (email == null || email.length == 0){
		alert("tenes que ingresar un email");
	}

	if (password == null || password.length == 0){
		alert("tenes que ingresar un password!");
	}*/

