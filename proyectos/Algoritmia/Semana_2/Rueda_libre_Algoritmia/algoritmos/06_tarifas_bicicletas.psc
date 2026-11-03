Algoritmo tarifas_bicicletas
	Definir tipoBici Como Entero;
	Definir horas, valorHora, total Como Entero;
	
	Escribir "Seleccione el tipo de bicicleta:";
	Escribir "1. Urbana ($10.000 / hora)";
	Escribir "2. Eléctrica ($20.000 / hora)";
	Escribir "3. MTB / Montañera ($15.000 / hora)";
	Leer tipoBici;
	
	Escribir "Ingrese la cantidad de horas de alquiler:";
	Leer horas;
	
	// Estructura de decisión múltiple (Segun / Switch)
	Segun tipoBici Hacer
		1:
			valorHora <- 10000;
			Escribir "Categoría seleccionada: Urbana";
		2:
			valorHora <- 20000;
			Escribir "Categoría seleccionada: Eléctrica";
		3:
			valorHora <- 15000;
			Escribir "Categoría seleccionada: MTB (Montañera)";
		De Otro Modo:
			valorHora <- 0;
			Escribir "❌ Error: Tipo de bicicleta inválido.";
	FinSegun
	
	Si valorHora > 0 Y horas > 0 Entonces
		total <- horas * valorHora;
		Escribir "-----------------------------------";
		Escribir "• Valor por hora: $", valorHora;
		Escribir "• Horas de alquiler: ", horas;
		Escribir "• Total a pagar: $", total;
		Escribir "-----------------------------------";
	Sino
		Escribir "No se pudo completar el cálculo por datos incorrectos.";
	FinSi
FinAlgoritmo