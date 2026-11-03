Algoritmo Semaforo
	Definir color Como Cadena
	
	Escribir "=== CONTROL DE SEMÁFORO ==="
	Escribir "Ingrese el color del semáforo (Verde, Amarillo, Rojo):"
	Leer color
	
	color <- Minusculas(color)
	
	Según color Hacer
"verde":
	Escribir "Avance: El paso está permitido."
"amarillo":
	Escribir "Precaución: El semáforo va a cambiar, reduzca la velocidad."
"rojo":
	Escribir "Alto: Deténgase inmediatamente."
De Otro Modo:
	Escribir "Color no reconocido. Ingrese Verde, Amarillo o Rojo."
FinSegún
FinAlgoritmo