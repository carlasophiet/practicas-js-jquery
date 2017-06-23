function validar(n,ap,tel,mail,edad){
	var n = document.getElementById('nombre').value;
	var ap = document.getElementById('apellido').value;
	var tel = document.getElementById('telefono').value;
	var mail = document.getElementById('email').value;
	var edad = document.getElementById('edad').value;
	var errorHtml = document.getElementById('errores');
	var errores=[];
	
	if(!campoVacio(n) && !campoVacio(ap) && !campoVacio(tel) && !campoVacio(mail) && !campoVacio(edad)){

		if(!validarString(n)){errores[0]="El nombre sólo puede tener letras.";}
		if(!validarString(ap)){errores[1]="El apellido sólo puede tener letras.";}
		if(!validarTel(tel)){errores[2]="El telefono sólo puede tener números.";}
		if(!validarMail(mail)){errores[3]="El mail no es válido.";}
		if(!validarEdad(edad)){errores[4]="La edad sólo puede tener números y mayor a 21.";}	
    }else {
    	errores[0]= "Completar campos";
    }
    console.log(errores);
}

function campoVacio(x){

	if(x.length == 0){ return true; }

	return false;
}

function validarTel(telefono){
	if((telefono.length =< 12 && telefono.lenght >= 8) && (!isNaN(telefono))) {
		return true;	//no es necesario hacer otra variable donde retornarla
	}
		return false; 
		//return int.lenght === 1 && int.match(/{8-12}/);
	
}

function validarStrings(x){
	var exp = ^[a-zA-Z]*${2,20};//expresión regular de sólo letras
	if(exp.test(x)){
		return true;
	}return false;
}

function validarEdad(edad){
	if (!isNaN(edad)){
		var e = parseInt(edad); //convierto a numero el string de caracteres numericos para poder comparar!
		if(e>21 && e<120){
			return true; //return always adentro de ciclos dentro de las funciones.
		}
	}return false;  //return siempre adentro de ciclos dentro de las funciones.
}
/*
function validarEdad(edad){
	var e= parseInt(edad);
	if(e>21 // e< 120){
		return true;
	}return false;
}
¿SIRVE?
*/
function validarMail(mail){
	var exp = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/; 
	//expresión regular es una exp lógica que valida intervalos. Se matchea variable y patrón que es expresión regular.
	if(expr.test(mail)) {//test > para matchear var y expresión regular. expresionregular.test(variable).
		return true;
	}return false;
}



