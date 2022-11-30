function pangram(letter) {
    // ¡No olvides compartir tu solución en redes!
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



pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false