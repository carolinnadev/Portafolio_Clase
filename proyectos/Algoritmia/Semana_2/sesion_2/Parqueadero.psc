Algoritmo Parqueadero
	Definir horas Como Entero
	Definir tarifaPorHora, totalPagar Como Real
	
	tarifaPorHora <- 3500 // Tarifa base en pesos por hora
	
	Escribir "=== CÁLCULO DE PARQUEADERO ==="
	Escribir "Ingrese el número de horas estacionado:"
	Leer horas
	
	Si horas > 0 Entonces
		totalPagar <- horas * tarifaPorHora
		Escribir "Tiempo de permanencia: ", horas, " hora(s)."
		Escribir "Total a pagar: $", totalPagar
	Sino
		Escribir "Error: El número de horas debe ser mayor a 0."
	FinSi
FinAlgoritmo