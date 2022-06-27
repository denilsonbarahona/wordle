/**
 * dentro de un array de 25 posiciones obtiene los últimos 5 letras ingresado por el usuario
 */
const splitTries=(tries: Array<string>)=>{
    let lastGuess;
    do {
        lastGuess = tries.splice(0,5)
    }while(tries.length > 0);
    return lastGuess;
}

/**
 * esta función nos dice que indice (dentro de una palabra de 5 carácteres) es el que corresponde al intento actual del usuario.
 */
const getIndexOfGuess=(lastGuess: Array<string>)=>{
    let indexOfGuess = 0;
    if(lastGuess.length > 4) indexOfGuess = 0;
    else indexOfGuess = lastGuess.length; 
    return indexOfGuess;
}

/**
 * 
 * @param wordToGuess palabra que el usuario esta tratando de adivinar
 * @param myGuessChar carácter que el usuario cree que se encuentra dentro de la palabra que esta tratando de adivinar
 * @param tries un array de todos los caracteres que el usuario ha ingresado en sus intentos por adivinar la palabra.
 * @returns 
 */
/**
 * esta función se encarga de identificar el nivel de acierto que tiene cada carárcter ingresado por el usuario
 *   - lastGuess es una variable que mantiene los ultimos 5 caracteres ingresados por el usuario.
 *   - indexOfGuess es una variable que guarda el índice que corresponde (en una palabra de 5 caracteres) al intento que realizó el usuario
 *      de esta forma poder identificar si el carácter ingresado coincide en posición con la misma letra dentro de la palabra que se quiere adivinar.
 * 
 *  - char - variable que mantiene el character en la posiciendo del intento. 
 *  - exist - variable que nos dice si el carácter existe en la palabra que se quiere adivinar.
 */
export const checkMyGuess =(wordToGuess:Array<string>, myGuessChar:string, tries: Array<string>)=>{
    let level = 3;
    
    const lastGuess = splitTries(tries);
    const indexOfGuess = getIndexOfGuess(lastGuess);
    const char = wordToGuess.at(indexOfGuess);
    const exist = wordToGuess.includes(myGuessChar);
    /**
     * cuando level es 1 la letra ingresada coincide en la misma posición 
     * cuando level es 2 la letra no coincide en la misma posición
     * cuando level es 3 la letra no existe en la palabra que se quiere adivinar.
     */
    if(char === myGuessChar && exist) level = 1;
    else if(exist) level = 2;

    return {level, indexOfGuess, key: myGuessChar};
}

/**
 * 
 * @param myGuess palabra de 5 letras que el usuario está formando
 * @param wordToGuess palabra que el usuario quiere adivinar
 * @param tries array de letras ingresadas por el usuario en su intento de adivinar la palabra oculta
 * @param wins número de victorias logradas
 * @param games nùmero de juegos realizados por el usuario
 * @returns 
 */

/**
 * si la variable myGuess y wordToGuess coinciden se cuenta una victoria
 * si se tiene 25 intentos realizado y no hay victoria, se cuenta una derrota. 
 * al existir una derrota o victoria se suma al contador de juegos realizados
 */
export const checkWins = (myGuess:string, wordToGuess:string, tries: Array<string>, wins:number, games:number)=>{
    const win = myGuess.toUpperCase() === wordToGuess.toUpperCase();
    const fail = !win && tries.length === 25;
    const winCounter = win? wins+1: wins;
    const plays =fail || win ? games+1: games;

    return {win, fail, winCounter, plays}
}