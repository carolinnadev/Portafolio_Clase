Algoritmo cotizacion_recorrido
	Definir nombreRecorrido Como Caracter;
	Definir precioPersona, personas, total, saldo Como Entero;
	Definir anticipo Como Real;
	
	Escribir "Ingrese el nombre del recorrido (Río y Parques / Sabores de Barrio / Reto Las Palmas):";
	Leer nombreRecorrido;
	
	Escribir "Ingrese el precio por persona:";
	Leer precioPersona;
	
	Escribir "Ingrese la cantidad de personas:";
	Leer personas;
	
	// Procesos
	total <- precioPersona * personas;
	anticipo <- redon(total * 0.30);
	saldo <- total - anticipo;
	
	// Salidas
	Escribir "--- RESUMEN RECORRIDO ---";
	Escribir "Recorrido: ", nombreRecorrido;
	Escribir "Valor total: $", total;
	Escribir "Anticipo (30%): $", anticipo;
	Escribir "Saldo pendiente: $", saldo;
FinAlgoritmo