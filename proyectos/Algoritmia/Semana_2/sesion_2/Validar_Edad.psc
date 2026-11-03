Algoritmo ValidarEdad
	Definir edad Como Entero
	
	Escribir "=== VALIDACIÓN DE EDAD ==="
	Escribir "Ingrese su edad en años:"
	Leer edad
	
	Si edad >= 18 Entonces
		Escribir "Acceso permitido: Eres mayor de edad."
	Sino
		Si edad >= 0 Entonces
			Escribir "Acceso denegado: Eres menor de edad."
		Sino
			Escribir "Error: La edad ingresada no es válida."
		FinSi
	FinSi
FinAlgoritmo
