Algoritmo tabla_tarifas
	Definir tipoBici, horas, tarifaBase, subtotal Como Entero;
	
	Escribir "==================================================";
	Escribir "    MATRIZ DE TARIFAS PARA MOSTRADOR - Rueda Libre";
	Escribir "==================================================";
	
	// Ciclo externo: recorre los 3 tipos de bicicletas
	Para tipoBici <- 1 Hasta 3 Con Paso 1 Hacer
		
		Segun tipoBici Hacer
			1: 
				tarifaBase <- 10000;
				Escribir "";
				Escribir "🚲 [BICICLETA URBANA - $10.000/h]";
			2: 
				tarifaBase <- 20000;
				Escribir "";
				Escribir "⚡ [BICICLETA ELÉCTRICA - $20.000/h]";
			3: 
				tarifaBase <- 15000;
				Escribir "";
				Escribir "⛰️ [BICICLETA MTB - $15.000/h]";
		FinSegun
		
		Escribir "--------------------------------------------------";
		Escribir " Horas | Valor Total";
		Escribir "--------------------------------------------------";
		
		// Ciclo interno: calcula las tarifas de 1 a 4 horas para cada bici
		Para horas <- 1 Hasta 4 Con Paso 1 Hacer
			subtotal <- horas * tarifaBase;
			Escribir "   ", horas, " h   |  $", subtotal;
		FinPara
		
	FinPara
	Escribir "==================================================";
FinAlgoritmo