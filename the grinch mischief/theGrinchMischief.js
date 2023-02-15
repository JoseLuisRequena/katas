/* El Grinch está abriendo las cartas que iban a Santa Claus 
y las está dejando hechas un lío. 😱
Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, 
debes comprobar que los paréntesis cierran correctamente 
y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { 
y corchetes [ dentro de los paréntesis que hacen que no sean válidas. 
Por suerte sólo los ha dejado en medio de los paréntesis... */

/* Crea una función que pasándole el texto de la carta, 
devuelva true si es válida y false si no lo es. 
¡Y acaba con la travesura del Grinch! */


function isValid(letter) {
    const regalos = letter.split(" ");
    const regalosEnvueltos = regalos.filter(regalo => 
    regalo.includes("(") && 
    regalo.includes(")") && 
    regalo[0] == "(");
    
    for (let i=0; i < regalosEnvueltos.length; i++ ){
        const regaloAbierto = regalosEnvueltos[i].slice(1,-1)
        if(!regaloAbierto || 
        regaloAbierto.length >=2 && !regaloAbierto.slice(1,-1) || 
        regaloAbierto.includes("(") && !regaloAbierto.includes(")") ) {
            return false
        }
        return true
    };
    if(regalos.filter(regalo => 
    regalo.includes("(") || regalo.includes("(") || 
    regalo.includes("{") || regalo.includes("[") )) {
        return false
    };
    return true
}

//data test

isValid("bici coche (balón) bici coche peluche") // -> ✅
isValid("(muñeca) consola bici") // ✅

isValid("bici coche (balón bici coche") // -> ❌
isValid("peluche (bici [coche) bici coche balón") // -> ❌
isValid("(peluche {) bici") // -> ❌
isValid("() bici") // -> ❌
isValid("(())") // -> ❌
isValid("(a))") // -> ❌

