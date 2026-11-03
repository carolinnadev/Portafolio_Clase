Algoritmo validacion_edad
	Definir nombre Como Caracter;
	Definir edad Como Entero;
	Definir tieneDocumento, tieneAutorizacion Como Caracter;
	
	Escribir "Ingrese el nombre del cliente:";
	Leer nombre;
	
	Escribir "Ingrese la edad del cliente:";
	Leer edad;
	
	Escribir "¿Presenta documento de identidad válido? (S/N):";
	Leer tieneDocumento;
	
	// Estructura de decisión anidada o compuesta
	Si tieneDocumento == "S" o tieneDocumento == "s" Entonces
		Si edad >= 18 Entonces
			Escribir "¡Aprobado! ", nombre, " puede alquilar la bicicleta directamente.";
		Sino
			Escribir "¿Cuenta con autorización firmada por un adulto responsable? (S/N):";
			Leer tieneAutorizacion;
			
			Si tieneAutorizacion == "S" o tieneAutorizacion == "s" Entonces
				Escribir "¡Aprobado con restricciones! ", nombre, " puede alquilar bajo supervisión/autorización.";
			Sino
				Escribir "Lo sentimos, ", nombre, ". No cumple con la edad mínima ni cuenta con autorización.";
			FinSi
		FinSi
	Sino
		Escribir "Acceso denegado: es obligatorio presentar un documento de identidad válido.";
	FinSi
FinAlgoritmo