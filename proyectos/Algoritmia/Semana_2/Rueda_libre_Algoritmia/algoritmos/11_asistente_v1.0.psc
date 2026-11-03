// SubProceso para mostrar el encabezado institucional
SubProceso MostrarEncabezado
	Escribir "==================================================";
	Escribir "      ASISTENTE DE TAQUILLA - RUEDA LIBRE v1.0    ";
	Escribir "      Medellín, Colombia                          ";
	Escribir "==================================================";
FinSubProceso

// SubProceso para procesar la cotización de un alquiler individual
SubProceso CotizarAlquiler
	Definir tipoBici, horas, cantBicicletas, valorHora, subtotal, total Como Entero;
	Definir descuento Como Real;
	
	Escribir "";
	Escribir "--- MÓDULO DE COTIZACIÓN DE ALQUILER ---";
	Escribir "Seleccione el tipo de bicicleta:";
	Escribir "1. Urbana ($10.000 / hora)";
	Escribir "2. Eléctrica ($20.000 / hora)";
	Escribir "3. MTB / Montañera ($15.000 / hora)";
	Leer tipoBici;
	
	Escribir "Ingrese la cantidad de bicicletas:";
	Leer cantBicicletas;
	
	Escribir "Ingrese la cantidad de horas:";
	Leer horas;
	
	Si cantBicicletas <= 0 O horas <= 0 Entonces
		Escribir "❌ Error: Las cantidades deben ser mayores a cero.";
	Sino
		Segun tipoBici Hacer
			1: valorHora <- 10000;
			2: valorHora <- 20000;
			3: valorHora <- 15000;
			De Otro Modo: valorHora <- 0;
		FinSegun
		
		Si valorHora > 0 Entonces
			subtotal <- cantBicicletas * horas * valorHora;
			
			// Regla de descuento del 10% si alquila 5 horas o más
			Si horas >= 5 Entonces
				descuento <- subtotal * 0.10;
			Sino
				descuento <- 0;
			FinSi
			
			total <- subtotal - descuento;
			
			Escribir "------------------------------------------";
			Escribir "📋 RESULTADO DE LA COTIZACIÓN:";
			Escribir "• Subtotal: $", subtotal;
			Escribir "• Descuento aplicado: $", trunc(descuento);
			Escribir "• TOTAL A PAGAR: $", total;
			Escribir "------------------------------------------";
		Sino
			Escribir "❌ Tipo de bicicleta no válido.";
		FinSi
	FinSi
FinSubProceso

// Algoritmo Principal que coordina los SubProcesos
Algoritmo asistente_rueda_libre_v1
	Definir opcion Como Entero;
	Definir continuar Como Caracter;
	
	continuar <- "S";
	
	Mientras continuar == "S" O continuar == "s" Hacer
		Limpiar Pantalla;
		MostrarEncabezado;
		Escribir "1. Cotizar nuevo alquiler";
		Escribir "2. Salir del sistema";
		Escribir "Seleccione una opción:";
		Leer opcion;
		
		Segun opcion Hacer
			1:
				CotizarAlquiler;
			2:
				Escribir "Saindo del sistema. ¡Buen trabajo en el turno!";
				continuar <- "N";
			De Otro Modo:
				Escribir "❌ Opción inválida.";
		FinSegun
		
		Si continuar == "S" O continuar == "s" Entonces
			Escribir "";
			Escribir "¿Desea realizar otra operación en taquilla? (S/N):";
			Leer continuar;
		FinSi
	FinMientras
	
	Escribir "==================================================";
	Escribir "  SISTEMA FINALIZADO - Versión 1.0 Publicada      ";
	Escribir "==================================================";
FinAlgoritmo