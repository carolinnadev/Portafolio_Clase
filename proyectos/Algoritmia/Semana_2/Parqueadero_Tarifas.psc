Algoritmo ParqueaderoTarifas
    Definir horas Como Real
    Definir conFactura Como Logico
    Definir facturaAux Como Entero
    Definir total Como Real
    
    Escribir "Ingrese las horas consumidas:"
    Leer horas
    Escribir "¿Tiene factura? (1 = Sí, 0 = No):"
    Leer facturaAux
    conFactura <- (facturaAux == 1)
    
    Si horas <= 0 Entonces
        Escribir "Error: Horas no válidas"
    Sino
        Si conFactura Y horas <= 2 Entonces
            total <- 0
            Escribir "Total a pagar: $0 (Promoción 2 primeras horas con factura)"
        Sino
            Si horas > 6 Entonces
                total <- 20000
                Escribir "Total a pagar: $20000 (Tarifa plana por más de 6 horas)"
            Sino
                total <- horas * 3000
                Escribir "Total a pagar: $", total, " ($3000 por hora o fracción)"
            FinSi
        FinSi
    FinSi
FinAlgoritmo