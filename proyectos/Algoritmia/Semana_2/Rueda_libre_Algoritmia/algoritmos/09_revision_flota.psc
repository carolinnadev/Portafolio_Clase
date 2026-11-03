Algoritmo revision_flota
	Definir claveIngresada Como Caracter;
	Definir intentos, maxBicicletas, alquilerActual Como Entero;
	Definir accesoConcedido Como Logico;
	
	intentos <- 0;
	accesoConcedido <- Falso;
	
	// Control de intentos limitados y bandera
	Mientras intentos < 3 Y NO accesoConcedido Hacer
		Escribir "Ingrese la contraseña de administrador:";
		Leer claveIngresada;
		
		Si claveIngresada == "ruedalibre2026" Entonces
			accesoConcedido <- Verdadero;
			Escribir "✅ Acceso concedido al panel administrativo.";
		Sino
			intentos <- intentos + 1;
			Escribir "❌ Contraseña incorrecta. Intentos restantes: ", (3 - intentos);
		FinSi
	FinMientras
	
	Si accesoConcedido Entonces
		Escribir "------------------------------------------";
		Escribir "📊 REVISIÓN DE FLOTA Y MÁXIMOS DEL DÍA";
		Escribir "Simulando lectura de los últimos 4 alquileres registrados:";
		
		maxBicicletas <- 0;
		
		// Simulación de búsqueda de máximo en 4 registros de bicicletas alquiladas
		Para i <- 1 Hasta 4 Con Paso 1 Hacer
			Escribir "Ingrese cantidad de bicicletas alquiladas en la transacción ", i, ":";
			Leer alquilerActual;
			
			Si alquilerActual > maxBicicletas Entonces
				maxBicicletas <- alquilerActual;
			FinSi
		FinFinPara
		
		Escribir "------------------------------------------";
		Escribir "🏆 El récord máximo de bicicletas en una sola transacción fue: ", maxBicicletas;
		Escribir "------------------------------------------";
	Sino
		Escribir "🔒 Sistema bloqueado por seguridad tras 3 intentos fallidos.";
	FinSi
FinAlgoritmo