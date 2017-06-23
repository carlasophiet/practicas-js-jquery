	
	function pasarANumero (strANum){ //VALIDAR
		strANum = parseFloat(strANum);
		return strANum;
	}

	function calculadoraCuatro (numUno, operacion, numDos){
			var result= 0;	
			//pasarANumero(numUno);
			//pasarANumero(numDos);
			numUno = parseFloat(numUno);
		  	numDos = parseFloat(numDos);
			if (!isNaN(numUno)  && !isNaN(numDos) && (operacion == '+' || operacion == '-' || operacion == '/' || operacion == '*')){
				if (operacion == '+'){
					result = numUno + numDos; //ACÁ TAMPOCO 
					//alert ('El resultado de su operación es '+ resultado + '.');
					document.getElementById('resultado').value= result;//entre parentesis va id de html, despues de = va var de js.
				}
				else if (operacion == '-'){
					result = numUno - numDos;
					//alert ('El resultado de su operación es '+ resultado + '.');
					document.getElementById('resultado').value=result; //MUESTRA RESULTADO EN INPUT VACIO
				}
				else if (operacion == '/'){
					if(numeroDos != 0){
		  		        result= numeroUno / numeroDos;
		  				}
		  			else{
		  				result= "error";
		  				}
					//alert ('El resultado de su operación es '+ resultado + '.');
					document.getElementById('resultado').value=result;//MUESTRA RESULTADO EN INPUT VACIO
				}
				else {
					result = numUno*numDos;
					//alert ('El resultado de su operación es '+ resultado + '.');
					document.getElementById('resultado').value=result;//MUESTRA RESULTADO EN INPUT VACIO
				}
				//document.write(numUno +' '+ operacion +' '+ numDos +' = ' + resultado);
			}
			else {
				alert('Imposibilidad al procesar: se rompió todo.');
			}
			return resultado;
		  }

		  function suma(numeroUno, numeroDos){
		  	var result=0;
		  	numeroUno = parseFloat(numeroUno);// 
		  	numeroDos = parseFloat(numeroDos);
		  	//pasarANumero('numeroUno');
		  	//pasarANumero('numeroDos'); 
		  	if(isNaN(numeroUno) || isNaN(numDos)){
		  		result="error";
		  	}else{
		  		result= numeroUno + numeroDos;
		  	}
		  	document.getElementById('resultadoDos').value = result;
		  	return
		  }
		  function resta(numeroUno, numeroDos){
		  	var result=0;
		  	pasarANumero(numeroUno);
		  	pasarANumero(numeroDos);
		  	result= numeroUno - numeroDos;
		  	document.getElementById('resultadoDos').value= result;
		  	return
		  }
		  function multiplicar(numeroUno, numeroDos){
		  	var result=0;
		  	pasarANumero(numeroUno);
		  	pasarANumero(numeroDos);
		  	result= numeroUno * numeroDos;
		  	document.getElementById('resultadoDos').value= result;
		  	return
		  }
		  function dividir(numeroUno, numeroDos){
		  	var result=0;
		  	pasarANumero(numeroUno);
		  	pasarANumero(numeroDos);
		  	if(numeroDos != 0 && !isNaN(numeroUno) && !isNaN(numeroDos)){
		  		result= numeroUno / numeroDos;
		  	}
		  	
		  	else{	  		
		  		result= 'error';
		  	}
		  	/*if(numeroDos == 0 || isNaN(numeroUno) || isNaN(numeroUno)){
		  		result='error';
		  	}else{
		  		result= numeroUno / numeroDos;
		  	}*/
		  	document.getElementById('resultadoDos').value= result;
		  	return
		  }
		  function factorial (num){
		  	num=pasarANumero(num);
			var fact =1;
			for (i = num; i>=1; i--){
				fact = fact *i; 
			}
			document.getElementById('resultadoTres').value=fact;
		  }