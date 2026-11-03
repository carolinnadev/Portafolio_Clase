Algoritmo cuenta_grupo
	Definir cantBicicletas, horasBici, personas, precioRecorrido Como Entero;
	Definir valorBicicletas, valorRecorrido, subtotal, total Como Entero;
	Definir aporteVoluntario, valorPorPersonaExacto, valorPorPersona Como Real;
	Definir VALOR_HORA_BICI Como Entero;
	
	VALOR_HORA_BICI <- 10000;
	
	Escribir "Ingrese la cantidad de bicicletas urbanas:";
	Leer cantBicicletas;
	Escribir "Ingrese las horas de alquiler de las bicicletas:";
	Leer horasBici;
	Escribir "Ingrese el precio por persona del recorrido guiado:";
	Leer precioRecorrido;
	Escribir "Ingrese la cantidad de personas en el grupo:";
	Leer personas;
	
	// Procesos y cálculos encadenados
	valorBicicletas <- cantBicicletas * horasBici * VALOR_HORA_BICI;
	valorRecorrido <- precioRecorrido * personas;
	subtotal <- valorBicicletas + valorRecorrido;
	
	aporteVoluntario <- subtotal * 0.10;
	total <- subtotal + trunc(aporteVoluntario);
	
	valorPorPersonaExacto <- total / personas;
	// Redondeo hacia arriba a la centena
	valorPorPersona <- trunc((valorPorPersonaExacto + 99) / 100) * 100;
	
	// Salidas detalladas
	Escribir "==========================================";
	Escribir "      ASISTENTE DE TAQUILLA v0.1          ";
	Escribir "==========================================";
	Escribir "• Alquiler bicicletas: $", valorBicicletas;
	Escribir "• Total recorridos: $", valorRecorrido;
	Escribir "• Subtotal: $", subtotal;
	Escribir "• Aporte voluntario (10%): $", trunc(aporteVoluntario);
	Escribir "• TOTAL GENERAL: $", total;
	Escribir "• Valor por persona (redondeado): $", valorPorPersona;
	Escribir "==========================================";
FinAlgoritmo