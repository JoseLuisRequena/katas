/*En la clase de español del pueblo de Laponia 
han creado un reto a la hora de escribir la carta a Papa Noél 🎅: 
la carta ✉️ tiene que contener todas las letras del alfabeto.

Desde el taller de Santa 🎅 se han enterado 
y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene,
efectivamente, todas las letras del abecedario español 🔎.

Hay que tener en cuenta las letras en mayúscula y que las letras con acento 
y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a. */

function pangram(letter) {
    
    const letterLowerCase = letter.toLowerCase();
    if( letterLowerCase.includes('a') || letterLowerCase.includes('ä') || letterLowerCase.includes('á')
    && letterLowerCase.includes('b') 
    && letterLowerCase.includes('c') 
    && letterLowerCase.includes('d') 
    && letterLowerCase.includes('e') || letterLowerCase.includes('ë') || letterLowerCase.includes('é') 
    && letterLowerCase.includes('f') 
    && letterLowerCase.includes('g') 
    && letterLowerCase.includes('h') 
    && letterLowerCase.includes('i') || letterLowerCase.includes('ï') || letterLowerCase.includes('í') 
    && letterLowerCase.includes('j') 
    && letterLowerCase.includes('k') 
    && letterLowerCase.includes('l') 
    && letterLowerCase.includes('m') 
    && letterLowerCase.includes('n') 
    && letterLowerCase.includes('ñ') 
    && letterLowerCase.includes('o') || letterLowerCase.includes('ö') || letterLowerCase.includes('ó') 
    && letterLowerCase.includes('p') 
    && letterLowerCase.includes('q') 
    && letterLowerCase.includes('r') 
    && letterLowerCase.includes('s') 
    && letterLowerCase.includes('t') 
    && letterLowerCase.includes('u') || letterLowerCase.includes('ü') || letterLowerCase.includes('ú') 
    && letterLowerCase.includes('v') 
    && letterLowerCase.includes('w') 
    && letterLowerCase.includes('x') 
    && letterLowerCase.includes('y') || letterLowerCase.includes('ÿ') || letterLowerCase.includes('ý') 
    && letterLowerCase.includes('z')){

        return true;
    }

    return false;
}


//test data
pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false