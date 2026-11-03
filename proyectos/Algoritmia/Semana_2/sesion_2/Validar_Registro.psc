Algoritmo ValidarRegistro
	Definir nombre, correo, clave Como Cadena
	
	Escribir "=== REGISTRO DE USUARIO ==="
	Escribir "Ingrese su nombre:"
	Leer nombre
	Escribir "Ingrese su correo electrónico:"
	Leer correo
	Escribir "Ingrese su contraseña:"
	Leer clave
	
	Si Longitud(nombre) > 0 Y Longitud(correo) > 0 Y Longitud(clave) >= 6 Entonces
		Escribir "¡Registro exitoso! Bienvenido/a, ", nombre, "."
	Sino
		Escribir "Error en el registro. Verifique que ningún campo esté vacío y que la clave tenga al menos 6 caracteres."
	FinSi
FinAlgoritmo