/**
 * 
 * @param data data que se va a filtrar
 * @param size  el tamaño que se permite para considerar las palabras en el ejercicio se piden 5 caracteres por palabra.
 * @returns un array de string 
 */
const getWordLength=(data:Array<string>, size:number)=>{
    return data.filter((item:string)=>item.length === size);
}

/**
 * 
 * @param data data que se va a filtrar
 * @returns un array de string
 */
/**
 * obtiene las palabras dentro del array que no tienen tildes
 */
const removeAccentFromWord=(data:Array<string>)=>{
    return data.filter((item:string)=>!item.normalize('NFD').match(/[\u0300-\u036f]/g));
}

/**
 * 
 * @param data array de string con la información del FETCH
 * @returns Array de string con las palabras filtradas
 */
/**
 * se van a considerar las palabras que tienene un lenght de 5 caracteress 
 * se van a conderar las palabras que no tienen acento. 
 */
const cleanData=(data: Array<string>)=>{
   const info = getWordLength(data, 5);
   return removeAccentFromWord(info);
}

export default cleanData;