Algoritmo cierre_caja
	Definir continuar Como Caracter;
	Definir horas, valorHora, total, recaudoTotal, cantidadTransacciones Como Entero;
	
	recaudoTotal <- 0;
	cantidadTransacciones <- 0;
	continuar <- "S";
	
	Escribir "==========================================";
	Escribir "   SISTEMA DE TURNO - Rueda Libre         ";
	Escribir "==========================================";
	
	Mientras continuar == "S" o continuar == "s" Hacer
		Escribir "";
		Escribir "--- Nuevo Alquiler ---";
		Escribir "Ingrese las horas de alquiler:";
		Leer horas;
		
		Si horas > 0 Entonces
			valorHora <- 10000; // Tarifa base urbana para el ejemplo del turno
			total <- horas * valorHora;
			
			// Acumulador y contador
			recaudoTotal <- recaudoTotal + total;
			cantidadTransacciones <- cantidadTransacciones + 1;
			
			Escribir "✅ Alquiler registrado. Total de este cliente: $", total;
		Sino
			Escribir "❌ Horas inválidas. Transacción no registrada.";
		FinSi
		
		Escribir "¿Desea registrar otro alquiler en el turno? (S/N):";
		Leer continuar;
	FinMientras
	
	// Reporte de Cierre de Caja
	Escribir "";
	Escribir "==========================================";
	Escribir "         CIERRE DE CAJA DEL DÍA           ";
	Escribir "==========================================";
	Escribir "• Total de transacciones atendidas: ", cantidadTransacciones;
	Escribir "• Dinero total recaudado en caja: $", recaudoTotal;
	Escribir "==========================================";
FinAlgoritmo