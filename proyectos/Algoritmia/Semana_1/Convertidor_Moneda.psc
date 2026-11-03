Algoritmo ConvertidorMoneda
    Definir pesos, tasa, dolares Como Real
    
    Escribir "Ingrese la cantidad en pesos:"
    Leer pesos
    
    Escribir "Ingrese el valor actual del dólar:"
    Leer tasa
    
    dolares <- pesos / tasa
    
    Escribir "La cantidad en dólares es: ", dolares
FinAlgoritmo


Prueba 1: Entrada: 40000 y 4000 | Resultado esperado: 10

Prueba 2: Entrada: 100000 y 5000 | Resultado esperado: 20
