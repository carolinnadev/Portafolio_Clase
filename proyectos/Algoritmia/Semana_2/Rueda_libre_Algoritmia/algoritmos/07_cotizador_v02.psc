Algoritmo cotizador_v02
	Definir nombre, tieneDoc, tieneAut Como Caracter;
	Definir edad, tipoBici, cantBici, horas Como Entero;
	Definir valorHora, subtotal, descuento, total Como Real;
	Definir esApto Como Logico;
	
	esApto <- Falso;
	
	Escribir "==========================================";
	Escribir "      ASISTENTE DE TAQUILLA v0.2          ";
	Escribir "==========================================";
	
	// 1. Validacion de Requisitos del Cliente
	Escribir "Ingrese nombre del cliente:";
	Leer nombre;
	Escribir "¿Presenta documento de identidad valido? (S/N):";
	Leer tieneDoc;
	
	Si tieneDoc == "S" o tieneDoc == "s" Entonces
		Escribir "Ingrese la edad del cliente:";
		Leer edad;
		
		Si edad >= 18 Entonces
			esApto <- Verdadero;
		Sino
			Escribir "¿Cuenta con autorizacion firmada por adulto responsable? (S/N):";
			Leer tieneAut;
			Si tieneAut == "S" o tieneAut == "s" Entonces
				esApto <- Verdadero;
			Sino
				Escribir "❌ Rechazado: Menor de edad sin autorizacion.";
			FinSi
		FinSi
	Sino
		Escribir "❌ Rechazado: Es obligatorio presentar documento de identidad.";
	FinSi
	
	// 2. Procesamiento de Cotización (Solo si es apto)
	Si esApto Entonces
		Escribir "------------------------------------------";
		Escribir "Seleccione Tipo de Bicicleta:";
		Escribir "1. Urbana ($10.000/h)";
		Escribir "2. Electrica ($20.000/h)";
		Escribir "3. MTB / Montañera ($15.000/h)";
		Leer tipoBici;
		
		Escribir "Ingrese cantidad de bicicletas:";
		Leer cantBici;
		
		Escribir "Ingrese cantidad de horas de alquiler:";
		Leer horas;
		
		// Validacion de datos numericos positivos
		Si cantBici <= 0 O horas <= 0 Entonces
			Escribir "❌ Error: La cantidad de bicicletas y horas deben ser mayores a 0.";
		Sino
			// Seleccion de tarifa
			Segun tipoBici Hacer
				1: valorHora <- 10000;
				2: valorHora <- 20000;
				3: valorHora <- 15000;
				De Otro Modo: valorHora <- 0;
			FinSegun
			
			Si valorHora == 0 Entonces
				Escribir "❌ Error: Categoria de bicicleta invalida.";
			Sino
				subtotal <- cantBici * horas * valorHora;
				
				// Regla de descuento: 10% si alquila 5 horas o mas
				Si horas >= 5 Entonces
					descuento <- subtotal * 0.10;
				Sino
					descuento <- 0;
				FinSi
				
				total <- subtotal - descuento;
				
				// Salida de Resultados
				Escribir "------------------------------------------";
				Escribir "📋 RESUMEN DE COTIZACION v0.2";
				Escribir "• Cliente: ", nombre;
				Escribir "• Subtotal: $", subtotal;
				Escribir "• Descuento (10% por 5+ horas): $", descuento;
				Escribir "• TOTAL A PAGAR: $", total;
				Escribir "==========================================";
			FinSi
		FinSi
	FinSi
FinAlgoritmo