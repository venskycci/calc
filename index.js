//variables globales
operation='0';
pantalla=document.getElementById("salida");

//funcion para chequear datos antes de seguir ingresando
function check_operation(x){
	   last=operation.slice(-1);
	   if((last==='/' || last=='+' || last=='-' || last=='*' || last=='.') && (x=='/' || x=='+' || x=='-' || x=='*' || x=='.')){
		   return false;
		   }
	   else{
		  return true;}
}
//funcion para imprimir en pantalla
function display(x){
	
		if(operation.length<23 && check_operation(x)){	
		
		if(operation=='0' && (x=='/' || x=='+' || x=='-' || x=='*' || x=='.')){
			operation+=x;
		}
		else if(operation=='0' && !(x=='/' || x=='+' || x=='-' || x=='*' || x=='.')){
			operation=x;
		}
		
		else{
		    operation+=x;
		    }//guardar datos
		pantalla.innerHTML=operation;//mostrar en pantalla
	   }
	  
	   else{
		  operation=eval(operation);
		  pantalla.innerHTML=operation;//mostrar en pantalla
		   
		  }
	  }
//funcion para igualar una operacion	
function igualar(){
	    last=operation.slice(-1);
	    if(last==='/' || last=='+' || last=='-' || last=='*'){
		  operation=operation.substring(0,operation.length-1);
		}
	    
	    
		operation=eval(operation);
		pantalla.innerHTML=operation;//mostrar en pantalla
		}
//funcion para borrar datos ingresandos	
function borrar(){
	   if(operation=='0' || operation.length==1){
			operation='0';
	        pantalla.innerHTML=operation;//mostrar en pantalla
	   }
	   else{
		   operation=operation.substring(0,operation.length-1);
		   pantalla.innerHTML=operation;//mostrar en pantalla
	    }
	   }
//funcion para reniciar los datos ingresado  
function reiniciar(){
		  operation='0';
		  pantalla.innerHTML=operation;//mostrar en pantalla
		 }
