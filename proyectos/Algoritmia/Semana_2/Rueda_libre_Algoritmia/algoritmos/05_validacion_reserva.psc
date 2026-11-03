Algoritmo validacion_reserva
	Definir horas, cantBicicletas Como Entero;
	Definir total, VALOR_HORA Como Entero;
	
	VALOR_HORA <- 10000;
	
	Escribir "Ingrese la cantidad de bicicletas a alquilar:";
	Leer cantBicicletas;
	
	Escribir "Ingrese la cantidad de horas de alquiler:";
	Leer horas;
	
	// Validación utilizando la condición equivalente de De Morgan
	Si cantBicicletas <= 0 O horas <= 0 Entonces
		Escribir "❌ ERROR DE VALIDACIÓN: La cantidad de bicicletas y las horas deben ser valores mayores a 0.";
	Sino
		total <- cantBicicletas * horas * VALOR_HORA;
		Escribir "✅ RESERVA VÁLIDA";
		Escribir "• Bicicletas: ", cantBicicletas;
		Escribir "• Horas: ", horas;
		Escribir "• Total a cobrar: $", total;
	FinSi
FinAlgoritmo