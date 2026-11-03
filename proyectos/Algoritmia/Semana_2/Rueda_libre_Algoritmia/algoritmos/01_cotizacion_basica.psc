Algoritmo cotizacion_basica
	// Definición explícita de variables con sus tipos de datos
	Definir nombre Como Caracter;
	Definir horas Como Entero;
	Definir total Como Entero;
	Definir VALOR_HORA Como Entero;
	
	// Asignación de la constante para el valor de la hora
	VALOR_HORA <- 10000;
	
	// Lectura de datos de entrada
	Escribir "Ingrese el nombre del cliente:";
	Leer nombre;
	
	Escribir "Ingrese la cantidad de horas de alquiler:";
	Leer horas;
	
	// Proceso de cálculo
	total <- horas * VALOR_HORA;
	
	// Muestra de resultados (Salida)
	Escribir "Hola, ", nombre, ": tu alquiler de ", horas, " horas cuesta $", total;
FinAlgoritmo